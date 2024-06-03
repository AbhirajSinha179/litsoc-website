import Header from "@/components/Header";
import { getTeam } from "@/utils/actions";
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
  const k21Team = team.filter((member) => member.joining_year === 2021);
  const k22Team = team.filter((member) => member.joining_year === 2022);
  const k23Team = team.filter((member) => member.joining_year === 2023);

  return (
    <main className="flex flex-col gap-20 items-center">
      <Header title="Our Team" />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-9xl">
        {data.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <div
              className="relative rounded-md overflow-hidden"
              style={{ width: '200px', height: '200px' }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                layout="responsive"
                className="rounded-md"
              />
            </div>
            <div className="p-4 text-center">
              <p className="font-bold text-xl">{member.role}</p>
              <p className="whitespace-nowrap text-lg">{member.name}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20">
        {" "}
        k21s{" "}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 max-w-9xl gap-8">
        {k21Team.map((member) => (
          <div key={member.id} className="text-lg text-center">
            {member?.name}
          </div>
        ))}
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20">
        {" "}
        k22s{" "}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 max-w-9xl gap-8">
        {k22Team.map((member) => (
          <div key={member.id} className="text-lg text-center">
            {member?.name}
          </div>
        ))}
      </div>
           {/* <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-b border-b-black/20 ">
        {" "}
        k23s{" "}
      </h2>
      <div className="grid grid-cols-2 justify-items-center sm:grid-cols-4 max-w-9xl gap-16">
        {k23Team.map((member) => (
          <h1 key={member.id} className="text-lg text-center">
            {member?.name}
          </h1>
        ))}
      </div> */}
    </main>
  );
}
