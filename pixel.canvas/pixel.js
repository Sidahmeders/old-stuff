/*
let height = document.getElementById('grid-height');
let width = document.getElementById('grid-width');
let color = document.getElementById('colorPicker');
let table = document.getElementById('tableCanvas');
let submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
      event.preventDefault();
      table.firstElementChild.remove();
      for(let i = 0; i < height.value; i++) {
        let row = table.insertRow(i);
        for(let j = 0; j < width.value; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', function(event) {
                  
                  cell.style.backgroundColor = color.value;
            })
        }
      }
})
*/

let height =  document.getElementById('height-inpu');
let width = document.getElementById('width-inpu');
let table = document.getElementById('table-x');
let submit =  document.getElementById('btn-submit');
let color = document.getElementById('color-pic');


submit.addEventListener('click', function(event) {
event.preventDefault();
table.firstChild.remove();

  for(let i = 0; i < height.value; i++) {
    let row = table.insertRow(i);
    for(let j = 0; j < width.value; j++) {
     let cell = row.insertCell(j);
     cell.addEventListener('click', function(e) {
           e.preventDefault();
          cell.style.backgroundColor = color.value;
     });
    }
  }

}); 
