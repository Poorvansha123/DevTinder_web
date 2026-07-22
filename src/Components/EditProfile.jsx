import { useState } from "react"
import UserCard from "./UserCard"
import { BASE_URL } from "../utils/constant"
import axios from "axios"
import { useDispatch } from "react-redux"
import {addUser} from "../utils/userSlice"
const EditProfile=({user})=>{
  const dispatch=useDispatch()
  console.log(user,"user")
      const [firstName,setFirstName]=useState(user.firstName)
    const [lastName,setLastName]=useState(user.lastName)
    const [photoUrl,setPhotoUrl]=useState(user.photoUrl)
    const [age,setAge]=useState(user.age)
    const [gender,setGender]=useState(user.gender)
    const [about,setAbout]=useState(user.about)
      const [error,setError]=useState("")
      const [toast,showToast]=useState(false)
      const handleSave=async()=>{
        setError("")
        try{
       const res=await axios.patch(BASE_URL+"/profile/edit",{firstName,lastName,age,gender,about,photoUrl},{withCredentials:true})
dispatch(addUser(res.data))
showToast(true)
setTimeout(()=>{
  setToast(false)
},3000)
        }catch(err){
          setError(err.response.message)
        }

      }
    return(
      <>
     {toast && <div className="toast">
  <div className="alert alert-info">
    <span>New message arrived.</span>
  </div>
</div>}
      <div className="flex justify-center ">
        <div className="flex justify-center mx-10">
              <div className="flex justify-center items-center h-screen">
        <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center"> Edit Profile </h2>
   <div>
<label className="form-control w-full max-w-xs py-4">
  <div className="label">
    <span className="label-text">FirstName</span>
  </div>
  <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  className="input input-bordered w-full max-w-xs"   />
</label>
<label className="form-control w-full max-w-xs py-4">
  <div className="label">
    <span className="label-text">LastName</span>
  </div>
  <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}   className="input input-bordered w-full max-w-xs"   />
</label>
<label className="form-control w-full max-w-xs py-4">
  <div className="label">
    <span className="label-text">Photo</span>
  </div>
  <input type="text" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)}   className="input input-bordered w-full max-w-xs"   />
</label>
<label className="form-control w-full max-w-xs py-4">
  <div className="label">
    <span className="label-text">Age</span>
  </div>
  <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}   className="input input-bordered w-full max-w-xs"   />
</label>
<label className="form-control w-full max-w-xs py-4">
  <div className="label">
    <span className="label-text">Gender</span>
  </div>
  <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)}   className="input input-bordered w-full max-w-xs"   />
</label>
<label className="form-control w-full max-w-xs py-4">
  <div className="label">
    <span className="label-text">About</span>
  </div>
  <input type="text" value={about} onChange={(e)=>setAbout(e.target.value)}   className="input input-bordered w-full max-w-xs"   />
</label>
   </div>
  {error && <p>{error}</p>}
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleSave}>Save Profile</button>
    </div>
  </div>
</div>
        </div>
        </div>
        <UserCard user={{firstName,lastName,age,gender,about,photoUrl}}/>
        
</div>
</>
    )
}
export default EditProfile