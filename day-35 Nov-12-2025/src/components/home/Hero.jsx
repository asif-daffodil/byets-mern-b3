import { Link, useNavigate } from "react-router";

const Hero = () => {
    const navigate = useNavigate();
    const handleTanvir = () => {
        navigate('/contact');
    }
    return (
        <div className="bg-linear-to-tl from-purple-50 via-sky-50 to-purple-200">
            <div className="px-4 sm:px-10 py-14">
                <div className="max-w-screen mx-auto">
                    <div className="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
                        <div>
                            <div className="max-w-3xl max-lg:mx-auto max-lg:text-center">
                                <p className="mb-2 font-medium text-indigo-600  uppercase"><span className="rotate-90 inline-block mr-2">|</span> Built to Grow with You</p>
                                <h1 className="text-slate-900 md:text-5xl text-4xl font-bold leading-tight!">Empower Brand with Human-Centered Solutions</h1>
                                <p className="text-slate-600 text-base leading-relaxed mt-6">Showcase your products and connect with your audience. Our all-in-one platform helps you manage operations and boost visibility — whether you're in fashion, beauty, wellness, or beyond.</p>
                                <div className="mt-8 flex flex-wrap gap-6 max-lg:justify-center">
                                    <Link to="/contact" type="button" className="bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-lg px-5 py-3 cursor-pointer outline-0">Contact Us</Link>
                                    <button type="button" className="bg-transparent hover:border-indigo-700 border border-gray-400 transition-all text-base text-slate-900 font-medium rounded-lg px-5 py-3 cursor-pointer outline-0" onClick={handleTanvir}>Explore Features</button>
                                </div>
                            </div>
                            <div className="mt-12">
                                <div className="grid sm:grid-cols-3 gap-x-4 gap-y-6 max-lg:text-center">
                                    <div className="flex flex-col">
                                        <h5 className="text-indigo-700 font-semibold text-2xl mb-2">10+</h5>
                                        <p className="text-base text-slate-600 font-medium">Years Experience</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="text-indigo-700 font-semibold text-2xl mb-2">890</h5>
                                        <p className="text-base text-slate-600 font-medium">Cases Solved</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="text-indigo-700 font-semibold text-2xl mb-2">250</h5>
                                        <p className="text-base text-slate-600 font-medium">Business Partners</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns-2 space-y-4">
                            <div className="break-inside-avoid">
                                <img src="https://readymadeui.com/images/face-primer-category.webp" alt="img-1" className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                            </div>
                            <div className="break-inside-avoid">
                                <img src="https://readymadeui.com/images/product6.webp" alt="img-2" className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                            </div>
                            <div className="break-inside-avoid">
                                <img src="https://readymadeui.com/images/product2.webp" alt="img-3" className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                            </div>
                            <div className="break-inside-avoid">
                                <img src="https://readymadeui.com/images/skin-glow-category.webp" alt="img-4" className="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;