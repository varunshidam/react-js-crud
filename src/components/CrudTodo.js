import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const CrudTodo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      const editTodo = todos.find((i) => i.id === edit);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEdit(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const editActivity = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEdit(id);
  };

  const removeActivity = (id) => {
    const updatedTodos = todos.filter((to) => {
      return to.id !== id;
    });
    setTodos([...updatedTodos]);
  };

  return (
    <div style={{ marginLeft: "500px" }}>
      <Form onSubmit={handleSubmit}>
        <h3>Todo List</h3>

        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <Button
          className="btn btn-primary btn-sm "
          style={{ marginLeft: "5px" }}
          type="submit"
        >
          {edit ? "Edit" : "Add"}
        </Button>
      </Form>

      <span>
        {todos.map((t) => {
          return (
            <>
              <li style={{ marginTop: "5px" }}>
                <span> {t.todo}</span>
                <Button
                  className="btn btn-danger btn-sm "
                  style={{ marginLeft: "5px" }}
                  type="button"
                  onClick={() => {
                    removeActivity(t.id);
                  }}
                >
                  Remove
                </Button>
                <Button
                  className="btn btn-success btn-sm  "
                  type="button"
                  style={{ marginLeft: "5px" }}
                  onClick={() => editActivity(t.id)}
                >
                  Edit
                </Button>
              </li>
            </>
          );
        })}
      </span>
    </div>
  );
};

export default CrudTodo;
