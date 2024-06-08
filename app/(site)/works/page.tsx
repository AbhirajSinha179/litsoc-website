import { WorkCardProps } from "@/utils/types";
import { getWorks } from "@/utils/actions";
import Link from "next/link";
import Header from "@/components/Header";

// const works = [
//   {
//     id: "1",
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     description:
//       "A novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream in 1920s America.",
//     url: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
//   },
//   {
//     id: "2",
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     description:
//       "A classic novel by Jane Austen that follows the story of Elizabeth Bennet as she navigates societal expectations and finds love.",
//     url: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
//   },
//   {
//     id: "3",
//     title: "The Catcher in the Rye",
//     author: "J. D. Salinger",
//     description:
//       "A coming-of-age novel by J. D. Salinger that explores themes of teenage angst, identity, and alienation.",
//     url: "https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye",
//   },
//   {
//     id: "4",
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     description:
//       "A novel by Harper Lee that addresses themes of racism, morality, and social justice in the American South.",
//     url: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
//   },
// ];

export default async function Page() {
  const works = await getWorks();

  return (
    <main className="flex flex-col items-center gap-12 px-4">
      <Header title="Works" />

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl"> Reviews </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl">
        {works
          ?.filter((item: WorkCardProps) => item.type == "Reviews")
          .map((item: WorkCardProps) => (
            <Link href={`/works/${item.id}`} key={item.id} className="flex">
              <div className="bg-[#74512D] text-[var(--custom-color-2)] overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex flex-col">
                <div className="flex-shrink-0">
                  <img
                    className=" w-full object-cover object-top h-48"
                    src={item.image_url}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-4">
                  <div className="flex-1">
                    <p className="text-xl font-semibold">{item.name}</p>
                    <p className="mt-3 text-base truncate-multi-line">
                      {item.body}
                    </p>
                  </div>
                  <div className="flex items-center mt-3">
                    <p className="text-sm font-medium">{item.authors}</p>
                  </div>
                </div>
              </div>
            </Link>
          )) ?? "No works found"}
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
        {" "}
        Collections{" "}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl">
        {works
          ?.filter((item: WorkCardProps) => item.type == "Collections")
          .map((item: WorkCardProps) => (
            <Link href={`/works/${item.id}`} key={item.id} className="flex">
              <div className="bg-[#74512D] text-[var(--custom-color-2)] overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex flex-col">
                <div className="flex-shrink-0">
                  <img
                    className="w-full object-cover object-top h-48"
                    src={item.image_url}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-4">
                  <div className="flex-1">
                    <p className="text-xl font-semibold">{item.name}</p>
                    <p className="mt-3 text-base truncate-multi-line">
                      {item.body}
                    </p>
                  </div>
                  <div className="flex items-center mt-3">
                    <p className="text-sm font-medium">{item.authors}</p>
                  </div>
                </div>
              </div>
            </Link>
          )) ?? "No works found"}
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl"> Blogs </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl">
        {works
          ?.filter((item: WorkCardProps) => item.type == "Blogs")
          .map((item: WorkCardProps) => (
            <Link href={`/works/${item.id}`} key={item.id} className="flex">
              <div className="bg-[#74512D] text-[var(--custom-color-2)] overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex flex-col">
                <div className="flex-shrink-0">
                  <img
                    className="w-full object-cover object-top h-48"
                    src={item.image_url}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-4">
                  <div className="flex-1">
                    <p className="text-xl font-semibold">{item.name}</p>
                    <p className="mt-3 text-base  truncate-multi-line">
                      {item.body}
                    </p>
                  </div>
                  <div className="flex items-center mt-3">
                    <p className="text-sm font-medium">{item.authors}</p>
                  </div>
                </div>
              </div>
            </Link>
          )) ?? "No works found"}
      </div>
    </main>
  );
}
