import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constant"
const Login = () => {
  const [emailId, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = async () => {

    try {
      //  const res=await axios.post(BASE_URL+"/login",{
      //   emailId,
      //   password,
      // },{withCredentials:true})
      const res = {
        data: {
          _id: "6878f9ab1234567890abcdef",
          firstName: "Poorvansha",
          lastName: "Baliyan",
          emailId: "balpoorva@gmail.com",
          age: 22,
          gender: "Female",
          photoUrl: "https://i.pravatar.cc/300?img=5",
          about: "Frontend Developer",
        },
        status: 200,
      };
      dispatch(addUser(res.data))
      navigate("/")
      console.log(res.data);

    }
    catch (err) {
      setError(err.response.data.message)
      console.log(err.response);
      console.log(err.response.data);
    }
  }
  const handleSignUp = async () => {
    try {
      // const res = await axios.post(BASE_URL + "/signup", { firstName, lastName, emailId, password }, { withCredentials: true })
      const res = {
        data: {
          _id: "6878f9ab1234567890abcdef",
          firstName: "Poorvansha",
          lastName: "Baliyan",
          emailId: "balpoorva@gmail.com",
          age: 22,
          gender: "Female",
          photoUrl: "https://i.pravatar.cc/300?img=5",
          about: "Frontend Developer",
        },
        status: 200,
      };
    dispatch(addUser(res.data))
    navigate("/profile")
    } catch (err) {
      console.log(err?.response?.data || "Something went Wrong")
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLoginForm ? "Login" : "SignUp"}</h2>
          <div>
            {!isLoginForm && (<>
              <label className="form-control w-full max-w-xs py-4">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input input-bordered w-full max-w-xs" />
              </label>
              <label className="form-control w-full max-w-xs py-4">
                <div className="label">
                  <span className="label-text">LastName</span>
                </div>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input input-bordered w-full max-w-xs" />
              </label>
            </>)}

            <label className="form-control w-full max-w-xs py-4">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input type="text" value={emailId} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs py-4">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>
          {error && <p>{error}</p>}
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignUp}>{isLoginForm ? "Login" : "SignIn"}</button>
          </div>
          <p className="m-auto cursor-pointer py-2" onClick={() => setIsLoginForm((value) => !value)}>{isLoginForm ? "New User? SignUp here" : "Existing User? Login here"}</p>
        </div>
      </div>
    </div>
  )
}
export default Login