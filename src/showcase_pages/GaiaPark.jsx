import {useEffect, useState} from "react";

function Showcase() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "./showcase_images/GaiaPark/GaiaPark2.webp",
        "./showcase_images/GaiaPark/GaiaPark3.webp",
        "./showcase_images/GaiaPark/GaiaPark4.webp",
        "./showcase_images/GaiaPark/GaiaPark5.webp",
        "./showcase_images/GaiaPark/GaiaPark6.webp",
    ];

    return (
        <div className="flex flex-col items-center px-10 py-20 min-h-screen text-white">
            {/* Title */}
            <h1 className="text-[#FFA052] text-4xl md:text-6xl font-bold mb-6 text-center">GaiaPark</h1>

            <div className="w-full max-w-4xl mb-12">
                <img
                    src="./showcase_images/GaiaPark/GaiaPark1.webp"
                    alt="GaiaPark"
                    className="w-full h-full rounded-2xl border-2 border-[#FFA052] object-cover"
                />
            </div>

            {/* Uitleg tekstvak */}
            <div className="max-w-5xl text-center text-sm md:text-base mb-12">
                <p>
                    Welkom in GaiaPark, een uniek, futuristisch park dat technologie, natuurbehoud en vermaak
                    samenbrengt. In een wereld waarin klimaatverandering en de opwarming van de aarde een steeds grotere
                    dreiging vormen, biedt GaiaPark een unieke oplossing:<br></br><br></br> het terugbrengen van
                    uitgestorven
                    diersoorten die een grote rol kunnen spelen in het verminderen van CO2-uitstoot. Daarnaast biedt
                    GaiaPark de GaiaSeed, een bijzonder initiatief waarbij bezoekers de kans krijgen om hun eigen
                    zaadjes te planten. Op deze manier dragen ze direct bij aan het herstel van de aarde, waarbij iedere
                    plant een stap in de richting is van een groenere en duurzamere toekomst.
                </p>
            </div>


            {/* Images */}

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


            {/* Images Pressable */}
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

export default Showcase;
