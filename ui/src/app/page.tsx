import { Beam } from "@/components/Beam";
import { Hero } from "@/components/ui/animated-hero";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <div className="block">
      <AuroraBackground>
        <Hero />
        <Beam />
      </AuroraBackground>
    </div>
  );
}
