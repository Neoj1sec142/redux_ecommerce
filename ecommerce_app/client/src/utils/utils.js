import CryptoJS from 'crypto-js';
export const delay = ms => new Promise(res => setTimeout(res, ms));
// Concats an address
export const getLocation = ({address, city, state, zip}) => {
    return `${address || ""} ${city || ""} ${state || ""} ${toString(zip || 0)}`
}
// searching functions
export const searchByName = (arr, query) => arr.filter(obj => obj.name.toLowerCase().includes(query.toLowerCase()));
export const filterByCategory = (arr, query) => arr.filter(obj => obj.category.toLowerCase().includes(query.toLowerCase()));
export const findById = (arr, id) => arr.find(obj => obj.id === id);

// matches reviews with product titles
export const getTitles = (reviews, reviews_titles) => {
    const titlesMap = new Map(Object.entries(reviews_titles));
    return reviews.map(review => ({ ...review, title: titlesMap.get(review.product) }));
  };
// Places star pictures for specific star rating
export const getStarRating = (amt) => {
    const n = parseInt(amt);
    let images;
    switch(n){
        case 1:
        case 2:
            const sad = require('../assets/sad.png')
            images = Array.from({ length: amt }, (_, index) => (
                <img className='star-icon' src={sad} alt={`Img-${index + 1}`} key={index} />
            ));
            break;
        case 3:
            const mid = require('../assets/midface.png')
            images = Array.from({ length: amt }, (_, index) => (
                <img className='star-icon' src={mid} alt={`Img-${index + 1}`} key={index} />
            ));
            break;
        case 4:
        case 5:
            const happy = require('../assets/happy.png')
            images = Array.from({ length: amt }, (_, index) => (
                <img className='star-icon' src={happy} alt={`Img-${index + 1}`} key={index} />
            ));
            break;
        default:
            images = <h2>No Images</h2>
            break;
    }
    return <>{images}</>;
}
// Average of Reviews
export const getAvg = (reviews) => {
    const count = reviews.length;
    let avg = 0;
    for(let i=0; i<count; i++){
        avg += reviews[i].stars;
    }
    return getStarRating(avg / count)
}

// Encryption function
export const encryptData = (data, secretKey=process.env.REACT_APP_PAYMENT_SECRET) => {
  const ciphertext = CryptoJS.AES.encrypt(data, secretKey).toString();
  return ciphertext;
};

// Decryption function
export const decryptData = (ciphertext, secretKey=process.env.REACT_APP_PAYMENT_SECRET) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export const months = ['--Month--', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
export const years = ['--Year--',2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050]

export const filterProducts = (products) => {
    const totalPrice = products.reduce((acc, { price }) => acc + price, 0);
    const totalObject = { totalPrice: totalPrice };
    const productObjects = products.map(({ id }) => {
      return { product: id, quantity: 1 };
    });
    return [totalObject, ...productObjects];
}
