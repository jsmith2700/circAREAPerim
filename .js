# circAREAPerim

const pI = Math.PI
let radius = 4
circPow = Math.pow(radius, 2)
circArea = pI * circPow

function cacArea(pI, radius){
    console.log(`our area of our circle is ${circArea}, now caculate the perimeter`)
}

cacArea();

circPerim = 2 * pI * radius

function cacPerim(pI, radius){
    console.log(`our perimeter of the circle is ${circPerim}.`)
}

cacPerim();
