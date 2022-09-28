import '../assets/styles/imgAndText.css'

import Img from '../atoms/Img'
import Text from '../atoms/Text'

function ImgAndText ( props ) {
  return (
    <div className='imgAndText'>
        <Img src={props.src}></Img>
        <Text text={props.text}></Text>
    </div>
  )
}

export default ImgAndText