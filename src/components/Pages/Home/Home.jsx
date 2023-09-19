import { lazy } from "react";
import { Suspense } from "react";
import Loader from "../../Loader/Loader";
const Footer = lazy(() => import("../../Footer/Footer"));
const HaveAcat = lazy(() => import("../../HaveAcat/HaveAcat"));
const Header = lazy(() => import("../../Header/Header"));
const Hero = lazy(() => import("../../Hero/Hero"));
const SubHero = lazy(() => import("../../SubHero/SubHero"));

export const Home = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Hero />
        <SubHero />
        <HaveAcat />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
