import geminipic from './images/gemini-color.webp'
import { ChatMessageType } from './Main'


export const  ChatMessageNode=({text,type,responseLoad}:ChatMessageType&{responseLoad?:boolean})=>{

  return (

        <>
          {
            type==='ai'?
            <section  className="flex gap-3 max-w-[90%]">                     
              <span className="flex flex-none justify-center items-center bg-blue-100 rounded-full size-10" >
                <img src={geminipic} alt="Gemini logo" className={`size-8 ${responseLoad?'animate-bounce':''}`} />
              </span>
              <p className="text-base whitespace-pre-wrap" >
                  {text.replace(/\*/g,' ')}
              </p>
            </section> :
            <section  className="flex justify-end mr-2 w-full">
            <p className="bg-blue-100 p-3 rounded max-w-[90%] text-base" >{text}</p>
          </section>
          }
        </>

  )
}
