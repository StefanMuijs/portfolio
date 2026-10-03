import {Link} from "react-router";
import {useEffect, useState} from "react";

function Home() {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "auto"});
    }, []);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((currentData) => ({...currentData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const {name, email, message, phone} = formData;
        const mailtoLink = `mailto:smmuijs2002@gmail.com?subject=Contact via portfolio - ${name}&body=Naam: ${name}%0D%0AEmail: ${email}%0D%0ATelefoon: ${phone}%0D%0ABericht: ${message}`;
        window.location.href = mailtoLink;
    };

    const projects = [
        {
            to: "/openhiring",
            image: "showcase_images/OpenHiring/logo-oh.png",
            title: "Open Hiring",
            description: "Een webapplicatie die werkzoekenden en werkgevers op een laagdrempelige manier samenbrengt.",
        },
        {
            to: "/sotd",
            image: "showcase_images/SOTD/sotd4.webp",
            title: "Station Of The Dead",
            description: "Een zombie-shooter die zich afspeelt op Rotterdam Centraal, gemaakt met Unreal Engine.",
        },
        {
            to: "/gaiapark",
            image: "showcase_images/GaiaPark/GaiaPark1.webp",
            title: "GaiaPark",
            description: "Een futuristisch parkconcept waar technologie, natuurbehoud en entertainment samenkomen.",
        },
        {
            to: "/speaksilent",
            image: "showcase_images/SpeakSilent/SpeakSilent%20logo.png",
            title: "SpeakSilent",
            description: "Een communicatieconcept dat gesproken commando’s omzet naar trillingen voor teamsporters.",
        },
        {
            to: "/excalibur",
            image: "showcase_images/Excalibur/Excalibur1.webp",
            title: "Excalibur",
            description: "Een browsergame waarin je munten verzamelt en op tijd de trein probeert te halen.",
        },
    ];

    return (
        <>
            <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-6">
                <div
                    id='/'
                    className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px]"
                    style={{backgroundImage: `url(${import.meta.env.BASE_URL}Header_Bg.png)`}}
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 py-24 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="order-2 text-center md:order-1 md:text-left">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#ff6b2c]">-Projecten</p>
                        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
                            Stefan <span className="text-[#ff6b2c]">Muijs</span>
                        </h1>
                        <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Creative Fullstack Webdeveloper</h2>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:pr-12">
                            Ik ben een gedreven creatieve fullstack webdeveloper in opleiding bij Hogeschool Rotterdam,
                            met een sterke voorkeur voor front-end development. Mijn passie ligt bij het bouwen van
                            visueel aantrekkelijke interfaces.
                            <br/><br/>
                            Naast webontwikkeling heb ik ook een grote interesse in game development en wil ik mij hier
                            verder in verdiepen. Dankzij mijn achtergrond in mediavormgeving heb ik een goed oog voor
                            design en usability.
                        </p>
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                            <Link to="/projecten" className="rounded-lg bg-[#ff6b2c] px-7 py-3 text-center font-semibold text-white transition-colors hover:bg-[#e85c22]">
                                Mijn projecten
                            </Link>
                            <Link to="/about" className="rounded-lg border border-white/70 px-7 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10">
                                Meer over mij
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-md">
                        <img
                            src={`${import.meta.env.BASE_URL}Myself2.jpg`}
                            alt="Stefan Muijs"
                            className="aspect-[4/5] w-full rounded-2xl border p-6 border-white/20 object-cover shadow-2xl shadow-black/40"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50">
                <div className="mx-auto w-full max-w-6xl py-16">
                <header className="mb-10 border-l-4 border-[#ff6b2c] pl-5">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b2c]">-Projecten</p>
                    <h2 className="text-2xl font-bold text-[#0c0b0e] md:text-3xl">Creative Media &amp; Game Technologies</h2>
                </header>
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project) => (
                        <Link
                            key={project.to}
                            to={project.to}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b2c]"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}${project.image}`}
                                    alt={project.title}
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-lg font-semibold text-[#0c0b0e]">{project.title}</h3>
                                    <span aria-hidden="true" className="text-xl text-[#ff6b2c]">↗</span>
                                </div>
                                <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-gray-600">{project.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link
                        to="/projecten"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#ff6b2c] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#e85c22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b2c] focus-visible:ring-offset-2"
                    >
                        Meer projecten bekijken
                    </Link>
                </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 text-[#0c0b0e] md:grid-cols-[0.75fr_1.25fr]">
                <header>
                    <p className="mb-4 border-l-4 border-[#ff6b2c] pl-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b2c]">-Contact</p>
                    <h2 className="text-3xl font-bold md:text-4xl">Contactformulier</h2>
                    <p className="mt-5 max-w-md leading-7 text-gray-600">Heb je een vraag of wil je samenwerken? Stuur me gerust een bericht.</p>
                </header>
                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
                    <label className="text-sm font-medium">
                        Naam
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Je naam" className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[#0c0b0e] outline-none transition focus:border-[#ff6b2c] focus:ring-2 focus:ring-[#ff6b2c]/20" required />
                    </label>
                    <label className="text-sm font-medium">
                        E-mailadres
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="naam@voorbeeld.nl" className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[#0c0b0e] outline-none transition focus:border-[#ff6b2c] focus:ring-2 focus:ring-[#ff6b2c]/20" required />
                    </label>
                    <label className="text-sm font-medium">
                        Telefoonnummer <span className="font-normal text-gray-600">(optioneel)</span>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Je telefoonnummer" className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[#0c0b0e] outline-none transition focus:border-[#ff6b2c] focus:ring-2 focus:ring-[#ff6b2c]/20" />
                    </label>
                    <label className="text-sm font-medium">
                        Bericht
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Waar kan ik je mee helpen?" className="mt-2 w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-[#0c0b0e] outline-none transition focus:border-[#ff6b2c] focus:ring-2 focus:ring-[#ff6b2c]/20" rows="5" required />
                    </label>
                    <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b2c] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#e85c22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b2c] focus-visible:ring-offset-2">
                        Verstuur bericht
                    </button>
                </form>
                </div>
            </section>
        </>
    );
}

export default Home;
