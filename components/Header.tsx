import { gilda } from "@/utils/fonts";

export default function Header({title}: {title: string}) {
  return (
    <div className="animate-in flex flex-col gap-8 items-center w-full">
      <p className="text-4xl md:text-6xl lg:text-7xl !leading-tight mx-auto sm:text-center" style={gilda.style}>
        {title}
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-[--custom-color] to-transparent my-8" />
    </div>
  );
}
