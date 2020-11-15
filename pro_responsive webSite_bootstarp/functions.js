// counter animation
let numbers = document.getElementsByClassName('numbers')[0].getElementsByTagName('h1');

function change() {
   Array.from(numbers).forEach(item => {
       let innerNums = item.innerText;
       let number = parseInt(innerNums);
       for(let i = 10; i > 1; i--) {
        setInterval(() => {
            item.innerText = number += 3
        }, 1000*i);
       }
   })
}

change()

// sticky nav bar

let fixedNav = document.getElementById('nav-id');
let countDiv = document.getElementById('sect-1');
let offset = countDiv.offsetTop;

window.onscroll = function() {myFunc()};

function myFunc() {
if(window.pageYOffset > offset){
fixedNav.classList.add('fixed')
} else{
    fixedNav.classList.remove('fixed')
}
}


