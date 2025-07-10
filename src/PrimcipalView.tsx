import {Trash2} from "lucide-react"
import { Form } from "./Form"
import type { PromptType } from "./app"



export const  PrincipalView=({responseLoad,setAppState}:PromptType)=>{


  return <>
            {appState.chatStatus==='end'?<Welcome />:<Chat messages={appState.messages} responseLoad={appState.responseLoad} />}  
  </>
}
