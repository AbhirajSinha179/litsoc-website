

export default function Header({title}: {title: string}) {
  return (
    <div className="animate-in flex flex-col gap-16 items-center w-full">
      <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl !leading-tight mx-auto sm:text-center">
        {title}
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-[#543310]/10 to-transparent my-8" />
    </div>
  );
}
