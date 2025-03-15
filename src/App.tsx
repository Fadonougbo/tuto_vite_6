import { createRoot } from "react-dom/client"
import { Header } from "./Header"
import { Prompt } from "./Prompt"
import { AArrowDown,createIcons } from "lucide/"

createIcons({
    icons:{
        AArrowDown
    }
})
const App=()=> {

    return <>
        <Header />
        <Prompt />
    </>
}
 
createRoot(document.querySelector('#root') as HTMLDivElement).render(<App />)