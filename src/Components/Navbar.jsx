import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
           
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                      <Link to='/addCoffee'>  <li>Add Coffee</li></Link>
                        <li>
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                <Link to='/update'>  <li>Update Coffee</li></Link>
                                  <Link to='signUp'>  <li><a>Sign Up</a></li></Link>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;