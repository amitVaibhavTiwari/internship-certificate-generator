import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { CertificateData } from '../types'

export async function generatePDF(data: CertificateData): Promise<void> {
  const certificateElement = document.getElementById('certificate-preview')

  if (!certificateElement) {
    console.error('Certificate preview element not found')
    return
  }

  try {
    // Capture the certificate as canvas
    const canvas = await html2canvas(certificateElement, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true
    })

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
  }
}
