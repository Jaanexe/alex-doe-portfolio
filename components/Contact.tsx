import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 border-t-2 border-cyan-500/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                 <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Connect</h2>
                 <p className="text-lg text-slate-400 mt-4 max-w-md">
                    Have a project in mind, or just want to say hi? Feel free to reach out. I'm always open to discussing new creative ideas or opportunities to be part of an amazing team.
                 </p>
                 <div className="flex space-x-6 mt-8">
                    {SOCIAL_LINKS.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="text-slate-400 hover:text-cyan-400 transition-transform duration-300 transform hover:scale-110"
                    >
                        <social.icon className="h-7 w-7" />
                    </a>
                    ))}
                 </div>
            </div>
            <div className="w-full bg-[#161b22] p-8 rounded-lg shadow-xl">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea id="message" name="message" rows={4} placeholder="Your Message" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-md hover:bg-cyan-400 transition-colors duration-300 shadow-lg shadow-cyan-500/20">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Contact;