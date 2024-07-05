import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center w-full text-[var(--custom-color)] bg-[var(--custom-color-2)] min-h-screen">
      <Navbar />

      <main className="flex-grow w-full flex flex-col items-center my-20 mt-10">
        {children}
      </main>

      <Footer />
    </section>
  );
}
