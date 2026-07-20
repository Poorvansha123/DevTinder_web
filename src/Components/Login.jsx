import {useState} from "react"
import axios from "axios"
const Login=()=>{
  const [emailId,setEmail]=useState("akshay@gmail.com")
  const [password,setPassword]=useState("Akshay@123")
  const handleLogin=async()=>{
    try{
      
 const res=await axios.post("http://localhost:5000/login",{
  emailId,
  password,
},{withCredentials:true})}
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