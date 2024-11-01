import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {

    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")

    const handleUInput = (event) => {
        setEusername(event.target.value)
    }

    const handlePInput = (event) => {
        setEpassword(event.target.value)
    }

    const addUser = () => {
        setusers([...users, { username: eusername, password: epassword }])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>You can Signup here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" value={eusername} onChange={handleUInput} />

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" value={epassword} onChange={handlePInput} />

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="confirm password" />

                    <button className="bg-[#FCA201] w-24 border rounded-md py-1" onClick={addUser}>Sign Up</button>

                    <p>Already have an account ? <Link to={"/"} className='underline'>Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp