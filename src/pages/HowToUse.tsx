import Navbar from '../components/Navbar'
import { PageChanger } from '../components/PageChanger'
import { useNavigate } from 'react-router-dom'

function HowToUse() {
    const navigate = useNavigate()

    return (
        <PageChanger>
            <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
                <Navbar />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            How to Use
                        </h1>
                        <p className="text-sm xl:text-base text-gray-600 dark:text-gray-400">
                            Follow these simple steps to create professional internship certificates
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="space-y-12 text-sm xl:text-base">
                        {/* Step 1 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    1
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Choose a Template
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Click on "Get Started" from the home page and select a certificate template that suits your needs.
                                    </p>
                                    <button
                                        onClick={() => navigate('/templates')}
                                        className="text-red-600 dark:text-red-400 font-semibold hover:underline"
                                    >
                                        Browse Templates →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    2
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Edit Certificate Content
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        All the content for your certificate is written in a simple YAML file. You just need to change the text between the quotation marks to edit the content of certificate.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        On the left side, you'll see the YAML editor where you can change things like:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                                        <li>Company name, logo, and contact information</li>
                                        <li>Intern's name, position, and internship dates</li>
                                        <li>Project description and responsibilities</li>
                                        <li>Technologies used and skills</li>
                                        <li>Signatory name and title</li>
                                    </ul>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        As you type and make changes in the YAML editor, you'll see the certificate update instantly on the right side. It's that simple!
                                    </p>
                                    <div className="bg-gray-100 dark:bg-neutral-900 rounded p-4 font-mono text-sm text-gray-800 dark:text-gray-300 mb-3">
                                        <code>
                                            company:<br />
                                            &nbsp;&nbsp;name: "Your Company"<br />
                                            &nbsp;&nbsp;email: "contact@company.com"<br />
                                            <br />
                                            intro:<br />
                                            &nbsp;&nbsp;internName: "John Doe"<br />
                                            &nbsp;&nbsp;position: "Software Intern"
                                        </code>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                                        Tip: Just replace the text inside the quotes with your own information. Keep the structure the same!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    3
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Customize Theme Color
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Use the "Theme Color" picker in the toolbar to change the certificate's border and logo color. Click on the color box to choose any color you want - perfect for matching your company's brand!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    4
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Add Signature
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Click the "Add Signature" button to add a digital signature. You can:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>Draw your signature using mouse or touch</li>
                                        <li>Use the default text-based signature</li>
                                        <li>Upload a signature image</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    5
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Preview Your Certificate
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        The preview panel on the right shows your certificate in real-time as you make changes. Toggle the editor on/off using the switch to see a full preview.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    6
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Preview Your Certificate
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        The preview panel on the right shows your certificate in real-time as you make changes. Toggle the editor on/off using the switch to see a full preview.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    7
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Save Your Work
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Click "Save" to store your certificate in the browser. Give it a name so you can easily find it later in "My Work".
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 8 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    8
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Download as PDF
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        When you're satisfied with your certificate, click "Download PDF". The certificate will open in a new tab where you can preview and download it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

          

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => navigate('/templates')}
                            className="bg-red-600 hover:bg-red-700 text-white px-10 py-2 text-base font-normal rounded transition-colors shadow-lg"
                        >
                            Start Creating
                        </button>
                    </div>
                </div>
            </div>
        </PageChanger>
    )
}

export default HowToUse
