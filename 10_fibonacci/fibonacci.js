const fibonacci = function (parameter) {
  let fn1 = 0;
  let fn2 = 1;
  let fntotal = ~~parameter;
  if (fntotal < 0) {
    return "OOPS";
  }
  for (let i = 2; i <= parameter; i++) {
    fntotal = fn1 + fn2;
    fn1 = fn2;
    fn2 = fntotal;
  }
  return fntotal;
};

// Do not edit below this line
module.exports = fibonacci;
