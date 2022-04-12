import React from 'react'
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlined from "@material-ui/icons/LockOutlined";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import styles from './styles.module.css';

const Left = (props) => {
  return (
    <div className={styles.left_card}>

      <h3 className={styles.left_card_title}>Sign Up</h3>
      {/* <p>If you already have an account</p>
      <p>You can <span className={styles.blueColor} onClick={props.switch}>Login Here !</span></p> */}

      <div className={styles.form_group}>
        <label className={styles.left_card_grey}>Email</label>
        <div className={styles.card_input_group}>
          <MailOutlineIcon className={styles.card_input_icon}/>
          <input type="text" placeholder="  enter your email address" />
        </div>
      </div>

      <div className={styles.form_group}>
        <label className={styles.left_card_grey}>username</label>
        <div className={styles.card_input_group}>
          <PermIdentityIcon className={styles.card_input_icon}/>
          <input type="text" placeholder="  Enter your User name" />
        </div>
      </div>


      <div className={styles.form_group}>
        <label className={styles.left_card_grey}>password</label>
        <div className={styles.card_input_group}>
          <LockOutlined className={styles.card_input_icon}/>
          <input className="" type="text" placeholder="  Enter your password" />
        </div>
      </div>

      <div className={styles.form_group}>
        <label className={styles.left_card_grey}>Confirm your password</label>
        <div className={styles.card_input_group}>
          <LockOutlined className={styles.card_input_icon}/>
          <input className="" type="text" placeholder="  Confirm your password" />
        </div>
      </div>


      <div>
          <button className={styles.register_btn}>Register</button>
      </div>
    
    </div>
  )
}

export default Left;