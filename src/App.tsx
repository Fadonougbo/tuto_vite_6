import { createRoot } from "react-dom/client"
import { Main } from "./Main"


const App=()=> {

    return <Main />
}   
 
createRoot(document.querySelector('#root') as HTMLDivElement).render(<App />)