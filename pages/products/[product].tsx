/*react*/
import { ReactElement, useState } from 'react';

/*next*/
import Head from 'next/head';
import type { NextPageWithLayout } from '.././_app';

/*layout*/
import Layout from '@/layouts/main';

/*context*/
import { useCart } from '@/context/cart';

/*styles*/
import Styles from '@/styles/modules/product/product.module.css'
import ButtonStyles from '@/styles/modules/assets/button.module.css'


/*product*/
import { getProduct } from '@/lib/products';
import { removeProductNotes, starRating } from '@/lib/helpers';

/*types*/

import type { Item } from '@/lib/types';

interface myProps {
	product: Item;
}

export async function getServerSideProps(context: any) {
	/*
   calls the getProduct to Fetch product from external API
   args: {
    product: indicates which product to fetch

   }
  */
	const productId  = context.params.product;

	const product = await getProduct(productId);

	product.name = removeProductNotes(product.name);
	
	// Pass product to the page via props
	return { props: { product } };
}

const Home: NextPageWithLayout<myProps> = ({ product }) => {

	const [qty, setQty] = useState("1");

	const { addItem } = useCart();

	return (
		<>
			<Head>
				<title>{product.seoTitle}</title>
				<meta
					name='description'
					content={product.seoDescription}
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main className={`mx-auto ${Styles.productPage}`}>
					<div className={`mx-auto mt-3 ${Styles.productImage}`}>
						<img
							width='400'
							height='200'
							src={product.thumbnail?.url ? product.thumbnail?.url : '/no-image.png'}
							alt={product.thumbnail?.alt ? product.thumbnail?.alt : 'presentation'}
						/>
					</div>
				<div className={`mx-auto ${Styles.productInfo}`}>
					<h1 className='mt-4 text-center mx-auto'><em>{product.name.trim()}</em></h1>
					<p className='mt-1 text-center px-2 mx-auto'>{product.seoDescription}</p>
					<div className='d-flex w-75 mx-auto mt-3 align-items-center justify-content-between'>
						<p className='my-0 py-0 fw-bold'><em>&pound;{parseFloat(String(product.price)).toFixed(2)}</em></p>
							<div className={`d-flex justify-content-end`}>
								<label htmlFor='qty'>Qty:</label>
								&nbsp;
								<input
									defaultValue={qty}
									onChange={(e) => {
	                                setQty(e.target.value);
									}}
									className={`d-block w-25 position-relative text-center`}
									type='text'
									name='qty'
								/>
							</div >
					</div>
					<div className={`d-flex w-100 mx-3 my-3 py-2 align-items-center justify-content-center bg-grey ${Styles.productButton}`}>
					<button className={`btn d-block position-relative text-dark ${ButtonStyles.gradientButtonSuccess}`} onClick={() => addItem({id: product.id, name: product.name, price: product.price, qty: Number(qty)})}>
						<p className='m-0 p-0'>Add to cart</p>
					</button>
					<div className='d-flex flex-column'><p className='text-white m-0 p-0'>Rating:</p><div>{starRating(product.rating ?? 0).map(star => star)}</div></div>
					</div>
				</div>
			</main>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
