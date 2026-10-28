import ShowcaseLayout from "./ShowcaseLayout.jsx";

import {useEnglish} from "../LanguageContext.jsx";

function SpeakSilent() {
    const isEnglish = useEnglish();
    return (
        <ShowcaseLayout
            title="SpeakSilent"
            githubUrl=""
            video="showcase_videos/SpeakSilent%20showcase.mp4"
            description={isEnglish ? "SpeakSilent is a communication concept for team athletes with hearing impairments. Spoken commands are converted into smartwatch vibrations so players can receive and share instructions during a game." : "SpeakSilent is een communicatieconcept voor teamsporters met een gehoorbeperking. Gesproken commando’s worden omgezet in trillingen op een smartwatch, zodat spelers tijdens het sporten aanwijzingen kunnen ontvangen en delen."}
            images={[
                "showcase_images/SpeakSilent/SpeakSilent1.webp",
                "showcase_images/SpeakSilent/SpeakSilent2.webp",
                "showcase_images/SpeakSilent/SpeakSilent3.webp",
                "showcase_images/SpeakSilent/SpeakSilent4.webp",
                "showcase_images/SpeakSilent/SpeakSilent5.webp",
                "showcase_images/SpeakSilent/SpeakSilent6.webp",
            ]}
        />
    );
}

export default SpeakSilent;
