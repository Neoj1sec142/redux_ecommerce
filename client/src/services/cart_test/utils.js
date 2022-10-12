// import {CartData} from './CartData.json'
const Data = require("./Data.json")

// console.log(Data)


// const total = (data) => {
//     let start = data.qty
//     let is_good = true
//     const sum = 0;
//     while(is_good){
//         if (start > 0){
//             sum.add(parseInt(data.price))
//             start = start - 1
//         }else{
//             is_good = false
//         }
//     }
//     return sum 
// }


// console.log(total(Data))
// Cart:
//     Item_ID Qty Price

// export function addItem(item){
//     const cart = getCart()
//     cart.push(item)
//     localStorage.removeItem('cart')
//     localStorage.setItem('cart', cart)
//     return cart
// }
// // console.log(addItem(data))

// export function getCart(){
//     try{
//         const cart = localStorage.getItem('cart')
//         if(cart){
//             return cart
//         }else{
//             const cart = []
//             return cart
//         }
//     }catch(e){
//         console.log(e, 'No Cart')
//     }
// }


export function removeItem(){

}

export function removeAllItems(){

}


