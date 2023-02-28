/*react*/
import { ReactElement, useState, useEffect} from 'react';

/*modeules*/
import parse from 'html-react-parser';

/*next*/
import Head from 'next/head';
import type { NextPageWithLayout } from './_app';

/*layout*/
import Layout from '../layouts/main'

/*data*/
import { getProducts } from '@/lib/products';
import { removeProductNotes } from '@/lib/helpers';

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Lush webstore</title>
        <meta name="description" content="online store for comestics and pampering products for him and her" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
      {
        data.map((product,index) => {
        
          return (
            <div key={index}>
              <h1>{product.name}</h1>
              {loaded ? <div>{parse(product.description)}</div> : null}
              <p>{product.pricing.priceRangeUndiscounted.stop.gross.amount}</p>
            </div>
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