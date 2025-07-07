import {Trash2} from "lucide-react"
import { PromptForm } from "./PromptForm"
import { type GlobaStateType } from "./Main"
import { type PropsWithChildren } from "react"



export type PromptFormType=PropsWithChildren<{
    setGlobalState:React.Dispatch<React.SetStateAction<GlobaStateType>>,
    responseLoad:boolean
}>


export const  Prompt=({setGlobalState,responseLoad}:PromptFormType)=>{


  const handleClick=()=>{
    setGlobalState((oldState)=>{

      return {
        ...oldState,
        chatStart:false
      }
    })
  }

  return (
    <div className="mt-5" >

        <section className="flex items-center gap-3 sm:px-2 w-full h-auto" >

          <PromptForm setGlobalState={setGlobalState} responseLoad={responseLoad} />
          
          <span className="flex justify-center items-center bg-blue-100 rounded-full size-10 sm:size-12 cursor-pointer" onClick={handleClick}>
            <Trash2 className="size-5" />
          </span>

        </section>


          <p className="my-3 text-gray-700 text-sm sm:text-base text-center" >Gemini can make mistakes, so double-check it.</p>

    </div>
  )
}
