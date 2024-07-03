import style from './ButtonA.module.css'

function ButtonA({text, link}){
    return(
       <div>
        <a href={link}>
        <button className={style.btn}> {text}</button>
        </a>
       </div>
    )
}

export default ButtonA