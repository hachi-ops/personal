import "./style.css";
const Footer = () => {
    return (
        <footer>
            <a href="https://www.google.co.uk/" target="_blank" rel="noreferrer">
                <img src={`${process.env.PUBLIC_URL}/email.png`} alt = "email icon" />
            </a>
            <a href="https://www.google.co.uk/" target ="_blank" rel="noreferrer">
                <img src={`${process.env.PUBLIC_URL}/black-linkedin.png`} alt = "LinkedIn icon" />
            </a>
        </footer>
    )
}

export default Footer;
