import styles from './newuser.module.css';
import './newuser.css'

export default function newUser() {
    return (
        <div className={styles.newUser}>
            <h1 className={styles.newUserTitle}>New Employee</h1>
            <form action="" className={styles.newUserForm}>
                <div className={styles.newUserItem}>
                    <label  htmlFor="">Username</label>
                    <input  id="field" type="text" placeholder='Ali' />
                </div>

                <div className={styles.newUserItem}>
                    <label htmlFor="">Full Name</label>
                    <input id="field" type="text" placeholder='Ali Asad' />
                </div>

                <div className={styles.newUserItem}>
                    <label htmlFor="">Email</label>
                    <input id="field" type="email" placeholder='ali@gmail.com' />
                </div>

                <div className={styles.newUserItem}>
                    <label htmlFor="">Password</label>
                    <input id="field" type="password" placeholder='password' />
                </div>

                <div className={styles.newUserItem}>
                    <label htmlFor="">Phone</label>
                    <input id="field" type="text" placeholder='+92 316 6201209' />
                </div>

                <div className={styles.newUserItem}>
                    <label htmlFor="">Address</label>
                    <input id="field" type="text" placeholder='Lahore | Pakistan' />
                </div>

                {/* <div className={styles.newUserItem}>
                    <div className={styles.newUserGender}>
                        <label htmlFor="">Gender</label>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div> */}
                <div className={styles.newUserItem}>
                    <label htmlFor="">Active</label>
                    <select className={styles.newUserSelect} name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button id="newUserButton">Create</button>
            </form>


        </div>
    )
}
