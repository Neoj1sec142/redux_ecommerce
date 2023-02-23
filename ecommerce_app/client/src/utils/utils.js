export const delay = ms => new Promise(res => setTimeout(res, ms));

export const getLocation = ({address, city, state, zip}) => {
    return `${address || ""} ${city || ""} ${state || ""} ${toString(zip || 0)}`
}

export const searchByName = (arr, query) => arr.filter(obj => obj.name.toLowerCase().includes(query.toLowerCase()));
export const filterByCategory = (arr, query) => arr.filter(obj => obj.category.toLowerCase().includes(query.toLowerCase()));
