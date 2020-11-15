let counter = 1;
let animalContainer =  document.getElementById('animal-info');

let btn = document.getElementById('botn');

btn.addEventListener('click', function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+counter+'.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    
    ourRequest.send();
    counter++;
if(counter > 3) {
    btn.classList.add('hide-me')
}
});

function renderHTML(data) {
    let string = '';
    for(let i = 0; i < data.length; i++) {
 string +='<p>'+data[i].name+' the '+data[i].species+' that likes to eat ';
 for(let j = 0; j < data[i].foods.likes.length; j++) {
     string += data[i].foods.likes[j]+' and ';
 }
 
 string += ' dislikes to eat ';
 for(let k = 0; k < data[i].foods.dislikes.length; k++) {
     string += data[i].foods.dislikes[k]+' and ';
 }
 let index = string.length;
 string = string.substr(0,index-4);
    }
    string += '</p>'

 animalContainer.insertAdjacentHTML('beforeend', string);
}

animalContainer.classList.add('new')

