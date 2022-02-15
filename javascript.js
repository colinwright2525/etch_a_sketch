
let numCount;
let totalCount = 0;
let rowContainer = [];
rowContainer.className = 'myRowContainer';
let boxContainer = [];

const grid = document.createElement('div');
grid.className = 'myGrid';

const btn = document.querySelector('#myButton');

function createGrid() {
    
    let num = prompt('How many squares per side would you like your grid to be? (Up to 100)', 0);
    numCount = parseInt(num);
    totalCount += numCount;
    console.log(totalCount);
    let height = (450/num);
    let newHeight = height.toString();

    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.className = 'myRow';

        for (let j = 0; j < num; j++) {
            let box = document.createElement('div');
            box.className = 'myBox';
            box.addEventListener('mouseover', function() {
                box.className = 'myBoxAlt';
            });
            boxContainer.push(box);
            row.appendChild(box);
           
        }
        row.style.height = newHeight + 'px';
        rowContainer.push(row);
        grid.appendChild(row);
        console.log(row);
        
    }
    console.log(rowContainer);
    document.body.appendChild(grid);
    console.log(grid);
 

}




function clearGrid() {
  
   for (let i = 0; i < totalCount; i++) {
       rowContainer[i].style.height = '0px';
       console.log(i);
   }
   console.log(numCount);
   

}

btn.addEventListener('click', () => {
    clearGrid ();
    createGrid ();
});



createGrid();







