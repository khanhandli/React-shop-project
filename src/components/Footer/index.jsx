import "./style.css";

const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return (
        <footer className="footer">
            <p>
                🙃🙃🙃 &copy; nguyen nhu y dang cap lao cai {fullYear}
            </p>
        </footer>
    );
};

export default Footer;