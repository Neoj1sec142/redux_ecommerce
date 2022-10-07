
export function totalCart(items){
    let total = 0
    items.forEach((item) => (
        total += item.price
    ))
    return total
}

export function getCart(){

    try{
        const cart = localStorage.getItem('cart')
        const ncart = JSON.parse(cart)
        return ncart
    }catch(e){
        console.log(e, 'NO CART FOUND')
    }
}

export function removeItem(id){
    const cart = localStorage.getItem('cart')
    const ncart = JSON.parse(cart)
    ncart.filter((item) => item.id !== id)
    addToCart(ncart)
}


export function addToCart(obj){
    var object = {id: obj.id, price: obj.price}
    const cart = localStorage.getItem('cart')
    if(cart){
        const ncart = JSON.parse(cart)
        ncart.append(object)
        localStorage.setItem(`cart`, JSON.stringify(object))
        return ncart
    }else{
        const cart = []
        cart.append(object)
        localStorage.setItem(`cart`, JSON.stringify(object))
        return cart
    }
}
