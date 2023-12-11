//Eli and Evan together
import react, { useState } from "react";

const NewItem = ({onAddItem}) => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Low priority");

  const handleSubmit = (e) => {
      e.preventDefault();
  
      const item = {
        name,
        priority,
      };
      console.log(item);
      
      onAddItem(item);
  
      setName("");

      setPriority("Low priority");

  };
  const handleDelete= ( deleteName) => {
    const newName = name.filter((name) => name !== deleteName);
    setPriority(newName);
  }  

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4 ">
        <label htmlFor="name" className="block font-bold">Need To Do:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 p-2 w-full text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block font-bold t">Priority:</label>
        <select
          id="priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border border-gray-300 p-2 w-full text-black"
        >
          <option value="Low priority">Low Priority</option>
          <option value="Medium priority">Medium Priority</option>
          <option value="High priority">High Priority</option>
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <button type="submit" className="ml-16 w-40 shadow-2xl bg-gray-500 px-8 py-3 border-4 border-slate-800 rounded-xl text-xl group-hover:bg-slate-700 relative">
          Remove
        </button>
        <button onClick={() => handleDelete(name)} className="w-40 shadow-2xl bg-gray-500 px-8 py-3 border-4 border-slate-800 rounded-xl text-xl group-hover:bg-slate-700 relative">
          Add
        </button>
      </div>
    </form>
  );   
};

export default NewItem;

