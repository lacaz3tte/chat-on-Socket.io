export const getTime = (date: number) => {

  const additionalZero = (num:number) => {
    if(num > 9){
      return num.toString()
    }
    return "0" + num
  }
  
  return (
    additionalZero(new Date(date).getHours()) +
    ":" +
    additionalZero(new Date(date).getMinutes())
  );
};
