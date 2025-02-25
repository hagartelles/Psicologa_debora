import { HeroSection} from "@/components/sections/header/HeroSection"
import { About } from "@/components/sections/about/About"
import  FormComponent  from "@/components/sections/form/FormComponent"
import  Faqs  from "@/components/sections/faq/Faq"
import { Footer } from "@/components/sections/footer/Footer"
import { WhatsApp } from "@/components/globalComponents/WhatsApp"
import { Cards } from "@/components/sections/Cards/Cards"


export default function Home() {
  return (
    <>
      <HeroSection/>.
      <About/>
      <Cards />
      <Faqs/>
      <Footer/>
      <WhatsApp/>
    </>
    );
}
