import ButtonB from '../elements/ButtonB'
import style from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../section/Image/projects/lpdnc.svg'



function Projects(){
    return(
        <div className={style.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card 
            img={lpdnc}
            title="LP - DNC"
            tech="HTML, CSS, JAVASCRIPT "
            description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo="https://github.com/joaolopes00-r/Projeto"
            site="https://eclectic-figolla-f1bc34.netlify.app"
            />
          <ButtonB text='Acesse meu repositório' link='https://github.com/joaolopes00-r?tab=repositories'/>
        </div>
    )
}

export default Projects
