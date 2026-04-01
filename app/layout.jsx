import "./globals.css";

export const metadata = {
  title: "Zuccess Smart Homes",
  description: "Zuccess Smart Homes landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
