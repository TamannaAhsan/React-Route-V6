import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate =useNavigate();

    const goToContact = () => {
        navigate("/contact");
    };
    
    const goBack = () => {
        navigate(-1);
    };

    return (
    <>
        <section>
            <h1>About</h1>
            <button onClick={()=> goToContact()}>Go to Contact</button>
            <button onClick={()=> goBack()}>go back</button>
        </section>
    </>
    );
};

export default About;