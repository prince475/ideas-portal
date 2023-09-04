import { useState, useEffect } from "react";
import axios from "axios";

const Challenge = () => {
  const [challenge, setChallenge] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/challenge")
      .then((response) => {
        setChallenge(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" text-gray-900 ">
      <div className="max-w-lg mx-auto px-4 py-8 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Challenge</h2>
        {challenge.length > 0 ? (
          challenge.map((challenge) => (
            <div
              key={challenge.id}
              className="border border-gray-300 rounded-lg p-4 mb-4"
            >
              <h3 className="text-lg font-semibold mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-700 mb-2">{challenge.content}</p>
              <p className="text-gray-700 mb-2">{challenge.genre}</p>
              <img
                src={challenge.image}
                alt={challenge.title}
                className="mb-2"
              />
              <p className="text-gray-700 mb-2">
                Released: {challenge.release_date}
              </p>
              <p className="text-gray-700">
                Created by: {challenge.user.username}
              </p>
            </div>
          ))
        ) : (
          <p>No challenge found.</p>
        )}
      </div>
    </div>
  );
};

export default Challenge;
