import Header from "@/components/Header";
import { gilda } from "@/utils/fonts";

export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 px-3 ">
        <div className="w-full flex flex-col gap-4 sm:gap-16 items-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl !leading-tight mx-auto text-center" style={gilda.style}>
            The Literary Society <br />{" "}
            <span className="opacity-90">BIT Mesra</span>
          </h1>
          <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-[var(--custom-color)] to-transparent my-8" />
        </div>
        <main className="flex-1 flex flex-col gap-6"></main>
      </div>
    </div>
  );
}
