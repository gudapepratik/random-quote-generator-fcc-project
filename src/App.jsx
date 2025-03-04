import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quoteDetails, setQuoteDetails] = useState({})

  const fetchQuotes = async () => {
    try {
      const quote = await fetch('https://dummyjson.com/quotes/random/1')
      const data = await quote.json()
      setQuoteDetails(data[0])
      console.log(data)
      console.log("asf")
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchQuotes()
  },[])

  return (
    <div className='w-full h-screen bg-amber-900 flex items-center justify-center'>
      <div id='quote-box' className='w-[50%] p-8 flex flex-col gap-2 bg-zinc-100 min-h-40'>
          <div id='text' className='w-full text-3xl font-bold font-serif'>
            {quoteDetails?.quote || ""}
          </div>

          <div id='author' className='w-full text-right text-lg font-extralight'>
            - {quoteDetails?.author || ""}
          </div>

          <div className='w-full flex justify-between mt-2'>
            <div className='flex gap-4 items-center'>
              <a id='tweet-quote' href={`https://twitter.com/intent/tweet?related=freecodecamp&${quoteDetails?.quote}&hashtags=${"quotes"}`} target='_top' className='bg-zinc-700 text-white p-2'>Tweet</a>
              <a href="https://linkedin.com" target='_blank' className='bg-zinc-700 text-white p-2'>LinkedIn</a>
            </div>
            <button id='new-quote' className='bg-zinc-700 text-white p-2 cursor-pointer' onClick={fetchQuotes}>New quote</button>
          </div>
      </div>
    </div>
  )
}

export default App
