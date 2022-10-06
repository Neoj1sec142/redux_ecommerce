
export function totalCart(items){
    let total = 0
    items.forEach((item) => (
        total += item.price
    ))
    return total
}

export function addToCart(obj, cart_items_length){
    var object = {id: obj.id, price: obj.price}
    const num = cart_items_length + 1
    localStorage.setItem(`cart${num}`, JSON.stringify(object))
    return obj
}
