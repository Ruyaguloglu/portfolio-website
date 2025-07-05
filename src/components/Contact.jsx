import React from 'react'

const Contact = () => {
  return (
    <section
            id="contact"
            className="w-full min-h-screen px-6 py-20 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm rounded-xl shadow-md"
        >
        <h2 className='text-4xl font-bold text-[#1a3fa3] mb-8'>Get in Touch</h2>
        <p className='text-lg text-[#1d3a78] mb-4'>
            You can reach me via:
        </p>

        <ul className='text-md text-[#001c55] space-y-2'>
            <li>Email: <a href="mailto:gulogluruya2@gmail.com" className='underline hover:text-blue-500'>gulogluruya2@gmail.com</a></li>
            <li> LinkedIn: <a href="https://linkedin.com/in/rüya-güloğlu-950b3b234" target="_blank" rel="noreferrer" className="underline hover:text-blue-500">rüya-güloğlu</a></li>
        </ul>
    </section>
)
}

export default Contact