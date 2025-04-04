import { Link } from "react-router-dom";

function Portfolio() {
    const projects = [
        {
            title: "SpeakSilent",
            image: "./showcase_images/SpeakSilent/SpeakSilent%20logo.png",
            route: "speaksilent",
            description:
                "SpeakSilent was een project dat we ontwikkelden voor mensen met een gehoorbeperking, zodat zij volwaardig kunnen deelnemen aan teamsporten. Het idee achter SpeakSilent was om een systeem te creëren dat communicatie vergemakkelijkt tussen slechthorende of dove spelers en hun teamgenoten tijdens het spelen.",
        },
        {
            title: "Open Hiring",
            image: "./showcase_images/OpenHiring/logo-oh.png",
            route: "openhiring",
            description:
                "Een project waarin inclusiviteit centraal stond. We ontwierpen een platform dat mensen zonder sollicitatieproces direct aan een baan helpt, met focus op user experience en toegankelijkheid.",
        },
        {
            title: "StationOfTheDead",
            image: "./showcase_images/SOTD/sotd4.webp",
            route: "SOTD",
            description:
                "Een spannende point-and-click horrorgame met interactieve puzzels en storytelling. Deze game was onderdeel van een gamejam en werd volledig vanuit een eigen concept opgebouwd.",
        },
        {
            title: "GaiaPark",
            image: "./showcase_images/GaiaPark/GaiaPark1.webp",
            route: "gaiapark",
            description:
                "Voor GaiaPark ontwierpen we een informatieve en interactieve website waarin dieren en natuur centraal staan. De site is gericht op educatie én entertainment voor jonge bezoekers.",
        },
        {
            title: "Excalibur",
            image: "./showcase_images/Excalibur/Excalibur1.webp",
            route: "excalibur",
            description:
                "Excalibur is een coöperatieve fantasygame waar teamwork en strategie centraal staan. We ontwikkelden het concept, visuele design en gameplay-mechanieken vanuit de CMGT opleiding.",
        },
    ];

    return (
        <div className="px-10 py-20">
            <h1 className="text-[#FFA052] text-4xl font-bold text-center mb-10">Portfolio</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <Link
                        to={project.route}
                        key={index}
                        className="flex flex-col bg-[#1a1a1a] border-2 border-[#FFA052] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-lg"
                    >
                        <div className="w-full aspect-video bg-[#111] flex items-center justify-center overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-contain h-full"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-[#FFA052] text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-white text-sm">{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
