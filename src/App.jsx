import { useState } from 'react'

import './App.css'

function App() {

  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-end' style={{backgroundColor:color}}>
        <div >
        <div className='flex inset-x-0 justify-center bottom-12 px-2 mb-5 text-white'>
          <div className='bg-white flex justify-center gap-1 px-2 py-1 rounded-full'>
            <button className='rounded-full bg-red-900 text-xl px-2 py-1 m-1' onClick={()=> setColor('red')}>Red</button>
            <button className='rounded-full bg-blue-900 text-xl px-2 py-1 m-1' onClick={()=> setColor('blue')}>Blue</button>
            <button className='rounded-full bg-purple-900 text-xl px-2 py-1 m-1' onClick={()=> setColor('Purple')}>Purple</button>
            <button className='rounded-full bg-pink-400 text-xl px-2 py-1 m-1' onClick={()=> setColor('Pink')}>Pink</button>
            <button className='rounded-full bg-black text-xl px-2 py-1 m-1' onClick={()=> setColor('Black')}>Black</button>
            <button className='rounded-full bg-green-700 text-xl px-2 py-1 m-1' onClick={()=> setColor('green')}>green</button>
            <button className='rounded-full bg-violet-800 text-xl px-2 py-1 m-1' onClick={()=> setColor('violet')}>Violet</button>
          
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
