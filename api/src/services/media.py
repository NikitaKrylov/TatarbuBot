import aiofiles
import aiofiles.os


async def save_image(file) -> str:
    file_path = 'static/' + file.filename
    async with aiofiles.open(file_path, mode='wb') as f:
        content = await file.read()
        await f.write(content)

        return '/' + file_path


async def save_audio(file) -> str:
    file_path = 'static/' + file.filename
    async with aiofiles.open(file_path, mode='wb') as f:
        content = await file.read()
        await f.write(content)

        return '/' + file_path


async def delete_file(file_path: str) -> bool:
    try:
        await aiofiles.os.remove(file_path)
        return True
    except FileNotFoundError:
        return False
