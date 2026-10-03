import ShowcaseLayout from "./ShowcaseLayout.jsx";

function OpenHiring() {
    return (
        <ShowcaseLayout
            title="Open Hiring"
            video="showcase_videos/OpenHiring%20website%20showcase.mp4"
            description="Samen met mijn team ontwikkelde ik een webapplicatie voor Open Hiring. Werkzoekenden kunnen anoniem op vacatures reageren en worden op een wachtlijst geplaatst. Werkgevers beheren hun vacatures en nodigen kandidaten uit zonder sollicitatiegesprekken."
            images={[
                "showcase_images/OpenHiring/OpenHiring1.webp",
                "showcase_images/OpenHiring/OpenHiring2.webp",
                "showcase_images/OpenHiring/OpenHiring3.webp",
                "showcase_images/OpenHiring/OpenHiring4.webp",
                "showcase_images/OpenHiring/OpenHiring5.webp",
                "showcase_images/OpenHiring/OpenHiring6.webp",
                "showcase_images/OpenHiring/OpenHiring7.webp",
                "showcase_images/OpenHiring/OpenHiring8.webp",
            ]}
        />
    );
}

export default OpenHiring;