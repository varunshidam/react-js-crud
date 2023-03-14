import { useState } from "react";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addActivity = () => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log("Updated List : ", updatedList);
      setActivity("");
      return updatedList;
    });
  };

  const removeActivity = (id) => {
    const updatedListData = listData.filter((ele, i) => {
      return id !== i;
    });
    setListData(updatedListData);
  };

  const removeAll = () => {
    setListData([]);
  };

  const editItem = (id) => {
    let newEditItem = listData.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setActivity(newEditItem);
  };

  return (
    <div style={{ marginLeft: "500px" }}>
      <h3>Todo List</h3>
      <input
        type="text"
        placeholder="Add activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      {toggleSubmit ? (
        <button variant="primary" onClick={addActivity}>
          Add
        </button>
      ) : (
        <button variant="primary" onClick={addActivity}>
          Update
        </button>
      )}

      {listData != [] &&
        listData.map((element, id) => {
          return (
            <>
              <li key={element.id}>
                {element}
                <button
                  type="button"
                  onClick={() => {
                    removeActivity(id);
                  }}
                >
                  Remove
                </button>
                <button type="button" onClick={() => editItem(element.id)}>
                  Edit
                </button>
              </li>
            </>
          );
        })}
      {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
    </div>
  );
};

export default Todo;
