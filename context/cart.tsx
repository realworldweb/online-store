import { useEffect, useState, createContext, useContext, ReactElement } from 'react';

interface item {
	id: string;
	name: string;
    price: number;
	qty: number;
};

interface cartType {
	contents: item[],
	addItem: Function | null,
    cartTotal: number,
	itemCount: number,
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
		itemCount: 0,
		addItem: null,
		removeItem: null,
		clearAll: null,
		checkout: null,
	});

	
	const itemCount = (items: item[]): number => {
      return items.reduce((count: number, item: item) => count + item.qty, 0);
	}


	const addItem = (item: item) => {

		setState((prev) => ({
			...prev,
			contents: [...prev.contents, item],
            cartTotal: prev.cartTotal + item.price  * item.qty,
			itemCount: itemCount([...prev.contents, item]),
        }));

	};

	const removeItem = (remove: item) => {
		debugger;
		setState((prev) => ({
			...prev,
			contents: prev.contents.filter((item) => item.id !== remove.id),
            cartTotal: prev.cartTotal - remove.price * remove.qty,
			itemCount: itemCount(prev.contents.filter((item) => item.id !== remove.id)),

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
		setState((prev) => {
            if (prev.addItem) return prev;
            
			return {
				contents: [...prev.contents],
                cartTotal: prev.cartTotal,
				itemCount: itemCount(prev.contents),
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
