import Add from "@/components/home/Add";
import Sidebar from "@/components/process/Sidebar";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`antialiased`}>
      <div className="h-[100vh] w-[100vw] flex flex-col bg-background-blue-300 text-white">
        <div className="sticky top-0 z-10 flex flex-col ">
          <Add />
          <Navbar />
        </div>
        {children}
        <Footer />
      </div>
    </body>
  );
}
