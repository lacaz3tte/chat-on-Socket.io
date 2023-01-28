import React, { useEffect } from 'react'
import { IMassage } from '../pages/interfaces'
import { getTime } from './getTime'


const Message = ({name,msg,date,foreign}:IMassage) => {

  return (
    <div className={'flex' + (foreign ? ' justify-end' : '')}>
        <div className={'p-3 m-2 max-w-[60%] overflow-auto  text-hLight border border-hLight' }>
            {name!=='' &&
                <p className='font-bold underline'>{name}</p>
            }
            <p className='inline' >{msg} </p> 
            <p className='inline text-xs text-gray-500'>{date && getTime(date)}</p>
        </div>
    </div>
  )
}

export default Message