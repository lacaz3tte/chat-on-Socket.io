export const compareDates = (date1:number,date2:number):boolean => {
  
    if(new Date(date1).getMonth() === new Date(date2).getMonth() && new Date(date1).getDate() === new Date(date2).getDate() && new Date(date1).getFullYear() === new Date(date2).getFullYear()){
      return true
    }
    return false
  
}