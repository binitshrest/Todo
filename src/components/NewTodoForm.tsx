import React, { useState } from "react";

export const NewTodoForm:React.FC<{addTodo:Function}> = (props) => {
  //state variable
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  // const assignedChange = (event) => {
  //   console.log("assigned ", event.target.value);
  //   setAssigned(event.target.value);
  // };

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(description, assigned);
    }
  };

   
  return (
    <div className="mt-5">
      <form action="">
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setAssigned(e.target.value)}
            value={assigned}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Description</label>
          <textarea
            className="form-control"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
