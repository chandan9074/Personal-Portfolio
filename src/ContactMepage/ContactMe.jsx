import React from 'react';
import emailjs from 'emailjs-com';
import NavigationBar from '../Shared/NavigationBar';

import './contactme.css';

const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1v4auxn', 'portfolioEmail', e.target, 'user_vEO6N6qXqn0OhqiRlRvTH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return ( 
        <div>
            <NavigationBar />
            <form onSubmit={sendEmail} className="flex flex-col items-center justify-center">
                
                <input type="text" name="name" className="shadow-md border-2 border-gray-200 w-1/2 py-2 px-2 mb-3 rounded-md mt-20" placeholder="Your Name"/>
                <input type="email" name="email" className="shadow-md border-2 border-gray-200 w-1/2 py-2 px-2 mb-3 rounded-md " placeholder="Your Email" />
                <input type="text" name="subject" className="shadow-md border-2 border-gray-200 w-1/2 py-2 px-2 mb-3 rounded-md " placeholder="Subject" />
                <textarea name="message" className="shadow-md rounded-md border-2 border-gray-200 w-1/2 h-40 py-2 px-2 resize-none" placeholder="Message" />
                <button className="send-btn mt-4" type="submit">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>                                                                   
            </form>
        </div>
     );
}
 
export default ContactMe;