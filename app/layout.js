import "./globals.css";

export const metadata = {
  title: "Takeinteki Info Solutions | Premier Recruitment Consultancy",
  description: "We architect the future of business by connecting elite organizations with world-class talent through high-precision recruitment solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body selection:bg-secondary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
