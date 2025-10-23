import { motion as Motion } from 'framer-motion'

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-blue-600">Daniel Biodun-Kuti</h1>
                <ul className="flex space-x-6">
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col justify-center items-center text-center py-24 bg-gradient-to-b from-blue-50 to-white">
                <Motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-extrabold mb-4">
                    Hi, I'm <span className="text-blue-600">Daniel</span>
                </Motion.h2>
                <Motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-gray-600 max-w-xl">
                    A passionate Software Engineer crafting intelligent and engaging digital experiences.
                </Motion.p>
                <Motion.a href="#projects" whileHover={{ scale: 1.05 }} className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">
                    View My Work
                </Motion.a>
            </section>

            {/* About Section */}
            <section id="about" className="px-8 py-20 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-blue-600">About Me</h3>
                <p className="text-gray-700 leading-relaxed">
                    I'm a Software Engineer with experience in Python, Java, and C#, currently exploring React and full-stack development.
                    I enjoy solving real-world problems and creating user-focused applications with clean, efficient code.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="px-8 py-20 bg-gray-100">
                <h3 className="text-3xl font-bold mb-8 text-center text-blue-600">Projects</h3>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <h3 className="text-3xl font-bold mb-6 text-blue-600">Get In Touch</h3>
                <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                    Have a project or collaboration in mind? I'd love to hear from you! Reach out anytime via email or LinkedIn.
                </p>
                <div className="space-x-4">
                    <a href="mailto:daniel@example.com" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">Email Me</a>
                    <a href="https://linkedin.com/in/danielbiodunkuti" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-900">LinkedIn</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 text-gray-500 text-sm border-t">
                © {new Date().getFullYear()} Daniel Biodun-Kuti. All rights reserved.
            </footer>
        </div>
    )
}
