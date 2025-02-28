
import Add from "@/components/home/Add";
import Navbar from "@/components/ui/navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div className={`antialiased`}>
     
        {children}    
      </div>
    
  );
}
