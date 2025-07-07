import { type ReactNode, useState } from "react"
import { Chat } from "./Chat"
import { Header } from "./Header"
import { Prompt } from "./Prompt"

export type ChatMessageType={
    type:"user"|'ai',
    text:string
}

export type GlobaStateType={
    chats:ChatMessageType[],
    responseLoad:boolean,
    chatStart:boolean
}

export const Main=()=> {
    
    const [globalState,setGlobalState]=useState<GlobaStateType>({
        chats:[],
        responseLoad:false,
        chatStart:false
    })

    return <main className="flex flex-col justify-between space-y-6 bg-blue-100/40 p-5 md:px-12 lg:px-15 xl:px-16 h-screen" >

                {globalState.chatStart===false?<Header />:<Chat chats={globalState.chats} responseLoad={globalState.responseLoad} />}                
                <Prompt setGlobalState={setGlobalState}  responseLoad={globalState.responseLoad} />
            </main>  
}   
 