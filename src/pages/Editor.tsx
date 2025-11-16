import { useState, useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import yaml from 'js-yaml'
import Navbar from '../components/Navbar'
import CertificatePreview from '../components/CertificatePreview'
import SignatureModal from '../components/SignatureModal'
import { generatePDF } from '../utils/pdfGenerator'
import { CertificateData } from '../types'
import { saveWork, updateWork, getWorkById } from '../utils/localStorage'

// Generate default signature
const generateDefaultSignature = (name: string): string => {
  const canvas = document.createElement('canvas')
  canvas.width = 400
  canvas.height = 100
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = '300 36px "Brush Script MT", cursive'
    ctx.fillStyle = 'black'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillText(name, 10, canvas.height / 2)
    return canvas.toDataURL()
  }
  return ''
}

const defaultSignature = generateDefaultSignature('Sarah Johnson')

const defaultYaml = `# Certificate Configuration
company:
  name: "Pied Piper"
  logo: ""  # Add company logo URL (optional)
  address: "Tech Tower, Sector 62, Noida 201301"
  email: "hr@techcorp.com"
  phone: "+91 120-4567890"

date: "December 15, 2024"

certificate:
  title: "CERTIFICATE FOR INTERNSHIP"

salutation: "To Whom It May Concern:"

intro:
  text: "This is to certify that"
  internName: "John Doe"
  companyName: "Pied Piper"
  startDate: "June 1, 2024"
  endDate: "December 15, 2024"

project:
  heading: "During the Internship program John Doe has worked on the below Project and Tasks."
  name: "E-Commerce Platform Development"
  description: "Developed a full-stack e-commerce web application with modern UI/UX design, implementing responsive layouts, dynamic product catalogs, and shopping cart functionality using React and Next.js."
  datasetDescription: "Project scope: Multi-page responsive web application with user authentication and product management system."

tasks:
  heading: "Tasks performed by the intern:"
  items:
    - "Designed and implemented responsive UI components using React and Tailwind CSS"
    - "Built server-side rendered pages and API routes using Next.js framework"
    - "Integrated RESTful APIs for product catalog and user management"
    - "Implemented state management using React Context API and custom hooks"
    - "Created reusable component library following atomic design principles"

techStack:
  heading: "Tech Stack used"
  text: "React 18, Next.js 14, TypeScript, Tailwind CSS, Node.js, and Git"

closing: "We wish them all the best for their future endeavours."

signatory:
  closing: "Sincerely,"
  signature: "${defaultSignature}"
  name: "Sarah Johnson"
  title: "Chief Technology Officer"

footer:
  line1: "TechCorp Solutions Pvt Ltd | Tech Tower, 10th Floor, Building No.29 | Sector 62, Noida Technology Park | Noida 201301, Uttar Pradesh | India"
  line2: "+91 120-4567890 | Fax +91 120-4567891 | www.techcorp.com | careers@techcorp.com"
  line3: "CIN: U72200UP2015PTC065432 | HR Department: hr@techcorp.com | Engineering: engineering@techcorp.com"
`

