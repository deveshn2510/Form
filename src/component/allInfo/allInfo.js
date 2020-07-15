import React from 'react';
import Style from './style.module.css';

const AllInfo = (props) => {

    const handleSubmitButton = () => {


        if (props.name === "") {
            alert("The Name field can't be empty");
        } else if (props.phoneNumber.length !== 10) {
            alert("Please fill a 10 digit Mobile Number");
        } else if (props.motherName === "") {
            alert("The Mother's Name field can't be empty")
        } else if (!props.email.includes('@')) {
            alert("Please add a valid Email")
        } else if (!props.addressLine1 === "") {
            alert("The Mother's Name field can't be empty");

        } else {
            window.localStorage.removeItem("name");
            window.localStorage.removeItem("phoneNumber");
            window.localStorage.removeItem("gender");
            window.localStorage.removeItem("motherName");
            window.localStorage.removeItem("fatherName");
            window.localStorage.removeItem("email");
            window.localStorage.removeItem("addressType");
            window.localStorage.removeItem("addressLine1");
            window.localStorage.removeItem("addressLine2");
            props.handleSubmit();
        }
    }

    return (<div>
        <div className={Style.container}>

            <div className={Style.title}>Edit Information</div>
            <div className={Style.innerContainer}>
                <div className={Style.inputDiv}>
                    <label>Name:</label>
                    <input className={Style.input} type="text" name="name" placeholder="Name*" value={props.name} onChange={e => { props.handleEvent(e.target.value, e.target.name) }}  ></input>
                </div>
                <div className={Style.inputDiv}>
                    <label>Phone Number:</label>
                    <input className={Style.input} type="tel" name="phoneNumber" placeholder="Phone Number*" value={props.phoneNumber} onChange={e => { props.handleEvent(e.target.value, e.target.name) }} ></input>
                </div>
                <div className={Style.inputDivRadio} value={props.gender} onChange={e => { props.handleEvent(e.target.value, e.target.name) }}>
                    <label>Gender:</label>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other

                </div>
                <div className={Style.inputDiv}>
                    <label>Mother's Name:</label>
                    <input className={Style.input} type="text" required="true" name="motherName" placeholder="Mother's Name*" value={props.motherName} onChange={e => { props.handleEvent(e.target.value, e.target.name) }}  ></input>
                </div>
                <div className={Style.inputDiv}>
                    <label>Father's Name:</label>
                    <input className={Style.input} type="text" name="fatherName" placeholder="Father's Name" value={props.fatherName} onChange={e => { props.handleEvent(e.target.value, e.target.name) }} ></input>
                </div>
                <div className={Style.inputDiv}>
                    <label>Email Id:</label>
                    <input className={Style.input} type="email" required="true" name="email" placeholder="Email*" value={props.email} onChange={e => { props.handleEvent(e.target.value, e.target.name) }} ></input>
                </div>
                <div className={Style.inputDiv}>
                    <label>Address Type:</label>
                    <select value={props.addressType} name="addressType" onChange={(e) => props.handleEvent(e.target.value, e.target.name)}>
                        <option value="permanent address">Permanent Address</option>
                        <option value="business address">Business Address</option>
                        <option value="communication address">Communication Address</option>
                    </select>
                </div>

                <div className={Style.inputDiv}>
                    <label>Address Line 1:</label>
                    <input className={Style.input} type="text" name="addressLine1" placeholder="Address Line 1*" value={props.addressLine1} onChange={e => { props.handleEvent(e.target.value, e.target.name) }}  ></input>
                </div>
                <div className={Style.inputDiv}>
                    <label>Address Line 2:</label>
                    <input className={Style.input} type="text" name="addressLine2" placeholder="Address Line 2" value={props.addressLine2} onChange={e => { props.handleEvent(e.target.value, e.target.name) }} ></input>
                </div>



                <div className={Style.divButton}>
                    <button className={Style.button} onClick={props.previousStep}>Save as Draft</button>
                    <button className={Style.button} onClick={handleSubmitButton}>SUBMIT</button>
                </div>
            </div>

        </div>

    </div>)
}

export default AllInfo;