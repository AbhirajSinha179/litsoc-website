import Header from "@/components/Header";
import { getTeam } from "@/utils/actions";
import { TeamProps } from "@/utils/types";
import Image from "next/image";

async function getData() {
//   // const res = await fetch("https://api.example.com/team");
  const res = {
    json: async () => [
      {
        name: "Neeraj Kumar Singh",
        role: "Faculty Advisor",
        image: "/images/fac_ed.jpg",
      },
      {
        name: "Lily",
        role: "President",
        image: "/images/prez_pic.jpg",
      },
      {
        name: "Srishti Choudhary",
        role: "Joint President",
        image: "/images/joint_prez_1_pic.jpg",
      },
      {
        name: "Shreyash Zade",
        role: "Joint President",
        image: "/images/joint_prez_2_pic.jpg",
      },
    ],
  };
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();
  const team = await getTeam();
  const k21Team = team.filter((member:TeamProps) => member.joining_year === 2021);
  const k22Team = team.filter((member:TeamProps) => member.joining_year === 2022);
  const k23Team = team.filter((member:TeamProps) => member.joining_year === 2023);
  console.log(k22Team)

  return (
    <main className="flex flex-col gap-20 items-center">
      <Header title="Our Team" />

      <div className="grid sm:grid-cols-2 max-w-9xl gap-16">
        {data.map((member) => (
          <div key={member.name} className="flex flex-col gap-4 items-center">
            <Image
              src={member.image}
              alt={member.name}
              className="rounded-md  "
              width={400}
              height={400}
            />
            <div className="p-4 space-y-4 mx-auto text-center">
              <p className="font-bold  text-xl">{member.role}</p>
              <p className="whitespace-nowrap text-lg">{member.name}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20 ">
        {" "}
        k21s{" "}
      </h2>
      <div className="grid grid-cols-2 justify-items-center sm:grid-cols-4 max-w-9xl gap-16">
        {k21Team.map((member) => (
          <h1 key={member.id} className="text-lg text-center">
            {member?.name}
          </h1>
        ))}
      </div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20 ">
        {" "}
        k22s{" "}
      </h2>
      <div className="grid grid-cols-2 justify-items-center sm:grid-cols-4 max-w-9xl gap-16">
        {k22Team.map((member) => (
          <h1 key={member.id} className="text-lg text-center">
            {member?.name}
          </h1>
        ))}
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20 ">
        {" "}
        k23s{" "}
      </h2>
      <div className="grid grid-cols-2 justify-items-center sm:grid-cols-4 max-w-9xl gap-16">
        {k23Team.map((member) => (
          <h1 key={member.id} className="text-lg text-center">
            {member?.name}
          </h1>
        ))}
      </div>
    </main>
  );
}