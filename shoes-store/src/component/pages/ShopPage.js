import classes from '../../res/layout/shopPage.module.scss';
import items from "../../res/image/items/items.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { shopingItemsArray } from '../ShopingCart';

export const processPublicImage = (imageUrl) => {
    return process.env.PUBLIC_URL + imageUrl;
}

const ShopPage = () => {

    let itemsKeys = [];
    let allItems = [];
    
    items.forEach(i => itemsKeys.push(Object.keys(i)));
    itemsKeys.forEach((item, i) => {
        items[i][item].forEach(it => {
            allItems.push(it);
            it.prand = `${item[0].toUpperCase()}`;
        })
    });

    const changeImage = (e, newImage) => {
        let target = (e.target.nodeName === 'IMG') ? e.target : e.target.firstElementChild;
        target.src = newImage;

    }
    
    //add to cart
    const addToCart = (name, prise, imageOne, imageTwo) => {
        const cartLength = document.querySelector('#item-number');
        let found = false;
        
        if(shopingItemsArray.length > 0) {
            for(let i= 0; i <= shopingItemsArray.length-1; i++) {
                if(shopingItemsArray[i].name === name) {
                   shopingItemsArray[i].numberOfitem += 1;
                   found = true;
                }
            }
        }
        
        if(found !== true) shopingItemsArray.push({name, prise, imageOne, imageTwo, numberOfitem: 1});

        const totalNumberOfItems = () => {
            let total = 0;
            shopingItemsArray.forEach(item => {
                total += item.numberOfitem;
            })
            return total;
        };

        cartLength.innerText = totalNumberOfItems();

        if(cartLength !== 0) cartLength.style.opacity = '1';
    }


    return(
        <div className={classes.shopBody}>
            {
                allItems.map((item, i) => 
                    <div key={i} className={classes.itemContainer}>
                        <div className={classes.itemImage}
                        onMouseEnter={(e) => changeImage(e, 
                                        processPublicImage(item.imageTwo))} 
                        onMouseLeave={(e) => changeImage(e,
                                        processPublicImage(item.imageOne))}>
                        <img src={processPublicImage(item.imageOne)} alt=''/></div>
                        <div className={classes.itemDetails} >
                            <div className={classes.prand}>{item.prand}</div>
                            <div className={classes.itemTitle}>{item["name"]}</div>
                            <div className={classes.itemPrice}>{'$ '+item["prise"]}</div>
                            <button onClick={()=> addToCart(item.name, item.prise, item.imageOne, item.imageTwo)}>
                            <FontAwesomeIcon icon={faArrowRight} />
                                <div>ADD TO CART</div>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ShopPage;