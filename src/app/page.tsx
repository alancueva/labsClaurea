import BrandIdentity from "@/components/section/inicio/BrandIdentity";
import HeroSection from "@/components/section/inicio/herosection";
import ProductSection from "@/components/section/inicio/productosSection";
import QualityAndCommitment from "@/components/section/inicio/QualityAndCommitment";

export default function Home() {
  return (
    <div className="min-h-screen">
        <HeroSection/>
        <BrandIdentity/>
        <ProductSection/>
        {/* <QualityAndCommitment/> */}
    </div>
  );
}
