import Navbar from "./Navbar";
import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handelAddCoffee=event=>{
        event.preventDefault()
        const form=event.target;
        const coffee=form.coffee.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const newCoffee={coffee,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)

        fetch('https://coffe-store-server-gilt.vercel.app/addCoffee',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added success',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0]">
                <h2 className="text-3xl text-purple-400 text-center">Add a new Coffee</h2>
                <form onSubmit={handelAddCoffee} className="m-12">
                    {/* form row Coffee name and quantity */}
                    <div className="flex gap-6 mb-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" name="coffee" placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Available" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form row supplier name and taste */}
                    <div className="flex gap-6 mb-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form row category and details */}
                    <div className="flex gap-6 mb-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo URl</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URl" className="input input-bordered mb-10" required />
                        </div>

                        <input type="submit" value="Add Coffee" className="btn btn-block bg-gray-700 text-white" />

                </form>
            </div>
        </div>
    );
};

export default AddCoffee;