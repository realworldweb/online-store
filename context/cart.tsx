import { useEffect, useState, createContext, useContext, ReactElement } from 'react';

interface item {
	id: number,
	title: string,
	description: string,
	price: number,
	image: string,
	category: string,
	rating: number,
	countInStock: number,
};

interface cartType {
	contents: item[],
	addItem: Function | null,
    cartTotal: number,
	removeItem: Function | null,
	clearAll: Function | null,
	checkout: Function | null,
};

interface childrenType { children: ReactElement | ReactElement[] };

const cartContext = createContext<cartType | any>({});

export default function Cart ({ children} : childrenType){

	const [state, setState] = useState<cartType>({
		contents: [],
        cartTotal: 0,
		addItem: null,
		removeItem: null,
		clearAll: null,
		checkout: null,
	});

	const addItem = (item: item) => {
		setState((prev) => ({
			...prev,
			contents: [...prev.contents, item],
            cartTotal: prev.cartTotal + item.price,
		}));
	};

	const removeItem = (item: item) => {
		setState((prev) => ({
			...prev,
			contents: prev.contents.filter((item) => item.id !== item.id),
            cartTotal: prev.cartTotal - item.price,
		}));
	};

	const clearAll = () => {
		setState((prev) => ({
			...prev,
			contents: [],
            cartTotal: 0,
		}));
	};

	const checkout = () => {
		setState((prev) => ({
			...prev,
			contents: [],
            cartTotal: 0,
		}));
	};

	useEffect(() => {
		setState((prev) => {
            if (prev.addItem) return prev;
            
			return {
				contents: [...prev.contents],
                cartTotal: prev.cartTotal,
				addItem,
				removeItem,
				clearAll,
				checkout,
			};
		});
	});

	return (<cartContext.Provider value={state}>{children}</cartContext.Provider>);
};

export function useCart() {
    return useContext(cartContext);
  }
