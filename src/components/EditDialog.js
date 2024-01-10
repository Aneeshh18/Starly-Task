// InlineEditDialog.js

import React, { useState } from "react";

const EditDialog = ({ taskName, onSave, onCancel }) => {
  const [editedTaskName, setEditedTaskName] = useState(taskName);

  const handleTaskNameChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md">
        <label className="block mb-2 text-lg font-semibold">Task Name:</label>
        <input
          type="text"
          id="editedTaskName"
          value={editedTaskName}
          onChange={handleTaskNameChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none"
        />

        <div className="flex justify-end">
          <button
            onClick={() => onSave(editedTaskName)}
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
