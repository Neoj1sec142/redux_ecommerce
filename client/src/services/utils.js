
export function totalCart(items){
    let total = 0
    items.forEach((item) => (
        total += item.price
    ))
    return total
}