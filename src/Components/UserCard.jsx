import axios from "axios"
import {BASE_URL} from "../utils/constant"
import { useDispatch } from "react-redux"
import {removeConnections} from "../utils/connectionSlice"
const UserCard=({user})=>{
  console.log(user)
  const dispatch=useDispatch()
  const {_id,firstName,lastName,age,gender,about,skills,photoUrl}=user
  const handleSendRequest=async(status,userId)=>{
    try{
      const res=await axios.post(BASE_URL+"/request/send/interested"+status+"/"+userId,{},{withCredentials:true})
dispatch(removeConnections(userId))
    }catch(err){
      console.log(err.response)
    }
  }
    return(
    <>
 <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    <p>{age}, {gender}</p>
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
          <button className="btn btn-primary" onClick={()=>handleSendRequest("ignore",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Send Request</button>
    </div>
  </div>
</div>
    </>
    )
}
export default UserCard 