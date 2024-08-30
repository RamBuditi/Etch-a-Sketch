const container = document.querySelector(".container");



let btn = document.querySelector("button");
btn.textContent = "Reset"



function createGrid(num)
{
    for(let i= 0; i < num; i++)
    {
        let cells = document.createElement("div");
        container.appendChild(cells);

        cells.onmouseover = function() {
            this.style.backgroundColor = 'green';
        }
        
    }
   
    


    
}


function removeGrid()
{
   
            
            container.removeChild(cells);
    
         
            
     
}




btn.onclick = function ()
{
    
    // removeGrid();

    while(container.firstChild) { 
        container.removeChild(container.firstChild); 
    } 
    
    let size = prompt("Please Enter the number of squares per side for the new grid(Max limit is 100): ");

    // container.replaceWith(createGrid(size));
     createGrid((size * size));
    
}




createGrid(256);





