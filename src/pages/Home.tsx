import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import {  Zap, PenTool, Save } from 'lucide-react'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        Internship Certificate Generator
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Create professional internship certificates with ease
                    </p>
                    <p className="text-base md:text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Customize using YAML, add digital signatures, and download as PDF
                    </p>

                    {/* Laptop Recommendation */}
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center justify-center gap-2">
                            <span>Using a laptop with chromium based browser (Chrome, Brave etc.) is highly recommended for the best experience</span>
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white 
                                     px-10 py-4 text-xl font-bold rounded transition-colors shadow-lg"
                            onClick={() => navigate('/templates')}
                        >
                            Get Started
                        </button>
                        <button
                            className="bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 
                                     text-gray-900 dark:text-white px-10 py-4 text-xl font-bold rounded 
                                     transition-colors shadow-lg border-2 border-gray-300 dark:border-neutral-700"
                            onClick={() => navigate('/my-work')}
                        >
                            My Work
                        </button>
                    </div>
                </div>

                {/* Features */}
                {/* <div className="grid md:grid-cols-3 gap-8 mt-20">
                    <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded shadow">
                        <div className="flex justify-center mb-4">
                            <Zap className="w-12 h-12 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Fast & Easy</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Generate certificates in minutes with our intuitive YAML editor
                        </p>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded shadow">
                        <div className="flex justify-center mb-4">
                            <PenTool className="w-12 h-12 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Digital Signatures</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Add your signature by drawing or using your name
                        </p>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded shadow">
                        <div className="flex justify-center mb-4">
                            <Save className="w-12 h-12 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Auto-Save</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Your work is automatically saved in your browser
                        </p>
                    </div>
                </div> */}
            </div>

            <FAQ />

            
        </div>
    )
}

export default Home
