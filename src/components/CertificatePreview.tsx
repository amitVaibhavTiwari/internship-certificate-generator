import { CertificateData } from '../types'

interface CertificatePreviewProps {
  data: CertificateData
  isPdfMode?: boolean
}

function CertificatePreview({ data, isPdfMode = false }: CertificatePreviewProps) {
  const themeColor = data.themeColor || '#dc2626' // Default to red-600
  
  return (
    // <div
    //   id="certificate-preview"
    //   className="bg-white w-[210mm] h-[297mm] shadow-2xl relative"
    //   style={{ fontFamily: 'Times New Roman, serif' }}
    // >
    <div
      id="certificate-preview"
      className="bg-white shadow-2xl relative"
      style={{
        width: "794px",
        minHeight: "1123px",
        fontFamily: "Times New Roman, serif"
      }}
    >
      {/* Main Content Area with Padding */}
      <div className="px-16 pt-12 pb-20">
        {/* Header with Logo and Contact Info */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-end gap-3">
            {data.company.logo ? (
              <img src={data.company.logo} alt="Company Logo" className="h-16 object-contain" />
            ) : (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded" style={{ backgroundColor: themeColor }}>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <span 
                    style={{ marginTop: isPdfMode ? '-17px' : '14px' }}
                  className="text-3xl font-bold text-black tracking-wide block leading-tight">{data.company.name}</span>
                </div>
              </div>
            )}
          </div>
          <div className="text-right text-xs text-black font-medium self-start">
            <p className="mb-1">{data.company.address}</p>
            <p className="mb-1">{data.company.email}</p>
            <p>{data.company.phone}</p>
          </div>
        </div>

        {/* Date */}
        <p className="text-black text-sm mb-10 font-medium">{data.date}</p>

        {/* Certificate Title */}
        <div className="mb-10">
          <div className="border-t-2 border-b-2" style={{ borderColor: themeColor }}>
            <div
              style={{ margin: isPdfMode ? '0px 0 18px 0' : '8px 0 8px 0' }}
            className="text-center text-black text-lg font-bold tracking-wide uppercase">
              {data.certificate.title}
            </div>
          </div>
        </div>

        {/* Salutation */}
        <p className="text-black text-sm mb-5 font-semibold">{data.salutation}</p>

        {/* Introduction */}
        <p className="text-black text-sm mb-5 leading-relaxed">
          {data.intro.text} <strong>{data.intro.internName}</strong> has served as a <strong>{data.intro.position}</strong> at {data.intro.companyName} from <strong>{data.intro.startDate}</strong> to <strong>{data.intro.endDate}</strong>.
        </p>

        {/* Project Section */}
        <p className="text-black text-sm mb-5 leading-relaxed">
          {data.project.heading}
        </p>

        {/* Tasks Section */}
        <p className="text-black text-sm mb-2">{data.tasks.heading}</p>
        <div className="mb-5 text-black text-sm space-y-1 pl-2">
          {data.tasks.items.map((task, index) => (
            <div key={index} className="flex gap-2 leading-relaxed">
              <span className="flex-shrink-0">{task.number}</span>
              <span>{task.text}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <p className="text-black text-sm mb-5 leading-relaxed">
          {data.techStack.heading} – {data.techStack.text}
        </p>

        {/* Closing */}
        <p className="text-black text-sm mb-5">{data.closing}</p>

        {/* Character Reference */}
        <p className="text-black text-sm mb-5 leading-relaxed">{data.character.text}</p>

        {/* Wishes */}
        <p className="text-black text-sm mb-6">{data.wishes}</p>

        {/* Signature Section */}
        <div className="mb-4 w-fit">
          <p className="text-black text-sm mb-1">{data.signatory.closing}</p>
          {data.signatory.signature && (
            <img
              src={data.signatory.signature}
              alt="Signature"
              className="h-12 max-w-[250px] block"
              style={{ marginBottom: isPdfMode ? '-17px' : '-6px' }}
            />
          )}
          <p className="text-black text-sm font-normal">{data.signatory.name}</p>
          <p className="text-black text-sm">{data.signatory.title}</p>
        </div>
      </div>

      {/* Footer - Fixed at Bottom, Full Width */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-300 pt-2 pb-6 text-center bg-white">
        <p className="text-gray-500 text-xs leading-tight mb-0.5">{data.footer.line1}</p>
        <p className="text-gray-500 text-xs leading-tight mb-0.5">{data.footer.line2}</p>
        <p className="text-gray-500 text-xs leading-tight">{data.footer.line3}</p>
      </div>
    </div>
  )
}

export default CertificatePreview
