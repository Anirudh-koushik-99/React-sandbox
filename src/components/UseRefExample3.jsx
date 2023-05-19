import Todo from "./Todo"
import { useState } from "react"

function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true)
  return (
    <div>
      {showTodo && <Todo />}
      <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Toggle ToDo</button>
    </div>
  )
}

export default UseRefExample3
