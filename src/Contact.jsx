import {useState} from "react";

import {useEnglish} from "./LanguageContext.jsx";

function Contact() {
    const isEnglish = useEnglish();
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
        window.location.href = `mailto:smmuijs2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const fieldClass = "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[#0c0b0e] outline-none transition focus:border-[#ff6b2c] focus:ring-2 focus:ring-[#ff6b2c]/20";

    return (
        <main className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-32 text-[#0c0b0e] md:grid-cols-[0.75fr_1.25fr]">
            <header>
                <p className="mb-4 border-l-4 border-[#ff6b2c] pl-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b2c]">
                    -{isEnglish ? "Contact" : "Contact"}
                </p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">{isEnglish ? "Contact form" : "Contactformulier"}</h1>
                <p className="mt-6 max-w-md leading-7 text-gray-600">
                    {isEnglish ? "Have a question or want to work together? Feel free to send me a message." : "Heb je een vraag of wil je samenwerken? Stuur me gerust een bericht."}
                </p>
            </header>

            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
                <label className="text-sm font-medium">
                    {isEnglish ? "Name" : "Naam"}
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={isEnglish ? "Your name" : "Je naam"} className={fieldClass} required />
                </label>
                <label className="text-sm font-medium">
                    {isEnglish ? "Email address" : "E-mailadres"}
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={isEnglish ? "name@example.com" : "naam@voorbeeld.nl"} className={fieldClass} required />
                </label>
                <label className="text-sm font-medium">
                    {isEnglish ? "Phone number" : "Telefoonnummer"} <span className="font-normal text-gray-600">({isEnglish ? "optional" : "optioneel"})</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={isEnglish ? "Your phone number" : "Je telefoonnummer"} className={fieldClass} />
                </label>
                <label className="text-sm font-medium">
                    {isEnglish ? "Message" : "Bericht"}
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder={isEnglish ? "How can I help you?" : "Waar kan ik je mee helpen?"} className={`${fieldClass} resize-y`} rows="5" required />
                </label>
                <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b2c] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#e85c22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b2c] focus-visible:ring-offset-2">
                    {isEnglish ? "Send message" : "Verstuur bericht"}
                </button>
            </form>
        </main>
    );
}

export default Contact;
