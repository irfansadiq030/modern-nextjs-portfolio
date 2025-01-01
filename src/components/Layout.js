import Header from "./Header";
import Footer from "./Footer";
import { Poppins } from "next/font/google";

// Configure the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify weights you need
  variable: "--font-poppins", // Define a CSS variable for the font
});

const Layout = ({ children }) => {
  return (
    <div
      className={`flex flex-col min-h-screen ${poppins.className} bg-primary `}
    >
      {/* Header always at the top */}
      <Header />

      {/* Main content takes up available space */}
      <main className="flex-grow">{children}</main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
