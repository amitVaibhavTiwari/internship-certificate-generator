export interface SavedWork {
  id: string
  templateId: string
  name: string
  yamlContent: string
  createdAt: string
  updatedAt: string
}

const STORAGE_KEY = 'certificate_works'

export function getSavedWorks(): SavedWork[] {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : []
}

export function saveWork(work: Omit<SavedWork, 'id' | 'createdAt' | 'updatedAt'>): SavedWork {
  const works = getSavedWorks()
  const newWork: SavedWork = {
    ...work,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  works.push(newWork)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(works))
  return newWork
}

export function updateWork(id: string, updates: Partial<SavedWork>): void {
  const works = getSavedWorks()
  const index = works.findIndex(w => w.id === id)
  if (index !== -1) {
    works[index] = { ...works[index], ...updates, updatedAt: new Date().toISOString() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(works))
  }
}

export function deleteWork(id: string): void {
  const works = getSavedWorks().filter(w => w.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(works))
}

export function getWorkById(id: string): SavedWork | undefined {
  return getSavedWorks().find(w => w.id === id)
}
