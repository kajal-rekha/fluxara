const Footer: React.FC = () => {
    return (
        <footer className="bg-[#000035] text-white py-10">
            <div className="container mx-auto text-center">
                <p className="mb-2">
                    &copy; {new Date().getFullYear()} <a href="/">Fluxara</a>.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
