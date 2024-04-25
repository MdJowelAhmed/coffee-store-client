import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffees,cof,setCof }) => {
    const {_id, coffee, quantity, supplier, taste, category, details, photo } = coffees;
    const handleDelete=_id=>{
        console.log(_id)
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
                fetch(`https://coffe-store-server-gilt.vercel.app/addCoffee/${_id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remaining=cof.filter(item=>item._id!==_id)
                          setCof(remaining)
                    }
                })
             
            }
          });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-72 h-60 rounded-3xl p-5" src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full px-5">
                <div>
                    <h2 className="card-title space-y-4">{coffee} </h2>
                    <p>{category} </p>
                    <p>{taste} </p>
                    <p>{quantity} </p>
                    <p>{supplier} </p>
                </div>
                <div className="flex space-y-3 flex-col ">
                    <button className="btn">view</button>
                   <Link to={`update/${_id}`}>
                   <button className="btn">Edit</button>
                   </Link>
                    <button onClick={()=> handleDelete(_id)} className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;