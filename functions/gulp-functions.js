exports.getSizes = (arr) => 
  arr.map((size) => {
    return {
      width: size,
      suffix: `-${size}`,
      quality: 85,
    };
  });
