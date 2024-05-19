import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import cls from './AudioRecorder.module.scss';
import mic from '../../../assets/icons/normal/mic.svg';

const AudioRecorder = ({ QZID, onUploadSuccess }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [buttonColor, setButtonColor] = useState(''); // New state for button color
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  useEffect(()=>{
    setButtonColor('#A247FB')
  },[QZID])
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/ogg; codecs=opus' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        await postRecording(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const postRecording = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio_file', audioBlob, 'recording.ogg');

    try {
      const response = await axios.post(`https://misis52.clayenkitten.ru/api/quizzes/${QZID}/audio/apply?tg_user_id=1`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);

      // Update button color based on response
      if (response.data.is_correct) {
        setButtonColor('#29B393'); // Green for correct
      } else {
        setButtonColor('#FF0000'); // Red for incorrect
      }

      // Call the callback function with the response data
      if (onUploadSuccess) {
        onUploadSuccess(response.data);
      }
    } catch (error) {
      console.error('Error uploading recording:', error);
    }
  };

  return (
    <div className={cls.recorder}>
      <button
        className={cls.btn}
        onTouchStart={startRecording}
        onTouchEnd={stopRecording}
        style={{ backgroundColor: buttonColor }} // Set button color
      >
        <img src={mic} alt="microphone" />
      </button>
    </div>
  );
};

export default AudioRecorder;
