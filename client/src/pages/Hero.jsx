import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { HeroImage } from "../utils/Images";
const Hero = () => {
  return (
    <>
      <section className="max-h-screen w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="lg:col-span-1 p-4 flex items-center">
          <div className="padding">
            <Text variant="h2" className="tracking-wide uppercase margin-y-xl">
              welcome to{" "}
              <span className="text-primary uppercase">Eventures!</span>
            </Text>
            <Text className="font-semibold tracking-wider margin-y">
              Explore the Opportunities to showcase your skills and enhance your
              knowledge
            </Text>
            <div className="green-bar"></div>
            <Text className="font-semibold tracking-wider margin-y">
              Make events, participate in them, and show off your talent.
            </Text>
            <div className="flex items-center margin-y-xl">
              <Button size="xl" border="doublexl" className="bg-secondary mx-4">
                Explore Events
              </Button>
              <Button size="xl" border="doublexl" className="bg-secondary mx-4">
                Create Events
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 padding">
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
