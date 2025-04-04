import {useEffect, useState} from "react";

function Showcase() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "./showcase_images/Excalibur/Excalibur2.webp",
        "./showcase_images/Excalibur/Excalibur3.webp",
        "./showcase_images/Excalibur/Excalibur4.webp",
        "./showcase_images/Excalibur/Excalibur5.webp",
    ];

    return (
        <div className="flex flex-col items-center px-10 py-20 min-h-screen text-white">
            {/* Title */}
            <h1 className="text-[#FFA052] text-4xl md:text-6xl font-bold mb-6 text-center">Excalibur</h1>

            <div className="w-full max-w-4xl mb-12">
                <img
                    src="./showcase_images/Excalibur/Excalibur1.webp"
                    alt="GaiaPark"
                    className="w-full h-full rounded-2xl border-2 border-[#FFA052] object-cover"
                />
            </div>

            {/* Uitleg tekstvak */}
            <div className="max-w-5xl text-center text-sm md:text-base mb-12">
                <p>
                    Excalibur was het eerste projecten waarin ik een browsergame maakte, en het was een ontzettend leuke
                    ervaring. Dit project gaf me de kans om voor het eerst een game te ontwikkelen.<br></br><br></br>

                    De game is een ren game, waar je zo snel mogelijk 10 munten moet verzamelen. Nadat je de munten hebt
                    verzameld, moet je de trein te halen. Ik heb alle grafische elementen gemaakt in Illustrator om een
                    unieke en visueel aantrekkelijke ervaring te creëren.
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
