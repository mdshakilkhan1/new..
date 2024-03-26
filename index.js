const pragrap = document.getElementById('shakil');

console.log(pragrap.innerHTML);

const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    // console.log(input.value)
    const listItem = document.createElement('li')
    listItem.innerHTML = input.value;
    // console.log(listItem)

    ul.appendChild(listItem)

} );



const numone = document.getElementById('numone')
const numtwo = document.getElementById('numtwo')
const calculat = document.getElementById('calculat')

const result = document.getElementById('result')
calculat.addEventListener('click',function(){
    const numOne = Number(numone.value);
    const numTwo = Number(numtwo.value);

    const sum = numOne + numTwo
    result.innerText =sum
    console.log(sum)
    

})


