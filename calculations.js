function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
x -= y;
return x;
}


function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

//task 2.2.4

function getPreIncrement(x) {
  return ++x
}

function getPostIncrement(x) {
  return x++
}

function getPreDecrement(x) {
  return --x
}
function getPostDecrement(x) {
  return x--
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
console.log(getPreIncrement(45));
console.log(getPostIncrement(4655));
console.log(getPreDecrement(17));
console.log(getPostDecrement(190));



