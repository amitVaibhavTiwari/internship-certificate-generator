import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

function Navbar() {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ICG
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}

              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
