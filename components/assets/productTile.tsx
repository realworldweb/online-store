/*react*/
import { FC } from 'react';

/*next*/
import Link from 'next/link';
import Image from 'next/image';

/*context*/
import { useCart } from '@/context/cart';
import { CartContextType } from '@/context/cart';

/*helpers*/
import { starRating } from '@/lib/helpers';

/*styles*/
import Styles from '@/styles/modules/assets/productTile.module.css';
import ButtonStyles from '@/styles/modules/assets/button.module.css';

/*types*/
import { Item } from '@/lib/types';
interface MyProps {
	product: Item;
}

const ProductTile: FC<MyProps> = ({ product }) => {
	
	const { dispatch } = useCart() as CartContextType;
	
 return (
	<article
			className={`d-flex flex-column position-relative mx-auto mt-4 p-3 align-items-center ${Styles.productTile}`}
			tabIndex={0}
		>
			<Link href={`/products/${product.id}`} tabIndex={0}>
				<div>
					<Image
						width='250'
						height='150'
						src={
							product.thumbnail?.url ? product.thumbnail.url : '/no-image.png'
						}
						alt={
							product.thumbnail?.alt ? product.thumbnail.alt : 'presentation'
						}
					/>
				</div>
			</Link>
			<div className='position-relative w-100'>
				<h4 className='d-flex w-100 text-center justify-content-center'>
					<Link
						href={`/products/${product.id}`}
						className='text-decoration-none text-dark text-center'
						tabIndex={0}
					>
						{product.name.trim()}
					</Link>
				</h4>
				<p className='d-flex m-0 p-0 position-relative mx-auto fw-bold justify-content-center mb-3'>
					&pound;{parseFloat(String(product.price)).toFixed(2)}
				</p>
				<p className='d-flex m-0 p-0 position-relative mx-auto fw-bold align-items-center justify-content-center mb-3 gap-30'>
					<span>Rating:</span>
					<span>{starRating(product.rating ?? 0).map((star) => star)}</span>
				</p>
				<button
					onClick={() =>
						dispatch.addCartItem({
							id: product.id,
							name: product.name,
							price: product.price,
							image: {
								url: product.thumbnail?.url ?? '/no-image.png',
								alt: product.thumbnail?.alt ?? product.name,
							},
							qty: 1,
						})
					}
					className={`btn d-block w-75 position-relative text-dark mx-auto ${ButtonStyles.gradientButtonSuccess}`}
				>
					Add to cart
				</button>
				<Link
					href={`/products/${product.id}`}
					className={`btn mt-1 w-75 d-block position-relative text-dark mx-auto ${ButtonStyles.gradientButtonDanger}`}
					tabIndex={0}
				>
					More info
				</Link>
			</div>
		</article>
	);
};

export default ProductTile;
