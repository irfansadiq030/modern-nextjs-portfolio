import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
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
