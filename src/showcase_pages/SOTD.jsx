import {useEffect, useState} from "react";

function Showcase() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "./showcase_images/SOTD/sotd1.webp",
        "./showcase_images/SOTD/sotd2.webp",
        "./showcase_images/SOTD/sotd3.webp",
        "./showcase_images/SOTD/sotd4.webp",
        "./showcase_images/SOTD/sotd5.webp",
        "./showcase_images/SOTD/sotd6.webp",
        "./showcase_images/SOTD/sotd7.webp",
    ];

    return (
        <div className="flex flex-col items-center px-10 py-20 min-h-screen text-white">
            {/* Title */}
            <h1 className="text-[#FFA052] text-4xl md:text-6xl font-bold mb-6 text-center">StationOfTheDead</h1>

            {/* Video */}
            <div className="w-full max-w-4xl aspect-video mb-12">
                <video
                    className="w-full h-full rounded-2xl border-2 border-[#FFA052] object-cover"
                    controls
                >
                    <source src="./showcase_videos/SOTD%20Trailer.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Uitleg tekstvak */}
            <div className="max-w-5xl text-center text-sm md:text-base mb-12">
                <p>
                    Voor dit project kregen we de opdracht om een game te ontwikkelen, en oorspronkelijk was het de
                    bedoeling om dit in Excalibur te doen, een eenvoudige browsergame-engine. Echter, samen met mijn
                    team besloten we de uitdaging aan te gaan om te werken met Unreal Engine, wat voor ons allemaal
                    volledig nieuw was. Dankzij veel tutorials en documentatie hebben we het voor elkaar gekregen om een
                    mooie game neer te zetten.<br></br><br></br>

                    We kozen voor een zombie-shooter die zich afspeelt op Rotterdam Centraal, de locatie die ons door de
                    opdrachtgever werd opgegeven. Het was een leerzaam proces waarbij we zowel onze technische als
                    creatieve vaardigheden hebben ontwikkeld.
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
