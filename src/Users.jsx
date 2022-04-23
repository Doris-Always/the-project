import React, {Component} from "react";
import axios from "axios";

class Users extends Component{

  constructor(props){
   super(props)

   this.state = {
     users:[],
     errorMessage: " "
   }
  }

  
  componentDidMount (){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
      console.log(response)
      this.setState({users:response.data})
    })
    .catch(error =>{
      console.log(error)
      this.setState({errorMessage: 'Error retreiving data'})
    })
   }

 

 render(){
  const { users, errorMessage } = this.state
   return (
     <>
      <h1 className="text-center py-2">List of Users</h1>
      <div className="container mt-5">
       <div className="row gy-5">
         {
           users.length ? users.map(user => 
             <div  key={user.id}  className = "col-md-4 col-sm-12">
              <div  className="card container">
                <h3 className="card-title  py-2 fw-5">{user.name}</h3>
              
                <div className="mt-3">
                  <h5 className="">General info</h5>
                </div>
                <p className="detail"><b>Username</b>:&nbsp; &nbsp; {user.username}</p>
                    <p className="detail"><b> E-mail:</b> &nbsp;&nbsp; {user.email} </p>
                    <p className="detail"><b>Address:</b> &nbsp;&nbsp;{user.address.city}</p>
                    <p className="detail"><b> Website:</b> &nbsp;&nbsp;{user.website}</p>
                    <p className="detail"><b> Company:</b> &nbsp;&nbsp;{user.company.name}</p>
                    <p className="detail"><b>Phone:</b> &nbsp;&nbsp;{user.phone}</p>
              </div>
             </div>
            ):null
         }
        
       </div>
       {
         errorMessage ? <div className="text-center text-red fw-5"> {errorMessage}</div>: null
       }
      </div>
     </>
     
   )
 }
 
}

export default Users;