/*react*/
import { ReactElement, useState, useEffect } from 'react';

/*next*/
import Head from 'next/head';
import type { NextPageWithLayout } from '.././_app';

/*layout*/
import Layout from '@/layouts/main';

/*components*/
import ProductTile from '@/components/assets/productTile';
import CategoriesSlider from '@/components/products/categoriesSlider';

/*data*/
import {
	getProducts,
	getMoreProducts,
	getProductsWithFilter,
} from '@/lib/data.tsx/products';
import { getCategories } from '@/lib/data.tsx/categories';

/*helpers*/
import { removeProductNotes } from '@/lib/helpers';

/*assets*/
import { SvgCaretBack, SvgCaretForward } from '@/components/assets/svgs';

/*types*/
import { Item } from '../../lib/types';
interface myProps {
	products: Item[];
	pageInfo: any;
	totalCount: number;
	categories: any[];
}

export async function getServerSideProps() {
	/*
   calls the getProducts to Fetch data from external API
   args: {
    amount: optional(default : 8 ) indicates how many products to fetch
   }
  */
	try {
		const fetchProducts = await getProducts();

		const products = fetchProducts?.products.map((product: Item) => {
			product.name = removeProductNotes(product.name); //function to remove product notes test comments.

			return product;
		});

		const pageInfo = fetchProducts?.pageInfo;
		const totalCount = fetchProducts?.totalCount;

		const fetchCategories = await getCategories(1, 100);

		// Pass data to the page via props
		return {
			props: { products, pageInfo, totalCount, categories: fetchCategories },
		};
	} catch (err) {
		console.error(err);
		return {
			props: { products: [], pageInfo: {}, totalCount: 0, categories: [] },
		};
	}
}

const Home: NextPageWithLayout<myProps> = ({
	products,
	pageInfo,
	totalCount,
	categories,
}) => {
	/*manage page state*/
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(Math.ceil(totalCount / 8)); //divide total count by 8 to get total pages if this is not divisble 8 round up
	const [currentProducts, setCurrentProducts] = useState<Array<Array<Item>>>([
		products,
	]); //current products array
	const [currentInfo, setCurrentInfo] = useState(pageInfo); //current page info for pagination
	const [loadMoreProducts, setLoadMoreProducts] = useState(false); //load more products flag

	/*manage category state*/
	const [currentCategory, setCurrentCategory] = useState<string | null>(null);
	const [switchCategories, setSwitchCategories] = useState(false); //switch categories flag

	/*manage change page*/
	useEffect(() => {
		if (loadMoreProducts === false) return;
		let isMounted = true;

		const fetchMoreProducts = async () => {
			try {
				/*
            calls the getMoreProducts to Fetch data from external API
            args: {
			cursor: required indicates where to start fetching products from
            amount: optional(default : 8 ) indicates how many products to fetch
            }
           */
				const updatedProducts = await getMoreProducts(currentInfo.endCursor);
				const newProducts = updatedProducts?.products.map((product: Item) => {
					product.name = removeProductNotes(product.name);

					return product;
				});

				if (isMounted) {
					setCurrentInfo(updatedProducts?.pageInfo);
					setCurrentProducts((prev) => [...prev, newProducts]);
					setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
				}
			} catch (err) {
				console.error(err);
			} finally {
				if (isMounted) {
					setLoadMoreProducts(false);
				}
			}
		};

		fetchMoreProducts();

		return () => {
			isMounted = false;
		};
	}, [loadMoreProducts, currentInfo, totalPages]);

	/*manage change category*/

	const switchCategory = (categoryId: string) => {
		setCurrentCategory(categoryId);
		setSwitchCategories(true);
	};

	useEffect(() => {
		if (switchCategories === false) return;
		let isMounted = true;

		const fetchCategoryProducts = async () => {
			try {
				/*
            calls the getMoreProducts to Fetch data from external API
            args: {
			cursor: required indicates where to start fetching products from
            amount: optional(default : 8 ) indicates how many products to fetch
            }
           */
				const updatedProducts = await getProductsWithFilter(
					'categories',
					`[${currentCategory}]`
				);
				const newProducts = updatedProducts?.products.map((product: Item) => {
					product.name = removeProductNotes(product.name);

					return product;
				});
				const newTotalCount = updatedProducts?.totalCount;

				if (isMounted) {
					setCurrentInfo(updatedProducts?.pageInfo);
					setTotalPages(Math.ceil(newTotalCount / 8));
					setCurrentProducts([newProducts]);
					setCurrentPage(0 + 1);
				}
			} catch (err) {
				console.error(err);
			} finally {
				if (isMounted) {
					setSwitchCategories(false);
				}
			}
		};

		fetchCategoryProducts();

		return () => {
			isMounted = false;
		};
	}, [switchCategories, currentCategory]);

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
			<div className='d-flex flex-column position-relative px-4'>
				<CategoriesSlider
					categories={categories}
					switchCategory={switchCategory}
				/>
				<h1 className='d-flex mt-3'>Products</h1>
				<div className='d-flex position-relative flex-wrap px-4'>
					{currentProducts[0].length === 0 ? (
						<div className='d-flex flex-column text-dark w-100 align-items-center justify-content-center'>
							<p className='m-0 p-0'>
								<em className='fw-bold'>Sorry we couldn&apos;t find any items.</em>
							</p>
							<span>Why not try another category</span>
						</div>
					) : (
						<>
							{currentProducts[currentPage - 1].map((product, index) => {
								return <ProductTile product={product} key={index} />;
							})}
						</>
					)}
				</div>
				{totalPages === 0 ? null : (
					<div className={`d-flex mx-auto mt-2 mb-3 align-items-center`}>
						{currentInfo.hasPreviousPage && currentPage !== 1 ? (
							<SvgCaretBack
								onClick={() =>
									setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))
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
								onClick={() => setLoadMoreProducts(true)}
								width='2rem'
								height='2rem'
							/>
						) : null}
					</div>
				)}
			</div>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
