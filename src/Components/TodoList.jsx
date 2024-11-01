import TodoIdem from "./TodoIdem"

const TodoList = (props) => {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-3 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArr.length === 0 ? <p>You haven't added any activity yet</p> : ""}
            {
                activityArr.map(function (item, index) {
                    return (<TodoIdem index={index} activity={item.activity} id={item.id} activityArr={activityArr} setactivityArr={setactivityArr} />)
                })
            }
        </div>
    )
}

export default TodoList