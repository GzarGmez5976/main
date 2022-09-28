import '../assets/styles/Header.css'

import logo from '../assets/img/logo.png'
import SocialMedia from '../molecules/SocialMedia'
import Img from '../atoms/Img'

function Header() {
    return(
        <header>
            <Img src={logo} className="logo"></Img>
            <h1>Up Chiapas</h1>  
            <SocialMedia></SocialMedia>
        </header>
    );
}
export default Header;