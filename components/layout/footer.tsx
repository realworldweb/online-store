import Link from "next/link";

const Footer = () => {
	return (
		<footer className='d-flex flex-column align-items-center py-5 justify-content-center w-100 bg-black'>
			<h5 className="text-white">
				<em>Pretium</em>
			</h5>
            <nav className="d-flex gap-30">
                <Link href='/' className="text-white text-decoration-none">Home</Link>
                <Link href='/products' className="text-white text-decoration-none">Products</Link>
                
            </nav>
		</footer>
	);
};

export default Footer;
