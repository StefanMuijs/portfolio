import ShowcaseLayout from "./ShowcaseLayout.jsx";

function SpeakSilent() {
    return (
        <ShowcaseLayout
            title="SpeakSilent"
            video="showcase_videos/SpeakSilent%20showcase.mp4"
            description="SpeakSilent is een communicatieconcept voor teamsporters met een gehoorbeperking. Gesproken commando’s worden omgezet in trillingen op een smartwatch, zodat spelers tijdens het sporten aanwijzingen kunnen ontvangen en delen."
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