function Editor() {
  const navigate = useNavigate()
  const { templateId } = useParams<{ templateId: string }>()
  const [searchParams] = useSearchParams()
  const workId = searchParams.get('workId')

  const [yamlContent, setYamlContent] = useState(defaultYaml)
  const [parsedData, setParsedData] = useState<CertificateData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showSignatureModal, setShowSignatureModal] = useState(false)
  const [showEditor, setShowEditor] = useState(true)
  const [currentWorkId, setCurrentWorkId] = useState<string | null>(workId)
  const [certificateName, setCertificateName] = useState('')
  const [showSaveDialog, setShowSaveDialog] = useState(false)

  useEffect(() => {
    if (workId) {
      const work = getWorkById(workId)
      if (work) {
        setYamlContent(work.yamlContent)
        setCertificateName(work.name)
        setCurrentWorkId(work.id)
      }
    }
  }, [workId])

  useEffect(() => {
    parseYaml(yamlContent)
  }, [yamlContent])

  useEffect(() => {
    const autoSave = setTimeout(() => {
      if (currentWorkId && parsedData) {
        updateWork(currentWorkId, { yamlContent, name: certificateName || 'Untitled Certificate' })
      }
    }, 2000)
    return () => clearTimeout(autoSave)
  }, [yamlContent, currentWorkId, certificateName, parsedData])

  const parseYaml = (content: string) => {
    try {
      const data = yaml.load(content) as CertificateData
      setParsedData(data)
      setError(null)
    } catch (err) {
      setError(`YAML Error: ${(err as Error).message}`)
      setParsedData(null)
    }
  }

  const handleYamlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setYamlContent(e.target.value)
  }

  const handleSignatureSave = (signatureDataUrl: string) => {
    const updatedYaml = yamlContent.replace(
      /signature:\s*"[^"]*"/,
      `signature: "${signatureDataUrl}"`
    )
    setYamlContent(updatedYaml)
    setShowSignatureModal(false)
  }

  const handleDownloadPDF = async () => {
    if (parsedData) {
      await generatePDF(parsedData)
    }
  }

  const handleSave = () => {
    if (!currentWorkId) {
      setShowSaveDialog(true)
    }
  }

  const handleSaveConfirm = () => {
    if (templateId) {
      const work = saveWork({
        templateId,
        name: certificateName || 'Untitled Certificate',
        yamlContent
      })
      setCurrentWorkId(work.id)
      setShowSaveDialog(false)
      alert('Certificate saved successfully!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <Navbar />

      <div className="max-w-[1800px] mx-auto p-4">
        <div className="bg-white dark:bg-neutral-800 rounded overflow-hidden shadow-2xl">
          <div className="bg-red-600 text-white px-6 py-5 flex flex-wrap justify-between items-center gap-4">
            <h2 className="text-2xl font-bold">Certificate Editor</h2>
            <div className="flex gap-4 flex-wrap items-center">
              {/* Toggle Switch */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Editor</span>
                <button
                  onClick={() => setShowEditor(!showEditor)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${showEditor ? 'bg-green-500' : 'bg-white/30'
                    }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${showEditor ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
              </div>
              <button
                className="px-6 py-2.5 bg-white text-red-600 rounded font-semibold 
                           hover:bg-gray-100 transition-colors shadow-md"
                onClick={handleSave}
              >
                {currentWorkId ? '✓ Saved' : 'Save'}
              </button>
              <button
                className="px-6 py-2.5 bg-white text-red-600 rounded font-semibold 
                           hover:bg-gray-100 transition-colors shadow-md"
                onClick={() => setShowSignatureModal(true)}
              >
                Add Signature
              </button>
              <button
                className="px-6 py-2.5 bg-white text-red-600 rounded font-semibold 
                           hover:bg-gray-100 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleDownloadPDF}
                disabled={!parsedData}
              >
                Download PDF
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-900/50 border-l-4 border-red-500 text-red-200 px-5 py-3 mx-5 my-3 rounded">
              {error}
            </div>
          )}

          <div className={`grid ${showEditor ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1'} min-h-[calc(100vh-140px)]`}>
            {showEditor && (
              <div className="border-r border-gray-200 dark:border-neutral-700 flex flex-col lg:col-span-1">
                <div className="bg-gray-100 dark:bg-neutral-700 px-5 py-4 border-b border-gray-200 dark:border-neutral-600 font-bold text-gray-900 dark:text-white">
                  YAML Editor
                </div>
                <div className="flex-1 p-5 bg-white dark:bg-neutral-800">
                  <textarea
                    value={yamlContent}
                    onChange={handleYamlChange}
                    spellCheck={false}
                    className="w-full h-full min-h-[500px] font-mono text-sm bg-gray-50 dark:bg-neutral-900 
                               text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-neutral-700 
                               rounded p-4 focus:outline-none focus:ring-2 focus:ring-red-500 resize-y"
                  />
                </div>
              </div>
            )}

            <div className={`flex flex-col ${showEditor ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
              <div className="bg-gray-100 dark:bg-neutral-700 px-5 py-4 border-b border-gray-200 dark:border-neutral-600 font-bold text-gray-900 dark:text-white">
                Preview
              </div>
              <div className="flex-1 p-5 bg-gray-100 dark:bg-neutral-900 overflow-auto flex justify-center items-start">
                {parsedData && <CertificatePreview data={parsedData} />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSignatureModal && (
        <SignatureModal
          onSave={handleSignatureSave}
          onClose={() => setShowSignatureModal(false)}
          signatoryName={parsedData?.signatory?.name || ''}
        />
      )}

      {showSaveDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-neutral-800 rounded p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Save Certificate</h2>
            <input
              type="text"
              value={certificateName}
              onChange={(e) => setCertificateName(e.target.value)}
              placeholder="Enter certificate name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded mb-4 
                         bg-white dark:bg-neutral-900 text-gray-900 dark:text-white"
            />
            <div className="flex gap-3 justify-end">
              <button
                className="px-5 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 
                           rounded font-semibold hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors"
                onClick={() => setShowSaveDialog(false)}
              >
                Cancel
              </button>
              <button
                className="px-5 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition-colors"
                onClick={handleSaveConfirm}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Editor
