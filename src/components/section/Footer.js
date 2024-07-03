import {FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import style from '../section/Footer.module.css'

function Footer(){
    return(
        <div className={style.footer}>
            <ul>
              <li><a href='https://www.instagram.com/joaolopesrr/'><FaInstagram size={30}/></a></li>
              <li><a href='https://www.linkedin.com/in/joão-victor-lopes-rodrigues-8481ab286/'><FaLinkedin size={30}/></a></li>
              <li><a href='https://github.com/joaolopes00-r'><FaGithub size={30}/></a></li> 
           </ul>
           <p>joaolopes00@oulook.com</p>
           <p>João Victor Lopes © 2024</p>
        </div>
    )
}

export default Footer