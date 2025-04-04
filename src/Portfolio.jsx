
import  {useState} from "react";
import emailjs from "emailjs-com";
import {Link} from "react-router";

function Portfolio() {
    return (
        <>
            <div className="min-h-screen mt-10 px-6 md:px-8 py-12 text-white max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#FFA052] mb-10 text-center">
                    Mijn Portfolio
                </h1>

                {/* Creative Media & Game Technologies */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FFA052]">
                        Creative Media & Game Technologies
                    </h2>
                    <hr className="w-full border-t-2 border-white mt-4 mb-4"/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        {/* Items */}
                        {[
                            {to: "/openhiring", src: "./showcase_images/OpenHiring/logo-oh.png", title: "Open Hiring"},
                            {to: "/sotd", src: "./showcase_images/SOTD/sotd4.webp", title: "Station Of The Dead"},
                            {to: "/gaiapark", src: "./showcase_images/GaiaPark/GaiaPark1.webp", title: "GaiaPark"},
                            {
                                to: "/speaksilent",
                                src: "./showcase_images/SpeakSilent/SpeakSilent%20logo.png",
                                title: "SpeakSilent"
                            },
                            {to: "/excalibur", src: "./showcase_images/Excalibur/Excalibur1.webp", title: "Excalibur"},
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                className="bg-white/5 p-3 rounded-2xl hover:scale-105 transition-all duration-300"
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full aspect-square object-cover rounded-tl-[60px] rounded-br-[60px] border-2"
                                />
                                <h3 className="text-[#FFA052] mt-3 text-lg font-semibold text-center">{item.title}</h3>
                            </Link>
                        ))}
                    </div>
                </section>

                {/*/!* MediaDesign *!/*/}
                {/*<section>*/}
                {/*    <h2 className="text-2xl md:text-3xl font-bold text-[#FFA052] mb-4">*/}
                {/*        Mediavormgeving*/}
                {/*    </h2>*/}
                {/*    <hr className="w-full border-t-2 border-white mt-4 mb-4"/>*/}
                {/*    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">*/}
                {/*        {[1, 2, 3].map((_, index) => (*/}
                {/*            <div key={index} className="bg-white/5 p-3 rounded-2xl">*/}
                {/*                <img*/}
                {/*                    src="https://via.placeholder.com/200"*/}
                {/*                    alt={`Placeholder ${index + 1}`}*/}
                {/*                    className="w-full aspect-square object-cover rounded-tr-[60px] rounded-bl-[60px] border-2"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</section>*/}
            </div>
        </>
    );
}


export default Portfolio;