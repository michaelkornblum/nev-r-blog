exports.getTitle = (siteTitle, pageTitle = undefined) => {
  if(typeof pageTitle == 'undefined') {
    return siteTitle;
  } else {
    return `${siteTitle} | ${pageTitle}`;
  }
}

exports.getPageProp = (siteProp, pageProp = undefined) => {
  if(typeof pageProp === 'undefined') {
    return siteProp;
  } else {
    return pageProp;
  }
}
