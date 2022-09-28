import coverPhoto from '../assets/img/fondo.png'

import '../assets/styles/ContentImage.css'
import Button from '../atoms/Button';
import Img from '../atoms/Img';

function ContentImage(){
    return (
        <div className='content'>
            <Img src={coverPhoto} className='fondo'></Img>

            <div className="divButton">
            <Button content='Página web'></Button>
            </div>
        </div>
    );
}

export default ContentImage;