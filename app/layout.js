import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Clean layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "linear-gradient(180deg, #040918 0%, #091540 100%)",
        }}
        className="text-white min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
