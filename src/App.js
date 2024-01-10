import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import EditDialog from "./components/EditDialog";
import DataDrawer from "./components/DataDrawer";
import initialData from "./data";
import columns from "./config.js/column";

const App = () => {
  const [data, setData] = useState(initialData);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState("");
  const [addDrawerOpen, setAddDrawerOpen] = useState(false);

  const handleEditClick = (originalTaskName) => {
    setEditedTaskName(originalTaskName);
    setEditDialogOpen(true);
  };
  const saveEditDialog = (newTaskName) => {
    const newData = data.map((item) =>
      item.taskName === editedTaskName
        ? { ...item, taskName: newTaskName }
        : item
    );
    setData(newData);
    setEditDialogOpen(false);
  };

  const closeAddDataDrawer = () => {
    setAddDrawerOpen(false);
  };

  const submitAddDataDrawer = (newData) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const newEntry = {
      no: data.length + 1,
      startDate: currentDate,
      ...newData,
    };

    setData([...data, newEntry]);
  };

  const handleAddDataClick = () => {
    setAddDrawerOpen(true);
  };

  return (
    <div className="mt-20">
      <Table
        data={data}
        columns={columns(handleEditClick)}
        onAddDataClick={handleAddDataClick}
      />
      {editDialogOpen && (
        <EditDialog
          taskName={editedTaskName}
          onSave={saveEditDialog}
          onCancel={() => setEditDialogOpen(false)}
        />
      )}
      <DataDrawer
        isOpen={addDrawerOpen}
        onClose={closeAddDataDrawer}
        onSubmit={submitAddDataDrawer}
      />
    </div>
  );
};

export default App;
