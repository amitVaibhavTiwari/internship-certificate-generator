import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { CertificateData } from '../types'
import { createRoot } from 'react-dom/client'
import CertificatePreview from '../components/CertificatePreview'

export async function generatePDF(data: CertificateData): Promise<void> {
  // Create a temporary container
  const tempContainer = document.createElement('div')
  tempContainer.style.position = 'absolute'
  tempContainer.style.left = '-9999px'
  tempContainer.style.top = '0'
  document.body.appendChild(tempContainer)

  try {
    // Render certificate with PDF mode enabled
    const root = createRoot(tempContainer)
    root.render(<CertificatePreview data={data} isPdfMode={true} />)

    // Wait for render to complete
    await new Promise(resolve => setTimeout(resolve, 100))

    const certificateElement = tempContainer.querySelector('#certificate-preview') as HTMLElement

    if (!certificateElement) {
      console.error('Certificate preview element not found')
      return
    }

    // Capture the certificate as canvas
    const canvas = await html2canvas(certificateElement, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true
    })

    // Cleanup
    root.unmount()
    document.body.removeChild(tempContainer)

    // Create PDF in portrait mode (A4)
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    const imgData = canvas.toDataURL('image/png')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)

    const pdfBlob = pdf.output('blob')
    const pdfUrl = URL.createObjectURL(pdfBlob)
    window.open(pdfUrl, '_blank')
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('Failed to generate PDF. Please try again.')
    // Cleanup on error
    if (document.body.contains(tempContainer)) {
      document.body.removeChild(tempContainer)
    }
  }
}
