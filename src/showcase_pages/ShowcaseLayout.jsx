import {useEffect, useState} from "react";

function ShowcaseLayout({title, description, video, cover, images}) {
    const [selectedImage, setSelectedImage] = useState(null);
    const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32 text-[#0c0b0e]">
            <section className="mb-16 grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                <header>
                    <p className="mb-4 border-l-4 border-[#ff6b2c] pl-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b2c]">
                        -Projecten
                    </p>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
                </header>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#0c0b0e] shadow-lg">
                    {video ? (
                        <video controls playsInline preload="metadata" className="aspect-video w-full object-cover">
                            <source src={assetUrl(video)} type="video/mp4" />
                            Je browser ondersteunt deze video niet.
                        </video>
                    ) : (
                        <img src={assetUrl(cover)} alt={`${title} hoofdbeeld`} className="aspect-video w-full object-cover" />
                    )}
                </div>
            </section>

            <section>
                <header className="mb-8 border-l-4 border-[#ff6b2c] pl-4">
                    <h2 className="text-2xl font-bold md:text-3xl">Beelden</h2>
                    <p className="mt-2 text-gray-600">Een kijkje in dit project.</p>
                </header>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            onClick={() => setSelectedImage(image)}
                            aria-label={`Bekijk afbeelding ${index + 1} van ${title}`}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b2c]"
                        >
                            <img
                                src={assetUrl(image)}
                                alt={`${title} projectbeeld ${index + 1}`}
                                loading="lazy"
                                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </button>
                    ))}
                </div>
            </section>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0c0b0e]/90 p-6"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        type="button"
                        aria-label="Sluiten"
                        className="absolute right-6 top-6 text-4xl text-white hover:text-[#ff6b2c]"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                    <img
                        src={assetUrl(selectedImage)}
                        alt={`${title} projectbeeld vergroot`}
                        className="max-h-[85vh] max-w-full rounded-xl object-contain"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </main>
    );
}

export default ShowcaseLayout;