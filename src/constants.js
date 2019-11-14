const apiKey = '?api_key=97bb1a5627fcf0148c38c1a52c2823fd';
const url3 = 'https://api.themoviedb.org/3/';
const corsKey = 'https://cors-anywhere.herokuapp.com';
const url = 'https://www.themoviedb.org/';
const baseUrlImage = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const largeUrlImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
const imageNotFound = 'https://commercial.bunn.com/img/image-not-available.png';
const userId = '8742832';
const alertText = {
    401: 'Authentication failed: You do not have permissions to access the service.',
    404: 'The resource you requested could not be found.'
};


export{apiKey, url3, corsKey, url, largeUrlImage, baseUrlImage, imageNotFound, userId, alertText}
