import {useEffect, useState} from "react";

function SpeakSilent() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "./showcase_images/SpeakSilent/SpeakSilent1.webp",
        "./showcase_images/SpeakSilent/SpeakSilent2.webp",
        "./showcase_images/SpeakSilent/SpeakSilent3.webp",
        "./showcase_images/SpeakSilent/SpeakSilent4.webp",
        "./showcase_images/SpeakSilent/SpeakSilent5.webp",
        "./showcase_images/SpeakSilent/SpeakSilent6.webp",
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
                    <source src="./showcase_videos/SpeakSilent%20showcase.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Uitleg tekstvak */}
            <div className="max-w-5xl text-center text-sm md:text-base mb-12">
                <p>
                    SpeakSilent was een project dat we ontwikkelden voor mensen met een gehoorbeperking, zodat zij
                    volwaardig kunnen deelnemen aan teamsporten. Het idee achter SpeakSilent was om een systeem te
                    creëren dat communicatie vergemakkelijkt tussen slechthorende of dove spelers en hun teamgenoten
                    tijdens het spelen.<br></br><br></br>

                    We ontwikkelden een programma waarbij gesproken commando’s omgezet werden naar trillingen op een
                    smartwatch. Elke trilling had een specifieke betekenis, bijvoorbeeld drie korte trillingen konden
                    aangeven dat de speler moet aanvallen. De smartwatch toont ook het nummer van de speler die het
                    commando gaf, zodat het duidelijk is welke actie verwacht wordt. Teamleden die wel kunnen horen,
                    dragen oortjes in het veld, zodat zij via gesproken commando’s kunnen communiceren en samen kunnen
                    spelen.<br></br><br></br>

                    Daarnaast kon de slechthorende speler op een scherm tikken om een spraakcommando naar het team te
                    sturen, zoals "Ik val aan!" Deze innovatieve oplossing maakt het mogelijk voor mensen met
                    gehoorproblemen om actief deel te nemen aan groepssporten en creëert meer inclusiviteit in
                    teamsporten.
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

export default SpeakSilent;
