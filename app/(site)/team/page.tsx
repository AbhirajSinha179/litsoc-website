import Header from "@/components/Header";


export default function Page() {
  return (
    <main className="flex flex-col gap-20 items-center">
      <Header title="Our Team" />

      <div className="grid md:grid-cols-4  max-w-4xl gap-16">
        <div className="flex flex-col gap-4 items-center">
          <img src="/team/1.jpg" alt="Team member 1" className="w-48 h-48" />
          <div className="p-4 space-y-4 mx-auto">
            <p className="whitespace-nowrap">Sparsh Anand</p>
            <p>President</p>
          </div>
        </div>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20 "> k20s </h2>

    </main>
  );
}