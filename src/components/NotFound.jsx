import React from 'react'

export default function NotFound() {
    return (
        <div className='bg-dark-green h-screen flex flex-col items-center justify-center text-light-green'>
            <h2 className='text-8xl text-bright-green drop-shadow-bright mb-8'>Oops!</h2>
            <p className='text-2xl w-2/5 text-center'>I don't know how you got here, but you should go back to the <a className='underline hover:text-bright-green hover:drop-shadow-bright duration-300' href="/">main page</a></p>
        </div>
    )
}
