import React, { useState, useEffect } from "react";
import { handleFetchData } from "../API/GetUsers";
import Form from "./Form";
import Table from "./Table";
import { handleDelete } from "../API/DeleteUsers";
import { handleEdit } from "../API/EditUser";

const SeniorManger = ({ value, updated }) => {
    const [data, setData] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [alert, setAlert] = useState(null);

    const handleEditClick = (row) => {
        setEditingRow(row);
    };

    const fetchData = async () => {
        const detail = await handleFetchData("Senior Manager");
        setData(detail.data);
    }
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        if (value === "Senior Manager") {
            fetchData();
        }

    }, [value])
    const handleDeleteClick = (deleteRow) => {
        console.log(deleteRow);
        setAlert({
            message: `Are you sure you want to delete ${deleteRow.firstName}?`,
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
    const editDataAPI = async (id, data) => {
        await handleEdit(id, data);
        fetchData();
    }

    const handleFormSubmit = (newRow) => {
        setData((data) =>
            data.map((row) => (row.id === editingRow.id ? { ...row, ...newRow } : row))
        );
        editDataAPI(editingRow._id, newRow);
        updated(newRow.positionId)
        setEditingRow(null);

    };

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
            <Table name="Senior Manager" data={data} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
        </div></>)
}

export default SeniorManger;