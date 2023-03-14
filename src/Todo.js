import React, { useState } from "react";

const Todo = () => {
  // 1 useState
  const [inputData, setInputData] = useState("");
  const [inputList, setInputList] = useState([]);

  const addActivity = () => {
    setInputList((inputList) => {
      const updatedData = [...inputList, inputData];
      setInputData("");
      return updatedData;
    });
  };

  const removeData = (id) => {
    const updatedListData = inputList.filter((ele, i) => {
      return id !== i;
    });
    setInputList(updatedListData);
  };

  const removeAllData = () => {
    setInputList([]);
  };

  return (
    <div>
      <h3>Todo Activity</h3>
      {/* 1 */}
      <input
        type={"text"}
        value={inputData}
        placeholder="Add Activity"
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={addActivity}>Add Activity</button>

      {/* //2 */}
      {inputList.map((element, id) => {
        return (
          <li key={id}>
            {element}
            <button onClick={(e) => removeData(id)}>Remove</button>
          </li>
        );
      })}

      {inputList.length >= 1 && (
        <button onClick={removeAllData}>Remove All</button>
      )}
    </div>
  );
};

export default Todo;
