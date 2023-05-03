import { useContext } from "react"
import { DeleteChatContext } from "./deleteChatsContext"


const DeleteChatsBanner = () => {

  const deleteChatContext = useContext(DeleteChatContext)

  return (
    <div className={'absolute right-0 left-0 bottom-0 top-0 z-50 rounded-2xl flex flex-col justify-center items-center bg-h1 bg-opacity-70 ' + (!deleteChatContext.bannerVisiable && ' hidden')}>
      <div className='bg-h5 rounded-2xl'>
      <p className="text-3xl text-h2 font-rubic_light text-center m-10 mb-0">Are you sure</p>
      <div className='w-full flex justify-around'>
        <button
            className='px-10 p-2 rounded-full text-h1 transition-all font-rubic_light relative z-10 overflow-hidden bg-h3 m-10'
          >
            Yes
          </button>
          <button
            className='px-10 p-2 rounded-full text-h1 transition-all font-rubic_light relative z-10 overflow-hidden bg-h3 m-10'
            onClick={()=>{deleteChatContext.setBannerVisiable(false)}}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteChatsBanner