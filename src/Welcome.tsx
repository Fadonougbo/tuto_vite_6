import {PenSquareIcon,Lightbulb, Compass, Code} from "lucide-react"

export const  Welcome=()=>{

  return (
    <div className="" >

      <section className="space-y-2 mb-4" >
        <h1  className="my-2 font-bold text-blue-500 text-4xl md:text-7xl" >Hello , there</h1>
        <h2 className="my-2 font-bold text-gray-500 text-xl md:text-5xl" >How can i help you today ?</h2>
      </section>
                                                  
      <section className="flex space-x-5 mt-8 overflow-x-auto" >

        <div  className="flex flex-col flex-none justify-between bg-blue-100 p-3 rounded w-56 lg:w-64 h-32 text-base">
          <p>Design a home office setup for remote work under 500$</p>
          <span className="flex justify-end w-full" >
            <span className="flex justify-center items-center bg-gray-50 rounded-full size-9">
              <PenSquareIcon className="stroke-blue-600 size-5"/>
            </span>
          </span>
        </div>

        <div  className="flex flex-col flex-none justify-between bg-blue-100 p-3 rounded w-56 lg:w-64 h-32 text-base">
          <p>How can i level up my web developement expertise in 2025?</p>
          <span className="flex justify-end w-full" >
            <span className="flex justify-center items-center bg-gray-50 rounded-full size-9">
              <Lightbulb className="stroke-green-600 size-5"/>
            </span>
          </span>
        </div>

        <div className="flex flex-col flex-none justify-between bg-blue-100 p-3 rounded w-56 lg:w-64 h-32 text-base" >
          <p>Surgest some useful tool for debugging Javascript code</p>
          <span className="flex justify-end w-full" >
            <span className="flex justify-center items-center bg-gray-50 rounded-full size-9" >
              <Compass className="stroke-yellow-600 size-5"/>
            </span>
          </span>
        </div>

        <div className="flex flex-col flex-none justify-between bg-blue-100 p-3 rounded w-56 lg:w-64 h-32 text-base" >
          <p>Create  React JS component for the simple todo liste app </p>
          <span className="flex justify-end w-full" >
            <span className="flex justify-center items-center bg-gray-50 rounded-full size-9" >
              <Code className="stroke-violet-500 size-5"/>
            </span>
          </span>
        </div>

      </section>
    </div>
  )
}
