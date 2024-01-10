import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import EditDialog from "./components/EditDialog";
import DataDrawer from "./components/DataDrawer";

const App = () => {
  const [data, setData] = useState([
    {
      no: 1,
      taskName: "Task 1",
      assignedTo: "Ram",
      startDate: "2024-01-01",
      endDate: "2024-01-09",
      tags: ["Tag", "Tag"],
      followers: "Follower 1, Follower 2",
      descriptions: "Description for Task 1",
    },
    {
      no: 2,
      taskName: "Task 2",
      assignedTo: "Jhon",
      startDate: "2024-01-05",
      endDate: "2024-01-15",
      tags: ["Tag", "Tag"],
      followers: "Follower 3, Follower 4",
      descriptions: "Description for Task 2",
    },
  ]);
  const columns = [
    { Header: "No.", accessor: "no" },
    { Header: "Task Name", accessor: "taskName" },
    { Header: "Assigned to", accessor: "assignedTo" },
    { Header: "Start date", accessor: "startDate" },
    { Header: "End date", accessor: "endDate" },
    { Header: "Tags", accessor: "tags" },
    { Header: "Followers", accessor: "followers" },
    { Header: "Descriptions", accessor: "descriptions" },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <button
          className="font-bold py-2 px-4 rounded"
          onClick={() => handleEditClick(row.original.taskName)}
        >
          Edit
        </button>
      ),
    },
  ];

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
    console.log(newEntry);

    setData([...data, newEntry]);
  };

  const handleAddDataClick = () => {
    setAddDrawerOpen(true);
  };

  return (
    <div className="mt-20">
      <Table
        data={data}
        columns={columns}
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
