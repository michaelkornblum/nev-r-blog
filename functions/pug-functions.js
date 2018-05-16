
// Template helper to set page title
exports.setTitle = (siteTitle, pageTitle) => 
  `${siteTitle} | ${pageTitle}`;

// Template helpers to get Google Fonts
const fontFormat = (arr) =>
  arr.map(item => item.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('+')
  )
  .join('|');

exports.googleFonts = function() {
  return `https://fonts.googleapis.com/css?family=${fontFormat([...arguments])}`;
};

// Template helper to get current year
exports.getYear = () => {
  const today = new Date();
  return today.getFullYear();
};

// used for responsive background images
exports.cssBackgroundImage = (className, path, ext, sizes) => {
  let css = `${className} {
    `;
  sizes.forEach((size, index) => {
    if(index === 0) {
      css += `background-image: url('${path}-${size}px${ext}');
      }`;
    } else {
      css += `@media screen and (min-width: ${size}px) {
        ${className} {
          background-image: url('${path}-${size}px${ext}');
        }
      }`;
    }
  });
  return css;
};