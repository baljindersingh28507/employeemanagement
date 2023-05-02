import React, { useState } from "react";
import { handleCreate } from "../API/CreateUser";
import Form from "./Form";
import PositionForm from "./PositionForm";
const Header = ({value}) => {
    const [editingRow, setEditingRow] = useState(null);
    const [positionAdd, setPositionAdd] = useState(null);

    const onAddClick = () => {
        setEditingRow("new");
    };
    const onAddPositionClick = () => {
        setPositionAdd("new");
    };
    const addDataAPI = async (data) => {
        await handleCreate(data)
        value(data.positionId)
    }
    const handleFormSubmit = (newRow) => {
        addDataAPI(newRow);
        setEditingRow(null);
     


    };
    const handlePositionFormCancel = () => {
        setPositionAdd(null);
    }

    const handleFormCancel = () => {
        setEditingRow(null);
    };
    return (
        <>
            <div className="App">
                <div className="mainHeader">
                    <button onClick={onAddPositionClick}>Position Add</button>
                    <h1>ABC PVT. TECHNOLOGIES</h1>

                    <button onClick={onAddClick}>Add</button>
                </div>
            </div>
            {editingRow && (
                <div className="dialog">
                    <Form editingRow={editingRow} onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
                </div>
            )}
            {positionAdd && (<>
                <div className="dialog">
                    <PositionForm  onSubmit={handleFormSubmit} onCancel={handlePositionFormCancel} />
                </div>
            </>)}
        </>
    );
}

export default Header;