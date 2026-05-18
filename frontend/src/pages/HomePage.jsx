import MainLayout from "../layouts/MainLayout";
import HeroSection from "../sections/HeroSection";
import ExampleReposSection from "../sections/ExampleReposSection";
import FeaturesSection from "../sections/FeaturesSection";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ExampleReposSection />
      <FeaturesSection />
    </MainLayout>
  );
};

export default HomePage;