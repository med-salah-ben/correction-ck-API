import React, {useState, useEffect} from "react"
import axios from "axios"

function App() {
  const [users, setUsers] = useState([]);
  const [loadUser , setLoadUser] = useState(true)

  const getUsers = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setUsers(res.data)
      setLoadUser(false)
     
    })
    .catch((err)=>console.log(err))
  }

  useEffect(() => {
  getUsers();
},[]);
  return (
    <div >
       {loadUser ? (<h1>.....Loading</h1>):(users.map((user)=>(
         <div key={user.id}>
         <h1>Name : {user.name}</h1>
         <h3>User Name :{user.username}</h3>
         <h3>Phone : {user.phone}</h3>
         <h3>Email : {user.email}</h3>
         <h6>--------------------------------</h6>
         </div>
       ))) }
    </div>
  );
}

export default App;
