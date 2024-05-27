import { getBaseUrl } from "@/utils/constants";
const works = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream in 1920s America.",
    url: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
  },
  {
    id: "2",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A classic novel by Jane Austen that follows the story of Elizabeth Bennet as she navigates societal expectations and finds love.",
    url: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
  },
  {
    id: "3",
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    description:
      "A coming-of-age novel by J. D. Salinger that explores themes of teenage angst, identity, and alienation.",
    url: "https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye",
  },
  {
    id: "4",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A novel by Harper Lee that addresses themes of racism, morality, and social justice in the American South.",
    url: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
  },
];

// const getWorkById = async (id: string) => {
  // const url = `${getBaseUrl()}/api/works`;
  // const res = await fetch(url);

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // const data = await res.json();

  // console.log(data.result.works, id);

  // const work = async () => data?.result?.works.find((work: any) => work.id === id);

  // return work();
// };

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug[0];
  // const data = await getWorkById(id);
  const data = works.find((work) => work.id === id);
  console.log(data);
  return (
    <main className="flex flex-col items-center text-center gap-20">
      <div>
        <h1 className="text-3xl font-bold max-w-lg">{ data?.title }</h1>
        <h3 className="mt-2">Author(s): { data?.author }</h3>
      </div>
      <p className="max-w-xl sm:max-w-2xl lg:max-w-4xl">
        This is a placeholder for the work with the ID of {id}. This page is
        statically generated with the path{" "}
        <code>app/(site)/works/[...slug]/page.tsx</code>.
      </p>
    </main>
  );
}
