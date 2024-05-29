import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-20 w-full text-[var(--custom-color)] bg-[#F8F4E1] min-h-screen">

      <Navbar />

      <main className="flex-grow w-full flex flex-col items-center">
        {children}
      </main>
      
      <Footer/>
    
    </section>
  );
}