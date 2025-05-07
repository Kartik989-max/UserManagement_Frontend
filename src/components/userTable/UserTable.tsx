import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import type User from "../../types/User";

const UserTable: React.FC = () => {
  const [user, setUser] = useState<User[]>([]);
  const [filteredUser, setFilteredUser] = useState<User[]>([]);
  const [searchEmail, setSearchEmail] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get<User[]>( `${process.env.REACT_APP_API_BASE_URL}/user`);
        setUser(res.data);
        setFilteredUser(res.data);
      } catch (error) {
        console.log("Error in fetching User data" + error);
      }
    };
    fetchUser();
  }, []);

  // useEffect(()=>{
  //   handleSearchChanges();

  // },[searchEmail])

  const handleSearchChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchEmail(value);

    if (value === "") {
      setSearchEmail("");
      setFilteredUser(user);
      console.log(filteredUser.length);
      setSuggestions([]);
      return;
    }

    const matchedSuggestoins = filteredUser
      .filter((user) => user.email.toLowerCase().includes(value.toLowerCase()))
      .map((user) => user.email);

    //  console.log(user);

    const matchedUsers = filteredUser.filter((user) =>
      user.email.toLowerCase().includes(value.toLowerCase())
    );
    console.log(matchedUsers);

    setSuggestions(matchedSuggestoins);
    setFilteredUser(matchedUsers);
  };

  const handleSuggestionClick = (email: string) => {
    const matchedUsers = user.filter((user) =>
      user.email.toLowerCase().includes(email.toLowerCase())
    );
    setFilteredUser(matchedUsers);
    setSearchEmail(email);
    setSuggestions([]);
  };

  return (
    <>
    <div className="mx-6">

      <input
        type="text"
        placeholder="Search by email"
        value={searchEmail}
        onChange={handleSearchChanges}
        className="w-full mt-3 overflow-hidden py-2 px-4 border-2 rounded-xl border-gray-700"
        />
      {suggestions.length > 0 && (
        <ul
        className=" rounded-sm mt-2 border-gray-800 "
        >
          {suggestions.map((email, key) => (
            <li
            key={key}
            onClick={() => handleSuggestionClick(email)}
            className="border-b-2 border-gray-100 p-2 cursor-pointer hover:bg-gray-100 bg-gray-300"
            >
              {email}
            </li>
          ))}
        </ul>
      )}

      <table className="w-full border-2 border-gray-200 border-collapse mt-4 text-left">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Phone No.</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Location</th>
            <th className="px-4 py-2 border">Function</th>
            <th className="px-4 py-2 border">Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredUser.map((users, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 font-semibold">
                {users.firstName + " " + users.lastName}
              </td>
              <td className="px-4 py-2">{users.phone}</td>
              <td className="px-4 py-2">{users.email}</td>
              <td className="px-4 py-2 font-bold">{users.role}</td>
              <td className="px-4 py-2">{users.location}</td>
              <td className="px-4 py-2">{users.department}</td>
              <td className="px-4 py-2">
                {" "}
                <Link to={`/edit-user/${users._id}`}>
                  <button className="bg-gray-300 cursor-pointer px-2 py-1 rounded-sm">✎ Edit</button>
                </Link>
              </td>
            </tr>
          ))}
          {filteredUser.length === 0 && (
            <tr>
              <td colSpan={7}>No user found</td>
            </tr>
          )}
        </tbody>
      </table>
          </div>
    </>
  );
};

export default UserTable;
