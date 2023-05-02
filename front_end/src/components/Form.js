import React, { useState, useEffect } from "react";
import { getPosition } from "../API/GetPostion";
import DropDown from "./DropDown";

function Form({ editingRow, onSubmit, onCancel }) {

    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [option, setOption] = useState([]);


    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const position = async()=>{
        const {data} = await getPosition();
        let values = []
        // 
        for(let value of data.data) {
            if(value.positionTitle !== 'Director')
            values.push({value: value._id, label: value.positionTitle})
        }
        setOption(values);
    }


    useEffect(() => {
        position();
        console.log(editingRow)
        if (editingRow) {
            setName(editingRow?.firstName);
            setLastName(editingRow?.lastName)
            setEmployeeNumber(editingRow?.employeeNumber);
            setSelectedOption(editingRow?.positionId?._id);
        } else {
            setSelectedOption(option[1].value)
            setName("");
            setLastName("");
            setEmployeeNumber("");
            setSelectedOption("");
        }
    }, [editingRow]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ firstName, lastName, employeeNumber, positionId: selectedOption });
        setName("");
        setLastName("");
        setEmployeeNumber("");
        setSelectedOption("vacant");
    };

    const handleCancel = () => {
        onCancel();
        setName("");
        setLastName("");
        setEmployeeNumber("");
        setSelectedOption("vacant");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">First Name:</label>
            <input type="text" id="name" required value={firstName} onChange={(event) => setName(event.target.value)} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" required value={lastName} onChange={(event) => setLastName(event.target.value)} />
            <label htmlFor="email">Employee Number:</label>
            <input type="text" id="employeeNumber" required value={employeeNumber} onChange={(event) => setEmployeeNumber(event.target.value)} />
            <label htmlFor="position">Position :</label>   
            <DropDown options={option} value={selectedOption} onChange={handleDropdownChange} />
            <button type="submit">{editingRow ? "Save" : "Add"}</button>
            <button type="button" onClick={handleCancel}>
                Cancel
            </button>
        </form>
    );
}

export default Form;
