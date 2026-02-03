const muvelet = (a, b, callback) => {
  const res = callback(a, b);
  return {
    result: res,
  };
};

const muveletLetrehoz = (jel) => {
  // if (jel === "+") {
  //   return (a, b) => {
  //     return a + b;
  //   };
  // }

  switch (jel) {
    case "+":
      return (a, b) => {
        return a + b;
      };

    case "-":
      return (a, b) => {
        return a - b;
      };

    case "*":
      return (a, b) => {
        return a * b;
      };
  }
};

export { muvelet, muveletLetrehoz };
