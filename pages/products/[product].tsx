/*react*/
import { ReactElement, useState, useEffect } from 'react';

/*react modules*/
import parse from 'html-react-parser';

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


/*data*/
import { getProduct } from '@/lib/products';
import { removeProductNotes } from '@/lib/helpers';

/*types*/

import type { Item } from '@/lib/types';

interface myProps {
	data: Item;
}

export async function getServerSideProps(context: any) {
	/*
   calls the getProduct to Fetch data from external API
   args: {
    product: indicates which product to fetch

   }
  */
	const { product } = context.params;

	const data = await getProduct(product);

	data.name = removeProductNotes(data.name);

	// Pass data to the page via props
	return { props: { data } };
}

const Home: NextPageWithLayout<myProps> = ({ data }) => {
	
	const [mounted, setMounted] = useState(false);

	const [qty, setQty] = useState("1");

	const { addItem } = useCart();

	useEffect(() => {
		//client has mounted for hydration

		setMounted(true);
	}, []); 
	return (
		<>
			<Head>
				<title>{data.seoTitle}</title>
				<meta
					name='description'
					content={data.seoDescription}
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main className={`mx-auto ${Styles.productPage}`}>
					<div className={`mx-auto ${Styles.productImage}`}>
						<img
							width='400'
							height='200'
							src={data.thumbnail?.url ? data.thumbnail?.url : '/no-image.png'}
							alt={data.thumbnail?.alt ? data.thumbnail?.alt : 'presentation'}
						/>
					</div>
				<div className={`mx-auto ${Styles.productInfo}`}>
					<h1 className='mt-4 text-center mx-auto'><em>{data.name.trim()}</em></h1>
					{/*{mounted
						? parse(`<div>${data.description.blocks[0].data.text}</div>`)
					: null}*/}
					<p className='mt-1 text-center px-2 mx-auto'>{data.seoDescription}</p>
					<div className='d-flex w-75 mx-auto mt-3 align-items-center justify-content-between'>
						<p className='my-0 py-0 fw-bold'><em>&pound;{parseFloat(String(data.price)).toFixed(2)}</em></p>
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
					<button className={`btn mt-3 d-block position-relative text-dark mx-auto ${ButtonStyles.gradientButtonSuccess}`} onClick={() => addItem({id: data.id, name: data.name, price: data.price, qty: Number(qty)})}>
						<p className='m-0 p-0'>Add to cart</p>
					</button>
				</div>
			</main>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
