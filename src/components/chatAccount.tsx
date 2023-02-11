import React from 'react'

interface IDataTransfer {
  login:string
}

const ChatAccount = ({login}:IDataTransfer) => {
  return (
    <div className='m-2 p-2 border border-hLight text-hLight hover:m-1 transition-all hover:cursor-pointer'>
      <p className='underline font-bold'>{login}</p>
      <p className='overflow-hidden text-ellipsis'>MessageMessageMessageMessageMessageMessage</p>
    </div>
  )
}

export default ChatAccount