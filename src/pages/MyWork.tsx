import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getSavedWorks, deleteWork, SavedWork } from '../utils/localStorage'
import { PageChanger } from '../components/PageChanger'

function MyWork() {
  const navigate = useNavigate()
  const [works, setWorks] = useState<SavedWork[]>([])

  useEffect(() => {
    setWorks(getSavedWorks())
  }, [])

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this certificate?')) {
      deleteWork(id)
      setWorks(getSavedWorks())
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <PageChanger>
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Work</h1>
          <button
            onClick={() => navigate('/templates')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold 
                       transition-colors shadow-lg"
          >
            Create New
          </button>
        </div>

        {works.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📄</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">No certificates yet</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Start creating your first certificate
            </p>
            <button
              onClick={() => navigate('/templates')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold 
                         transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Get Started
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map(work => (
              <div
                key={work.id}
                className="bg-white dark:bg-neutral-800 rounded shadow hover:shadow-lg 
                           transition-all border border-gray-200 dark:border-neutral-700"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {work.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Template: {work.templateId}
                      </p>
                    </div>
                    <span className="text-2xl">📜</span>
                  </div>
                  
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <p>Created: {formatDate(work.createdAt)}</p>
                    <p>Updated: {formatDate(work.updatedAt)}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/editor/${work.templateId}?workId=${work.id}`)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded 
                                 font-semibold transition-colors text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(work.id)}
                      className="px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 
                                 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-neutral-600 
                                 transition-colors text-sm font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </PageChanger>
  )
}

export default MyWork
