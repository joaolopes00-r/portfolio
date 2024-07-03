import style from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img,title,tech,description,repo,site}){
    return(
        <div className={style.card}>
            <a href={site}>
                <img src={img} alt='Erro'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>
            </section>
        </div>
    )
}
export default Card 