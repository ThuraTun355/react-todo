import React from 'react'

const Status = ({tasks}) => {
  return (
    <div className=' flex justify-between items-center mb-5'>
        <p className=" text-lg font-bold">Your List</p>
        <div className=" bg-zinc-900 py-1.5 px-3 rounded-full text-zinc-50 ">
            <p className=" text-sm">
                Done ( <span>{tasks.filter(task=>task.isDone === true).length}</span> / <span>{tasks.length}</span> )
            </p>
        </div>
    </div>
  )
}

export default Status