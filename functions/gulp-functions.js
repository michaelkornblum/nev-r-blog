exports.getSizes = function () {
  return [...arguments].map((size) => {
    return {
      width: size,
      suffix: `-${size}`,
      quality: 85,
    };
  });
};