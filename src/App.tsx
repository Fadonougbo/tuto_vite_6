import { createRoot } from "react-dom/client"
import { Main } from "./Main"


const App=()=> {

    return <Main />
}   

const root=document.querySelector('#root')

if(root){
    createRoot( root).render(<App />)
}