import React, { useState } from "react";
import Select from "react-select";

const DataDrawer = ({ isOpen, onClose, onSubmit }) => {
    const [taskName, setTaskName] = useState("");
    const [assignedTo, setAssignedTo] = useState([]);
    const [endDate, setEndDate] = useState("");
    const [tags, setTags] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [descriptions, setDescriptions] = useState("");

    const handleAssigneesChange = (selectedOptions) => {
        setAssignedTo(selectedOptions.map((option) => option.label));
    };

    const handleTagsChange = (selectedOptions) => {
        setTags(selectedOptions.map((option) => option.value));
    };

    const handleFollowersChange = (selectedOptions) => {
        setFollowers(selectedOptions.map((option) => option.value));
    };

    const handleSubmit = () => {
        const newData = {
            taskName,
            assignedTo,
            endDate,
            tags,
            followers,
            descriptions,
        };
        onSubmit(newData);
        setTaskName("");
        setAssignedTo([]);
        setEndDate("");
        setTags([]);
        setFollowers([]);
        setDescriptions("");
    };

    return (
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-10 ${isOpen ? "block" : "hidden"}`}>
            <div className="bg-white h-full w-1/3 p-6 fixed right-0 top-0 overflow-y-auto">
                <button onClick={onClose} className="text-4xl float-right">
                    &times;
                </button>
                <h2 className="text-3xl font-bold mb-4 text-gray-400">Add Data</h2>

                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Task Name</label>
                    <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Assigned To</label>
                    <Select
                        isMulti
                        options={[{ value: "assignee1", label: "Assignee 1" }, { value: "assignee2", label: "Assignee 2" }]}
                        value={assignedTo.map((assignee) => ({ value: assignee, label: assignee }))}
                        onChange={handleAssigneesChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Tags</label>
                    <Select
                        isMulti
                        options={[{ value: "tag1", label: "Tag 1" }, { value: "tag2", label: "Tag 2" }]}
                        value={tags.map((tag) => ({ value: tag, label: tag }))}
                        onChange={handleTagsChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Followers</label>
                    <Select
                        isMulti
                        options={[{ value: "follower1", label: "Follower 1" }, { value: "follower2", label: "Follower 2" }]}
                        value={followers.map((follower) => ({ value: follower, label: follower }))}
                        onChange={handleFollowersChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Description</label>
                    <input
                        type="text"
                        value={descriptions}
                        onChange={(e) => setDescriptions(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                    />
                </div>

                <button onClick={handleSubmit} className="bg-red-500 text-white px-4 py-2 rounded">
                    Save
                </button>
            </div>
        </div>
    );
};

export default DataDrawer;
