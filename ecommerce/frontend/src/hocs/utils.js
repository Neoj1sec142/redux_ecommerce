const CryptoJS = require('crypto-js')

// HASH FUNCTIONS FOR USER CARD INFO HERE
export const hashCard = (cardInfo) => {
    try{
        let hashed_card = CryptoJS.AES.encrypt(JSON.stringify(cardInfo.num), process.env.REACT_APP_SECRET_KEY).toString()
        let hashed_exp = CryptoJS.AES.encrypt(JSON.stringify(cardInfo.exp), process.env.REACT_APP_SECRET_KEY).toString()
        let hashed_cv = CryptoJS.AES.encrypt(JSON.stringify(cardInfo.num), process.env.REACT_APP_SECRET_KEY).toString()
        const hashedCardInfo = {
            num: hashed_card,
            exp: hashed_exp,
            cv: hashed_cv
        }
        return hashedCardInfo
    }catch(err){
        console.log(err, 'HASH ERR')
    }
}

export const decrypt = (cipher) => {
    try{
        let bytes = CryptoJS.AES.decrypt(cipher, process.env.REACT_APP_SECRET_KEY)
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        if(data){
            return data
        }else{
            console.log('Decrypt Error')
        }
    }catch(err){
        console.log(err, "Decrypt Error")
    }
}