import classes from '../../res/layout/homePage.module.scss';
import backGroundImage from '../../res/image/background5-image.jpg';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return(
        <div className={classes.bodyContainer}>
                <div>
                    <img src={backGroundImage} alt='bacjgound-img'/>
                    <div className={classes.text}>
                        <div>
                            Your Ultimate Shoes Resourse
                        </div>
                        <div>
                        Made for walking, and that’s just what they’ll do, one mile after another.
                        </div>
                        <div>
                        <NavLink to='/shop'>
                        <button>
                            SHOP    
                        </button>
                        </NavLink>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default HomePage;