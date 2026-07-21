import {useState} from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import {addUser} from "../utils/userSlice"
import {useNavigate} from "react-router-dom"
import {BASE_URL} from "../utils/constant"
const Login=()=>{
  const [emailId,setEmail]=useState("akshay@gmail.com")
  const [password,setPassword]=useState("Akshay@123")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogin=async()=>{

    try{
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
catch(err){
   console.log(err.response);
  console.log(err.response.data);
  }
}
    return(
        <div className="flex justify-center items-center h-screen">
        <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
   <div>
<label className="form-control w-full max-w-xs py-4">
  <div className="label">
    <span className="label-text">Email Id</span>
  </div>
  <input type="text" value={emailId} onChange={(e)=>setEmail(e.target.value)}  className="input input-bordered w-full max-w-xs"   />
</label>
<label className="form-control w-full max-w-xs py-4">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}   className="input input-bordered w-full max-w-xs"   />
</label>
   </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
        </div>
    )
}
export default Login