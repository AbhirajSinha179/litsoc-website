
import Header from "@/components/Header";
import Crousel from "@/components/Crousel"
export default async function Gallery() {
 
    return (
      <main className="flex flex-col gap-20 items-center">
      <Header title="Gallery" />
      <Crousel/>
      </main>
    );
  }