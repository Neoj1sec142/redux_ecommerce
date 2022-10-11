// import {CartData} from './CartData.json'
// const CartData = require()
const fs = require('fs')

export const writeToFile = (data) => {
    
    const file = require('./CartData.json')
    fs.writeFile(file, JSON.stringify(data))
}
export const readFromFile = () => {
    const data = require('./CartData.json')
    // JSON.parse(data)
    return data
}


export function totalItems(){
    
}
export function addItem(){

}
export function getCart(){

}
export function removeItem(){

}
export function removeAllItems(){

}


