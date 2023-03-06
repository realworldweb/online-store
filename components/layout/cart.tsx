/*react*/
import { useState } from 'react';

/*next*/
import Image from 'next/image';

/*context*/
import { CartContextType, useCart } from '@/context/cart';

/*styles*/
import Styles from '../../styles/modules/layouts/components/cart.module.css';

/*assets*/
import { SvgBag } from '../../components/assets/svgs';

/*types*/
import { CartItem } from '../../lib/types';


const Cart = () => {
	const { state, dispatch } = useCart() as CartContextType;

	const [detailsVisible, setDetailsVisible] = useState(false);

	return (
		<div
			className={`d-flex w-100 flex-column position-relative mx-auto align-items-center ${Styles.cart}`}
		>
			<button
				type='button'
				onClick={() => setDetailsVisible(!detailsVisible)}
				className={`d-flex align-items-center py-3 px-5 ${Styles.cartButton}`}
			>
				<SvgBag width='1.5rem' height='1.5rem' />
				&nbsp;
				<span className={Styles.cartTotal}>{state.cartItemCount}&nbsp; Items</span>&nbsp;:
				&pound; {state.cartTotal}
			</button>

			<div
				className={`d-flex bg-white flex-column align-items-center ${
					Styles.cartItemList
				} ${detailsVisible ? Styles.cartItemListIsOpen : ''}`}
			>
				{state.contents.map((item: CartItem, index: number) => {
					return (
						<div key={index}>
							<div
								className={`d-flex flex-column flex-sm-row w-100 mx-auto mt-2 fw-bold text-dark ${Styles.cartItem}`}
							>
								<div className={`mx-auto ${Styles.cartItemImage}`}>
									<Image
										width='150'
										height='80'
										src={item.image.url}
										alt={item.image.alt}
									/>
								</div>
								<div className={`mx-auto ${Styles.cartItemDetails}`}>
									<p className='d-flex flex-wrap mx-auto m-0 p-0 text-center'>
										{item.name}
									</p>
									<div className='d-flex w-100 justify-content-between'>
										<p>&pound;{parseFloat(String(item.price)).toFixed(2)}</p>
										<p>Qty:&nbsp;{item.qty}</p>
									</div>
									<div className='d-flex w-100'>
										<button
											type='button'
											className={`btn mx-auto btn-outline-danger ${Styles.cartItemRemoveButton}`}
											onClick={() => dispatch.removeCartItem(item)}
										>
											Remove
										</button>
									</div>
								</div>
							</div>
							<hr className='d-flex w-100 my-2 bg-black' key={index + 200} />
						</div>

					);
				})}
				<p className='d-flex w-100 fw-bold mt-2 text-dark px-5 justify-content-between'>
					<span>Total:</span>
					<span>&pound;{parseFloat(String(state.cartTotal)).toFixed(2)}</span>
				</p>
				<hr className='d-block w-100' />
				<button
					onClick={() => dispatch.checkout()}
					className='btn mb-1 w-75 btn-primary mx-auto'
				>
					Checkout
				</button>
				<button
					onClick={() => dispatch.clearAll()}
					className='btn mb-3 w-75 btn-outline-danger mx-auto'
				>
					Clear cart
				</button>
			</div>
		</div>
	);
};

export default Cart;
