import { motion as Motion } from 'framer-motion'
import "@fontsource/great-vibes"
import profile from "./assets/profile.jpeg";



export default function App() {
    return (
        <div className="min-h-screen bg-linear-to-r from-black via-gray-800 to-gray-900 text-white">
            {/* Hero Section */}
            <section className="flex flex-col justify-center items-center min-h-screen px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
                <div className="flex flex-col md:flex-row items-baseline gap-1 md:gap-2">
                    {/* Text */}
                    <Motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-3xl font-bold text-white"
                    >
                        Hello there, I'm
                    </Motion.h2>

                    {/* Signature SVG - reduced size */}
                    <Motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="400 700 3600 1600"
                        className="w-[200px] md:w-[300px] -my-8" // Reduced from 500px/700px
                        fill="#60A5FA"
                        stroke="#60A5FA"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            transform: "scaleY(-1) translateY(-10px) translateX(-5px)",
                        }}
                    >
                        {/* Your Motion.path elements here - keep them as they are */}
                        <Motion.path
                            d="M839 1377 c-114 -47 -195 -129 -220 -220 -18 -67 15 -128 75 -139 32
                            -5 29 19 -4 30 -59 21 -64 90 -11 174 73 115 276 188 371 132 54 -31 72 -76
67 -166 -3 -64 -10 -90 -41 -152 -65 -132 -170 -218 -268 -219 -26 0 -50 1
-53 4 -7 8 186 395 228 456 23 34 32 55 25 59 -20 13 -58 -49 -171 -278 l-112
-227 -52 1 c-62 2 -96 -21 -91 -60 6 -52 60 -54 119 -5 29 25 39 27 91 24 48
-2 69 2 112 23 182 89 302 373 216 511 -46 74 -171 97 -281 52z m-139 -576 c0
-5 -11 -16 -25 -25 -44 -29 -92 -15 -59 18 16 17 84 22 84 7z"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <Motion.path
                            d=  "M2195 1308 c-27 -32 -73 -107 -113 -188 -69 -140 -88 -164 -159 -200
                        -54 -27 -88 -24 -88 9 0 18 10 27 49 42 86 32 125 93 76 119 -34 18 -85 -11
                        -124 -73 -35 -54 -120 -122 -138 -111 -14 9 -1 53 32 107 17 27 30 53 30 58 0
                        23 -22 4 -63 -54 -57 -79 -147 -145 -147 -107 0 6 14 37 30 70 33 66 37 88 16
                        96 -21 8 -74 -23 -133 -79 -29 -27 -53 -47 -53 -43 0 4 16 30 35 59 38 56 42
                        67 22 67 -7 0 -21 -15 -32 -32 -42 -72 -141 -159 -159 -141 -17 18 10 95 42
                        119 21 15 6 53 -24 60 -40 10 -77 -5 -121 -51 -98 -103 -66 -220 34 -123 29
                        28 33 30 33 12 0 -49 52 -58 99 -18 30 25 40 23 22 -6 -6 -8 -7 -18 -5 -22 3
                        -5 32 18 64 51 57 56 149 125 157 117 2 -2 -10 -31 -27 -64 -39 -72 -35 -102
                        12 -102 18 0 45 11 64 25 37 28 49 31 41 11 -7 -18 12 -36 38 -36 11 0 37 11
                        57 25 44 30 48 31 48 5 0 -52 90 -46 163 11 l37 30 0 -29 c0 -67 62 -71 148
                        -8 66 49 76 61 67 76 -4 7 -24 -5 -50 -29 -50 -46 -101 -75 -121 -67 -8 3 -14
                        19 -14 39 0 26 12 47 62 102 119 134 207 276 194 311 -12 31 -54 15 -101 -38z
                        m55 -24 c-23 -47 -165 -244 -176 -244 -3 0 19 46 48 102 48 92 133 206 145
                        194 3 -3 -5 -26 -17 -52z m-296 -223 c7 -11 -45 -57 -75 -66 -35 -11 -33 3 4
                        40 34 34 60 44 71 26z m-654 -21 c0 -11 -5 -20 -11 -20 -6 0 -31 -23 -56 -50
                        -50 -56 -81 -76 -94 -63 -13 13 28 88 67 123 42 36 94 42 94 10z"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                        />
                        <Motion.path
                            d="M1780 1155 c-19 -23 -1 -39 21 -19 10 9 19 21 19 26 0 13 -27 9 -40
            -7z"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 3, duration: 1.2, ease: "easeInOut" }}
                        />
                    </Motion.svg>

                    {/* Profile Image */}
                    <Motion.img
                        src={profile}
                        alt="Daniel Biodun-Kuti"
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-blue-400"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3, duration: 1, ease: "easeOut" }}
                    />
                </div>

                {/* Description text below */}
                <Motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4, duration: 0.8 }}
                    className="text-lg text-gray-200 max-w-2xl text-center mt-8"
                >
                    Crafting intelligent, interactive, and meaningful digital experiences through
                    code and design.
                </Motion.p>
                <div className="flex justify-center mt-8">
                    <Motion.a
                        href="#about"
                        className="px-6 py-3 bg-gradient-to-r from-blue-300 to-[#60A5FA] text-white rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4.5, duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View my Work
                    </Motion.a>
                </div>


            </section>


            {/* About Section */}
            <section id="about" className="px-8 py-20 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-[#60A5FA]">About Me</h3>
                <p className="text-gray-50 leading-relaxed">
                    I'm a Software Engineer with experience in Python, Java, and C#, currently exploring React and full-stack development.
                    I enjoy solving real-world problems and creating user-focused applications with clean, efficient code.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="px-8 py-20">
                <h3 className="text-3xl font-bold mb-8 text-center text-[#60A5FA]">Projects</h3>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-blue-600">
                    {[1,2,3].map((p) => (
                        <Motion.div key={p} whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-semibold mb-2">Project {p}</h4>
                            <p className="text-gray-600 mb-4">A brief description of this project, its purpose, and the technologies used.</p>
                            <a href="#" className="text-blue-600 font-medium hover:underline">View on GitHub →</a>
                        </Motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-8 py-20 text-center">
                <h3 className="text-3xl font-bold mb-6 text-[#60A5FA]">Get In Touch</h3>
                <p className="mb-8 max-w-xl mx-auto">
                    Have a project or collaboration in mind? I'd love to hear from you! Reach out anytime via email or LinkedIn.
                </p>
                <div className="space-x-4">
                    <a href="mailto:daniel@example.com" className="px-6 py-3 bg-linear-to-r from-blue-300 to-[#60A5FA] text-white rounded-xl shadow-md hover:bg-white">Email Me</a>
                    <a href="https://linkedin.com/in/danielbiodunkuti" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-linear-to-r from-[#60A5FA] to-blue-300  text-white rounded-xl shadow-md hover:bg-gray-900">LinkedIn</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 text-gray-500 text-sm border-t">
                © {new Date().getFullYear()} Daniel Biodun-Kuti. All rights reserved.
            </footer>
        </div>
    )
}
