import Header from "@/components/Header";

export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3 ">
        <div className="w-full flex flex-col gap-4 sm:gap-16 items-center">
          <p className="text-4xl md:text-6xl lg:text-7xl !leading-tight mx-auto text-center">
            The Literary Society <br />{" "}
            <span className="opacity-80">BIT Mesra</span>
          </p>
          <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-[var(--custom-color)]/10 to-transparent my-8" />
        </div>
        <main className="flex-1 flex flex-col gap-6"></main>
      </div>
    </div>
  );
}
