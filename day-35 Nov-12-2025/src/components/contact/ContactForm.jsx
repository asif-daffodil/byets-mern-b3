
const ContactForm = () => {
    return (
        <div>
            <div className="bg-linear-to-r from-blue-700 to-blue-300 w-full h-60">
                <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="w-full h-full object-cover" />
            </div>
            <div className="-mt-28 mb-6 px-4">
                <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-sm">
                    <h2 className="text-xl text-slate-800 font-semibold">Product or Service Inquiry</h2>
                    <form className="mt-8 grid sm:grid-cols-2 gap-6">
                        <div>
                            <label className="text-slate-800 text-sm font-medium block mb-2">Your Name</label>
                            <input type="text" placeholder="Enter Name" className="w-full rounded-sm py-2.5 px-4 border border-slate-300 text-sm focus:border-blue-600 outline-none" />
                        </div>
                        <div>
                            <label className="text-slate-800 text-sm font-medium block mb-2">Your Email</label>
                            <input type="email" placeholder="Enter Email" className="w-full rounded-sm py-2.5 px-4 border border-slate-300 text-sm focus:border-blue-600 outline-none" />
                        </div>
                        <div>
                            <label className="text-slate-800 text-sm font-medium block mb-2">Your Number</label>
                            <input type="number" placeholder="Enter Phone No." className="w-full rounded-sm py-2.5 px-4 border border-slate-300 text-sm focus:border-blue-600 outline-none" />
                        </div>
                        <div>
                            <label className="text-slate-800 text-sm font-medium block mb-2">Website</label>
                            <input type="text" placeholder="Enter Website" className="w-full rounded-sm py-2.5 px-4 border border-slate-300 text-sm focus:border-blue-600 outline-none" />
                        </div>
                        <div>
                            <label className="text-slate-800 text-sm font-medium block mb-2">Company</label>
                            <input type="text" placeholder="Enter Company" className="w-full rounded-sm py-2.5 px-4 border border-slate-300 text-sm focus:border-blue-600 outline-none" />
                        </div>
                        <div>
                            <label className="text-slate-800 text-sm font-medium block mb-2">Subject</label>
                            <input type="text" placeholder="Enter Subject" className="w-full rounded-sm py-2.5 px-4 border border-slate-300 text-sm focus:border-blue-600 outline-none" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-slate-800 text-sm font-medium block mb-2">Message</label>
                            <textarea placeholder="Enter Message" rows={6} className="w-full rounded-sm px-4 border border-slate-300 text-sm pt-3 focus:border-blue-600 outline-none" defaultValue={""} />
                        </div>
                        <div className="flex items-center col-span-full">
                            <input id="checkbox1" type="checkbox" className="w-4 h-4 mr-3 shrink-0" />
                            <label htmlFor="checkbox1" className="text-sm text-slate-500">I agree to the <a href="javascript:void(0);" className="underline">Terms and Conditions</a> and <a href="javascript:void(0);" className="underline">Privacy Policy</a></label>
                        </div>
                        <button type="button" className="text-white w-max bg-blue-600 hover:bg-blue-700 font-medium tracking-wide rounded-sm text-[15px] px-4 py-2.5 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;