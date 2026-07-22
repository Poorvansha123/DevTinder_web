import { BASE_URL } from "../utils/constant"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import UserCard from "./UserCard"
const Feed = () => {
    const feed = useSelector((store) => store.feed)
    const dispatch = useDispatch()
    const getFeed = async () => {
        try {
            //  const res = await axios.get(BASE_URL + "/feed",{withCredentials:true})
            const res = {
                data: [
                    {
                        _id: "687b6c0f7c9d2a0012ab3401",
                        firstName: "Aarav",
                        lastName: "Sharma",
                        photoUrl: "https://i.pravatar.cc/300?img=11",
                        about: "Frontend developer passionate about building beautiful and responsive web applications.",
                        skills: ["React", "JavaScript", "Tailwind CSS"],
                        age: 24,
                        gender: "Male",
                    },
                    {
                        _id: "687b6c0f7c9d2a0012ab3402",
                        firstName: "Ananya",
                        lastName: "Verma",
                        photoUrl: "https://i.pravatar.cc/300?img=32",
                        about: "Backend engineer who loves designing scalable APIs and working with databases.",
                        skills: ["Node.js", "Express", "MongoDB"],
                        age: 23,
                        gender: "Female",
                    },
                    {
                        _id: "687b6c0f7c9d2a0012ab3403",
                        firstName: "Rohan",
                        lastName: "Mehta",
                        photoUrl: "https://i.pravatar.cc/300?img=15",
                        about: "Full Stack Developer with a strong interest in cloud technologies and DevOps.",
                        skills: ["React", "Node.js", "AWS"],
                        age: 26,
                        gender: "Male",
                    },
                    {
                        _id: "687b6c0f7c9d2a0012ab3404",
                        firstName: "Priya",
                        lastName: "Singh",
                        photoUrl: "https://i.pravatar.cc/300?img=47",
                        about: "UI/UX enthusiast who enjoys creating intuitive user experiences and modern interfaces.",
                        skills: ["Figma", "React", "CSS"],
                        age: 22,
                        gender: "Female",
                    },
                    {
                        _id: "687b6c0f7c9d2a0012ab3405",
                        firstName: "Kabir",
                        lastName: "Kapoor",
                        photoUrl: "https://i.pravatar.cc/300?img=18",
                        about: "Software engineer interested in machine learning and data-driven applications.",
                        skills: ["Python", "TensorFlow", "SQL"],
                        age: 27,
                        gender: "Male",
                    },
                    {
                        _id: "687b6c0f7c9d2a0012ab3406",
                        firstName: "Sneha",
                        lastName: "Gupta",
                        photoUrl: "https://i.pravatar.cc/300?img=41",
                        about: "Passionate frontend developer focused on accessibility and performance optimization.",
                        skills: ["Next.js", "TypeScript", "Redux"],
                        age: 25,
                        gender: "Female",
                    },
                ],
            };
            console.log(res.data)
            dispatch(addFeed(res.data))
            console.log("hihi")
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getFeed()
    }, [])
if(!feed) return
if(feed.length===0) return <h1>No elements in feed</h1>
    return (
        feed && feed.length === 0 ? <h1 className="text-3xl font-bold text-center my-10">No more users to show</h1> :
        <div className="flex justify-center my-10">
            <UserCard user={feed[0]}/>
        </div>
    )
}
export default Feed