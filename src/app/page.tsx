import { HeroSection} from "@/components/sections/header/HeroSection"
import { ActionArea } from "@/components/sections/actionArea/ActionArea"
import { About } from "@/components/sections/about/About"
import  FormComponent  from "@/components/sections/form/FormComponent"
import  Faqs  from "@/components/sections/faq/Faq"
import { Footer } from "@/components/sections/footer/Footer"
import { WhatsApp } from "@/components/globalComponents/WhatsApp"


export default function Home() {
  return (
    <>
      <HeroSection/>.
      <About/>
      <ActionArea/>
      <Faqs/>
      <FormComponent/>
      <Footer/>
      <WhatsApp/>
    </>
    );
}
