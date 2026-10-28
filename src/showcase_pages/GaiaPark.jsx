import ShowcaseLayout from "./ShowcaseLayout.jsx";

import {useEnglish} from "../LanguageContext.jsx";

function GaiaPark() {
    const isEnglish = useEnglish();
    return (
        <ShowcaseLayout
            title="GaiaPark"
            githubUrl="https://github.com/Yaelen/TLE-1-T10/tree/ab3e659bf76471e99a16e981b7625dbdd56437c0"
            cover="showcase_images/GaiaPark/GaiaPark1.webp"
            description={isEnglish ? "GaiaPark is a futuristic park concept combining technology, nature conservation, and entertainment. It explores how reintroducing animal species and initiatives such as GaiaSeed can contribute to a greener future." : "GaiaPark is een futuristisch parkconcept waarin technologie, natuurbehoud en entertainment samenkomen. Het concept onderzoekt hoe herintroductie van diersoorten en initiatieven zoals de GaiaSeed kunnen bijdragen aan een groenere toekomst."}
            images={[
                "showcase_images/GaiaPark/GaiaPark2.webp",
                "showcase_images/GaiaPark/GaiaPark3.webp",
                "showcase_images/GaiaPark/GaiaPark4.webp",
                "showcase_images/GaiaPark/GaiaPark5.webp",
                "showcase_images/GaiaPark/GaiaPark6.webp",
            ]}
        />
    );
}

export default GaiaPark;
