import "./App.css";
import { lazy } from "react";
const ComingSoon = lazy(() => import('../UI/ComingSoon/ComingSoon'))
// const Youtube = lazy(() => import('../APIs/Youtube/Youtube'));
// const Items = lazy(() => import('../APIs/BandCamp/Items'));
// const Spotify = lazy(() => import('../APIs/Spotify/Spotify'));
// const Seated = lazy(() => import('../APIs/Seated/Seated'));
// const Navbar = lazy(() => import('./Navbar/Navbar'));
// const Footer = lazy(() => import('./Footer/Footer'));
// const Header = lazy(() => import('./Headers/Header'));

function App() {
  return (
    <>
      <ComingSoon/>
      {/* <main className="grid">
        <Navbar />
        <Spotify />
        <Youtube />
        <Header HeaderName={"Merch"} />
        <Items />
        <Header HeaderName={"Tour"} />
        <Seated />
        <br />
        <Footer />
      </main> */}
    </>
  );
}

export default App;
