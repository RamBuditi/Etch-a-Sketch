const container = document.querySelector("div");

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

createGrid(256);






