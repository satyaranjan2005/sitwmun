import "./globals.css";
import React from 'react'

const Rootlayout = ({ children }) => {
  return (
    <html>
      <head>
        <title>Model United Nations 2026 - Silicon Literary Club</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="./logo_3.svg" />
      </head>
      <body>
        <div className="bg-[#CAE4FB]">
          {children}
        </div>
      </body>
    </html>
  )
}

export default Rootlayout
