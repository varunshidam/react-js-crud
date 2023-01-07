import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    // setListData([...listData,activity]);
    // console.log("ListData : ",listData)
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log("Updated List : ", updatedList);
      setActivity("");
      return updatedList;
    });
  };

  const removeActivity = (id) => {
    const updatedListData = listData.filter((ele, i) => {
      return id!== i;
    });
    setListData(updatedListData);
  };

  const removeAll = () => {
    setListData([])
  }

  return (
    <Card className="text-center">
      <Card.Header>ToDo List</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <Button variant="primary" onClick={addActivity}>
          Add
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">Here Is your List</Card.Footer>
      {listData != [] &&
        listData.map((element, id) => {
          return (
            <>
              <li
                className="list-group-item list-group-item-secondary"
                key={id}
              >
                {element}
                <Button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    removeActivity(id);
                  }}
                >
                  Remove
                </Button>
              </li>
            
            </>
          );
        })}
        {listData.length>=1 &&  <Button onClick={removeAll}>Remove All</Button>}
       
        
    </Card>
  );
}

export default App;
