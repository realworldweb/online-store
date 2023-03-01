/*react*/
import { ReactElement, useState, useEffect } from 'react';

/*react modules*/
import parse from 'html-react-parser';

/*next*/
import Head from 'next/head';
import type { NextPageWithLayout } from '.././_app';

/*layout*/
import Layout from '@/layouts/main';

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
    /*
    loaded: indicates whether the page has been mounted for clientside hydration
    */
	const [loaded, setLoaded] = useState(false); 

    
	useEffect(() => {
        //client has mounted for hydration

		setLoaded(true);
	}, []);

	return (
		<>
			<Head>
				<title>Pretium - ${data.name.trim()}</title>
				<meta
					name='description'
					content='online store for comestics and pampering products for him and her'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main className='d-flex position-relative flex-wrap py-3 px-4'>
				<div className='d-flex flex-column'>
                    <div className=''>
                        <img
    						width='400'
    						height='200'
    						src={data.thumbnail.url ? data.thumbnail.url : "/no-image.png" }
    						alt={data.thumbnail?.alt ? data.thumbnail.alt : "presentation"}
    
    					/>
                    </div ></div>
				<div className='d-flex align-items-center w-50 flex-column'>
					<h1>{data.name.trim()}</h1>
					{loaded ? parse(`<div>${data.description.blocks[0].data.text}</div>`) : null}
				</div>
			</main>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
