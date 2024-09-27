
import styles from "./page.module.css";

// For Components
import { MainBg } from "@/Components/MainBg/MainBg";
import Wrapper from "@/Components/Wrapper/Wrapper";
import { Features } from "@/Components/Features/Features";
import { Aboutus } from "@/Components/Aboutus/Aboutus";
import { HighResolutionGames } from "@/Components/HighResolutionGames/HighResolutionGames";
import { GamingUniverse } from "@/Components/GamingUniverse/GamingUniverse";

export default function Home() {
  return (
    <>
      <MainBg
        ImgUrl="/assets/Home.jpg"
        ImgAlt="Home Image"
        h6Text="Easy Games"
        h5Text="Where Every Shot Counts!"
      />

      <Wrapper>
        {/* For Features */}
        <Features />
        {/* For About us */}
        <Aboutus />

        <HighResolutionGames />
        <GamingUniverse />

      </Wrapper>




    </>
  );
}
