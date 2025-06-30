import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Clean layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
    
         className="text-white min-h-screen bg-dark-gradient transition-colors duration-300"
      >
        {children}
      </body>
    </html>
  );
}
