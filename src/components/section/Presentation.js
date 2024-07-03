import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation(){
    return(
        <div className={style.presentation} id='Presentation'>
           <h4><strong>Bem vindo ao meu portfólio.</strong></h4>
           <h1>Olá eu sou o João Victor!</h1>
           <p>
            Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
            Como Desenvolvedor Full-Stack, eu tenho o compromisso de resolver problemas<br/>
            complexos e trazer resultados excepcionais para os negócios.<br/>
            Estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://github.com/joaolopes00-r' text='Conecte-se Comigo!'/>
            </div>
    )
}

export default Presentation