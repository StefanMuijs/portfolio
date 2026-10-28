import ShowcaseLayout from "./ShowcaseLayout.jsx";

import {useEnglish} from "../LanguageContext.jsx";

function MyShadyJewels() {
    const isEnglish = useEnglish();
    return (
        <ShowcaseLayout
            title="MyShadyJewels"
            githubUrl="https://github.com/LoudMouth-Studios/MSJ"
            video="showcase_videos/MSJ%20showcase.mp4"
            description={isEnglish ? "My Shady Jewels is a 2D stealth game I developed with my team during my game development minor. We had six weeks to design and build the game. We chose an isometric perspective, which added an extra development challenge. You play as a thief trying to steal the most valuable diamond from a heavily guarded museum without getting caught." : "My Shady Jewels is een 2D stealthgame die ik samen met mijn team heb ontwikkeld tijdens mijn minor Gamedevelopment. In dit project kregen we zes weken de tijd om een game te bedenken en te realiseren. We kozen voor een isometrisch perspectief, wat een extra uitdaging vormde tijdens de ontwikkeling. In de game speel je als een dief die probeert de waardevolste diamant uit een zwaar beveiligd museum te stelen zonder gepakt te worden."}
            images={[
                "showcase_images/MSJ/MSJ1.webp",
                "showcase_images/MSJ/MSJ2.webp",
                "showcase_images/MSJ/MSJ3.webp",
                "showcase_images/MSJ/MSJ4.webp",
                "showcase_images/MSJ/MSJ5.webp",
                "showcase_images/MSJ/MSJ6.webp",
                "showcase_images/MSJ/MSJ7.webp",
            ]}
        />
    );
}

export default MyShadyJewels;
