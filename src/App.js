

import Navbar from "../components/Navbar";
import { Routes , Route, useNavigate} from 'react-router-dom'
import React, { useState} from 'react'
import IdeasPage from "../pages/IdeasPage";
// import IdeasReadPage from '../pages/IdeaReadPage';
// import CreateIdea from '../pages/CreateIdea';
// import Footer from '../pages/Footer';
// import AddReviewForm from '../pages/AddReviewForm';
// import axios from 'axios';
import Challenge from "../components/Challenge";

function App() {

  const navigate = useNavigate()

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [userId, setUserId] = useState(null);
  // const [username, setUsername] = useState(null);
  // const [sessionId, setSessionId] = useState(null);
  // const [error, setError] = useState(null);
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     axios.post('https://api-article254.onrender.com/login', formData)
//       .then(response => {
//         const { sessionId, user } = response.data;
//         setSessionId(sessionId);
//         setIsAuthenticated(true);
//         setUsername(user.username);
//         setUserId(user.id);
//         navigate('/articles');
//       })
//       .catch(error => {
//         if (error.response && error.response.status === 401) {
//           setError("Invalid username or password");
//         } else {
//           setError("An error occurred. Please try again later.");
//         }
//       });
//   };





// console.log(userId);
// console.log( username);
// console.log(sessionId

return (
  <div className="">
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/login" element={<LoginUser error={error} setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin}/>} /> */}
        {/* <Route path="/Signup" element={<SignUpUser setIsAuthenticated={setIsAuthenticated} />} /> */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path='/reset_password' element={<ResetPassword />}/> */}
            <Route path="/navbar" element={<Navbar />} /> 
          
            <Route path="/ideas" element={<IdeasPage />} />
            {/* <Route  path='/ideas/:id' element={< IdeasReadPage />}/> */}
            {/* <Route  path='/createidea' element={< CreateIdea />}/> */}
            <Route path="/challenge" element={<Challenge />}/>
          
        

      </Routes>
      {/* <Footer/> */}
  </div>
);
}

export default App;
