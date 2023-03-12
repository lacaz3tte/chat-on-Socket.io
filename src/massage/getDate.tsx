
interface IData {
  date:number
  prevDate?:number
}



const GetDate = ({date, prevDate = 0}:IData) => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const getFullDate = ():string|null => {
    if (!prevDate) {
      if(new Date().getFullYear() !== new Date(date).getFullYear()){
        return new Date(date).getDate() + ' ' + monthNames[new Date(date).getMonth()]  + ' ' + new Date(date).getFullYear()
      } else {
        return new Date(date).getDate() + ' ' +  monthNames[new Date(date).getMonth()] 
      }
    } else {
      if(new Date(date).getFullYear() !== new Date(prevDate).getFullYear()){
        return new Date(date).getDate() + ' ' + monthNames[new Date(date).getMonth()]  + ' ' + new Date(date).getFullYear()
      } else {
        if(new Date(date).getMonth() !== new Date(prevDate).getMonth() || new Date(date).getDate() !== new Date(prevDate).getDate()){
          return new Date(date).getDate() + ' ' +  monthNames[new Date(date).getMonth()] 
        }
      } 
      return null
    }

    
  }

  if(getFullDate()){
    return (
      <div className="text-center">
        <div className="inline-block px-5 py-2 bg-h4 dark:bg-hd4 rounded-full text-h1 dark:text-hd1">
          {getFullDate()}
        </div>
      </div>
    )
  } else {
    return (null)
  }
}

export default GetDate