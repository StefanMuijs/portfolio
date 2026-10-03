function About() {
    const timeline = [
        {
            period: "2025–2026",
            title: "Stage · WeScaleUp",
            description: "Webdevelopment met WordPress, Elementor, React en Node.js. Gebouwd aan een dashboard voor website-statistieken en meegewerkt aan SEO, marketing en videocontent.",
        },
        {
            period: "2023–heden",
            title: "Creative Media and Game Technologies · Hogeschool Rotterdam",
            description: "Specialisatie in fullstack webdevelopment, met een voorkeur voor front-end. Daarnaast basiskennis van game development en projectmatig samenwerken.",
        },
        {
            period: "2023–heden",
            title: "Verkoopmedewerker · Karwei",
            description: "Klanten adviseren over producten en klussen en zorgen voor een nette, overzichtelijke winkel.",
        },
        {
            period: "2022–2023",
            title: "Stage · EyeDetail",
            description: "Ervaring opgedaan met filmen, videobewerking, WordPress, fotografie en internationale samenwerking.",
        },
        {
            period: "2020–2021",
            title: "Stage · Ivision",
            description: "Video-opnames, editing, animaties en visuele effecten.",
        },
        {
            period: "2018–2022",
            title: "Mediavormgeving · Curio",
            description: "Ontwikkelen van visuele content, videobewerking, grafisch ontwerpen en animaties. Ervaring met Adobe-programma’s.",
        },
        {
            period: "2017–2023",
            title: "Teamleider · Jumbo",
            description: "Teamleden aansturen, werkzaamheden verdelen, klanten helpen en problemen oplossen.",
        },
    ];

    return (
        <section className="mx-auto w-full max-w-4xl px-6 pb-20 pt-32 text-[#0c0b0e]">
            <header className="mb-14 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b2c]">Mijn verhaal</p>
                <h1 className="text-4xl font-bold text-[#0c0b0e] md:text-5xl">Meer over mij</h1>
                <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
                    Van mediavormgeving naar webdevelopment: hier zie je de opleidingen en werkervaring die mijn pad hebben gevormd.
                </p>
            </header>

            <ol className="relative space-y-8 border-l-2 border-orange-200 pl-6 md:pl-8">
                {timeline.map((item) => (
                    <li key={`${item.period}-${item.title}`} className="relative rounded-2xl border border-gray-200 bg-gray-50 p-6">
                        <span className="absolute -left-[2.13rem] top-7 h-4 w-4 rounded-full border-4 border-white bg-[#ff6b2c] md:-left-[2.63rem]" />
                        <p className="text-sm font-semibold text-[#ff6b2c]">{item.period}</p>
                        <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
                        <p className="mt-3 leading-7 text-gray-700">{item.description}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default About;