import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 dark:border-neutral-700 rounded overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white dark:bg-neutral-800 hover:bg-gray-50 
                   dark:hover:bg-neutral-750 transition-colors flex justify-between items-center"
      >
        <span className="font-semibold text-gray-900 dark:text-white">{question}</span>
        <span className="text-2xl text-gray-600 dark:text-gray-400">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-neutral-900 text-gray-700 dark:text-gray-300">
          {answer.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

function FAQ() {
  const faqs = [
    {
      question: 'What is the Internship Certificate Generator?',
      answer: 'The Internship Certificate Generator is a web-based tool that allows you to create professional internship certificates quickly and easily. You can customize all aspects of the certificate using YAML configuration, add digital signatures, and download the final certificate as a PDF.'
    },
    {
      question: 'Why have you built such a platform to generate internship certificates?',
      answer: 'It\'s a satirical tool that replicates the paid "internship certificates" sold by numerous online companies targeting Tier-3/4 college students. Many students are required by their colleges to submit an internship completion certificate to earn credits, even when genuine opportunities are unavailable.\n\nThese companies sell useless courses and fake certificates and sometimes even harass students with fake tasks just so they can submit something to their college and earn mandatory internship marks.\n\nI built this tool so Tier-3/4 students can instantly generate a similarly worthless certificate for free and instead of wasting weeks on these fake internships, they can actually focus on real upskilling and learning.'
    },
    {
      question: 'Does this affect students doing genuine internships?',
      answer: 'Absolutely not. A real internship gives you way more than just a certificate. It gives you experience, learning, mentors, and skills - something that no certificate generator can ever replace.\n\nThis is strictly for students stuck with the "submit any certificate or fail" rule, who would otherwise waste time on fake companies that either make them pay money or forward WhatsApp messages and fill forms for weeks just to get a certificate.\n\nIf you\'re doing a genuine internship, keep rocking it!'
    },
    {
      question: 'Do you support cheating and generating fake certificates?',
      answer: 'No, Absolutely Not.\n\nWe do not encourage submitting these parody certificates as real ones to any organization, company, or selection process that actually matters (placements, jobs, higher studies, etc.). Using a generated certificate from this site for anything beyond fulfilling a meaningless college formality would be dishonest, and we strongly oppose that.'
    }
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
