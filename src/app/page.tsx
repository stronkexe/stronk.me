import { Socials } from "@/components/Socials";
import Left from "@/components/Left";
import Right from "@/components/Right";

export default function Home() {
  return (
    <main id="/" className="flex-col">
      <div className="lg:flex h-[90vh] max-md:h-[100%] items-center">
        <Left/> 
        <Right />
      </div>
      <Socials />
    </main>
  );
}
