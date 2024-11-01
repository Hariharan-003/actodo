import { useState } from "react"

const AddTodoForm = (props) => {
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    const [newitem, setnewitem] = useState("")

    const handlechange = (event) => {
        setnewitem(event.target.value)
    }

    const handleadd = () => {
        setactivityArr([...activityArr, { id: activityArr.length + 1, activity: newitem }])
        setnewitem("")
    }

    return (
        <div>
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <input type="text" value={newitem} onChange={handlechange} className="border border-black bg-transparent p-1 my-3" placeholder="Next Activity?" />
            <button onClick={handleadd} className="bg-black text-white p-1 border border-black">Add</button>
        </div>
    )
}

export default AddTodoForm