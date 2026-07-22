import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import {BASE_URL} from "../utils/constant"
import axios from 'axios'
import {useDispatch} from "react-redux"
import { useEffect } from 'react'
import {addUser} from "../utils/userSlice"
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'
const Body=()=>{
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const user=useSelector((store)=>store.user)
const fetchUser=async()=>{
    try{
    // const res=await axios.get(BASE_URL+"/profile",{withCredentials:true})
    // dispatch(addUser(res.data))

    const res = {
  data: {
    _id: "687b6c0f7c9d2a0012ab3456",
    firstName: "Poorvansha",
    lastName: "Baliyan",
    emailId: "balpoorva@gmail.com",
    password: "$2b$10$8Lx7sQwM2e3YvXqTgYJp4eU2mN8KQvT3xP5L9R1H6S7A8B9C0D1E2",
    photoUrl: "https://i.pravatar.cc/300?img=5",
    age:"22",
    gender:"Female",
    about: "Frontend Developer | React & Next.js Enthusiast",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "MongoDB",
    ],
    createdAt: "2026-07-20T10:15:30.000Z",
    updatedAt: "2026-07-22T08:45:12.000Z",
  },
};

dispatch(addUser(res.data));
    }
    catch(err){
        if(err.response.status===401){
             Navigate("/login")
        }

        console.log(err.response);
    }
}
useEffect(()=>{
    if(!user){
         fetchUser()
    }
   
},[])
    return(
        <>
         <NavBar />
         <Outlet/>
         <Footer/>
         </>
    )}
    export default Body