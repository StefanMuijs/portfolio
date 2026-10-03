import {useState} from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((currentData) => ({...currentData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const mailtoLink = `mailto:smmuijs2002@gmail.com?subject=Contact via Portfolio van ${formData.name}&body=Naam: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefoon: ${formData.phone}%0D%0ABericht: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    const fieldClass = "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[#0c0b0e] outline-none transition focus:border-[#ff6b2c] focus:ring-2 focus:ring-[#ff6b2c]/20";

    return (
        <main className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-32 text-[#0c0b0e] md:grid-cols-[0.75fr_1.25fr]">
            <header>
                <p className="mb-4 border-l-4 border-[#ff6b2c] pl-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b2c]">
                    -Contact
                </p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">Contactformulier</h1>
                <p className="mt-6 max-w-md leading-7 text-gray-600">
                    Heb je een vraag of wil je samenwerken? Stuur me gerust een bericht.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
                <label className="text-sm font-medium">
                    Naam
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Je naam" className={fieldClass} required />
                </label>
                <label className="text-sm font-medium">
                    E-mailadres
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="naam@voorbeeld.nl" className={fieldClass} required />
                </label>
                <label className="text-sm font-medium">
                    Telefoonnummer <span className="font-normal text-gray-600">(optioneel)</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Je telefoonnummer" className={fieldClass} />
                </label>
                <label className="text-sm font-medium">
                    Bericht
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Waar kan ik je mee helpen?" className={`${fieldClass} resize-y`} rows="5" required />
                </label>
                <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b2c] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#e85c22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b2c] focus-visible:ring-offset-2">
                    Verstuur bericht
                </button>
            </form>
        </main>
    );
}

export default Contact;