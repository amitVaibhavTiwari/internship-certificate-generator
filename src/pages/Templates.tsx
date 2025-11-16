import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Template } from '../types'
import { FileText } from 'lucide-react'

function Templates() {
  const navigate = useNavigate()

  const templates: Template[] = [
    {
      id: 'professional',
      name: 'Professional Certificate',
      description: 'A clean and professional certificate template with company branding'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-gray-900 dark:text-white text-center text-4xl md:text-5xl font-bold mb-8">
          Choose a Template
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {templates.map(template => (
            <div
              key={template.id}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 
                         rounded p-6 cursor-pointer transition-all duration-300 
                         hover:shadow-2xl hover:border-red-500 shadow-lg"
              onClick={() => navigate(`/editor/${template.id}`)}
            >
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 
                              dark:from-neutral-700 dark:to-neutral-600 rounded flex items-center 
                              justify-center mb-4 border-2 border-gray-200 dark:border-neutral-600">
                <FileText className="w-20 h-20 text-red-600" />
              </div>
              <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-2">{template.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{template.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Templates
