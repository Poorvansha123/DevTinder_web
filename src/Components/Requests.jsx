import axios from "axios"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addRequests,removeRequests } from "../utils/requestSlice"
import { BASE_URL } from "../utils/constant"
import { useEffect, useState } from "react"
const Requests=()=>{
    const requests=useSelector((store)=>store.request)
    const dispatch=useDispatch()


    const reviewRequest=async(status,_id)=>{
try{
const res=await axios.post(BASE_URL+"/request/review/"+status+"_id",{},{withCredentials:true})
dispatch(removeRequests(_id))
}catch(err){
    console.log(err)
}
    }



    const fetchRequest=async()=>{
        try{
// const res=await axios.get(BASE_URL+"/user/requests/recieved",{withCredentials:true})
const res = {
  data: [
    {
      _id: "req001",
      fromUserId: {
        _id: "user101",
        firstName: "Aarav",
        lastName: "Sharma",
        photoUrl: "https://i.pravatar.cc/300?img=11",
        skills: ["React", "JavaScript", "Tailwind CSS"],
        about: "Frontend Developer passionate about building responsive web applications.",
      },
      toUserId: "currentUser001",
      status: "interested",
      createdAt: "2026-07-20T10:15:30.000Z",
      updatedAt: "2026-07-20T10:15:30.000Z",
    },
    {
      _id: "req002",
      fromUserId: {
        _id: "user102",
        firstName: "Ananya",
        lastName: "Verma",
        photoUrl: "https://i.pravatar.cc/300?img=32",
        skills: ["Node.js", "Express", "MongoDB"],
        about: "Backend Engineer who enjoys designing scalable APIs.",
      },
      toUserId: "currentUser001",
      status: "interested",
      createdAt: "2026-07-19T14:20:00.000Z",
      updatedAt: "2026-07-19T14:20:00.000Z",
    },
    {
      _id: "req003",
      fromUserId: {
        _id: "user103",
        firstName: "Rohan",
        lastName: "Mehta",
        photoUrl: "https://i.pravatar.cc/300?img=15",
        skills: ["React", "Node.js", "AWS"],
        about: "Full Stack Developer with a love for cloud technologies.",
      },
      toUserId: "currentUser001",
      status: "interested",
      createdAt: "2026-07-18T09:45:10.000Z",
      updatedAt: "2026-07-18T09:45:10.000Z",
    },
    {
      _id: "req004",
      fromUserId: {
        _id: "user104",
        firstName: "Priya",
        lastName: "Singh",
        photoUrl: "https://i.pravatar.cc/300?img=47",
        skills: ["Figma", "UI/UX", "React"],
        about: "UI/UX Designer focused on intuitive and accessible interfaces.",
      },
      toUserId: "currentUser001",
      status: "interested",
      createdAt: "2026-07-17T17:10:25.000Z",
      updatedAt: "2026-07-17T17:10:25.000Z",
    },
    {
      _id: "req005",
      fromUserId: {
        _id: "user105",
        firstName: "Kabir",
        lastName: "Kapoor",
        photoUrl: "https://i.pravatar.cc/300?img=18",
        skills: ["Python", "TensorFlow", "SQL"],
        about: "Machine Learning enthusiast with a passion for AI.",
      },
      toUserId: "currentUser001",
      status: "interested",
      createdAt: "2026-07-16T12:05:40.000Z",
      updatedAt: "2026-07-16T12:05:40.000Z",
    },
    {
      _id: "req006",
      fromUserId: {
        _id: "user106",
        firstName: "Sneha",
        lastName: "Gupta",
        photoUrl: "https://i.pravatar.cc/300?img=41",
        skills: ["Next.js", "TypeScript", "Redux"],
        about: "Frontend Engineer specializing in scalable React applications.",
      },
      toUserId: "currentUser001",
      status: "interested",
      createdAt: "2026-07-15T08:30:15.000Z",
      updatedAt: "2026-07-15T08:30:15.000Z",
    },
  ],
};
dispatch(addRequests(res.data))
        }
        catch(err){
            console.log(err.response)
        }
    }
    useEffect(()=>{
        fetchRequest()
    },[])
    if(!requests) return
    if(requests.length===0) return <h1>No requests Found</h1>
    return(
        <div className="text-center  my-10">
            <hi className="text-bold text-xl">Connections</hi>
            {requests.map((request) => {
                const { _id,firstName, lastName, photoUrl, about, skills }=request.fromUserId
                return (
                    <div className=" flex m-4 p-4 border bg-base-300 max-w-2/3 mx-auto" key={_id}>
                        <div> <img className="w-20 h-20 rounded-full" alt="photo" src={photoUrl} /></div>
                        <div className="text-left mx-4">   <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
                            <p>{about}</p></div>

                        <div><button className="btn btn-primary mx-2" onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
                            <button className="btn btn-secondary mx-2" onClick={()=>reviewRequest("accepted",request._id)}>Accept</button></div>

                    </div>
                )
            })}

        </div>
    )
}
export default Requests