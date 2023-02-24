export const delay = ms => new Promise(res => setTimeout(res, ms));

export const getLocation = ({address, city, state, zip}) => {
    return `${address || ""} ${city || ""} ${state || ""} ${toString(zip || 0)}`
}

export const searchByName = (arr, query) => arr.filter(obj => obj.name.toLowerCase().includes(query.toLowerCase()));
export const filterByCategory = (arr, query) => arr.filter(obj => obj.category.toLowerCase().includes(query.toLowerCase()));
export const findById = (arr, id) => arr.find(obj => obj.id === id);


export const getTitles = (reviews, reviews_titles) => {
    const titlesMap = new Map(Object.entries(reviews_titles));
    return reviews.map(review => ({ ...review, title: titlesMap.get(review.product) }));
  };

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

export const getAvg = (reviews) => {
    const count = reviews.length;
    let avg = 0;
    for(let i=0; i<count; i++){
        avg += reviews[i].stars;
    }
    return getStarRating(avg / count)
}