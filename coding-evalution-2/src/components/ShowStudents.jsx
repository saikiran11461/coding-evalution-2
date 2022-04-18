
import axios from "axios";
import {useEffect, useState} from "react"

export const ShowStudents = () => {

  const [user, setUser] = useState([])
  const [info, setInfo]= useState({})

  useEffect(() => {
    axios.get("http://localhost:8080/students").then((res)=>{setUser(res.data)})
    console.log(user)
    setUser((pre)=>[...pre.sort((a,b)=>a.first_name> b.first_name)])
  }, [])
  
  const changeFn = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
    
  }
  
  const sortFn = () => {
    if (info.sortby === "age" && info.order === "desc") {
      setUser((pre)=>[...pre.sort((a,b)=>a.age <b.age? 1: -1)])
    }
    else if (info.sortby === "age" && info.order === "asc") {
      setUser((pre)=>[...pre.sort((a,b)=>a.age > b.age? 1: -1)])
    }
    else if (info.sortby === "gender" && info.order === "asc") {
      setUser((pre)=>[...pre.sort((a,b)=>a.gender > b.gender? 1: -1)])
    }
    else if (info.sortby === "gender" && info.order === "desc") {
      setUser((pre)=>[...pre.sort((a,b)=>a.age < b.age? 1: -1)])
    }
    else if (info.sortby === "tenth_score" && info.order === "asc") {
      setUser((pre)=>[...pre.sort((a,b)=>a.tenth_score > b.tenth_score? 1: -1)])
    }
    else if (info.sortby === "tenth_score" && info.order === "desc") {
      setUser((pre)=>[...pre.sort((a,b)=>a.tenth_score < b.tenth_score? 1: -1)])
    }

    else if (info.sortby === "twelth_score" && info.order === "asc") {
      setUser((pre)=>[...pre.sort((a,b)=>a.twelth_score > b.twelth_score? 1: -1)])
    }

    else if (info.sortby === "twelth_score" && info.order === "desc") {
      setUser((pre)=>[...pre.sort((a,b)=>a.twelth_score < b.twelth_score? 1: -1)])
    }
    
  }
  


  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select onChange={changeFn}
            // select dropdown needs both value and onChange
            className="sortby"
            name="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select onChange={changeFn}
            // select dropdown needs both value and onChange
            className="sortorder"
            name="order"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button onClick={()=>{sortFn()}} className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {user.map((e) => {
            return (
              <tr className="row">
                <td className="first_name">{ e.first_name}</td>
                <td className="last_name">{ e.last_name}</td>
                <td className="email">{ e.email}</td>
                <td className="gender">{ e.gender}</td>
                <td className="age">{ e.age}</td>
                <td className="tenth_score">{ e.tenth_score}</td>
                <td className="twelth_score">{ e.twelth_score}</td>
                <td className="preferred_branch">{ e.preferred_branch}</td>
            </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  );
};