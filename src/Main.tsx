import { useState } from "react"
import { Chat } from "./Chat"
import { Welcome } from "./Welcome"
import { Prompt } from "./Prompt"
import { AppStateType } from "./app"



export const Main=()=> {
    
    const [appState,setAppState]=useState<AppStateType>({
        messages:[],
        responseLoad:false,
        chatStatus:'end'
    })
    console.log(appState.messages)
    return <main className="flex flex-col justify-between space-y-6 bg-blue-100/40 p-5 md:px-12 lg:px-15 xl:px-16 h-screen" >

                {appState.chatStatus==='end'?<Welcome />:<Chat messages={appState.messages} responseLoad={appState.responseLoad} />}                
                <Prompt setAppState={setAppState} chatStatus={appState.chatStatus}  responseLoad={appState.responseLoad} />
            </main>  
}   
 