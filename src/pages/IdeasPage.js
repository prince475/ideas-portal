import { useState, useEffect } from "react";
import IdeasCardList from "../components/IdeasCardList";
import Search from "../components/Search";
import Sidebar from "../components/SideBar";
import axios from "axios";
import Challenge from "../components/Challenge";

const IdeasPage = ({username, userId, sessionId}) => {

  console.log(sessionId)

  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIdeas, setFilteredIdeas] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    axios.get('https://api-article254.onrender.com/articles', {
      headers: {
        'Authorization': `Session ${sessionId}`
      }
    })
    .then(response => {
      const data = response.data;
      const filtered = data.filter(idea => idea.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredIdeas(filtered);
    })
    .catch(error => console.log(error));
  }, [searchQuery, sessionId]);


  return (
    <div className="flex p-5 ">
      <div className=" ">
        <Sidebar setCategory={setCategory} />
      </div>
      <div className="flex-grow ">
        <div className="flex justify-around">
          <div className="py-4">
            <Search onSearch={handleSearch} />
          </div>
          <Challenge/>
        </div>
        <div className=" overflow-y-auto">
          <IdeasCardList
            category={category}
            articles={filteredIdeas}
            setArticles={setFilteredIdeas}
            userId={userId}
          />
        </div>
      </div>
    </div>
  );
};

export default IdeasPage;