import {Link} from "react-router";

import {useEnglish} from "./LanguageContext.jsx";

function Projecten() {
    const isEnglish = useEnglish();
    const projects = [
        {
            to: "/openhiring",
            image: "showcase_images/OpenHiring/OpenHiring1.webp",
            title: "Open Hiring",
            description: isEnglish ? "An accessible web application connecting job seekers and employers." : "Een webapplicatie die werkzoekenden en werkgevers op een laagdrempelige manier samenbrengt.",
        },
        {
            to: "/sotd",
            image: "showcase_images/SOTD/sotd4.webp",
            title: "Station Of The Dead",
            description: isEnglish ? "A zombie shooter set at Rotterdam Central Station, made with Unreal Engine." : "Een zombie-shooter die zich afspeelt op Rotterdam Centraal, gemaakt met Unreal Engine.",
        },
        {
            to: "/wayfinding",
            image: "showcase_images/Wayfinding/Wayfinding5.webp",
            title: "Wayfinding",
            description: isEnglish ? "An interactive wayfinding solution for the CMI building at Wijnhaven." : "Interactieve wayfinding-oplossing voor het CMI-gebouw op de locatie Wijnhaven.",
        },
        {
            to: "/gaiapark",
            image: "showcase_images/GaiaPark/GaiaPark1.webp",
            title: "GaiaPark",
            description: isEnglish ? "A futuristic park concept combining technology, nature conservation, and entertainment." : "Een futuristisch parkconcept waar technologie, natuurbehoud en entertainment samenkomen.",
        },
        {
            to: "/speaksilent",
            image: "showcase_images/SpeakSilent/SpeakSilent%20logo.png",
            title: "SpeakSilent",
            description: isEnglish ? "A communication concept that turns spoken commands into vibrations for team sport players." : "Een communicatieconcept dat gesproken commando’s omzet naar trillingen voor teamsporters.",
        },
        {
            to: "/msj",
            image: "showcase_images/MSJ/MSJ1.webp",
            title: "MyShadyJewels",
            description: isEnglish ? "A 2D stealth game where you play a thief trying to steal a valuable diamond from a heavily guarded museum." : "My Shady Jewels is een 2D stealth game waarbij je als een dief die probeert de waardevolste diamant uit een zwaar beveiligd museum te stelen zonder gepakt te worden.",
        },
        {
            to: "/excalibur",
            image: "showcase_images/Excalibur/Excalibur1.webp",
            title: "Excalibur",
            description: isEnglish ? "A browser game where you collect coins and try to catch the train in time." : "Een browsergame waarin je munten verzamelt en op tijd de trein probeert te halen.",
        },
    ];

    return (
        <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32 text-[#0c0b0e]">
            <header className="mb-12 border-l-4 border-[#ff6b2c] pl-5">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b2c]">{isEnglish ? "-Projects" : "-Projecten"}</p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">Creative Media &amp; Game Technologies</h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
                    {isEnglish ? "An overview of my web development, game development, and design projects. Open a project to see more details and images." : "Een overzicht van mijn projecten in webdevelopment, game development en design. Open een project voor meer informatie en beelden."}
                </p>
            </header>

            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label={isEnglish ? "All projects" : "Alle projecten"}>
                {projects.map((project) => (
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
                                <h2 className="text-lg font-semibold">{project.title}</h2>
                                <span aria-hidden="true" className="text-xl text-[#ff6b2c]">↗</span>
                            </div>
                            <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-gray-600">{project.description}</p>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    );
}

export default Projecten;
