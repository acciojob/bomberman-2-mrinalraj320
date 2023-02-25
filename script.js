//your code here

function reset() {
    for (i = 1; i <= 9; i++) {
        const block = document.getElementById(`${i}`);
        block.style.backgroundColor = "transparent";
    }
}
  
document.getElementById('reset_button').addEventListener('click', reset);

document.getElementById('change_button').addEventListener('click', () => {
    reset();
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;
    // alert(colorId)
    const block = document.getElementById(`${blockId}`);
    block.style.backgroundColor = color;
	let bombIds = [];
while (bombIds.length < 10) {
    let randomId = Math.floor(Math.random() * 60) + 20;
@@ -231,7 +213,6 @@ for (let i = 0; i < bombIds.length; i++) {
    }
}

//============revelaing boxes===============//

let boardDivs = document.querySelectorAll('.grid-item')
boardDivs.forEach(boardCell => {
@@ -252,7 +233,6 @@ function revealingDivs(e) {
        clickedCell.style.opacity = '0.6'
        clickedCell.classList.add('checked')

        //====displaying the number of bobms==//
        if (!clickedCell.classList.contains('bomb')) {
            let bombCount = 0;
            console.log("first after declaration", bombCount);
@@ -515,4 +495,4 @@ function won() {
    boardDivs.forEach(boardCell => {
        boardCell.removeEventListener("contextmenu", addingFlag)
    })
}
}
});