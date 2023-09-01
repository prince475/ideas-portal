import {  Link } from "react-router-dom"


const Navbar = () => {

    return (

    <nav className="bg-transparent border  shadow-lg flex items-center justify-around flex-wrap p-3 md:border-slate-100 md:border-b-2 md:border-t-0 md:border-r-0 md:border-l-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <Link to="/"className="font-semibold text-2xl text-blue-500 tracking-tight">Ideas Portal</Link>
        </div>
        <div className="flex items-center flex-shrink-0 text-blue-400 font-bold justify-center">
                <Link to="/ideas"  exact className="ml-5">Ideas</Link>
                <Link to="/createideas"  exact className="ml-5">Create Ideas</Link>
              
           </div>
      </nav>
      );
}

export default Navbar;