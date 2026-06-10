import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MessageCircle, Send, X } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [email, setEmail] = useState("");
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const [messages, setMessages] = useState([
        { text: "👋 Hi! Please enter your email to start chatting.", isBot: true }
    ]);

    const [input, setInput] = useState('');
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');

        // ✅ STEP 1: Handle Email First
        if (!emailSubmitted) {

            // show user message
            setMessages(prev => [
                ...prev,
                { text: userMessage, isBot: false }
            ]);

            // validate email
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userMessage);

            if (!isValidEmail) {
                setMessages(prev => [
                    ...prev,
                    { text: "❌ Please enter a valid email address.", isBot: true }
                ]);
                return;
            }

            // save email
            setEmail(userMessage);
            setEmailSubmitted(true);

            // bot reply
            setMessages(prev => [
                ...prev,
                { text: "✅ Email saved! How can I help you today?", isBot: true }
            ]);

            return;
        }

        // ✅ STEP 2: Normal Chat Flow
        setMessages(prev => [
            ...prev,
            { text: userMessage, isBot: false },
            { text: "", isBot: true, loading: true }
        ]);

        try {
            const response = await fetch("http://localhost:1214/chat/stream", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMessage,
                    email: email
                })
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");

            let fullText = "";
            let done = false;

            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;

                const chunk = decoder.decode(value || new Uint8Array(), { stream: true });

                if (chunk) {
                    fullText += chunk;

                    setMessages(prev => {
                        const updated = [...prev];
                        const last = updated[updated.length - 1];

                        last.text = fullText + "▋"; // typing cursor
                        last.loading = false;

                        return updated;
                    });
                }
            }

            // remove cursor
            setMessages(prev => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                last.text = fullText;
                return updated;
            });

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="chatbot-root">

            {isOpen && (
                <div className="chat-window">

                    {/* HEADER */}
                    <div className="chat-header">
                        <div className="header-info">
                            <h3 className="header-title">Support Assistant</h3>
                            <p className="header-status">Online</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="close-btn">
                            <X size={20} />
                        </button>
                    </div>

                    {/* MESSAGES */}
                    <div ref={scrollRef} className="messages-container">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message-row ${msg.isBot ? 'bot' : 'user'}`}>
                                <div className="message-bubble">
                                    {msg.loading ? (
                                        <div className="typing-loader">
                                            <span></span><span></span><span></span>
                                        </div>
                                    ) : (
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {msg.text}
                                        </ReactMarkdown>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* INPUT */}
                    <form onSubmit={handleSend} className="input-area">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={
                                emailSubmitted
                                    ? "Type your message..."
                                    : "Enter your email..."
                            }
                            className="chat-input"
                        />
                        <button type="submit" className="send-btn">
                            <Send size={18} />
                        </button>
                    </form>

                </div>
            )}

            {/* TOGGLE */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="chatbot-toggle"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default Chatbot;