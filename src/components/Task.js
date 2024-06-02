
const Task = ({tasks}) => {

  return (
    <>
   {tasks &&  tasks.map((task) =>  <>
      <div className="mx-2 mt-2  flex justify-between border bg-white p-4 rounded-md shadow-md" key={task.taskId}>
      <div className="h-12 w-12 border-none rounded-3xl bg-[#5D3DF1] mx-4">
          <svg
            className="w-12 h-10 text-center m-auto pt-1 text-white font-extrabold"
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
              d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
            />
          </svg>
        </div>
        <div>
        <h1>{task.title}</h1>
        <span className="text-sm text-gray-500">{task.dueDate}</span>
        <span className="text-red-500 p-1 "> {task.status.substring(0,1)}</span>
        </div>
        <div>
          <button className="border-none rounded-lg p-2 bg-[#5D3DF1] text-white font-extrabold upp">View</button>
        </div>
      </div>
      

    </>)}
    </>
  )
}

export default Task
