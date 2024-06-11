import { getBaseUrl } from "@/utils/constants";
import { gilda } from "@/utils/fonts";
import { getWorkById } from "@/utils/actions";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = Number(params.slug[0]);
  const data = await getWorkById(id);
  // const data = works.find((work) => work.id === id);
  // console.log(data);
  if(!data) return <div>Work not found</div>
  return (
    <main className="flex flex-col items-center text-center gap-20">
      <div>
        <h1
          className="text-4xl md:text-7xl font-bold text-wrap max-w-7xl"
          style={gilda.style}
        >
          {data?.name}
        </h1>
        <h3 className="mt-2 text-lg md:text-2xl" style={gilda.style}>
          Author(s): {data?.authors}
        </h3>
      </div>
      <pre className="max-w-xl text-wrap sm:max-w-2xl lg:max-w-4xl">
        {/* This is a placeholder for the work with the ID of {id}. This page is
        statically generated with the path{" "}
        <code>app/(site)/works/[...slug]/page.tsx</code>. */}
        {data?.body}
      </pre>
    </main>
  );
}
