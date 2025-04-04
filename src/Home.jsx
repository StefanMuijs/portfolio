import {Link} from "react-router";
import {useState} from "react";
import emailjs from "emailjs-com";
import GlitchText from "./Glitchtext.jsx";


function Home() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        const mailtoLink = `mailto:smmuijs2002@gmail.com?subject=Contact via portfolio - ${name}&body=Naam: ${name}%0D%0AEmail: ${email}%0D%0ATelefoon: ${formData.phone}%0D%0ABericht: ${message}`;

        // Verzend de email via mailto
        window.location.href = mailtoLink;
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center px-10 min-h-[100vh]">
                <div
                    className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-x-20 text-center">
                    <div className="mt-10 flex-1">
                        <h1 className="text-[#FFA052] text-3xl md:text-5xl font-bold relative flex">
                            <span className="block transition-all duration-300 ease-in-out hover:translate-y-6">D</span>
                            <span className="block transition-all duration-300 ease-in-out hover:translate-y-6">e</span>
                            <span className="block transition-all duration-300 ease-in-out hover:translate-y-6">s</span>
                            <span className="block transition-all duration-300 ease-in-out hover:translate-y-6">i</span>
                            <span className="block transition-all duration-300 ease-in-out hover:translate-y-6">g</span>
                            <span className="block transition-all duration-300 ease-in-out hover:translate-y-6">n</span>
                            <span className="block transition-all duration-300 ease-in-out hover:translate-y-6">e</span>
                            <span className="block transition-all duration-300 ease-in-out hover:translate-y-6">r</span>
                        </h1>

                    </div>

                    <img src="./Myself.png" alt="Picture of myself"
                         className="transition-all duration-500 hover:scale-105 w-3/4 md:w-1/3 max-w-xl mt-8 md:mt-0"/>

                    <div className="mt-10 flex-1">
                        <GlitchText text={"<Coder>"}/>
                    </div>
                </div>


                <h1 className="text-center text-white mt-2 text-4xl md:text-4xl font-bold hover:text-[#FFA052] transition-all duration-300">Stefan
                    Muijs</h1>
                <hr className="w-1/3 border-t-2 border-[#FFA052] mt-4"/>
                <p className="text-white mt-4 text-center max-w-2xl">Ik ben een gedreven creatieve fullstack
                    webdeveloper in opleiding bij
                    Hogeschool Rotterdam, met een sterke voorkeur voor front-end
                    development. Mijn passie ligt bij het bouwen van visueel aantrekkelijke
                    interfaces. <br></br><br></br>Naast webontwikkeling heb ik ook een grote interesse in game
                    development en wil ik mij hier verder in verdiepen. Dankzij mijn achtergrond
                    in mediavormgeving heb ik een goed oog voor design en usability.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between px-10 mb-20 ">
                {/* Opleidingen Section */}
                <div className="flex-1 mt-10 items hover:transform hover:scale-105 hover:shadow-lg hover:bg-[#27292b] rounded-2xl transition-all duration-500">
                    {/* CMGT Section */}
                    <div className="pt-6 rounded-lg jus items-center justify-center flex flex-col">
                        <h2 className="text-[#FFA052] text-2xl font-bold text-center">Opleidingen</h2>
                        <hr className="w-1/2 border-t-2 border-white mt-4 mb-4"/>
                        <h3 className="text-[#FFA052] text-xl font-semibold text-center"> Creative Media and Game
                            Technologies
                            (CMGT)</h3>
                        <p className="text-sm md:text-base text-white text-center">Hogeschool Rotterdam (2023 -
                            Heden)</p>
                        <p className="text-sm mt-2 text-white text-center">
                            Specialisatie: Fullstack webdevelopment (voorkeur voor front-end)
                        </p>
                        <p className="text-sm mt-2 text-white text-center">
                            Basiskennis game development
                        </p>
                        <p className="text-sm mt-2 text-white text-center">
                            Projectmatig werken in teams
                        </p>
                    </div>

                    {/* Mediavormgeving Section */}
                    <div className="pt-6 rounded-lg">
                        <h3 className="text-[#FFA052] text-xl font-semibold text-center">Mediavormgeving</h3>
                        <p className="text-sm md:text-base text-white text-center">Curio (2018 - 2022)</p>
                        <p className="text-sm mt-2 text-white text-center">
                            Ontwikkelen van visuele content
                        </p>
                        <p className="text-sm mt-2 text-white text-center">
                            Videobewerking, grafisch ontwerpen en animaties
                        </p>
                        <p className="text-sm mt-2 text-white text-center">
                            Adobe programma’s
                        </p>
                    </div>
                </div>

                {/* Werkervaring Section */}
                <div
                    className="flex-1 mt-10 items hover:transform hover:scale-105 hover:shadow-lg hover:bg-[#27292b] rounded-2xl transition-all duration-500">
                    {/* Werkervaring Section */}
                    <div className="pt-6 rounded-lg flex flex-col items-center justify-center">
                        <h2 className="text-[#FFA052] text-2xl font-bold text-center">Werkervaring</h2>
                        <hr className="w-1/2 border-t-2 border-white mt-4 mb-4"/>

                        {/* Teamleider - Jumbo */}
                        <h3 className="text-[#FFA052] text-xl font-semibold text-center">Teamleider</h3>
                        <p className="text-sm mt-2 text-white text-center">Jumbo (2017 - 2023)</p>
                        <p className="text-sm mt-2 text-white text-center">Aansturen van teamleden en verdelen van
                            werkzaamheden</p>
                        <p className="text-sm mt-2 text-white text-center">Klantenservice en probleemoplossing</p>
                    </div>

                    {/* Verkoopmedewerker - Karwei */}
                    <div className="pt-6 rounded-lg flex flex-col items-center justify-center">
                        <h3 className="text-[#FFA052] text-xl font-semibold text-center">Verkoopmedewerker</h3>
                        <p className="text-sm mt-2 text-white text-center">Karwei (2023 - Heden)</p>
                        <p className="text-sm mt-2 text-white text-center">Adviseren van klanten over producten en
                            klussen</p>
                        <p className="text-sm mt-2 text-white text-center">Zorgdragen voor een nette en overzichtelijke
                            winkel</p>
                    </div>

                    {/* Stage - Ivision */}
                    <div className="pt-6 rounded-lg flex flex-col items-center justify-center">
                        <h3 className="text-[#FFA052] text-xl font-semibold text-center">Stage - Ivision</h3>
                        <p className="text-sm mt-2 text-white text-center">Ivision (2020 - 2021)</p>
                        <p className="text-sm mt-2 text-white text-center">Video-opnames en editing</p>
                        <p className="text-sm mt-2 text-white text-center">Maken van animaties en visuele effecten</p>
                    </div>

                    {/* Stage - EyeDetail */}
                    <div className="p-6 rounded-lg flex flex-col items-center justify-center">
                        <h3 className="text-[#FFA052] text-xl font-semibold text-center">Stage - EyeDetail</h3>
                        <p className="text-sm mt-2 text-white text-center">EyeDetail (2022 - 2023)</p>
                        <p className="text-sm mt-2 text-white text-center">Veel geleerd over filmen, video editing,
                            WordPress en fotografie</p>
                        <p className="text-sm mt-2 text-white text-center">Ervaring opgedaan in samenwerking met een
                            internationaal bedrijf</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col px-10">
                <h1 className="text-[#FFA052] text-xl md:text-2xl font-bold">Creative Media & Game Technologies</h1>
                <hr className="w-full border-t-2 border-white mt-4 mb-4"/>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center">
                    {/* First Image */}
                    <Link to="/openhiring" className="flex flex-col items-center p-4 rounded-xl hover:scale-110 transition-all duration-500">
                        <img
                            src="./showcase_images/OpenHiring/logo-oh.png"
                            alt="Open Hiring Logo"
                            className="w-full md:w-48 aspect-square object-cover border-2 rounded-tl-[75px] rounded-br-[75px]"
                        />
                        <h3 className="text-[#FFA052] mt-4 text-lg font-semibold">Open Hiring</h3>
                    </Link>

                    {/* Second Image */}
                    <Link to="/sotd" className="flex flex-col items-center p-4 rounded-xl hover:scale-110 transition-all duration-500">
                        <img
                            src="./showcase_images/SOTD/sotd4.webp"
                            alt="Placeholder 2"
                            className="w-full md:w-48 aspect-square object-cover border-2 rounded-tl-[75px] rounded-br-[75px]"
                        />
                        <h3 className="text-[#FFA052] mt-4 text-lg font-semibold">StationOfTheDead</h3>
                    </Link>

                    {/* Third Image */}
                    <Link to="/gaiapark" className="flex flex-col items-center p-4 rounded-xl hover:scale-110 transition-all duration-500">
                        <img
                            src="./showcase_images/GaiaPark/GaiaPark1.webp"
                            alt="Placeholder 3"
                            className=" object-cover w-full md:w-48 aspect-square border-2 rounded-tl-[75px] rounded-br-[75px]"
                        />
                        <h3 className="text-[#FFA052] mt-4 text-lg font-semibold">GaiaPark</h3>
                    </Link>
                    <Link to="/speaksilent" className="flex flex-col items-center p-4 rounded-xl hover:scale-110 transition-all duration-500">
                        <img
                            src="./showcase_images/SpeakSilent/SpeakSilent%20logo.png"
                            alt="Placeholder 3"
                            className=" object-cover w-full md:w-48 aspect-square border-2 rounded-tl-[75px] rounded-br-[75px]"
                        />
                        <h3 className="text-[#FFA052] mt-4 text-lg font-semibold">SpeakSilent</h3>
                    </Link>
                    <Link to="/excalibur" className="flex flex-col items-center p-4 rounded-xl hover:scale-110 transition-all duration-500">
                        <img
                            src="./showcase_images/Excalibur/Excalibur1.webp"
                            alt="Placeholder 3"
                            className=" object-cover w-full md:w-48 aspect-square border-2 rounded-tl-[75px] rounded-br-[75px]"
                        />
                        <h3 className="text-[#FFA052] mt-4 text-lg font-semibold">Excalibur</h3>
                    </Link>
                </div>


                {/*<div className="flex flex-col text-right">*/}
                {/*    <h1 className="text-[#FFA052] text-xl md:text-2xl font-bold mt-10">Mediavormgeving</h1>*/}
                {/*    <hr className="w-full border-t-2 border-white mt-4 mb-4"/>*/}
                {/*</div>*/}

                {/*<div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 text-center">*/}
                {/*    <img src="https://via.placeholder.com/200" alt="Placeholder 4"*/}
                {/*         className="w-full md:w-48 aspect-square object-cover border-2 rounded-tr-[75px] rounded-bl-[75px]"/>*/}
                {/*    <img src="https://via.placeholder.com/200" alt="Placeholder 5"*/}
                {/*         className="w-full md:w-48 aspect-square object-cover border-2 rounded-tr-[75px] rounded-bl-[75px]"/>*/}
                {/*    <img src="https://via.placeholder.com/200" alt="Placeholder 6"*/}
                {/*         className="w-full md:w-48 aspect-square object-cover border-2 rounded-tr-[75px] rounded-bl-[75px]"/>*/}
                {/*</div>*/}
            </div>

            <div className="flex flex-col justify-center items-center px-10 py-20 min-h-[100vh]">
                <h1 className="text-[#FFA052] text-3xl md:text-5xl font-bold mb-8">Contactformulier</h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col max-w-lg w-full p-8 rounded-xl"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Naam"
                        className="mb-4 p-3 text-black rounded-lg border-2 border-[#FFA052]"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="mb-4 p-3 text-black rounded-lg border-2 border-[#FFA052]"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Telefoonnummer (Optioneel)"
                        className="mb-4 p-3 text-black rounded-lg border-2 border-[#FFA052]"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Bericht"
                        className="mb-4 p-3 text-black rounded-lg border-2 border-[#FFA052]"
                        rows="4"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#FFA052] text-black py-3 px-6 rounded-lg font-semibold hover:bg-[#ff7e2c] transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </>
    );
}

export default Home;