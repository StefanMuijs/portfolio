import {useEnglish} from "./LanguageContext.jsx";

function About() {
    const isEnglish = useEnglish();
    const education = [
        {
            title: isEnglish ? "Media Design" : "Mediavormgeving",
            organization: "Curio",
            period: "2018–2022",
            details: isEnglish
                ? ["Creating visual content", "Video editing, graphic design, and animation", "Using Adobe applications"]
                : ["Ontwikkelen van visuele content", "Videobewerking, grafisch ontwerpen en animaties", "Werken met Adobe-programma’s"],
        },

        {
            title: "Creative Media and Game Technologies (CMGT)",
            organization: isEnglish ? "Rotterdam University of Applied Sciences" : "Hogeschool Rotterdam",
            period: "2023–heden",
            details: isEnglish
                ? ["Specializing in full-stack web development, with a focus on front end", "Basic knowledge of game development", "Collaborative project work"]
                : ["Specialisatie in fullstack webdevelopment, met een voorkeur voor front-end", "Basiskennis van game development", "Projectmatig werken in teams"],
        },

    ];

    const experience = [
        {
            title: isEnglish ? "Team leader" : "Teamleider",
            organization: "Jumbo",
            period: "2017–2023",
            details: isEnglish
                ? ["Leading team members and assigning tasks", "Customer service and problem solving"]
                : ["Aansturen van teamleden en verdelen van werkzaamheden", "Klantenservice en probleemoplossing"],
        },
        {
            title: isEnglish ? "Internship" : "Stage",
            organization: "Ivision",
            period: "2020–2021",
            details: isEnglish ? ["Video recording and editing", "Creating animations and visual effects"] : ["Video-opnames en editing", "Maken van animaties en visuele effecten"],
        },
        {
            title: isEnglish ? "Internship" : "Stage",
            organization: "EyeDetail",
            period: "2022–2023",
            details: isEnglish
                ? ["Gained experience in filming, video editing, WordPress, and photography", "Collaborated with an international company"]
                : ["Ervaring opgedaan met filmen, videobewerking, WordPress en fotografie", "Samengewerkt met een internationaal bedrijf"],
        },
        {
            title: isEnglish ? "Internship" : "Stage",
            organization: "WeScaleUp",
            period: "2025–2026",
            details: isEnglish
                ? ["Web development with WordPress, Elementor, React, and Node.js", "Contributed to a website analytics dashboard, SEO, marketing, and video content"]
                : ["Webdevelopment met WordPress, Elementor, React en Node.js", "Gebouwd aan een dashboard voor website-statistieken en meegewerkt aan SEO, marketing en videocontent"],
        },
        {
            title: isEnglish ? "Sales assistant" : "Verkoopmedewerker",
            organization: "Karwei",
            period: "2023–heden",
            details: isEnglish
                ? ["Advising customers on products and DIY projects and keeping the store neat and organized"]
                : ["Klanten adviseren over producten en klussen en zorgen voor een nette, overzichtelijke winkel"],
        },
    ];

    const renderEntries = (entries) => entries.map((item) => (
        <article key={`${item.organization}-${item.title}`}
                 style={{paddingTop: "16px"}}
                 className="rounded-xl px-4 pb-5 text-center transition-colors duration-300 hover:bg-white sm:px-5">
            <h3 className="text-xl font-semibold text-[#ff6b2c]">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.organization} ({isEnglish ? `${item.period.slice(0, 4)}–${item.period.includes("heden") ? "present" : item.period.slice(-4)}` : item.period})</p>
            <ul className="mx-auto mt-4 max-w-sm space-y-2 text-sm leading-6 text-gray-700">
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
        </article>
    ));

    return (
        <main className="w-full pb-20 text-[#0c0b0e]">
            <div className="mx-auto w-full max-w-6xl px-6 pt-32">
                <header className="mb-14 ">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b2c]">{isEnglish ? "My story" : "Mijn verhaal"}</p>
                    <h1 className="text-4xl font-bold text-[#0c0b0e] md:text-5xl">{isEnglish ? "About me" : "Meer over mij"}</h1>
                    {isEnglish && <div className="mt-5 space-y-4 leading-7 text-gray-600">
                        <p>My name is Stefan Muijs, I’m 24 and from Brabant in the Netherlands. I’m currently studying Creative Media and Game Technologies (CMGT) at Rotterdam University of Applied Sciences, where I’m developing my passion for creativity and technology.</p>
                        <p>Before this course, I studied Media Design. I gained experience in graphic design, image editing, and video editing, working with Adobe applications such as Illustrator, Photoshop, After Effects, Premiere Pro, and InDesign. This background gave me a strong eye for detail, visual design, and communication.</p>
                        <p>My main interest within CMGT is front-end development. I enjoy turning ideas into digital products that work well, look appealing, and are easy to use. I’m also interested in game development and enjoy learning new technologies.</p>
                        <p>I’m motivated, dependable, and enjoy working with others. I welcome feedback and keep developing my creative and technical skills.</p>
                    </div>}
                    {!isEnglish && <p className="mx-auto mt-5 whitespace-pre-line leading-7 text-gray-600">
                        Mijn naam is Stefan Muijs, ik ben 24 jaar en kom uit het mooie Brabant. Momenteel studeer ik
                        Creative Media and Game Technologies (CMGT) aan Hogeschool Rotterdam, waar ik mijn passie voor
                        creativiteit en technologie verder ontwikkel. <br/><br/>

                        Voordat ik aan deze opleiding begon, heb ik de vooropleiding Mediavormgeving gevolgd. Hier heb
                        ik
                        veel ervaring opgedaan met grafisch ontwerp, beeldbewerking en videomontage. Ik heb hierbij veel
                        gewerkt met Adobe-programma's zoals Illustrator, Photoshop, After Effects, Premiere Pro en
                        InDesign.
                        Deze achtergrond heeft mij een goed oog voor detail, vormgeving en visuele communicatie
                        gegeven. <br/><br/>

                        Mijn grootste interesse binnen CMGT ligt bij front-end development. Ik vind het leuk om ideeën
                        om te
                        zetten in digitale producten die niet alleen technisch goed werken, maar er ook visueel
                        aantrekkelijk uitzien en prettig te gebruiken zijn. De combinatie van design en development
                        spreekt
                        mij daarom erg aan.
                        Daarnaast heb ik interesse in game development en vind ik het leuk om nieuwe technieken te
                        ontdekken
                        en mijn kennis verder uit te breiden. Ik ben gedreven, kom mijn afspraken na en werk graag samen
                        met
                        anderen. Ik sta open voor feedback en vind het belangrijk om mezelf zowel creatief als technisch
                        te
                        blijven ontwikkelen.
                    </p>}
                </header>

            </div>

            <section className="mt-12 w-full bg-gray-50">
                <div className="mx-auto w-full max-w-6xl px-6 py-16">
                    <p className="mb-2 text-sm font-semibold uppercase text-center tracking-[0.25em] text-[#ff6b2c]">{isEnglish ? "My skills" : "Mijn vaardigheden"}</p>
                    <h2 className="text-3xl font-bold text-[#0c0b0e] text-center pb-6">{isEnglish ? "Tools & technology" : "Tools & technologie"}</h2>
                    <div className="flex flex-col justify-center gap-10 sm:flex-row sm:gap-16">
                        <section>
                            <h3 className="mb-4 flex items-center justify-center gap-3 text-lg font-bold text-[#0c0b0e]">
                                {isEnglish ? "Programming languages" : "Programmeertalen"}
                            </h3>
                            <ul className="flex flex-wrap gap-3">
                                <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">HTML</li>
                                <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">CSS</li>
                                <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">JavaScript</li>
                                <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">PHP</li>
                            </ul>
                        </section>
                        <section>
                            <h3 className="mb-4 flex items-center justify-center gap-3 text-lg font-bold text-[#0c0b0e]">
                                Frameworks
                            </h3>
                            <ul className="flex flex-wrap gap-3">
                                <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">React</li>
                                <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">React
                                    Native
                                </li>
                                <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">Laravel</li>
                            </ul>
                        </section>
                    </div>
                    <section className="mt-10 text-center">
                        <h3 className="mb-4 flex items-center justify-center gap-3 text-lg font-bold text-[#0c0b0e]">
                            Design &amp; Adobe
                        </h3>
                        <ul className="flex flex-wrap justify-center gap-3">
                            <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">Figma</li>
                            <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">Illustrator</li>
                            <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">After
                                Effects
                            </li>
                            <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">Premiere
                                Pro
                            </li>
                            <li className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-100">Photoshop</li>
                        </ul>
                    </section>
                </div>
            </section>

            <div className="mx-auto mt-12 w-full max-w-6xl px-6">
                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 py-16">
                    <section className="h-full p-5 sm:p-7">
                        <h2 className="text-center text-2xl font-bold text-[#0c0b0e]">{isEnglish ? "Education" : "Opleidingen"}</h2>
                        <hr className="mx-auto mb-2 mt-4 w-1/2 border-t-2 border-[#ff6b2c]"/>
                        <div className="divide-y divide-gray-200">{renderEntries(education)}</div>
                    </section>

                    <section className="h-full p-5 sm:p-7">
                        <h2 className="text-center text-2xl font-bold text-[#0c0b0e]">{isEnglish ? "Work experience" : "Werkervaring"}</h2>
                        <hr className="mx-auto mb-2 mt-4 w-1/2 border-t-2 border-[#ff6b2c]"/>
                        <div className="divide-y divide-gray-200">{renderEntries(experience)}</div>
                    </section>

                </div>
            </div>


        </main>
    );
}

export default About;
