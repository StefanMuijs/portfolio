import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:smmuijs2002@gmail.com?subject=Contact via Portfolio van ${formData.name}&body=
Naam: ${formData.name}%0D%0A
Email: ${formData.email}%0D%0A
Telefoon: ${formData.phone}%0D%0A
Bericht: ${formData.message}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="flex flex-col justify-center items-center px-10 py-20 min-h-[100vh]">
            <h1 className="text-[#FFA052] text-3xl md:text-5xl font-bold mb-8">Contact Me</h1>

            <form onSubmit={handleSubmit} className="flex flex-col max-w-lg w-full p-8 rounded-xl">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="mb-4 p-3 text-black rounded-lg border-2 border-[#FFA052]"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="mb-4 p-3 text-black rounded-lg border-2 border-[#FFA052]"
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="mb-4 p-3 text-black rounded-lg border-2 border-[#FFA052]"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="mb-4 p-3 text-black rounded-lg border-2 border-[#FFA052]"
                    rows="4"
                />
                <button
                    type="submit"
                    className="bg-[#FFA052] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#ff7e2c] transition-all"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
