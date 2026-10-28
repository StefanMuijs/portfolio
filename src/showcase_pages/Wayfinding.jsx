import ShowcaseLayout from "./ShowcaseLayout.jsx";

import {useEnglish} from "../LanguageContext.jsx";

function Wayfinding() {
    const isEnglish = useEnglish();
    return (
        <ShowcaseLayout
            title="Wayfinding"
            githubUrl="https://github.com/Stef-Buurman/Ja-Man-Sem-6"
            video="showcase_videos/Wayfinding%20showcase.mp4"
            description={isEnglish ? (
                <>
                    This project took place during an interdisciplinary collaboration with students from other programs. By combining our different areas of expertise, we worked on a solution that met users’ needs.
                    <br /><br />
                    We created a wayfinding solution for the CMI building at the Wijnhaven campus. The building’s complex layout can make it difficult for students, staff, and visitors to find classrooms, study spaces, and other rooms. Our goal was to make navigating the building easier with an interactive application.
                </>
            ) : (
                <>
                    Dit project vond plaats tijdens een interdisciplinaire
                    samenwerkingsperiode, waarin ik samenwerkte met studenten
                    van andere opleidingen. Door verschillende expertises te
                    combineren, werkten we aan een oplossing die aansloot bij
                    de behoeften van de gebruikers.

                    <br /><br />

                    We hebben samengewerkt aan het maken van een
                    wayfinding-oplossing voor het CMI-gebouw op de locatie
                    Wijnhaven. Door de complexe indeling van het gebouw is het
                    voor studenten, docenten en bezoekers soms lastig om de
                    juiste lokalen, studieplekken of andere ruimtes te vinden.
                    Ons doel was om dit probleem op te lossen met een
                    interactieve applicatie die het navigeren door het gebouw
                    eenvoudiger maakt.
                </>
            )}

            images={[
                "showcase_images/Wayfinding/Wayfinding1.webp",
                "showcase_images/Wayfinding/Wayfinding2.webp",
                "showcase_images/Wayfinding/Wayfinding3.webp",
                "showcase_images/Wayfinding/Wayfinding4.webp",
                "showcase_images/Wayfinding/Wayfinding5.webp",
                "showcase_images/Wayfinding/Wayfinding6.webp",
            ]}
        />
    );
}

export default Wayfinding;
