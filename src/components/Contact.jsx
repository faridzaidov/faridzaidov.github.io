import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function Contact() {

    const notify = () => toast("Your message was sent!",
        {
            className: 'toast-message'
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_59skop7', 'template_0m5w6tm', form.current, 'p_CGBzh65lMrDkz5n')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
                notify()
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    console.log(form.value)

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div id='contact' className='bg-dark-green relative'>
            <div className="relative text-stone-100 grid md:grid-cols-2 justify-center items-center py-20 h-full w-full px-6 md:px-32">
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="mb-8 md:mb-0 text-center">
                    <h2 className='group font-bold mb-8 text-4xl md:w-4/5'>Contact <span className='text-light-green drop-shadow-light group-hover:text-bright-greeen group-hover:drop-shadow-bright duration-300'>Me!</span></h2>
                    <p data-aos="fade-right"
                        data-aos-duration="1100" className='md:w-4/5'>Let's connect! Have a project idea or want to say hello? Reach out using the contact form or connect on social media. Let's bring your ideas to life!</p>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-full">
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='flex flex-col drop-shadow-light'
                    >
                        <label>Name</label>
                        <input
                            type="text"
                            name="user_name"
                            className='border-2 mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                            placeholder='Your Name'
                            required
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="user_email"
                            className='border-2 mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                            placeholder='Your Email'
                            required
                        />
                        <label>Message</label>
                        <textarea
                            name="message"
                            className='border-2 h-[16vh] mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                            placeholder='Your Message'
                            required
                        ></textarea>
                        <input
                            type="submit"
                            value="Send"
                            className='border-2 mb-6 rounded text-dark-green font-bold p-3 border-light-green bg-light-green hover:bg-bright-green hover:drop-shadow-bright duration-300 cursor-pointer'
                        />
                    </form>
                </div>
            </div>
            <div className="text-center text-stone-400 pb-4">©Zaidov Farid. All rights reserved.</div>
            <div className="flex w-full justify-center">
                <div className="absolute -top-8 bg-dark-green p-4 rounded-full text-light-green text-4xl hover:drop-shadow-bright duration-300 border-2 border-dark-green hover:border-bright-green group cursor-pointer" onClick={topFunction}><AiOutlineArrowUp className='group-hover:drop-shadow-bright group-hover:text-bright-green duration-300' /></div>
            </div>
        </div>
    )
}


