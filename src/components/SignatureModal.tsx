import { useRef, useEffect, useState } from 'react'
import SignaturePad from 'signature_pad'

interface SignatureModalProps {
  onSave: (signatureDataUrl: string) => void
  onClose: () => void
  signatoryName: string
}

function SignatureModal({ onSave, onClose, signatoryName }: SignatureModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const signaturePadRef = useRef<SignaturePad | null>(null)
  const [useText, setUseText] = useState(false)

  useEffect(() => {
    if (canvasRef.current && !useText) {
      signaturePadRef.current = new SignaturePad(canvasRef.current, {
        backgroundColor: 'rgb(255, 255, 255)',
        penColor: 'rgb(0, 0, 0)'
      })
    }

    return () => {
      if (signaturePadRef.current) {
        signaturePadRef.current.off()
      }
    }
  }, [useText])

  const handleClear = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear()
    }
  }

  const handleSave = () => {
    if (useText) {
      // Generate text-based signature
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
        ctx.fillText(signatoryName, 10, canvas.height / 2)
        onSave(canvas.toDataURL())
      }
    } else if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
      onSave(signaturePadRef.current.toDataURL())
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded p-6 max-w-2xl w-full shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add Signature</h2>
        
        <div className="mb-4 flex gap-4">
          <button
            className={`px-4 py-2 rounded font-semibold transition-all ${
              !useText 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-neutral-600'
            }`}
            onClick={() => setUseText(false)}
          >
            Draw Signature
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold transition-all ${
              useText 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-neutral-600'
            }`}
            onClick={() => setUseText(true)}
          >
            Use Name as Signature
          </button>
        </div>

        {useText ? (
          <div className="border-2 border-gray-300 dark:border-neutral-600 rounded p-8 mb-4 bg-white h-48 
                          flex items-center justify-start">
            <p className="text-4xl text-black font-light" style={{ fontFamily: '"Brush Script MT", cursive' }}>
              {signatoryName}
            </p>
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            width={600}
            height={200}
            className="border-2 border-gray-300 dark:border-neutral-600 rounded mb-4 w-full cursor-crosshair"
          />
        )}

        <div className="flex gap-3 justify-end">
          {!useText && (
            <button
              className="px-5 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 
                         rounded font-semibold hover:bg-gray-300 dark:hover:bg-neutral-600 transition-all"
              onClick={handleClear}
            >
              Clear
            </button>
          )}
          <button
            className="px-5 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 
                       rounded font-semibold hover:bg-gray-300 dark:hover:bg-neutral-600 transition-all"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-red-600 text-white rounded font-semibold 
                       hover:bg-red-700 transition-all"
            onClick={handleSave}
          >
            Save Signature
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignatureModal
