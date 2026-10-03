import ShowcaseLayout from "./ShowcaseLayout.jsx";

function SOTD() {
    return (
        <ShowcaseLayout
            title="Station Of The Dead"
            video="showcase_videos/SOTD%20Trailer.mp4"
            description="Voor dit project maakten we met Unreal Engine een zombie-shooter die zich afspeelt op Rotterdam Centraal. De game was een teamproject en gaf ons de kans om met een nieuwe engine te werken en onze technische en creatieve vaardigheden te ontwikkelen."
            images={[
                "showcase_images/SOTD/sotd1.webp",
                "showcase_images/SOTD/sotd2.webp",
                "showcase_images/SOTD/sotd3.webp",
                "showcase_images/SOTD/sotd4.webp",
                "showcase_images/SOTD/sotd5.webp",
                "showcase_images/SOTD/sotd6.webp",
                "showcase_images/SOTD/sotd7.webp",
            ]}
        />
    );
}

export default SOTD;