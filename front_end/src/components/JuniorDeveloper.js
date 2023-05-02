/**
 * Here we Import packages
 */
import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import { handleFetchData } from "../API/GetUsers";
import { handleEdit } from "../API/EditUser";
import { handleDelete } from "../API/DeleteUsers";

/*This function render Junior data Table*/
const JuniorDeveloper = ({ value, updated }) => {

    const [data, setData] = useState([]); /* Fetched Data will be stored in data as array */
    const [editingRow, setEditingRow] = useState(null); /*Its render when we click on edit button */
    const [alert, setAlert] = useState(null); /* It will render when we click on delete button */

    const handleEditClick = (row) => {
        setEditingRow(row);
    };

    /**
     * Fetching data from API and storing it in data field.
     */
    const fetchData = async () => {
        const detail = await handleFetchData("Junior Developer");
        setData(detail.data);
    }

    /**
     * Its first render when page reload
     */
    useEffect(() => {
        fetchData();
    }, [])

    /**
     * When something find in value or changes it will be reloaded
     */
    useEffect(() => {
        if (value === "Junior Developer") {
            fetchData();
            updated('')
        }
    }, [value])

    /**
     * @param {*} deleteRow 
     * Popup will show and execute on the delete button 
     */
    const handleDeleteClick = (deleteRow) => {
        setAlert({
            message: `Are you sure you want to delete ${deleteRow.firstName} ${deleteRow.lastName}?`,
            onConfirm: async () => {
                await handleDelete(deleteRow._id)
                fetchData();
                setAlert(null);
            },
            onCancel: () => {
                setAlert(null);
            },
        });
    };

 
    /** 
     * @param {*} newRow
     * On Clickedit form submit its update on database by fetching API 
     */
    const handleFormSubmit = async(newRow) => {
        setData((data) =>
            data.map((row) => (row.id === editingRow.id ? { ...row, ...newRow } : row))
        );
        await handleEdit(editingRow._id, newRow);
        updated(newRow.positionId._id)
        fetchData();
        setEditingRow(null);

    };

    /**
     * On Edit Form click on cancel its hide form to show
     */
    const handleFormCancel = () => {
        setEditingRow(null);
    };
    return (<>
        <div className="App">
            {alert && (
                <div className="alert">
                    <div>
                        <p>{alert.message}</p>
                        <button onClick={alert.onConfirm}>Yes</button>
                        <button onClick={alert.onCancel}>No</button>
                    </div>
                </div>
            )}
            {editingRow && (
                <div className="dialog">
                    <Form editingRow={editingRow} onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
                </div>
            )}
            <Table name="Junior Developer" data={data} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
        </div></>)
}

export default JuniorDeveloper;