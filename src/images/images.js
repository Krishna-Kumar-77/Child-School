// THIS CODE IS NOT WORKING  IMAGES EXPORT METHOD
// const IMAGES = {
// img1: require('../images/img-1.png').default,
// img2: require('../images/img-2.png').default,
// img3: require('../images/img-3.png').default,
// img4: require('../images/img-4.png').default,
// img5: require('../images/img-5.png').default,
// img6: require('../images/img-6.png').default,
// img7: require('../images/img-7.png').default,
// img8: require('../images/img-8.png').default,
// img9: require('../images/img-9.png').default,
// img10: require('../images/img-10.png').default,
// img11: require('../images/img-11.png').default,
// }

//export default IMAGES; 
// NOT WORKING TILL HERE.

// WORKING CODE FROM HERE

function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => {
     return images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
  export default images;
  