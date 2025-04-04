import {useEffect, useState} from "react";

function OpenHiring() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "./showcase_images/OpenHiring/OpenHiring1.webp",
        "./showcase_images/OpenHiring/OpenHiring2.webp",
        "./showcase_images/OpenHiring/OpenHiring3.webp",
        "./showcase_images/OpenHiring/OpenHiring4.webp",
        "./showcase_images/OpenHiring/OpenHiring5.webp",
        "./showcase_images/OpenHiring/OpenHiring6.webp",
        "./showcase_images/OpenHiring/OpenHiring7.webp",
        "./showcase_images/OpenHiring/OpenHiring8.webp",
    ];

    return (
        <div className="flex flex-col items-center px-10 py-20 min-h-screen text-white">
            {/* Title */}
            <h1 className="text-[#FFA052] text-4xl md:text-6xl font-bold mb-6 text-center">OpenHiring</h1>

            {/* Video */}
            <div className="w-full max-w-4xl aspect-video mb-12">
                <video
                    className="w-full h-full rounded-2xl border-2 border-[#FFA052] object-cover"
                    controls
                >
                    <source src="./showcase_videos/OpenHiring%20website%20showcase.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Uitleg tekstvak */}
            <div className="max-w-5xl text-center text-sm md:text-base mb-12">
                <p>
                    Samen met mijn team hadden wij de opdracht gekregen
                    om een webapplicatie te ontwikkelen voor Open Hiring, een bedrijf dat
                    zich richt op het ondersteunen van mensen bij het vinden van een baan zonder
                    vooroordelen.<br></br><br></br>Het kernidee achter Open Hiring is dat werkzoekenden op een eenvoudige
                    en anonieme manier kunnen solliciteren, zonder sollicitatiegesprekken.
                    De webapplicatie moet bedrijven in staat stellen om vacatures te plaatsen.
                    Werkzoekenden kunnen zich vervolgens inschrijven op deze vacatures, waarna
                    ze op een wachtlijst worden geplaatst. Werkgevers kunnen aangeven hoeveel
                    werknemers ze nodig hebben en rechtstreeks kandidaten uitnodigen van de wachtlijst.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Showcase ${index + 1}`}
                        className="w-full md:w-64 h-48 object-cover border-2 border-white rounded-xl cursor-pointer transition-transform hover:scale-105"
                        onClick={() => setSelectedImage(src)}
                    />
                ))}
            </div>


            {/* Images */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Grote weergave"
                        className="max-w-full max-h-[90vh] rounded-xl border-4 border-white shadow-xl"
                    />
                </div>
            )}
        </div>
    );
}

export default OpenHiring;
