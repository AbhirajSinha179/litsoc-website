import { NextResponse } from "next/server";

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
  }
];

export async function GET() {
  try {
    const result = { works };
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
