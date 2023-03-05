import { createContext, useContext, useReducer, useEffect, ReactNode, FC } from 'react';

import { CartItem } from '@/lib/types';
interface CartState {
	contents: CartItem[];
	cartTotal: number;
	cartItemCount: number;
	loaded: boolean;
}

interface Action {
	type: string;
	payload?: any;
}

interface CartAction {
	addCartItem: Function;
	removeCartItem: Function;
	clearAll: Function;
	checkout: Function;
}
export interface CartContextType {
	state: CartState;
	dispatch: CartAction;
}

const initialState: CartState = {
	contents: [],
	cartTotal: 0,
	cartItemCount: 0,
	loaded: false,
};

const cartReducer = (state: CartState, action: Action) => {
	switch (action.type) {
		case 'INIT':
			return {
				...state,
				contents: action.payload.contents,
				cartTotal: action.payload.cartTotal,
				cartItemCount: action.payload.cartItemCount,
				loaded: action.payload.loaded,
			};

		case 'ADD_CartItem':

			const existingCartItemIndex = state.contents.findIndex(
				(CartItem) => CartItem.id === action.payload.id
			);//get index of existing cart item returns -1 if not found



			if (existingCartItemIndex === -1) {
				return {
					...state,
					contents: [...state.contents, action.payload],
					cartTotal:
						state.cartTotal + action.payload.price * action.payload.qty,
					cartItemCount: state.cartItemCount + action.payload.qty,
					loaded: true,
				};
			} else { //cart item already exists

				const existingCartItem = state.contents[existingCartItemIndex];
				const updatedCartItem = {
					...existingCartItem,
					qty: existingCartItem.qty + action.payload.qty,
				};

				const updatedContents = [...state.contents]; //copy state to avoid mutation


				updatedContents.splice(existingCartItemIndex, 1, updatedCartItem); // remove existing cart item and replace with updated cart item



				return {
					...state,
					contents: updatedContents,
					cartTotal:
						state.cartTotal + action.payload.price * action.payload.qty,
					cartItemCount: state.cartItemCount + action.payload.qty,
					loaded: true,
				};
			}
		case 'REMOVE_CartItem':

			const updatedContents = state.contents.filter(
				(CartItem) => CartItem.id !== action.payload.id
			);

			const removedCartItem = state.contents.find(
				(CartItem) => CartItem.id === action.payload.id
			)!;

			return {
				...state,
				contents: updatedContents,
				cartTotal:
					state.cartTotal - removedCartItem.price * removedCartItem.qty,
				cartItemCount: state.cartItemCount - removedCartItem.qty,
			};

		case 'CLEAR_ALL':

			return {
				...state,
				contents: [],
				cartTotal: 0,
				cartItemCount: 0,
			};

		case 'CHECKOUT':

			return {
				...state,
				contents: [],
				cartTotal: 0,
				cartItemCount: 0,
			};

		default:
			return state;
	}
};

const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
	children: ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		if (state.loaded) return; //if state is already loaded, don't do anything


		const existing = localStorage.getItem('cart');

		const existingData: CartState = existing && JSON.parse(existing);

		if (existingData) {
			dispatch({ type: 'INIT', payload: existingData });
		}
	}, [state]);

	useEffect(() => {
		if (!state.loaded) return; //if state is not loaded, don't do anything

		localStorage.setItem('cart', JSON.stringify(state));

	}, [state]);

	const addCartItem = (CartItem: CartItem) => {
		dispatch({ type: 'ADD_CartItem', payload: CartItem });
	};

	const removeCartItem = (CartItem: CartItem) => {
		dispatch({ type: 'REMOVE_CartItem', payload: CartItem });
	};

	const clearAll = () => { //clear all items in cart

		dispatch({ type: 'CLEAR_ALL' });
	};

	const checkout = () => { //checkout the cart just clears all items at the minute


		dispatch({ type: 'CHECKOUT' });
	};

	return (
		<CartContext.Provider
			value={{
				state,
				dispatch: { addCartItem, removeCartItem, clearAll, checkout },
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};

export { CartProvider, useCart };
