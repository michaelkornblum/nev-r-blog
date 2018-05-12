exports.setTitle = (siteTitle, pageTitle) => 
  `${siteTitle} | ${pageTitle}`;

const fontFormat = (arr) =>
  arr.map(item => item.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('+')
  )
  .join('|');

exports.googleFonts = function() {
  return `https://fonts.googleapis.com/css?family=${fontFormat([...arguments])}`;
};

exports.getYear = () => {
  const today = new Date();
  return today.getFullYear();
};
  
