
const Footer = () => {
    return (
        <footer className="bg-[#111] py-12 px-8 tracking-wide">
            <div className="max-w-7xl mx-auto">
                <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8">
                    <h4 className="lg:col-span-2 text-lg font-medium text-white leading-relaxed">Join our newsletter to keep up to date with us!<br /> Enter your email Subscribe</h4>
                    <div className="bg-transparent border border-gray-600 flex px-1 py-1 rounded-full max-lg:max-w-md">
                        <input type="email" placeholder="Enter your email" className="w-full outline-none bg-transparent pl-4 text-sm text-slate-400" />
                        <button type="button" className="bg-blue-700 hover:bg-blue-800 transition-all text-white text-sm rounded-full px-4 py-2 cursor-pointer">Subscribe</button>
                    </div>
                </div>
                <hr className="my-12 border-gray-600" />
                <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8">
                    <div className="lg:col-span-3 max-lg:col-span-full">
                        <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-white.svg" alt="logo" className="w-36" /></a>
                        <p className="text-slate-400 leading-relaxed text-sm lg:max-w-sm mt-6">ReadymadeUI is your go-to platform for high-quality, pre-built UI components and website templates.</p>
                    </div>
                    <div>
                        <h4 className="text-base font-medium mb-6 text-white">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="javascript:void(0)" className="text-slate-400 hover:text-white text-sm">Web
                                Development</a></li>
                            <li><a href="javascript:void(0)" className="text-slate-400 hover:text-white text-sm">Mobile App
                                Development</a></li>
                            <li><a href="javascript:void(0)" className="text-slate-400 hover:text-white text-sm">UI/UX
                                Design</a></li>
                            <li><a href="javascript:void(0)" className="text-slate-400 hover:text-white text-sm">Digital Marketing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-medium mb-6 text-white">About Us</h4>
                        <ul className="space-y-4">
                            <li><a href="javascript:void(0)" className="text-slate-400 hover:text-white text-sm">Our Story</a>
                            </li>
                            <li><a href="javascript:void(0)" className="text-slate-400 hover:text-white text-sm">Mission and
                                Values</a></li>
                            <li><a href="javascript:void(0)" className="text-slate-400 hover:text-white text-sm">Team</a></li>
                            <li><a href="javascript:void(0)" className="text-slate-400 hover:text-white text-sm">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
                <p className="text-sm text-slate-400 mt-8">© ReadymadeUI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;