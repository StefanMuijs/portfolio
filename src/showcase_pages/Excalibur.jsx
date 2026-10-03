import ShowcaseLayout from "./ShowcaseLayout.jsx";

function Excalibur() {
    return (
        <ShowcaseLayout
            title="Excalibur"
            cover="showcase_images/Excalibur/Excalibur1.webp"
            description="Excalibur is een browsergame waarin je zo snel mogelijk tien munten verzamelt en daarna de trein probeert te halen. Voor de game maakte ik zelf de grafische elementen in Illustrator."
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