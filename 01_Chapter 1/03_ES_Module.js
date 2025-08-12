// Multiple named exports
export function add(a,b) {
  return a + b;
}

export function sub(a,b) {
  return a - b;
}


// Alternative: export list at the end
function mul(a,b) {
  return a * b;
}

function div(a,b) {
  return a / b;
}
export {mul,div};