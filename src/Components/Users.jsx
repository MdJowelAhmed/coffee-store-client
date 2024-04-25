import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users,setUsers]=useState(loadedUsers)
    const handleDelete=_id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffe-store-server-gilt.vercel.app/user/${_id}`,{
                    method: 'DELETE',
                })
                .then(res =>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remainingUsers=users.filter(user=>user._id!==_id)
                          setUsers(remainingUsers)
                        }
                    })
                 
                }
              });
        }
    return (
        <div>
            <h2>User : {loadedUsers.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>CreatedAT</th>
                            <th>LastLogIN</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        users.map(user=>  <tr key={user._id}>
                            <th>1</th>
                            <td>{user.email} </td>
                            <td>{user?.createdAT} </td>
                            <td>{user.lastLoggedAt} </td>
                            <td>
                                <button onClick={()=>handleDelete(user._id)} className="btn">delete</button>
                            </td>
                        </tr>)
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;