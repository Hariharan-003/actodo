import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

const TodoContainer = () => {

    const [activityArr, setactivityArr] = useState([
        { id: 1, activity: "Go for a Walk" },
        { id: 2, activity: "Have breakfast" },
        { id: 3, activity: "take a shower" }
    ])

    return (
        <div className="flex gap-5 flex-wrap">
            <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr} />
            <TodoList activityArr={activityArr} setactivityArr={setactivityArr} />
        </div>
    )
}

export default TodoContainer