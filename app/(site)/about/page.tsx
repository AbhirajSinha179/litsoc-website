import Header from "@/components/Header"

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-12">
      <Header title="About Us" />
      <p>
        We are a group of students from the Literary Society at BIT
        Mesra. We are passionate about literature and want to share our love
        with the world.
      </p>
    </main>
  );
}