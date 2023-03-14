import CrudTodo from "./components/CrudTodo";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container className="mb-4">
        {/* For TodoList  */}
        {/* <Todo /> */}
        {/* Todo List With Crud */}
        <CrudTodo />
      </Container>
    </div>
  );
}

export default App;
