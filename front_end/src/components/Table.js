import React from "react";

function Table({ name, data, onEditClick, onDeleteClick }) {
    return (
        <table key={name}>
            <thead key={name+1}>
                <tr key={name+name}>
                 <><td colSpan="12">
                        <h1 className="center">{name}</h1>
                    </td>
                       </> 
                </tr>
            </thead>
            <thead>
                <tr>
                    <th colSpan={1}>ID</th>
                    <th colSpan={2}>First Name</th>
                    <th colSpan={2}>Last Name</th>
                    <th colSpan={2}>Employee Number</th>
                    <th colSpan={2}>Position Number</th>
                    <th colSpan={2}>Position Title</th>
                    <th colSpan={1}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => {
                    if(row.firstName && row.lastName && row.employeeNumber){
                        return (

                            <tr key={row.id}>
                                <td colSpan={1}>{index+1}</td>
                                <td colSpan={2}>{row.firstName}</td>
                                <td colSpan={2}>{row.lastName}</td>
                                <td colSpan={2}>{row.employeeNumber}</td>
                                <td colSpan={2}>{row.positionId._id}</td>
                                <td colSpan={2}>{row.positionId.positionTitle}</td>
                                <td colSpan={1}>
                                    <button onClick={() => onEditClick(row)}>Edit</button>
                                    <button onClick={() => onDeleteClick(row)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }else{
                        return (

                            <tr key={row.id}>
                                <td colSpan={1}>{index+1}</td>
                                <td colSpan={10}>Vacant</td>
                                <td colSpan={1}>
                                    <button onClick={() => onEditClick(row)}>Add</button>
                                </td>
                            </tr>
                        )
                    }
                     
              
                })}
            </tbody>
        </table>
    );
}

export default Table;
