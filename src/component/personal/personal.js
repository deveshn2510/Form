import React from 'react';
import Style from './style.module.css'

const Personal = (props) => {

    const handleNext = () =>{
        window.localStorage.setItem("name",props.name);
        window.localStorage.setItem("phoneNumber",props.phoneNumber);
        window.localStorage.setItem("gender",props.gender);
        props.nextStep();
    }
    return (<div>
        <div className={Style.container}>

            <div className={Style.title}>Personal Information</div>
            <div className={Style.innerContainer}>
                <div className={Style.inputDiv}>
                    <input className={Style.inputName} type="text" name="name" placeholder="Name*" value={props.name} onChange={e => { props.handleEvent(e.target.value, e.target.name) }}  ></input>
                </div>
                <div className={Style.inputDiv}>
                    <input className={Style.inputPhoNum} type="tel" name="phoneNumber" placeholder="Phone Number*" value={props.phoneNumber} onChange={e => { props.handleEvent(e.target.value, e.target.name) }} ></input>
                </div>
                <div className={Style.inputDivRadio} value={props.gender} onChange={e => {props.handleEvent(e.target.value, e.target.name) }}>

                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other

                </div>
                <div className={Style.divButton}>
                    <button className={Style.button} onClick={handleNext}>Next</button>
                </div>
            </div>

        </div>

    </div>)
}

export default Personal;