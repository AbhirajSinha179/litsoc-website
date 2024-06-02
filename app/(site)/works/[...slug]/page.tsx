import { getBaseUrl } from "@/utils/constants";
import { gilda } from "@/utils/fonts";
import { getWorkById } from "@/utils/actions";

// const works = [
//   {
//     id: "1",
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     description:
//       "A novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream in 1920s America.",
//     url: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
//     // text: `It had been an hour of aimless wandering in the hot desert. Matt took the last sip of water left in the bottle. Why did he have to part with the group in the first place? Was every little 'off-trail' adventure necessary? He questioned his actions for the hundredth time. He knew bickering wouldn't help, yet he grumbled again and again. The desert was driving him crazy. The overhead sun sucked his life out of his limbs as the sparkling sand blinded his eyes.\n\nHe huffed and puffed as he dragged his feet on the ever-fading trail. He hadn't seen any sign of life in a while. No snake slithered on the arid soil, and no lizard crawled out of the yellow sand. He had lost all hope and was about to lose his sanity when he spotted… a tree! A simple, ordinary tree, it was, with a trunk so thick that Matt couldn't even surround it with his hands. It was the first sign of life Matt had seen in an hour. It was like reuniting with a long-lost friend. A friend you know very little about but would want to learn more about. There was nothing extraordinary about it, though. It was just a big, old tree. But for Matt, it outshone the dazzling sands and the bright sun. The fact that it existed in a biome so barbarous made it nothing less than extraordinary. There was no plant, lest another tree nearby. No sign of any vegetation. Nor was there any water body nearby. Only dry, arid soil covered the area. But still, the tree lived.\n\nThe kindred hues of green leaves looked so vibrant at the time. It was a miracle that life had thrived there for years. Maybe not thrived but survived. The Tree had stood its ground against all odds. It was like a lone wolf battling the mighty desert. It didn't have an arsenal of weapons but a lot of determination. The war, however, had left a lot of scars as well. The dried fallen branches under the tree reminded me of the wounds it had suffered. They spoke of the countless times the desert had tried to uproot it with sandstorms and heavy winds. But the tree didn't give up. The new, tender branches spoke for it. The tree wasn't ready to give up. Not yet. The wrinkles on the trunk trapped years of battling experience. They accounted for years of struggle the tree had faced. But they also showed the years of resilience the tree had shown.\n\n\"With will comes the power to stand against adversities and overcome them.\"\n\nThe Tree personified this line with utmost accuracy. The suffering has been long... very long.....but the tree is implacably dete`,
//   },
//   {
//     id: "2",
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     description:
//       "A classic novel by Jane Austen that follows the story of Elizabeth Bennet as she navigates societal expectations and finds love.",
//     url: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
//     text: "सावन घिर आए भिगाए अँगनिया।\nमोहे जावन दो न पहिराओ पैंजनिया।।\n\nफेंकी पीरी चुनरी रे उघरी अटरिया।\nलाजो न लजाए री गाई कजरिया।।\n\nजेई रंग-रंगइनी सब बही-बही जाए।\nमोरी पैंजनिया जब ताल मिलाए।।\n\nबरसे झूमी झम-झम कारी बदरिया।\nपियू भारी लगे लाली-झीनी चदरिया।।\n\nमोहे बैरागन के रंग रंगा दो।\nअरी पिया मोरा श्रृंगार हटा दो।।\n\nबन जाऊँ मैं श्याम तू बन जा राधा।\nजा बन जाएँ जुगल जोड़ी आधा-आधा।।\n\nमैं नाचूँ ध्वनि जैसे नाचे मुरलिया की।\nतू बाजे मधुर-धुन गोपी-पायलिया की।।\n\nमैं हो करधन तोहे अंग लगाऊँ।\nतू बन माखन मैं मिश्री हो जाऊँ।।\n\nमोरे केश-कजर सब बिखरत जाए।\nमोरा अल्हड़ रूप जासे निखरत",

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

export default async function Page({ params }: { params: { slug: string } }) {
  const id = Number(params.slug[0]);
  const data = await getWorkById(id);
  // const data = works.find((work) => work.id === id);
  // console.log(data);
  return (
    <main className="flex flex-col items-center text-center gap-20">
      <div>
        <h1 className="text-4xl md:text-7xl font-bold text-wrap max-w-7xl" style={gilda.style}>{ data?.name }</h1>
        <h3 className="mt-2 text-lg md:text-2xl" style={gilda.style}>Author(s): { data?.authors }</h3>
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
