/*react*/
import { FC } from 'react';

/*styles*/
import Styles from '@/styles/modules/product/categorySlider.module.css';

interface myProps {
	categories: Array<any>;
	switchCategory: Function;
}

const CategoriesSlider: FC<myProps> = ({ categories, switchCategory }) => {
	return (
		<section className={`d-flex mt-5 py-2 px-3 gap-30 ${Styles.slider}`}>
			<>
			    {categories.map((category, index) => (
    				<button
    					className={`btn px-5 d-flex btn-outline-dark justify-content-center align-items-center ${Styles.category}`}
    					onClick={() => switchCategory(category.id)}
    					key={index}
    				>
    					{category.name}
    				</button>
    			))}
			</>
		</section>
	);
};

export default CategoriesSlider;
