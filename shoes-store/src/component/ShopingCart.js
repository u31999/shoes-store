import classes from '../res/layout/shopingcart.module.scss';
import { useState, useEffect } from 'react';
export let shopingItemsArray =[];

const theTotal = (allItem) => {
    let total = 0;
    allItem.forEach(item => {
        let multi = Number(item.prise).toFixed(2) * item.numberOfitem.toFixed(2);
        total += multi;
    });
    return total.toFixed(2);
}

const changeCartNumber = () => {
    const cart = document.querySelector('#item-number');
    let totalNumber = 0;
        shopingItemsArray.forEach(item => totalNumber += item.numberOfitem );
    cart.innerText = totalNumber;

    if(totalNumber === 0) cart.style.opacity = '0';
}

const Items = (props) => {
    //remove the 0 item
    shopingItemsArray.forEach((item, i) => (item.numberOfitem === 0) ? shopingItemsArray.splice(i, 1): null);
    
    let [items, setItems] = useState(shopingItemsArray);
    
    const addItem = (i, target) => {
        //callBack for modifing the glopal variable [shopingItemArray]
        //and set the new state
        const addCallBack = () => {
            shopingItemsArray[i].numberOfitem += 1;
            setItems(shopingItemsArray);

            //modify the node
            target.innerText = items[i].numberOfitem;

            //modify the total amount
            target.parentElement.previousElementSibling.innerText = '$' + (Number(items[i].prise) * Number(items[i].numberOfitem)).toFixed(2);
            
            //modify the total
            props.props(true);
        }
        addCallBack();

    }

    const decrementItem = (i, target) => {
        const callBack = () => {
            if(items[i].numberOfitem === 0) return;
            shopingItemsArray[i].numberOfitem -= 1;
            setItems(shopingItemsArray);
            target.innerText = items[i].numberOfitem;
            target.parentElement.previousElementSibling.innerText = '$' + (Number(items[i].prise) * Number(items[i].numberOfitem)).toFixed(2);
            props.props(true);
        }
        callBack();
    }
    
    return(
        <div className={classes.theFirstParent}>
        {items.map((item,i) => 
        <div key={i} className={classes.oneItemContainer}>
            <div className={classes.imageDiv}>
                <img src={item.imageOne} alt='item-img' />
            </div>
            <div className={classes.oneItemDetails}>
                <div className={classes.itemName}>{item.name.slice(0, 15) + '...'}</div>
                <div className={classes.itemPrises}>
                    {'$'+(Number(item.prise) * Number(item.numberOfitem)).toFixed(2)}</div>
                <div className={classes.addOrRemove}>
                    <div className={classes.addBtn} onClick={(e) => addItem(i, e.target.nextElementSibling)}>+</div>
                    <div className={classes.theTotalOfItems}>{item.numberOfitem}</div>
                    <div className={classes.addBtn} onClick={(e)=> decrementItem(i, e.target.previousElementSibling)}>-</div>
                </div>
            </div>
        </div>
        )}
        </div>
    )
}

const ShopingCart = (props) => {
    let [total, setTotal] = useState(theTotal(shopingItemsArray));
    let [changeTheTotal, setChangeTheTotal] = useState(false);

    const toggleReverse = () => {
        const container = document.querySelector(`.${classes.ShopingCartContainer}`);

        container.classList.toggle(`${classes.reverseOne}`);
        setTimeout(()=> {
            container.classList.toggle(`${classes.reverseOne}`);

            //modify the cart icon
            changeCartNumber();
            //change the state of the parent
            props.props(false);
        }, 400);
    };
    
    const closeTheView = (target) => {
        if(target.id === 'left-section') return toggleReverse();
    };

    useEffect(()=> {
        if(changeTheTotal === false) return;
        setTotal(theTotal(shopingItemsArray));
        setChangeTheTotal(false);

    }, [changeTheTotal])

     return(
        <div className={classes.ShopingCartContainer} id='left-section' onClick={(e)=> closeTheView(e.target)}>
            <div className={classes.cartDetails}>
                <div className={classes.title}>Your Shopping Cart</div>
                <div className={classes.cartItems}>
                <Items props={setChangeTheTotal} />
                </div>
                <div className={classes.total} id='total'>Total: ${total}</div>
                <div className={classes.buttonContainer}>
                    <button>checkout</button>
                    <button onClick={toggleReverse}>close</button>
                </div>
            </div>
        </div>
    )
}



export default ShopingCart;