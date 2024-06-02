import Task from "../components/Task";
import Header from "../components/Header";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, TASKS_URL } from '../constants/constants';
import { headerConfiguration } from "../components/utils/HeaderConfig";

const DashboardScreen = () => {
  
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('')


useEffect( () => {
  const fetchData = async () => {
    try {
      
      const config = headerConfiguration();
      console.log(config)
      const response = await axios.get(`${BASE_URL}/${TASKS_URL}/all`, config);
      setTasks(response.data);
      console.log(tasks);
    } catch (error) {
      setError("Error fetching tasks ")
    }
  };
  fetchData();
}, [])

  return (
    <>

    <Header/>
    <section className=" m-auto mt-12">
    <h1 className="w-[40%] text-left ml-16 font-extrabold text-xl">Tasks</h1>
    <div className="h-32 mt-4 mx-12 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
    {tasks ? <Task tasks={tasks}/>: <div className="bg-red-400 p-2 ">{error}</div> }
     </div>
    </section>
    </>
  );
};

export default DashboardScreen;
