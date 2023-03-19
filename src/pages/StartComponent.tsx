
const StartComponent = ({children}:any) => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-all bg-h5 dark:bg-hd5'>
      {children}
    </div>
  )
}

export default StartComponent