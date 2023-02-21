export const delay = ms => new Promise(res => setTimeout(res, ms));

export const getLocation = ({state, city, address, zip}) => {
    return `${address} ${state} ${city} ${toString(zip)}`
}