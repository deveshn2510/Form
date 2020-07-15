import React, { useEffect } from 'react';
import { useState } from "react";
import Personal from '../personal/personal';
import Parent from '../parent/parent';
import Communication from '../communication/communication';
import AllInfo from '../allInfo/allInfo';

const Form = (props) => {
    // console.log(props)
    const [step, setStep] = useState(1);
    const [name, setName] = useState(props.location.state.values[0]);
    const [phoneNumber, setPhoneNumber] = useState(props.location.state.values[1]);
    const [gender, setGender] = useState('');
    const [motherName, setMotherName] = useState('');
    const [fatherName, setfatherName] = useState('');
    const [email, setEmail] = useState('');
    const [addressType, setAddressType] = useState('');
    // const [addressDefault , setAddress]= useState(false);
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');

    useEffect(()=>{
        if(phoneNumber===window.localStorage.getItem("phoneNumber")&&name===window.localStorage.getItem("name")){
            setGender(window.localStorage.getItem("gender"));
            setMotherName(window.localStorage.getItem("motherName"));
            setfatherName(window.localStorage.getItem("fatherName"));
            setEmail(window.localStorage.getItem("email"));
            setAddressType(window.localStorage.getItem("addressType"));
            setAddressLine1(window.localStorage.getItem("addressLine1"));
            setAddressLine2(window.localStorage.getItem("addressLine2"));
        }
    },[phoneNumber,name])

    const nextStep = () => {
        setStep(step + 1);
    }

    const previousStep = () => {
        setStep(step - 1);
    }
    const handleEvent = (event, name) => {
        if (name === "name") {
            setName(event);
        } else if (name == "phoneNumber") {
            setPhoneNumber(event);
        } else if (name == "gender") {
            setGender(event);
        } else if (name == "motherName") {
            setMotherName(event);
        } else if (name == "fatherName") {
            setfatherName(event);
        } else if (name == "email") {
            setEmail(event)
        } else if (name == "addressType") {
            setAddressType(event)
        } else if (name == "addressLine1") {
            setAddressLine1(event)
        } else if (name == "addressLine2") {
            setAddressLine2(event)
        }
    }

    const handleSubmit = () => {
        const fetchQueries = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                phoneNumber: phoneNumber,
                gender: gender,
                motherName: motherName,
                fatherName: fatherName,
                email: email,
                addressType: addressType,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
            })
        }
        fetch("https://bibliotheque-chaise-65007.herokuapp.com/form", fetchQueries)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    switch (step) {
        case 1:
            return (
                <div>
                    <Personal
                        name={name}
                        phoneNumber={phoneNumber}
                        gender={gender}
                        handleEvent={handleEvent}
                        nextStep={nextStep}
                    />
                </div>
            )
        case 2:
            return (
                <div>
                    <Parent
                        motherName={motherName}
                        fatherName={fatherName}
                        email={email}
                        handleEvent={handleEvent}
                        nextStep={nextStep}
                        previousStep={previousStep} />
                </div>
            )
        case 3:
            return (
                <div>
                    <Communication
                        // addressDefault={addressDefault}
                        addressType={addressType}
                        addressLine1={addressLine1}
                        addressLine2={addressLine2}
                        handleEvent={handleEvent}
                        nextStep={nextStep}
                        previousStep={previousStep} />
                </div>
            )
        case 4:
            return (
                <div>
                    <AllInfo
                        name={name}
                        phoneNumber={phoneNumber}
                        gender={gender}
                        motherName={motherName}
                        fatherName={fatherName}
                        email={email}
                        addressType={addressType}
                        addressLine1={addressLine1}
                        addressLine2={addressLine2}
                        handleEvent={handleEvent}
                        handleSubmit={handleSubmit}
                    />
                </div>
            )

    }



}

export default Form;