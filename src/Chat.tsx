import { PropsWithChildren } from 'react'
import type { ChatMessageType } from './Main'
import { ChatMessageNode } from './ChatMessageNode'


type ChatType=PropsWithChildren<{
  chats:ChatMessageType[],
  responseLoad:boolean
}>

export const  Chat=({chats,responseLoad}:ChatType)=>{

  const nodes=chats.map(({text,type},key)=>{
      return <ChatMessageNode text={text} type={type} key={key} />
  })

  return (
    <div className="space-y-8 mt-4 p-2 max-h-[90vh] overflow-x-hidden overflow-y-auto" >

        {nodes}
        {responseLoad?<ChatMessageNode text={'LOADING'} responseLoad={responseLoad} type={'ai'} />:''}
    </div>
  )
}
