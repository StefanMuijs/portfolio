import ShowcaseLayout from "./ShowcaseLayout.jsx";

import {useEnglish} from "../LanguageContext.jsx";

function SOTD() {
    const isEnglish = useEnglish();
    return (
        <ShowcaseLayout
            title="Station Of The Dead"
            githubUrl="https://github.com/StefanMuijs/Cle4_Game_Team19"
            video="showcase_videos/SOTD%20Trailer.mp4"
            description={isEnglish ? "For this project, we made a zombie shooter in Unreal Engine set at Rotterdam Central Station. It was a team project and gave us the chance to work with a new engine and develop our technical and creative skills." : "Voor dit project maakten we met Unreal Engine een zombie-shooter die zich afspeelt op Rotterdam Centraal. De game was een teamproject en gaf ons de kans om met een nieuwe engine te werken en onze technische en creatieve vaardigheden te ontwikkelen."}
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
