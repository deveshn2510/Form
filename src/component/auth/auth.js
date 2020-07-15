import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory  } from 'react-router-dom';

import Style from './style.module.css';
import Form from '../form/form';

const Auth = (props) => {

    console.log(props);
    const history = useHistory();
    const name = props.location.state.values[0];
    const phoneNumber = props.location.state.values[1];
    const otpGot = props.location.state.values[2];
    const [otp, setOtp] = useState('');
    const [verified, setVerified]=useState(false);


    const values = [name, phoneNumber]

    const handleOtp= () =>{
        if(otpGot===otp){
            setVerified(true)
            alert("OTP VERIFIED.")
        }else{
            alert("Please generate another OTP")
            history.push("/");
            window.location.reload();
        }
    }

    const handleSubmit= () =>{
        if(verified!==true){
            alert("Please generate another OTP")
            history.push("/");
            window.location.reload();
        }
    }

    return (
        <Router>
            <Switch>

                <Route path="/form" exact component={Form}></Route>



                <div className={Style.container}>

                    <div className={Style.title}>Authentication</div>
                    <div className={Style.innerContainer}>
                        <div className={Style.inputDiv}>
                            <label>OTP:</label>
                            <input className={Style.inputName} type="text" placeholder="Please enter the OTP" value={otp} onChange={e => { setOtp(e.target.value) }} ></input>

                        </div>

                        <div className={Style.divButton}>
                            <button className={Style.button} onClick={handleOtp} >Verify</button>
                        </div>

                        <div className={Style.divButton}>
                            <Link to={{
                                pathname: "/form", state: {
                                    values: values
                                }
                            }}><button className={Style.button} onClick={handleSubmit}>SUBMIT</button></Link>
                        </div>




                    </div>

                </div>

            </Switch>



        </Router>

    )
}

export default Auth;