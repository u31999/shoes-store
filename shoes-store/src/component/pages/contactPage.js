import classes from '../../res/layout/contactPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAmilia, faReact, faSass, faJsSquare, faCss3} from '@fortawesome/free-brands-svg-icons';
const urls = {
    github: 'https://github.com/u31999',
    linkedin: 'https://www.linkedin.com/in/ahmed-hassan-elzain/',
    mail: 'mailto:alzain31999@gmail.com'
}
const ContactPage = () => {
    return(
        <div className={classes.contactBody}>
        <div className={classes.title}>This App Is Created By Ahmed Hassan Using:</div>
        <div className={classes.buldingIcons}><ul>
            <FontAwesomeIcon icon={faJsSquare} className={classes.js} />
            <FontAwesomeIcon icon={faReact} className={classes.react} />
            <FontAwesomeIcon icon={faCss3} className={classes.css} />
            <FontAwesomeIcon icon={faSass} className={classes.sass} />
        </ul></div>
        <div className={classes.title}>Contact Devoloper</div>
        <div className={classes.icons}>
            <FontAwesomeIcon icon={faGithub} className={classes.github} 
            onClick={()=> window.open(urls.github, '_blank')} />
            <FontAwesomeIcon icon={faLinkedin} className={classes.linkedin} 
            onClick={()=> window.open(urls.linkedin, '_blank')} />
            <FontAwesomeIcon icon={faAmilia} className={classes.mail} 
            onClick={()=> window.open(urls.mail)} />
        </div>
        </div>
    )
}

export default ContactPage;