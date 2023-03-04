/*react*/
import { ReactElement, useState, useEffect } from 'react';

/*next*/
import Head from 'next/head';
import type { NextPageWithLayout } from '.././_app';

/*layout*/
import Layout from '@/layouts/main';

/*data*/
import { getProducts, getMoreProducts } from '@/lib/products';
import { removeProductNotes } from '@/lib/helpers';
import ProductTile from '@/components/assets/productTile';
import { SvgCaretBack, SvgCaretForward } from '@/components/assets/svgs';

/*types*/
interface myProps {
	products: any[];
	pageInfo: any;
	totalCount: number;
}

export async function getServerSideProps() {
	/*
   calls the getProducts to Fetch data from external API
   args: {
    amount: optional(default : 8 ) indicates how many products to fetch
   }
  */
	const data = await getProducts();
	const products = data.products.map((product: any) => {
		product.name = removeProductNotes(product.name);

		return product;
	});

	const pageInfo = data.pageInfo;
	const totalCount = data.totalCount;

	// Pass data to the page via props
	return { props: { products, pageInfo, totalCount } };
}

const Home: NextPageWithLayout<myProps> = ({
	products,
	pageInfo,
	totalCount,
}) => {
	const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([products]);
  const [currentInfo, setCurrentInfo] = useState(pageInfo);
	const [moreProducts, setMoreProducts] = useState(false);
	const totalPages = Math.ceil(totalCount / 8);

   //TODO: revisit this perhaps create a map of page numbers and cursors to allow more functionality.
	useEffect(() => {
		if (moreProducts === false) return;

		 getMoreProducts(currentInfo.endCursor).then(
      (newData) => {
       
        const newProducts = newData.products.map((product: any) => {
          product.name = removeProductNotes(product.name);

          return product;
      });

       setCurrentInfo(newData.pageInfo);

       setCurrentProducts( prev => [...prev, newProducts]);
  
  
      setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  
      setMoreProducts(false);
        
      },
     ).catch(err => console.error(err));

  
	}, [moreProducts]);
  
	return (
		<>
			<Head>
				<title>Pretium - online store</title>
				<meta
					name='description'
					content='online store for comestics and pampering products for him and her'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main className='d-flex flex-column position-relative px-4'>
				<h1 className='d-flex mt-3'>Products</h1>
				<div className='d-flex position-relative flex-wrap px-4'>
					{currentProducts[currentPage -1].map((product, index) => {
						return <ProductTile product={product} key={index} />;
					})}
				</div>
				<div className={`d-flex mx-auto mt-2 align-items-center`}>
					{currentInfo.hasPreviousPage && currentPage !== 1  ? (
						<SvgCaretBack
							onClick={() =>
								setCurrentPage((prev) => (prev === 1 ? prev : prev -1))
							}
							width='2rem'
							height='2rem'
						/>
					) : null}
					<p className='m-0 p-0'>
						Page: {currentPage} / {totalPages}{' '}
					</p>
					{currentInfo.hasNextPage || currentPage < totalPages ? (
						<SvgCaretForward
							onClick={() => setMoreProducts(true)}
							width='2rem'
							height='2rem'
						/>
					) : null}
				</div>
			</main>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
