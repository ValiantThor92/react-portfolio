import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen flex justify-center items-center'>
        <form action='https://getform.io/f/4ffa7fec-554e-4a20-bce8-ed9a7cd0969e' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl text-[#c27137] font-bold inline border-b-4 border-dashed border-white'>Contact</p>
                <p className='font-bold text-white py-4'>You can contact me by submitting the form or sending me an email at: <span className='text-[#c27137]'>travislnelson92@gmail.com</span></p>
            </div>
            <input type="text" placeholder='Name...' name='name' className='p-1'></input>
            <input type="text" placeholder='abc@xyz.com' name='email' className='my-4 p-1'></input>
            <textarea name='message' rows="10" placeholder='Enter message here...' className='p-1'></textarea>
            <button className='bg-[#c27137] text-white font-bold my-6 py-2 mx-auto flex items-center px-40 rounded-md hover:bg-[#f47113]'>Send</button>
        </form>

    </div>
  )
}

export default Contact