const TodoIdem = (props) => {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const handledelete = (deleteid) => {
        var temparr = activityArr.filter(function (item) {
            if (item.id == deleteid) {
                return false
            }
            else {
                return true
            }
        })

        setactivityArr(temparr)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button onClick={() => { handledelete(props.id) }} className="text-red-500">Delete</button>
        </div>
    )
}

export default TodoIdem







