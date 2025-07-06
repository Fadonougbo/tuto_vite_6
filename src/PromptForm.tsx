import { ArrowUp, Paperclip } from "lucide-react"
import {  useActionState } from "react"
import { type PromptFormType } from "./Prompt"


const getAIResponse=async (text:string|FormDataEntryValue|null):Promise<{isOk:boolean,msg:string}>=>{

  if(text===null){
    return {isOk:false,msg:'Une erreur est survenue'}
  }

  try{

    const body={
              contents:[
                    {
                      "parts": [
                        {
                          "text":text
                        }
                      ]
                    }
                  ]
            }

      const response= await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "X-goog-api-key":import.meta.env.VITE_GEMINI_KEY
        },
        body:JSON.stringify(body)
      })

      if(!response.ok) {
        return {isOk:false,msg:'Une erreur est survenue'}
      }

      const data=await response.json()
      console.log(data)
    return {isOk:true,msg:data.candidates[0].content.parts[0].text} 

  }catch(error){

    console.log(error)
    return {isOk:false,msg:'Une erreur est survenue'}
  }
    
}

export const PromptForm=({setGlobalState,responseLoad}:PromptFormType)=>{

        const [state,formAction, isPending]=useActionState(async (initialState,formdata:FormData)=>{
                     

                      const prompt=formdata.get('prompt') as string

                       setGlobalState((oldState)=>{
                         return {
                          chats:[...oldState.chats,{text:prompt,type:'user'}],
                          responseLoad:true
                         }
                      })

                       getAIResponse(prompt).then(({msg})=>{
                            // console.log(msg.toString())
                            setGlobalState((oldState)=>{
                            return {
                              chats:[...oldState.chats,{text:msg,type:'ai'}],
                              responseLoad:false
                            }
                          })

                       })

            },null)

    return <form action={formAction} className="flex w-[90%]">

            <textarea name="prompt" className="peer content-center bg-blue-100 p-3 rounded-s-4xl outline-none w-[96%] h-10 sm:h-14" placeholder="Ask Gemini" required ></textarea>

            <span  className="flex flex-1 justify-center items-center gap-3 bg-blue-100 pr-2 rounded-e-4xl sm:min-h-14 cursor-pointer" >

              <Paperclip className="size-5 -rotate-[42deg]" />
              
              <button className='flex justify-center items-center bg-blue-600 rounded-full size-9 cursor-pointer' disabled={isPending||responseLoad}>
                <ArrowUp className={`stroke-gray-50 ${isPending||responseLoad?'animate-bounce':''}`}/>
              </button>

            </span>

          </form>
}