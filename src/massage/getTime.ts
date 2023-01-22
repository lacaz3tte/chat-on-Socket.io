
export const getTime = (date:number) => {
    const additionalZero = new Date(date).getMinutes()>10?'':'0'
    return( new Date(date).getHours() + ':' + additionalZero + new Date(date).getMinutes() )
}