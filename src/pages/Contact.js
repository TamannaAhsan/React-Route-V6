import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate =useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <section>
                <h1>Contact</h1>
                <button onClick={()=> goToHome()}>Go to Home</button>
                <button onClick={()=> goBack()}>go back</button>
            </section>
        </>
        );
};

export default Contact;