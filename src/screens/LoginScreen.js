import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL, AUTHENTICATION_URL } from "../constants/constants";

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/${AUTHENTICATION_URL}`, {username, password});
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard')
    } catch (error) {
      console.error('Error:', error);
    }
}


  return (
    <>
      <section className="w-[80%] md:w-[40%] m-auto mt-48">
        <div className="text-center mb-12">
          <svg className="w-1/6 h-2/6 text-center m-auto text-[#5d3df1]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z" />
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
            type="password"
            id="success"
            className="border border-[#5d3df1] block w-full p-2.5 rounded-lg"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mt-4 bg-[#5d3df1] p-3 w-full rounded-lg text-white uppercase" onClick={submitHandler}>Login </button>
        </form>
        <small className="float-right mt-1">Do not have an account? <Link to={'/register'} className="text-[#733df1] font-extrabold">Sign up</Link></small>
      </section>
    </>
  );
};

export default LoginScreen;
