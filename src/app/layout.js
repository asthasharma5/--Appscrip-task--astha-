import './globals.css'; // ✅ Correct since it's in the same folder as layout.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Appscrip Task',
  description: 'Curated product experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
