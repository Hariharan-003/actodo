import Card from "../Components/Card"
import TodoContainer from "../Components/TodoConatiner"
import Header from "../Components/Header"
import { useLocation } from "react-router-dom"

const Landing = () => {
  const data = useLocation()
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10  border rounded-md">
        {/* Header */}
        <Header username={data.state.user} />
        {/* Card */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={23} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:23:08"} />
          <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
        </div>
        {/* TodoContainer */}
        <div className="my-5">
          <TodoContainer />
        </div>
      </div>
    </div>
  )
}

export default Landing