import Navbar from "@/components/Navbar";

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-20 w-full text-[#543310] bg-[#F8F4E1] min-h-screen">
      <Navbar />
      {children}
      <footer id="contact" className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>The Literary Society, BIT Mesra</p>
      </footer>
    </section>
  );
}