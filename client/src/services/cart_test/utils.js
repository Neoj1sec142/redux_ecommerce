import {CartData} from './CartData.json'


const writeToFile = (data) => {
    JSON.dump(data)
}
const readFromFile = (file) => {
    const data = require(file)
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


