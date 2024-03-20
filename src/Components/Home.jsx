import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


const Home = () => {
  const [users,setUsers]=useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/students");
    setUsers(result.data);
  };

  return (
    <div className='container'>
      <div className='py-4'>

      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Slno</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Gmail</th>
      <th scope="col">Name</th>
      <th scope="col">PhoneNo</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.age}</td>
                <td>{user.course}</td>
                <td>{user.gmail}</td>
                <td>{user.name}</td>
                <td>{user.phonenumber}</td>
                <td>{user.status}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    // onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>


   
    </tr>
          
            ))}
  </tbody>
</table>

      </div>

    </div>
  )
}

export default Home