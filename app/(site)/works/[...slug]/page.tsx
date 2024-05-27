import { getBaseUrl } from "@/utils/constants";

const getWorkById = async (id: string) => {
  const url = `${getBaseUrl()}/api/works`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  // console.log(data.result.works, id);

  const work = async () => data?.result?.works.find((work: any) => work.id === id);

  return work();
};

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug[0];
  const data = await getWorkById(id);
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
