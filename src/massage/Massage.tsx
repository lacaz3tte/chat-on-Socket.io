import React, { useEffect } from 'react'
import { IMassage } from '../pages/interfaces'
import { getTime } from './getTime'


const Massage = ({name,msg,date,foreign}:IMassage) => {

  return (
    <div className={'flex' + (foreign ? ' justify-end' : '')}>
        <div className={'border p-3 max-w-[75%] overflow-auto rounded-3xl shadow-lg my-3 ' + (foreign? ' bg-hDarkGreen g-h' : ' bg-hWhite')}>
            {name!=='' &&
                <p className={'font-bold'+ (foreign?' text-hWhite' : '  text-hDarkGreen g-h')}>{name}</p>
            }
            <p className={'inline' + (foreign?' text-hWhite' : '  text-hDarkGreen g-h' )}>{msg} </p> 
            <p className='inline text-xs text-gray-500'>{date && getTime(date)}</p>
        </div>
    </div>
  )
}

export default Massage