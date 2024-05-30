import Header from "@/components/Header";

async function getData() {
  // const res = await fetch("https://api.example.com/team");
  const res = {
    json: async () => [
      {
        name: "Sparsh Anand",
        role: "President",
        image: "/team/1.jpg",
      },
      {
        name: "Mohit Raj",
        role: "Joint President",
        image: "/team/2.jpg",
      },
      {
        name: "Ayush",
        role: "Joint President",
        image: "/team/3.jpg",
      },
      {
        name: "Neeraj Kumar Singh",
        role: "Faculty Advisor",
        image: "/team/4.jpg",
      },
    ],
  };
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <main className="flex flex-col gap-20 items-center">
      <Header title="Our Team" />

      <div className="grid sm:grid-cols-2 md:grid-cols-4  max-w-4xl gap-16">
        {data.map((member) => (
          <div key={member.name} className="flex flex-col gap-4 items-center">
            <img src={member.image} alt={member.name} className="w-48 h-48" />
            <div className="p-4 space-y-4 mx-auto text-center">
              <p className="whitespace-nowrap">{member.name}</p>
              <p>{member.role}</p>
            </div>
          </div>
        ))} 
        {/* <div className="flex flex-col gap-4 items-center">
          <img src="/team/1.jpg" alt="Team member 1" className="w-48 h-48" />
          <div className="p-4 space-y-4 mx-auto text-center">
            <p className="whitespace-nowrap">Sparsh Anand</p>
            <p>President</p>
          </div>
        </div> */}
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20 "> k20s </h2>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20 "> k21s </h2>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20 "> k22s </h2>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20 "> k23s </h2>

    </main>
  );
}