import React, { useEffect } from "react";

function PositionForm({ onSubmit, onCancel }) {

    useEffect(() => {

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({});

    };

    const handleCancel = () => {
        onCancel();

    };

    return (
        <form onSubmit={handleSubmit}>
            <p>This is for Future Purpose...</p>
            <button type="button" onClick={handleCancel}>
                Cancel
            </button>
        </form>
    );
}

export default PositionForm;
