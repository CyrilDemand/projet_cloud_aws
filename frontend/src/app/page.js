import Image from "next/image";
import Header from "@/app/ui/Header";
import background from "@/app/public/img/background_header.jpg"
import BackgroundHeader from "@/app/ui/BackgroundHeader";

export default function Home() {
  return (
      <div>
          <Header/>
          <BackgroundHeader/>
      </div>
  );
}
