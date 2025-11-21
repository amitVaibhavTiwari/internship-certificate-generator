import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Template } from '../types'

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
                         rounded overflow-hidden cursor-pointer transition-all duration-300 
                         hover:shadow-2xl hover:border-red-500 shadow-lg"
              onClick={() => navigate(`/editor/${template.id}`)}
            >
              <div className="w-full h-64 bg-gray-100 dark:bg-neutral-700 flex items-center justify-center overflow-hidden">
                <img
                  src="./template_preview/template_1.png"
                  alt={template.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-2">{template.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Templates
