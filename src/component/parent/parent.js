import React from 'react';
import Style from './style.module.css';

const Parent = (props) => {

    const handleNext = () =>{
        window.localStorage.setItem("motherName",props.motherName);
        window.localStorage.setItem("fatherName",props.fatherName);
        window.localStorage.setItem("email",props.email);
        props.nextStep()
    }

    return (<div>
        <div className={Style.container}>

            <div className={Style.title}>Parent Information</div>
            <div className={Style.innerContainer}>
                <div className={Style.inputDiv}>
                    <input className={Style.inputName} type="text" required="true" name="motherName" placeholder="Mother's Name*" value={props.motherName} onChange={e => { props.handleEvent(e.target.value, e.target.name) }}  ></input>
                </div>
                <div className={Style.inputDiv}>
                    <input className={Style.inputPhoNum} type="text" name="fatherName" placeholder="Father's Name" value={props.fatherName} onChange={e => { props.handleEvent(e.target.value, e.target.name) }} ></input>
                </div>
                <div className={Style.inputDiv}>
                    <input className={Style.inputPhoNum} type="email" required="true" name="email" placeholder="Email*" value={props.email} onChange={e => { props.handleEvent(e.target.value, e.target.name) }} ></input>
                </div>
                <div className={Style.divButton}>
                    <button className={Style.button} onClick={props.previousStep}>Previous</button>
                    <button className={Style.button} onClick={handleNext}>Next/Save</button>
                </div>
            </div>

        </div>

    </div>)
}

export default Parent;