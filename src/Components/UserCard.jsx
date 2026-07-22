const UserCard=({user})=>{
  console.log(user)
  const {firstName,lastName,age,gender,about,skills,photoUrl}=user
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
          <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Send Request</button>
    </div>
  </div>
</div>
    </>
    )
}
export default UserCard 