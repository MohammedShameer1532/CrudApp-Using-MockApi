import React, { useEffect, useState } from 'react';
import "../App.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setEmail(localStorage.getItem("email"));
    setName(localStorage.getItem("name"));

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://64ecbfd6f9b2b70f2bfae550.mockapi.io/CrudApp/${id}`,
      {
        name: name,
        email: email,
      }
    ).then(() => {
      navigate("/read")
    })
  };

  return (
    <div className="create mt-4">
      <h2>Update Operation</h2>
      <form>
        <div className="mb-3 mt-4">
          <label className="form-label">Name</label>
          <input type="text" className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mx-1"
          onClick={handleSubmit}
        >Update</button>
        <Link to="/read">
          <button className='btn btn-secondary mx-4'>Back</button>
        </Link>
      </form>
    </div>
  )
}

export default Update;
