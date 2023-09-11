import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";

const Create = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const navigate = useNavigate();

  const header = {"Access-control-Allow-Origin":"*"};
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`https://64ecbfd6f9b2b70f2bfae550.mockapi.io/CrudApp`,
      {
        name:name,
        email:email,
        header,

      }
    )
    .then(()=>{
    navigate("/read");
    });
  }
  
  return (
    <div>
      <h2 className='mt-4'>Create Operation</h2>
      <div className='button d-flex judtify-content-between m-2'>
      
      <Link to="/read">
      <button className='btn btn-primary'>Show Data</button>
      </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" onChange={(event)=>setName(event.target.value)} className="form-control"/>

        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email"  onChange={(event)=>setEmail(event.target.value)} className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
  }

export default Create;
