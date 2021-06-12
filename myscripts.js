console.log('test')


const container = document.getElementById("container")

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);

  document.getElementById("sizeBox").addEventListener("click", function() {
    console.log('test')
    var newSize = window.prompt("What size do you want 1-16")
    console.log(newSize);
    document.getElementById('container').innerHTML = "";
    makeRows(newSize, newSize);
  });




  let changeCol = document.getElementsByClassName('grid-item');

  let test = document.getElementById("container");

  // This handler will be executed only once when the cursor
  // moves over the unordered list
  test.addEventListener("mouseover", function( event ) {
    // highlight the mouseenter target
    let oldColor = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(oldColor)
    event.target.style.background = oldColor;

    document.getElementById("colorBox").addEventListener("click", function() {
      let currentColor =  document.getElementById("colorBox").value;
      console.log(currentColor)
  
      event.target.style.background= currentColor;
     
    })
  
//    event.target.style.background = 'red';

    document.getElementById("resetBox").addEventListener("click", function() {
      console.log('test')
      event.target.style.background= "white";
  });

}
  )
