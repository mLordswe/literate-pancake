//  function, array, object
const FLAG_ALL = "all";
const state = {
  name: "TS-motivation",
  version: 1.1,
  desc: "a program to show JS and why TS is good fun!",
};

const printInfo = (flag) => {
  if (flag === "all") {
    console.log(
      `Software:${state.name}
      Version: ${state.version}
      Description: ${state.desc}`
    );
  } else console.log(`Software:${state.name}`);
};

printInfo(FLAG_ALL);

const addStuff = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    console.log(`Sum of ${x} and ${y} is ${x + y}`);
  } else console.log("Error!");
};
addStuff(2, 5);
addStuff(true, true);
addStuff("a", 5);
