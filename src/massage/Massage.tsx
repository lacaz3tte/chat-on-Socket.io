import React, { useEffect } from 'react'
import { IMassage } from '../pages/interfaces'
import { getTime } from './getTime'


const Massage = ({name,msg,date,foreign}:IMassage) => {
    
    const bg = foreign ? 'bg-sky-100' : 'bg-slate-100'
    const position = foreign ? 'justify-end' : ''

  return (
    <div className={' flex ' + position}>
        <div className={'border table p-3 rounded-3xl shadow-lg my-3 ' + bg}>
            {name!=='' &&
                <p className='font-bold'>{name}</p>
            }
            <p className='inline' >{msg} </p> 
            <p className='inline text-xs text-gray-500'>{date && getTime(date)}</p>
        </div>
    </div>
  )
}

export default Massage