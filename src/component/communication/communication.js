import React from 'react';
import Style from './style.module.css';

const Communication = (props) => {

    const handleNext = () =>{
        window.localStorage.setItem("addressType",props.addressType);
        window.localStorage.setItem("addressLine1",props.addressLine1);
        window.localStorage.setItem("addressLine2",props.addressLine2);
        props.nextStep()
    }
    return (<div>
        <div className={Style.container}>

            <div className={Style.title}>Communication Information</div>
            <div className={Style.innerContainer}>
                <select value={props.addressType} name="addressType" onChange={(e) => props.handleEvent(e.target.value, e.target.name)}>
                    <option value="permanent address">Permanent Address</option>
                    <option value="business address">Business Address</option>
                    <option value="communication address">Communication Address</option>
                </select>
                <div className={Style.inputDiv}>
                    <input className={Style.inputName} type="text" name="addressLine1" placeholder="Address Line 1*" value={props.addressLine1} onChange={e => { props.handleEvent(e.target.value, e.target.name) }}  ></input>
                </div>
                <div className={Style.inputDiv}>
                    <input className={Style.inputPhoNum} type="text" name="addressLine2" placeholder="Address Line 2" value={props.addressLine2} onChange={e => { props.handleEvent(e.target.value, e.target.name) }} ></input>
                </div>
                
                <div className={Style.divButton}>
                    <button className={Style.button} onClick={props.previousStep}>Previous</button>
                    <button className={Style.button} onClick={handleNext}>Next/Save</button>
                </div>
            </div>

        </div>

    </div>)
}

export default Communication;