document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');

    let state=[];
    let current = 'X'; 
    squares.forEach((square, index) => {
        square.classList.add('square');
        square.addEventListener('click', function() {
            state[index] = current; 
            square.textContent = current; 
            square.classList.add(current);
            current = current === 'X' ? 'O' : 'X'; 
        });
        square.addEventListener("mouseover", function() {
            square.classList.add('hover');
        });

        square.addEventListener("mouseleave", function() {
            square.classList.remove('hover');
        });
    });
    
});


  