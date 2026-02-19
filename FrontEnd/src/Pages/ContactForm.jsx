import { useState } from "react";
import '../styles/Contact.css';

export default function ContactForm() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const response = await fetch("https://sourabh-g-portfolio-backend.onrender.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                form.reset();
            } else {
                setStatus("Failed to send message.");
            }
        } catch (err) {
            console.error(err);
            setStatus("Error sending message.");
        }
    };

    return (
        <>
            <div className="position-relative">{status && <p className="mt-3 text-center text-success position-absolute" style={{ fontWeight: 500, left: '50%', transform: 'translateX(-50%)' }}>{status}</p>}</div>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Contact Us</h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            placeholder="Your Message"
                                            rows="5"
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
