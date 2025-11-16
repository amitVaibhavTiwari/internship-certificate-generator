import React from 'react'
import { CertificateData } from '../types'

interface CertificatePreviewProps {
  data: CertificateData
}

function CertificatePreview({ data }: CertificatePreviewProps) {
  return (
    <div 
      id="certificate-preview"
      className="bg-white w-[210mm] h-[297mm] shadow-2xl relative"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      {/* Main Content Area with Padding */}
      <div className="px-16 pt-12 pb-20">
        {/* Header with Logo and Contact Info */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            {data.company.logo ? (
              <img src={data.company.logo} alt="Company Logo" className="h-16 object-contain" />
            ) : (
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded">
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
                  <span className="text-3xl font-bold text-black tracking-wide block leading-tight">{data.company.name}</span>
                </div>
              </div>
            )}
          </div>
          <div className="text-right text-xs text-black font-medium">
            <p className="mb-1">{data.company.address}</p>
            <p className="mb-1">{data.company.email}</p>
            <p>{data.company.phone}</p>
          </div>
        </div>

        {/* Date */}
        <p className="text-black text-sm mb-10 font-medium">{data.date}</p>

        {/* Certificate Title */}
        <div className="mb-10">
          <div className="border-t-2 border-b-2 border-red-600 py-2">
            <h1 className="text-center text-black text-lg font-bold tracking-wide uppercase">
              {data.certificate.title}
            </h1>
          </div>
        </div>

        {/* Salutation */}
        <p className="text-black text-sm mb-5">{data.salutation}</p>

        {/* Introduction */}
        <p className="text-black text-sm mb-5 leading-relaxed">
          {data.intro.text} <strong>{data.intro.internName}</strong>, has successfully completed the internship program at {data.intro.companyName} from <strong>{data.intro.startDate}</strong>, to <strong>{data.intro.endDate}</strong>.
        </p>

        {/* Project Section */}
        <p className="text-black text-sm mb-4 leading-relaxed">
          {data.project.heading} Project Name: <strong>{data.project.name}</strong>
        </p>

        <p className="text-black text-sm mb-4 leading-relaxed">
          {data.project.description}
        </p>

        <p className="text-black text-sm mb-4 leading-relaxed">
          {data.project.datasetDescription}
        </p>

        {/* Tasks Section */}
        <p className="text-black text-sm mb-2">{data.tasks.heading}</p>
        <ol className="list-decimal list-inside mb-5 text-black text-sm space-y-1 pl-2">
          {data.tasks.items.map((task, index) => (
            <li key={index} className="leading-relaxed">{task}</li>
          ))}
        </ol>

        {/* Tech Stack */}
        <p className="text-black text-sm mb-5 leading-relaxed">
          {data.techStack.heading} – {data.techStack.text}
        </p>

        {/* Closing */}
        <p className="text-black text-sm mb-8">{data.closing}</p>

        {/* Signature Section */}
        <div className="mb-6 w-fit">
          <p className="text-black text-sm mb-4">{data.signatory.closing}</p>
          {data.signatory.signature && (
            <img 
              src={data.signatory.signature} 
              alt="Signature" 
              className="h-12 mb-2 max-w-[200px]"
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
