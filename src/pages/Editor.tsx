import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
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

const defaultSignature = generateDefaultSignature('Ava Tyagi')

const defaultYaml = `# Certificate Configuration
company:
  name: "Pied Piper"
  logo: ""  # Add company logo URL (optional)
  address: "Tech Tower, Sector 62, Noida 201301"
  email: "contact@piedpiper.com"
  phone: "+91 120-4567890"

date: "November 3, 2025"

certificate:
  title: "CERTIFICATE FOR INTERNSHIP"

salutation: "To Whomsoever It May Concern,"

intro:
  text: "This is to certify that"
  internName: "Jesse Pinkman"
  position: "Frontend Developer Intern"
  companyName: "Pied Piper"
  startDate: "May 1, 2025"
  endDate: "October 31, 2025"

project:
  heading: "During the tenure of internship, Jesse Pinkman actively contributed to multiple projects at Pied Piper and demonstrated strong learning ability, adaptability, and a wide range of talents that added value to the team."
  name: ""
  description: ""
  datasetDescription: ""

tasks:
  heading: "Key responsibilities included:"
  items:
    - "Designed and implemented responsive UI components"
    - "Built server-side rendered pages and API routes"
    - "Integrated RESTful APIs for product management"
    - "Collaborated with the team on code reviews and testing"

techStack:
  heading: "Tech Stack used"
  text: "React, Next.js, TypeScript, Tailwind CSS, and Node.js"

closing: ""

character:
  text: "He is amiable in nature and his character is commendable. We have no objection to him pursuing any better position and he has no liabilities with our company."

wishes: "We wish him success in all his future endeavours."

signatory:
  closing: "Sincerely,"
  signature: "${defaultSignature}"
  name: "Ava Tyagi"
  title: "Vice President – Human Resources"

footer:
  line1: "Pied Piper Pvt Ltd | Tech Tower, 10th Floor, Building No.29 | Sector 62, Noida Technology Park | Noida 201301, Uttar Pradesh | India"
  line2: "+91 9204567890 | Fax +91 120-4567891 | www.piedpiper.com | careers@piedpiper.com"
  line3: "CIN: U72200UP2015PTC0611112 | contact@piedpiper.com"
`

function Editor() {
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
    } else {
      setShowSaveDialog(true)
    }
  }

  const handleSaveConfirm = () => {
    if (currentWorkId) {
      updateWork(currentWorkId, {
        yamlContent,
        name: certificateName || 'Untitled Certificate'
      })
      setShowSaveDialog(false)
      alert('Certificate updated successfully!')
    } else if (templateId) {
      const work = saveWork({
        templateId,
        name: certificateName || 'Untitled Certificate',
        yamlContent
      })
      setCurrentWorkId(work.id)
      setCertificateName(certificateName || 'Untitled Certificate')
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
                Save
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {currentWorkId ? 'Update Certificate' : 'Save Certificate'}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Enter a name for your certificate
            </p>
            <input
              type="text"
              value={certificateName}
              onChange={(e) => setCertificateName(e.target.value)}
              placeholder="Enter certificate name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded mb-4 
                         bg-white dark:bg-neutral-900 text-gray-900 dark:text-white"
              autoFocus
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
