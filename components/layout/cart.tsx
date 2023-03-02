/*react*/
import { useState } from 'react';

/*context*/
import { useCart } from '@/context/cart';

/*styles*/
import Styles from '../../styles/modules/layouts/components/cart.module.css';

/*assets*/
import { SvgBag } from '../../components/assets/svgs'

const Cart = () => {

    const { contents, cartTotal, itemCount, removeItem, addItem, clearAll, checkout } = useCart();
    const [detailsVisible, setDetailsVisible] = useState(false);


  return (
    <div className={`d-flex w-100 flex-column position-relative align-items-center ${Styles.cart}`}>
    <button type="button" onClick={() => setDetailsVisible(!detailsVisible)} className={`d-flex align-items-center py-3 px-5 ${Styles.cartButton}`}>
        <SvgBag width="1.5rem" height="1.5rem" />&nbsp;
        <span className={Styles.cartTotal}>{itemCount}&nbsp; Items</span>&nbsp;: &pound; {cartTotal}

    </button>

    <div className={`${Styles.cartDeatils} ${detailsVisible? "" : "d-none"}`}>
        {contents.map((item: any, index: number) => {

            return (
                <div key={index} className={Styles.cartItem}>
                    <div className={Styles.cartItemImage}>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className={Styles.cartItemDetails}>
                        <div className={Styles.cartItemName}>{item.name}</div>
                        <div className={Styles.cartItemPrice}>&pound; {item.price}</div>
                        <div className={Styles.cartItemRemove}>
                            <button type="button" className={`btn btn-outline-danger ${Styles.cartItemRemoveButton}`} onClick={() => removeItem(item)}>Remove</button>
                        </div>
                    </div>
                </div>
            )
        })}
        <div className="header-cart-infos">
            <div className="header-cart-left-info"><span>Total</span></div>
            <div className="header-cart-right-info"><span>{cartTotal}</span></div>
        </div>
        <div className="border-separator" />
        <a href="checkout.html" className="cart-check-out-btn">Checkout</a>
    </div>
</div>
  )
}

export default Cart