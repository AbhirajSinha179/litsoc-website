import { WorkCardProps } from "@/utils/types";
import { getWorks } from "@/utils/actions";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

export default async function Page() {
  const works = await getWorks();
  const reviews = works?.filter((item: WorkCardProps) => item.type == "Reviews");
  const collections = works?.filter((item: WorkCardProps) => item.type == "Collections");
  const blogs = works?.filter((item: WorkCardProps) => item.type == "Blogs");

  const WORKS_CONFIG: { [key: string]: { title: string; works: WorkCardProps[] } } = {
    "reviews": {
      title: "Reviews",
      works: reviews,
    },
    "collections": {
      title: "Collections",
      works: collections,
    },
    "blogs": {
      title: "Blogs",
      works: blogs,
    },
  };

  return (
    <main className="flex flex-col items-center gap-12 px-4">
      <Header title="Works" />

      {Object.keys(WORKS_CONFIG).map((key: string) => {
        const { title, works } = WORKS_CONFIG[key];
        return (
          <section key={key} className="flex flex-col items-center gap-4">
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-5xl my-4">
              {" "}
              {(works && works.length>0) ??title}{" "}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-7xl">
              {works.map((item: WorkCardProps) => (
                <Link href={`/works/${item.id}`} key={item.id} className="flex">
                  <div className="bg-[#74512D] text-[var(--custom-color-2)] overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex flex-col">
                    <div className="flex-shrink-0">
                      <Image
                        className="w-full object-cover object-top h-48"
                        src={item.image_url}
                        alt=""
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6">
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
          </section>
        );
      })}
    </main>
  );
}
