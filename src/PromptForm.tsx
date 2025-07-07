import { ArrowUp, Paperclip } from "lucide-react"
import {  useActionState, useState,type ChangeEvent } from "react"
import { type PromptFormType } from "./Prompt"


const getAIResponse=async (text:string|FormDataEntryValue|null,file?:{mine:string,data:string}):Promise<{isOk:boolean,msg:string}>=>{

  if(text===null){
    return {isOk:false,msg:'Une erreur est survenue'}
  }
  console.log(file)
  try{

    const parts:any[]=[
              {
                text:text
              }
            ]

      
       if(file){
          if(file.mine!==''){

             parts.push({
                inline_data: {
                  mime_type: file?.mine,
                  data: file?.data
                }
              })
          }
       }

    const body={
              contents:[
                    {
                      parts
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
      //console.log(data)
    return {isOk:true,msg:data.candidates[0].content.parts[0].text} 

  }catch(error){

    console.log(error)
    return {isOk:false,msg:'Une erreur est survenue'}
  }
    
}

export const PromptForm=({setGlobalState,responseLoad}:PromptFormType)=>{

        const [fileData,setFileData]=useState({
          fileExiste:false,
          src:'',
          mine:'',
          encodedFile:''
        })


        const [state,formAction, isPending]=useActionState(async (initialState,formdata:FormData)=>{
                     


                      const prompt=formdata.get('prompt') as string

                       setGlobalState((oldState)=>{
                         return {
                          chats:[...oldState.chats,{text:prompt,type:'user'}],
                          responseLoad:true,
                          chatStart:true
                          
                         }
                      })

                       getAIResponse(prompt,{data:fileData.encodedFile,mine:fileData.mine}).then(({msg})=>{
                            // console.log(msg.toString())
                            setGlobalState((oldState)=>{
                            return {
                              ...oldState,
                              chats:[...oldState.chats,{text:msg,type:'ai'}],
                              responseLoad:false
                            }
                          })

                       })

                       setFileData((oldState)=>{
                            return {...oldState,fileExiste:false}
                        })

            },null)

            const handleChange=(e:ChangeEvent)=>{

              const fileInput=e.currentTarget as HTMLInputElement

              if(fileInput.files){

                const file=fileInput.files[0]
                
                const reader=new FileReader()

                reader.readAsDataURL(file)
                
                reader.onload=()=>{
                  const src=typeof reader.result === 'string'?reader.result:''
                  
                  const encodedFile=typeof reader.result === 'string'?reader.result.split(",")[1]:fileData.encodedFile
                    setFileData(()=>{
                      return {fileExiste:true,src,mine:file.type,encodedFile}
                  })
                 
                }
                
                

                

              }

              
              
            }

            const handleClick=()=>{

                setFileData((oldState)=>{
                    return {...oldState,fileExiste:false}
                })
            }

            
      return <form action={formAction} className="flex w-[90%]">

            <textarea name="prompt" className="peer content-center bg-blue-100 p-3 rounded-s-4xl outline-none w-[96%] h-10 sm:h-14" placeholder="Ask Gemini" required ></textarea>

            <div  className="flex flex-1 justify-center items-center gap-3 bg-blue-100 pr-2 rounded-e-4xl sm:min-h-14 cursor-pointer" >

             <div>
               
               {
               fileData.fileExiste?
               
               <span className="group block relative bg-blue-600 rounded-full size-9 cursor-pointer" >
                  <img src={fileData.src} alt="user file" className="rounded-full size-full" />
                  <span className="hidden top-0 absolute group-hover:flex justify-center items-center bg-gray-900/55 rounded-full size-full text-red-600" onClick={handleClick}>
                        X
                  </span>
               </span> :
                  <label htmlFor="file" className="relative cursor-pointer" >
                    <Paperclip className="size-5 -rotate-[42deg]" />
                    <input type="file" name="file" id="file" className="top-0 fixed opacity-0 size-0" onChange={handleChange}/>
                  </label>

               }

             </div>
              
              <button className='flex justify-center items-center bg-blue-600 rounded-full size-9 cursor-pointer' disabled={isPending||responseLoad}>
                <ArrowUp className={`stroke-gray-50 ${isPending||responseLoad?'animate-bounce':''}`}/>
              </button>

            </div>

          </form>
}