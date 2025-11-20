import React from 'react';

const ContactForm = () => {
    return (
        <div className="p-4 mx-auto max-w-xl bg-white">
            <h2 className="text-3xl text-slate-900 font-bold">Contact us</h2>
            <form className="mt-8 space-y-5">
                <div>
                    <label className="text-sm text-slate-900 font-medium mb-2 block">Name</label>
                    <input type="text" placeholder="Enter Name" className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
                </div>
                <div>
                    <label className="text-sm text-slate-900 font-medium mb-2 block">Email</label>
                    <input type="email" placeholder="Enter Email" className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
                </div>
                <div>
                    <label className="text-sm text-slate-900 font-medium mb-2 block">Subject</label>
                    <input type="text" placeholder="Enter Subject" className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
                </div>
                <div>
                    <label className="text-sm text-slate-900 font-medium mb-2 block">Message</label>
                    <textarea placeholder="Enter Message" rows={6} className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all" defaultValue={""} />
                </div>
                <button type="button" className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer">Send message</button>
            </form>
        </div>
    );
};

export default ContactForm;