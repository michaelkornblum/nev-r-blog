exports.getSizes = (arr) => 
  arr.map((size) => {
    return {
      width: size,
      suffix: `-${size}px`,
      quality: 85,
    };
  });
