import ShowcaseLayout from "./ShowcaseLayout.jsx";

import {useEnglish} from "../LanguageContext.jsx";

function Excalibur() {
    const isEnglish = useEnglish();
    return (
        <ShowcaseLayout
            title="Trainrunner"
            githubUrl=""
            cover="showcase_images/Excalibur/Excalibur1.webp"
            description={isEnglish ? "Trainrunner is a browser game where you collect ten coins as quickly as possible and then try to catch the train." : "Trainrunner is een browsergame waarin je zo snel mogelijk tien munten verzamelt en daarna de trein probeert te halen."}
            images={[
                "showcase_images/Excalibur/Excalibur2.webp",
                "showcase_images/Excalibur/Excalibur3.webp",
                "showcase_images/Excalibur/Excalibur4.webp",
                "showcase_images/Excalibur/Excalibur5.webp",
            ]}
        />
    );
}

export default Excalibur;
