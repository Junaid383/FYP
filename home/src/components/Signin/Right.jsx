import styles from './styles.module.css';
import rightBoy from '../../Assets/Images/Signin/signinBoy.png';

const Right = () => {
    return (
        <div className={styles.right_wrapper}>
            <img src={rightBoy}/>
            <p className="right_title">Inventry Solutions</p>
        </div>
    )
}

export default Right
