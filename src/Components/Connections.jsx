import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCoonections } from "../utils/connectionSlice";
import { useSelector } from "react-redux";
const Connections = () => {
    const dispatch = useDispatch()
    const connections = useSelector((store) => store.connection)
    const fetchConnections = async () => {
        try {
            // const res=await axios.get(BASE_URL+"/user/connections",{withCredentials:true})
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
            dispatch(addCoonections(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchConnections()
    }, [])

    if (!connections) return
    if (connections.length === 0) return <h1>No Connection found</h1>
    return (
        <>
        <div className="text-center  my-10">
            <h1 className="text-bold text-xl">Connections</h1>
            {connections.map((connection) => {
                const { _id, firstName, lastName, photoUrl, about, skills, age, gender } = connection
                return (
                    <div className=" flex m-4 p-4 border bg-base-300 max-w-1/2 mx-auto" key={_id}>
                        <div> <img className="w-20 h-20 rounded-full" alt="photo" src={photoUrl} /></div>
                        <div className="text-left mx-4">   <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
                            <p>{about}</p></div>
      
                    </div>
                )
            })}
            

        </div>

        </>
    )
}
export default Connections