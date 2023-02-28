/*react*/
import { ReactElement, useState, useEffect} from 'react';

/*next*/
import Head from 'next/head';
import type { NextPageWithLayout } from './_app';

/*layout*/
import Layout from '../layouts/main'

/*data*/
import { getProducts } from '@/lib/products';
import { removeProductNotes } from '@/lib/helpers';
import ProductTile from '@/components/assets/productTile';

/*types*/
interface myProps {
  data: any[];
}

export async function getServerSideProps() {
  /*
   calls the getProducts to Fetch data from external API
   args: {
    amount: optional(default : 8 ) indicates how many products to fetch
   }
  */
  let data = await getProducts();
  data = data.map((product: any) => {
    product.name = removeProductNotes(product.name);
    product.description = `<p>${product.description.blocks[0].data.text}</p>`;

    return product
  })

  // Pass data to the page via props
  return { props: { data } }
}

const  Home: NextPageWithLayout<myProps> = ({data}) => {

  return (
    <>
      <Head>
        <title>Lush webstore</title>
        <meta name="description" content="online store for comestics and pampering products for him and her" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='d-flex position-relative flex-wrap px-4'>
      {
        data.map((product,index) => {
        
          return (
           <ProductTile product={product} key={index} />
          )
        })
      }
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;