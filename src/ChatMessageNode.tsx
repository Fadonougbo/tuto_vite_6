import { ChatMessageNodeType } from './app'
import geminipic from './images/gemini-color.webp'


export const  ChatMessageNode=({message,type,responseLoad}:ChatMessageNodeType)=>{
  //console.log(message)
  return (

        <>
          {
            type==='ai'?
            <section  className="flex gap-3 max-w-[90%]">                     
              <span className="flex flex-none justify-center items-center bg-blue-100 rounded-full size-10" >
                <img src={geminipic} alt="Gemini logo" className={`size-8 ${responseLoad?'animate-bounce':''}`} />
              </span>
              <p className="text-base whitespace-pre-wrap" >
                  {message?.replace(/\*/g,' ')}
              </p>
            </section> :
            <section  className="flex justify-end mr-2 w-full">
            <p className="bg-blue-100 p-3 rounded max-w-[90%] text-base" >{message}</p>
          </section>
          }
        </>

  )
}
