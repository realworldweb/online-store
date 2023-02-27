
/*context*/
import { useCart } from '@/context/cart';

/*styles*/
import Styles from '../../styles/modules/layouts/components/cart.module.css';

/*assets*/
import { SvgBag } from '../../components/assets/svgs'

const cart = () => {

    const { contents, cartTotal, removeItem, addItem, clearAll, checkout } = useCart();

  return (
    <div className={`d-flex w-100 flex-column position-relative mx-auto align-items-center ${Styles.cart}`}>
    <button type="button" className={`d-flex align-items-center py-3 px-5 ${Styles.cartButton}`}>
        <SvgBag width="1.5rem" height="1.5rem" />&nbsp;
        <span className={Styles.cartTotal}>{contents.length}&nbsp; Items</span>&nbsp;: &pound; {cartTotal}

    </button>

    <div className={Styles.cartDeatils}>
        {contents.map((item: any, index: number) => {
            return (
                <div key={index} className={Styles.cartItem}>
                    <div className={Styles.cartItemImage}>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className={Styles.cartItemDetails}>
                        <div className={Styles.cartItemName}>{item.name}</div>
                        <div className={Styles.cartItemPrice}>& {item.price}</div>
                        <div className={Styles.cartItemRemove}>
                            <button type="button" className={`btn btn-outline-danger ${Styles.cartItemRemoveButton}`} onClick={() => removeItem(index)}>Remove</button>
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

export default cart