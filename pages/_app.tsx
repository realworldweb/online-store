/*react*/
import type { ReactElement } from 'react';

/*next*/
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

/*context*/
import Cart from '../context/cart';

/*styles*/
import '../styles/master.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => any;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);

	return (<Cart>{getLayout(<Component {...pageProps} />)}</Cart>);
}
