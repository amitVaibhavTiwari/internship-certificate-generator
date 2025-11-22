import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import { PageChanger } from '../components/PageChanger'

function Home() {
    const navigate = useNavigate()

    return (
        <PageChanger>
            <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
                <Navbar />

                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                            Internship Certificate Generator
                        </h1>
                        <p className="text-xl md:text-2xl mb-5 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                            Create professional internship certificates with ease
                        </p>
                        <p className="text-base md:text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Choose a Template,  Customize, add digital signatures, and download as PDF
                        </p>

                        <div className="mb-8">
                            <p className="text-sm md:text-base max-w-[600px] mx-auto text-gray-600 dark:text-gray-400 mb-4 flex items-center justify-center gap-2">
                                <span>Mobiles and Tablets can also be used but using a <span className='font-black italic text-black dark:text-white'>laptop</span> with chromium based browser (Chrome, Brave etc.) is highly recommended for the best experience</span>
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 mt-16 justify-center flex-wrap">
                            <button
                                className="bg-red-600 hover:bg-red-700 text-white 
                                     px-10 py-3 text-base font-bold rounded transition-colors shadow-lg"
                                onClick={() => navigate('/templates')}
                            >
                                Get Started
                            </button>
                            <button
                                className="bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 
                                     text-gray-900 dark:text-white px-10 py-3 text-base font-bold rounded 
                                     transition-colors  border border-gray-300 dark:border-neutral-700"
                                onClick={() => navigate('/my-work')}
                            >
                                My Saved Work
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

                <div className="max-w-4xl -mt-8 mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-white dark:bg-neutral-800 p-8 text-center">
                        <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            How to use?
                        </h2>
                        <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                            Check out our step-by-step guide to learn how to create professional certificates
                        </p>
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white 
                                 px-8 py-3 text-sm font-normal rounded transition-colors shadow-lg"
                            onClick={() => navigate('/how-to-use')}
                        >
                            View Guide
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="border-t border-gray-200 dark:border-neutral-800 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center gap-3">
                            {/* <p className="text-center text-gray-600 dark:text-gray-400">
                                Made with ❤️ by{' '}
                                <a
                                    href="https://avadheshtyagi.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-600 dark:text-red-400 font-semibold hover:underline"
                                >
                                    AVT
                                </a>
                            </p> */}
                            <p className="text-center text-sm text-gray-500 dark:text-gray-500">
                                Developer? Want to contribute?{' '}
                                <a
                                    href="https://github.com/amitVaibhavTiwari/internship-certificate-generator"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-600 dark:text-red-400 font-semibold hover:underline inline-flex items-center gap-1"
                                >
                                    Check out GitHub
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>

            </div>
        </PageChanger>
    )
}

export default Home
