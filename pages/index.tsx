/*react*/
import type { ReactElement } from 'react';

/*next*/
import Head from 'next/head';
import type { NextPageWithLayout } from './_app';
import dynamic from 'next/dynamic';

/*layout*/
import Layout from '../layouts/main'

const  Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Lush webstore</title>
        <meta name="description" content="online store for comestics and pampering products for him and her" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
      
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;