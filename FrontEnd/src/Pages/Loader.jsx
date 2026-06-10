import { motion } from "framer-motion";
import "../styles/Loader.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-glow"></div>

            <div className="loader-content">

                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 120,
                    }}
                    className="loader-logo"
                >
                    <motion.span
                        animate={{ x: [-2, 2, -2] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    >
                        {"<"}
                    </motion.span>

                    <span className="mx-2">SB</span>

                    <motion.span
                        animate={{ x: [2, -2, 2] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    >
                        {"/>"}
                    </motion.span>
                </motion.div>

                <div className="typing-wrapper">
                    <motion.h1
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2 }}
                        className="typing-text"
                    >
                        &lt;Saurabh Developer /&gt;
                    </motion.h1>
                </div>

                <div className="zigzag-loader">
                    <svg width="280" height="60" viewBox="0 0 280 60">
                        {/* Background Zigzag */}
                        <path
                            d="M0 30 L20 10 L40 40 L60 10 L80 40 L100 10 L120 40 L140 10 L160 40 L180 10 L200 40 L220 10 L240 40 L260 10 L280 30"
                            fill="none"
                            stroke="#3e4650"
                            strokeWidth="4"
                        />

                        {/* Animated Zigzag */}
                        <motion.path
                            d="M0 30 L20 10 L40 40 L60 10 L80 40 L100 10 L120 40 L140 10 L160 40 L180 10 L200 40 L220 10 L240 40 L260 10 L280 30"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                            }}
                        />

                        <defs>
                            <linearGradient id="gradient">
                                <stop offset="0%" stopColor="#7c3aed" />
                                <stop offset="50%" stopColor="#d946ef" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <motion.div
                    className="loader-line"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut"
                    }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.6, 1] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="loader-text"
                >
                    Loading Portfolio...
                </motion.p>

            </div>
        </div>
    );
};

export default Loader;