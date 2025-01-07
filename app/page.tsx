import Compo from "./components/compo";
import { HeroSection } from "./components/hero-section";
import { SiteHeader } from "./components/side-header";
import { SiteFooter } from "./components/site-footer";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <Compo/>
      <HeroSection/>
    <SiteFooter />
  </div>
  );
}
