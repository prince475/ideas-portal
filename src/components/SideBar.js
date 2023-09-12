// import { useState } from "react";
// import '~antd/dist/antd.css';
import logo from './logo.png';
import {Menu} from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { 
  HomeOutlined,
  SettingOutlined,
  TrophyOutlined,
  UserSwitchOutlined   
  } from '@ant-design/icons'

const Sidebar = ({ setCategory }) => {
  

  // const [categories, setCategories ] = useState([
  //   "Search",
  //   "Home",
  //   "Challenge",
  //   "Support",
  //   "Settings",
  
    

  // ]);




  const navigate = useNavigate()

  const handleClick = (category) => {
    if (category === "All") {
      setCategory(null);
    } else {
      setCategory(category);
    }
  };

  const handleCategoryClick = (category) => {
    handleClick(category);
    // You can add additional logic here if needed for each category
  };

  return (

  //   <div className="flex justify-end items-start w-[280px] h-[600px] overflow-hidden bg-white border-t-2 border-r border-b-2 border-l-2 border-[#eaecf0] "
  // >
  <div StyleProvider={{display: "flex", flexDirection: "row"}}>        
  <div className="flex  flex-grow-0 flex-shrink-0 w-[px] h-[600px]  mt-20 text-base font-semibold  
        text-[#344054] font-lg " 
        >
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 left-6 top-0 absolute bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${logo})` }} 
             > 
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 mt-20 w-[150px] h-[52px] overflow-hidden" />
            </div>
      
          <Menu 

          

          onClick={({key}) => {
            if (key === "signout"){
                //TODO, sign out feature here
            }else {
                navigate(key)
            }

          }}

          items={[ 
            {label: "Search", key:"/search",  },
            {label: "Home", key:"/", icon: <HomeOutlined/>}, 
            {label: "Challenge", key:"/challenge", icon: <TrophyOutlined/> }, 
            {label: "Support", key:"/support", icon: <UserSwitchOutlined/>}, 
            {label: "Settings", key:"/settings", icon: <SettingOutlined/>}, 
             ]}>

          </Menu>

        <Content  />
        </div> 
      </div>   
  );
}

function Content() {
  return( 
      <div>
       <Routes>
         <Route path="/search" element={<div>Search</div>}></Route>
         <Route path="/" element={<div></div>}></Route>
         <Route path="/challenge" element={<div>Challenge</div>}></Route>
         <Route path="/support" element={<div>Support</div>}></Route>
         <Route path="/settings" element={<div>Settings</div>}></Route>
       </Routes>
     </div>
  )
     
   }



export default Sidebar;