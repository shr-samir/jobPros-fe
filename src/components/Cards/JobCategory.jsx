import React from 'react'

const JobCategory = ({name, totalJobs, icon}) => {
  return (
    <div className='w-[308px] h-[84px] bg-white hover:bg-hoverColor shadow-boxShadow rounded-md hover:border border-mainColor flex items-start justify-start gap-5 p-4 cursor-pointer'>
      <div className='w-12 h-12 bg-lightBg rounded flex items-center justify-center'>{icon}</div>
      <div className='text-xs first:flex flex-col gap-3 py-1'>
         <h6 className='text-mainColor'>{name}</h6>
         <p className='text-[11px]'><span>{totalJobs}</span> Jobs</p>
      </div>
    </div>
  )
}

export default JobCategory