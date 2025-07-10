import type { ChatType } from './app'
import { ChatMessageNode } from './ChatMessageNode'


export const  Chat=({messages,responseLoad}:ChatType)=>{

  const nodes=messages.map(({message,type},key)=>{
      return <ChatMessageNode message={message} type={type} key={key} />
  })

  return (
    <div className="space-y-8 mt-4 p-2 max-h-[90vh] overflow-x-hidden overflow-y-auto" >

        {nodes}
        {responseLoad?<ChatMessageNode message={'LOADING'} responseLoad={responseLoad} type={'ai'} />:''}
    </div>
  )
}
