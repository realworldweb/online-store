/*react*/
import { FC } from 'react';

/*next*/
import Link from 'next/link';

/*context*/
import { useCart } from '@/context/cart';

/*styles*/
import Styles from '@/styles/modules/assets/productTile.module.css';


/*types*/
interface MyProps {
	product: any;
}

const ProductTile: FC<MyProps> = ({ product }) => {
	const { addItem } = useCart();


	return (
		<div
			className={`d-flex flex-column position-relative mx-auto mt-4 p-3 align-items-center ${Styles.productTile}`}
			tabIndex={0}
		>
			<Link href={`/products/${product.id}`}  tabIndex={0}>
				<div>
					<img
						width='250'
						height='150'
						src={product.thumbnail?.url ? product.thumbnail.url : "/no-image.png" }
						alt={product.thumbnail?.alt ? product.thumbnail.alt : "presentation"}

					/>
				</div>
			</Link>
			<div>
				<h4 className='d-flex w-100 text-center justify-content-center'>
					<Link
						href={`/products/${product.id}`}
						className='text-decoration-none text-dark text-center'

						tabIndex={0}
					>
						{product.name.trim()}

					</Link>
				</h4>
				<span className='d-flex position-relative mx-auto fw-bold justify-content-center mb-3'>{`£${product.price}.00`}</span>
				<div className={`d-flex w-100 justify-content-between mx-auto ${Styles.productTileControls}`}>
					<button onClick={() => addItem({name: product.name, price: product.price, qty: 1})} className='btn btn-outline-success'>
						Add to cart
					</button>
						<Link href={`/products/${product.id}`} className='btn btn-outline-danger' tabIndex={0}>
							More info
						</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductTile;
