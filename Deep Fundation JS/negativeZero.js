var trendRate = -0;
console.log(trendRate === -0);
console.log(trendRate.toString());
console.log(trendRate === 0);
console.log(trendRate < 0);
console.log(trendRate > 0);
console.log(typeof(trendRate));
console.log(Object.is(trendRate, -0));
console.log(Object.is(trendRate, 0));
// -0 can help us with map for car like wich car direction stop it 
//fix sign
console.log(Math.sign(-3));
console.log(Math.sign(3));
console.log(Math.sign(-0));
console.log(Math.sign(0));
function sign(v){
    return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1
}
console.log(sign(-0));
console.log(sign(0));
