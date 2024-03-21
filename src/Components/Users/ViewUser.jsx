import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const [user, setUser] = useState({
        name: "",
      gmail: "",
      password:"",
      age:"",
      course:"",
      status:"",
    });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/students/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Course:</b>
                  {user.course}
                </li>
                <li className="list-group-item">
                  <b>Gmail:</b>
                  {user.gmail}
                </li>
                <li className="list-group-item">
                  <b>Password</b>
                  {user.password}
                </li>
                <li className="list-group-item">
                  <b>Status</b>
                  {user.status}
                </li>
                <li className="list-group-item">
                  <b>Age</b>
                  {user.age}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}