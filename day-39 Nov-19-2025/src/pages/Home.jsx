import Team from "../components/About/Team";
import ContactForm from "../components/Contact/ContactForm";
import Hero from "../components/Home/Hero";
import Shop from "../components/Shop/Shop";

const Home = () => {
    return (
        <div>
            <Hero />
            <Team />
            <Shop />
            <ContactForm />
        </div>
    );
};

export default Home;