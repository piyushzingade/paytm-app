import HeroSection from "../../../components/Herosection";
import RequireAuth from "../../../components/RequireAuth";



export default function() {
    return (
      <RequireAuth>
        <HeroSection />
      </RequireAuth>
    );
}