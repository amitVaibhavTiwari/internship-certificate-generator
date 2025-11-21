# Internship Certificate Generator

A simple web application to create professional internship certificates with ease. Customize content using YAML, add digital signatures, and download as PDF.

## Features

- **Easy Customization** - Edit certificate content using a simple YAML format
- **Digital Signatures** - Draw your signature or use text-based signatures
- **Real-time Preview** - See changes instantly as you edit
- **PDF Export** - Download certificates as high-quality PDFs
- **Local Storage** - Your work is can be saved in your browser
- **Theme Customization** - Change certificate colors to match your brand
- **Dark Mode** - Comfortable editing in any lighting condition
- **Responsive** - Works on desktop, tablet, and mobile devices

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- html2canvas
- jsPDF
- js-yaml

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd internship-certificate-generator
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Choose a Template** - Select from available certificate templates
2. **Edit Content** - Customize the YAML file with your information
3. **Add Signature** - Use the signature tool to add your signature
4. **Preview** - Check the real-time preview on the right
5. **Save** - Save your work to continue later
6. **Download** - Export your certificate as a PDF

## YAML Configuration

The certificate content is configured using YAML format. Here's a basic example:

```yaml
company:
  name: "Your Company"
  address: "Your Address"
  email: "contact@company.com"
  phone: "+1 234-567-890"

themeColor: "#dc2626"  # Customize border and logo color

intro:
  internName: "John Doe"
  position: "Software Intern"
  startDate: "January 1, 2025"
  endDate: "June 30, 2025"
```

## Browser Recommendations

For the best experience, use:
- Chrome
- Brave
- Edge
- Any Chromium-based browser

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

This project is open source and under the MIT License.


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
