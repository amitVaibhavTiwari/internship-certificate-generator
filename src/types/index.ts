export interface CertificateData {
  company: {
    name: string
    logo?: string
    address: string
    email: string
    phone: string
  }
  date: string
  certificate: {
    title: string
  }
  salutation: string
  intro: {
    text: string
    internName: string
    position: string
    companyName: string
    startDate: string
    endDate: string
  }
  project: {
    heading: string
    name: string
    description: string
    datasetDescription: string
  }
  tasks: {
    heading: string
    items: string[]
  }
  techStack: {
    heading: string
    text: string
  }
  closing: string
  character: {
    text: string
  }
  wishes: string
  signatory: {
    closing: string
    signature?: string
    name: string
    title: string
  }
  footer: {
    line1: string
    line2: string
    line3: string
  }
}

export interface Template {
  id: string
  name: string
  description: string
}
