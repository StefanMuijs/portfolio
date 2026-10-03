import ShowcaseLayout from "./ShowcaseLayout.jsx";

function GaiaPark() {
    return (
        <ShowcaseLayout
            title="GaiaPark"
            cover="showcase_images/GaiaPark/GaiaPark1.webp"
            description="GaiaPark is een futuristisch parkconcept waarin technologie, natuurbehoud en entertainment samenkomen. Het concept onderzoekt hoe herintroductie van diersoorten en initiatieven zoals de GaiaSeed kunnen bijdragen aan een groenere toekomst."
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