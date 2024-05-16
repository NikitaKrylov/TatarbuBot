import React from 'react'
import cls from './Progressbar.module.scss'
import speaking from '../../../assets/icons/normal/speaking.png'
import reading from '../../../assets/icons/normal/reading.png'
import listening from '../../../assets/icons/normal/listening.png'
import grammar from '../../../assets/icons/normal/grammar.png'
import Block from './Block';
const Progressbar =()=> {
  return (
    <div className={cls.progressbar}>
       <Block text={'Говорение'} percent={65} icon={speaking}/>
       <Block text={'Чтение'} percent={23} icon={reading}/>
       <Block text={'Аудирование'} percent={48} icon={listening}/>
       <Block text={'Грамматика'} percent={89} icon={grammar}/>
    </div>
  )
};
export default Progressbar;
