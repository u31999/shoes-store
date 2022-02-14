import classes from '../res/layout/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const accountUrls = {
        github: 'https://github.com/u31999',
        linkedin: 'https://www.linkedin.com/in/ahmed-hassan-elzain/'
    }
    return(
        <div className={classes.footerContainer}>
            <div>CopyRight &copy; Ahmed Hassan</div>
            <div>
            <div>
                <FontAwesomeIcon icon={faGithub} onClick={()=> window.open(accountUrls.github, '_blank')}/>
                </div>
                <div>
                <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open(accountUrls.linkedin, '_blank')}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;