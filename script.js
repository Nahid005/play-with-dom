// const parentEliments = document.getElementsByClassName('ul')
// console.log(parentEliments);
// const chaildElement = parentEliment.getElementsByClassName('ul')
// console.log(chaildElement);

// const parentsElement = parentEliments.parentEliment.parentEliments;

// console.log(parentsElement);

// console.log(ul.parentEliments)

// create element 

// let creactElements = document.createElement('div')
// console.log(creactElements);
// creactElements.className = 'container'
// // creactElements.classList.remove('container')
// creactElements.classList.add("container")
// creactElements.setAttribute('id', 'container');
// creactElements.innerText = " Hello World "
// creactElements.textContent =" Hello World "
// creactElements.style.color = 'red';
// creactElements.style.fontSize = '25px'

// console.log(document.URL);

const parentData = document.querySelector('.ul')
const chaildData = parentData.children;
console.log(chaildData);

// parentData.addEventListener ('click', (event) => {
//     console.log(parentData);
    
// })

for ( let element of chaildData) {
    console.log(element);
    element.addEventListener('click', (event) => {
        // console.dir(event);
        // element.classList.remove('items')
        // console.log(element);
        // element.style.color = "red"
        // element.textContent = " Hi Nahid Hassan "
        // element.innerHTML = "<marquee behavior='alternate'>This text will bounce </marquee>"
        
    })
}


// array 

let arr = [ 1, 3, 2, 4, 5, "num" , false, undefined, 9]
let newarr = []

for( let i = 0; i< arr.length ; i++) {
    if(typeof(arr[i]) === 'number'){
        console.log(arr);
    }
}

// console.log(newarr);