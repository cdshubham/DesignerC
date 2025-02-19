
import Footer from "@/components/ui/Footer";
import Add from "@/components/home/Add";
import Navbar from "@/components/ui/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <body className={`antialiased`}>
        <Add />
        <Navbar />
        {children}
        <Footer />
      </body>
    
  );
}
