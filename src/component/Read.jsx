import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../App.css";

const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios.get(`https://64ecbfd6f9b2b70f2bfae550.mockapi.io/CrudApp`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })

  }
  function handleDelete(id) {
    axios.delete(`https://64ecbfd6f9b2b70f2bfae550.mockapi.io/CrudApp/${id}`
    ).then(() => {
      getData();
    })

  }
  const setToLocalStorage = (id,name,email) =>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);

  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="create mt-4">
      <h2 className='mt-4'>Read Operation</h2>
      <div className='button d-flex judtify-content-between m-2'>
      
      <Link to="/">
      <button className='btn btn-secondary'>Create</button>
      </Link>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>

          </tr>
        </thead>
        {
          data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>

                    <td>
                      <Link to="/update">
                        <button className='btn btn-success' onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button>
                    </td>
                  </tr>

                </tbody>
              </>
            )
          })

        }
      </table>
    </div>
  )
}

export default Read
