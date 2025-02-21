import Add from "@/components/home/Add";
import Sidebar from "@/components/process/Sidebar";
import Navbar from "@/components/ui/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`antialiased`}>
      <div className="h-[100vh] w-[100vw] flex">
        <Sidebar />
        {children}
      </div>
    </body>
  );
}
