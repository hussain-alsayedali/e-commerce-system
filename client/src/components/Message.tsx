import React from 'react'

export default function Message({text, agent}: {text: string, agent: number}) {
  const commonClasses = "text-semiwhite mx-w-[600px] w-9/12 break-words p-3 rounded-bl-lg rounded-br-lg"
  if(agent ===0)
    return (
      <div className={`bg-gray-400 ${commonClasses} rounded-tr-lg`}>
        <p>{text}</p>
      </div>
    )
  else if(agent === 1){
    return (
      <div className={`bg-lightpurple ${commonClasses} justify-end rounded-tl-lg`}>
        <p>{text}</p>
      </div>
    )
  }
}
