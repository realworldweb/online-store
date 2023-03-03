import {
	useEffect,
	useState,
	createContext,
	useContext,
	ReactElement,
} from 'react';

interface Image {
	url: string;
	alt: string;
}


interface item {
	id: string;
	name: string;
	price: number;
	qty: number;
	image: Image;
}

interface cartType {
	contents: item[];
	addItem: Function | null;
	cartTotal: number;
	itemCount: number;
	removeItem: Function | null;
	clearAll: Function | null;
	checkout: Function | null;
}

interface childrenType {
	children: ReactElement | ReactElement[];
}

const cartContext = createContext<cartType | any>({});

export default function Cart({ children }: childrenType) {
	const [state, setState] = useState<cartType>({
		contents: [],
		cartTotal: 0,
		itemCount: 0,
		addItem: null,
		removeItem: null,
		clearAll: null,
		checkout: null,
	});

	const itemCount = (items: item[]): number => {
		return items.reduce((count: number, item: item) => count + item.qty, 0);
	};

	const addItem = (item: item) => {
		setState((prev) => {
			const existingItem = [...prev.contents].findIndex(
				(i: item) => i.id === item.id
			);

			if (existingItem !== -1) {
				const updatedItem = {
					...prev.contents[existingItem],
					qty: prev.contents[existingItem].qty + item.qty,
				};

				const contents = [...prev.contents];

                 contents.splice(existingItem, 1, updatedItem);
				 
				return {
					...prev,
					contents,
					cartTotal: prev.cartTotal + item.price * item.qty,
					itemCount: itemCount([...contents]),
				};
			}

			return {
				...prev,
				contents: [...prev.contents, item],
				cartTotal: prev.cartTotal + item.price * item.qty,
				itemCount: itemCount([...prev.contents, item]),
			};
		});
	};

	const removeItem = (remove: item) => {
		setState((prev) => ({
			...prev,
			contents: prev.contents.filter((item) => item.id !== remove.id),
			cartTotal: prev.cartTotal - remove.price * remove.qty,
			itemCount: itemCount(
				prev.contents.filter((item) => item.id !== remove.id)
			),
		}));
	};

	const clearAll = () => {
		setState((prev) => ({
			...prev,
			contents: [],
			cartTotal: 0,
			itemCount: 0,
		}));
	};

	const checkout = () => {
		setState((prev) => ({
			...prev,
			contents: [],
			cartTotal: 0,
			itemCount: 0,
		}));
	};

	useEffect(() => {
		if (state.addItem) return;

		const existing = localStorage.getItem('cart');
		const existingData : cartType = existing && JSON.parse(existing);
         console.log(existingData);
		 


		setState((prev) => {
			return {
				contents: existing ? existingData.contents : [...prev.contents],
				cartTotal: existing ? existingData.cartTotal : prev.cartTotal,
				itemCount: existing ? itemCount(existingData.contents):itemCount(prev.contents),
				addItem,
				removeItem,
				clearAll,
				checkout,
			};
		});
	});

	useEffect(() => {
		if (state.addItem === null) return;
		localStorage.setItem('cart', JSON.stringify(state));
	},[state.contents]);

	return <cartContext.Provider value={state}>{children}</cartContext.Provider>;
}

export function useCart() {
	return useContext(cartContext);
}
