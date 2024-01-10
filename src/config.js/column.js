const columns = (handleEditClick) => [
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
  
  export default columns;
  