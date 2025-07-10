import type { PropsWithChildren } from "react"

export type MessagesType={
    type:"user"|'ai',
    message:string
}

export type AppStateType={
    messages:MessagesType[],
    responseLoad:boolean,
    chatStatus:"start"|"end"
}

export type ChatType={
  messages:MessagesType[],
  responseLoad:boolean
}

export type ChatMessageNodeType=MessagesType&{responseLoad?:boolean}

export type PromptType=PropsWithChildren<{
    setAppState:React.Dispatch<React.SetStateAction<AppStateType>>,
    responseLoad:boolean
}>

