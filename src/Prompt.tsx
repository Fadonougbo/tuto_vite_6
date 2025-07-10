import {Trash2} from "lucide-react"
import { Form } from "./Form"
import type { PromptType } from "./app"



export const  Prompt=({responseLoad,setAppState}:PromptType)=>{

  const clearMessage=()=>{

    setAppState((oldState)=>{

      return {
        ...oldState,
        chatStatus:"end"
      }

    })

  }

  return (
    <div className="mt-5" >

        <section className="flex items-center gap-3 sm:px-2 w-full h-auto" >

          <Form setAppState={setAppState} responseLoad={responseLoad} />
          
          <span className="flex justify-center items-center bg-blue-100 rounded-full size-10 sm:size-12 cursor-pointer" onClick={clearMessage}>
            <Trash2 className="size-5" />
          </span>

        </section>


          <p className="my-3 text-gray-700 text-sm sm:text-base text-center" >Gemini can make mistakes, so double-check it.</p>

    </div>
  )
}
