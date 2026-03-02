import "./App.scss";
import { lazy } from "react";
import { Hero } from "./Hero/Hero";
import { IconBar } from "./IconBar/IconBar";
const Youtube = lazy(() => import('../APIs/Youtube/Youtube'));
const Items = lazy(() => import('../APIs/BandCamp/Items'));
const Spotify = lazy(() => import('../APIs/Spotify/Spotify'));
const Seated = lazy(() => import('../APIs/Seated/Seated'));
const Navbar = lazy(() => import('./Navbar/Navbar'));
const Footer = lazy(() => import('./Footer/Footer'));
const Header = lazy(() => import('./Headers/Header'));

function App() {
  return (
    <>
      <main className="grid">
        <Navbar />
        <Hero />
        <IconBar width={35} height={35} className={"large-icon-bar"} />
        <Header HeaderName={"Listen"} />
        <Spotify />
        <Header HeaderName={"Watch"} />
        <Youtube />
        <Header HeaderName={"Merch"} />
        <Items />
        <Header HeaderName={"Tour"} />
        <Seated />
        <Footer />
      </main>
    </>
  );
}

export default App;
