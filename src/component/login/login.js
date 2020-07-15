import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import Style from './style.module.css';
import Auth from '../auth/auth';



const Login = () => {

    const [DOB, setDOB] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [otp, setOtp] = useState('');
    
    
    const handleClick = () => {


        if (isAdmin == true) {
            if (name.length == '') {
                alert('Please fill all the mandatory feilds.')
                window.location.reload();
            }
            if (phoneNumber.length != 10) {
                alert('Please provide a 10 digit mobile number.')
                window.location.reload();
            }

        }

        else {
            if (DOB.length == '' || rollNumber.length == '' || name.length == '') {
                alert('Please fill all the mandatory feilds.')
                window.location.reload();
            }

            if (phoneNumber.length != 10) {
                alert('Please provide a 10 digit mobile number.')
                window.location.reload();
            }


        }

        // if (otp === '') {
            //otpMade=makeOtp()
            alert(`Please note down the OTP for further process. The OTP is ${otp}`);

        // }

    }

    const makeOtp = () => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    var otpMade = makeOtp();
    useEffect(() => {
        if (isAdmin == true) {
            //console.log(isAdmin);
            document.getElementById('divOne').style.display = "none";
            document.getElementById('divTwo').style.display = "none";
        }

        if (isAdmin == false) {
            document.getElementById('divOne').style.display = "flex";
            document.getElementById('divTwo').style.display = "inline";

        }


    }, [isAdmin])






    const values = [name, phoneNumber, otp]
    return (
        <Router>
            <Switch>

                <Route path="/auth" exact component={Auth}></Route>



                <div className={Style.container}>

                    <div className={Style.title}>Login</div>
                    <div className={Style.innerContainer}>
                        <div id='divOne' className={Style.inputDiv}>
                            <div className={Style.inputDOBtitle}>Date of Birth *</div>
                            <input className={Style.inputDOB} type='date' value={DOB} onChange={e => { setDOB(e.target.value); setOtp(otpMade) }} ></input>
                        </div>
                        <div id='divTwo' className={Style.inputDiv}>
                            <input className={Style.inputRollNumber} type='text' placeholder="Roll Number*" value={rollNumber} onChange={e => { setRollNumber(e.target.value) }}></input>
                        </div>
                        <div className={Style.inputDiv}>
                            <input className={Style.inputName} type="text" placeholder="Name*" value={name} onChange={e => { setName(e.target.value) }} ></input>
                        </div>
                        <div className={Style.inputDiv}>
                            <input className={Style.inputPhoNum} type="tel" placeholder="Phone Number*" value={phoneNumber} onChange={e => { setPhoneNumber(e.target.value) }}></input>
                        </div>
                        <div className={Style.inputDivCheckbox}>
                            <input className={Style.inputIsAdmin} type="checkbox" placeholder="is Admin" value={isAdmin} onClick={() => { setIsAdmin(!isAdmin) }}></input>
                            <div className={Style.inputIsAdminTitle}>Is Admin</div>
                        </div>

                        <div className={Style.divButton}>
                            <Link to={{
                                pathname: "/auth", state: {
                                    values: values
                                }
                            }}><button className={Style.button} onClick={handleClick}>SUBMIT</button></Link>
                        </div>




                    </div>

                </div>

            </Switch>



        </Router>

    )
}

export default Login;