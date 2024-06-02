import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL, USERS_URL } from "../constants/constants";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/${USERS_URL}/register`, {username, email, password, gender});
      console.log(response.data);
      setEmail("")
      setPassword("")
    } catch (error) {
      console.error('Error:', error.response.data.reason);
    }
};
  return (
    <>
      <section className="w-[80%] md:w-[40%] m-auto mt-32">
        <div className="text-center mb-12">
          <svg
            className="w-1/6 h-2/6 text-center m-auto text-[#5d3df1]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"
            />
          </svg>
          <p className="font-extrabold">TaskMaster</p>
        </div>
        <form className="mt-2">
          <input
            type="text"
            id="success"
            className=" border border-[#5d3df1] block w-full p-2.5 rounded-lg mb-3 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            id="success"
            className="border border-[#5d3df1] block w-full p-2.5 rounded-lg mb-3"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="success"
            className="border border-[#5d3df1] block w-full p-2.5 rounded-lg mb-3"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            id="countries"
            class="border border-[#5d3df1] block w-full p-3 rounded-lg mb-3"
            value={gender}
            onChange={e=> setGender(e.target.value)}
          >
            <option selected>Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          <button
            className="mt-8 bg-[#5d3df1] p-3 w-full rounded-lg text-white uppercase"
            onClick={submitHandler}
          >
            Sign up
          </button>
        </form>
        <small className="float-right mt-1">
          Have an account?
          <Link to={"/"} className="text-[#733df1] font-extrabold pl-1">
            Login
          </Link>
        </small>
      </section>
    </>
  );
};

export default RegisterScreen;
