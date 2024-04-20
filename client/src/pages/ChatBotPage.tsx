import React from 'react'
import Message from '../components/Message'

type Props = {
    visible: boolean,
     toggleChatBot: () => void
}

export default function ChatBotPage({visible, toggleChatBot}:Props ) {
  return (
    <div className = {`flex flex-col w-2/3 md:w-1/3 h-80 md:h-96 border-4 bg-semiwhite border-purple-300 rounded-lg absolute inset-y-1/2 inset-x-1/2 translate-x-[-50%] translate-y-[-50%] z-[2] ${visible? "": "hidden"}`}>
        <div className='flex flex-col p-3'>
            <h1 className='font-bold text-xl '>I am here to help you!</h1>
            <p className='text-gray-400'>Ask about our products</p>
        </div>
        <div className='flex flex-col w-full gap-5 p-4'>
          <Message text='Is there a product that has price less than 50 SR?' agent={1} />
          <Message text='Yes' agent={0}/>  
        </div>
        <form action="" className='flex flex-row gap-4 w-full absolute bottom-0 p-3 h-20 bg-darkpurple'>
            <input type="text" name="prompt" id="prompt" className='mt-3 w-[90%] rounded h-10 p-3' placeholder='Ask your question here'/>
            <button type='submit'>
                <img src="./src/assets/send.png" alt="send" className='hover:opacity-50'/>
            </button>    
        </form>
        <img src="./src/assets/x.png" alt="x" className='w-7 h-7 border-4 rounded border-darkpurple  absolute top-2 right-2 hover:opacity-50 hover:cursor-pointer' onClick={toggleChatBot} />
    </div>
  )
}
