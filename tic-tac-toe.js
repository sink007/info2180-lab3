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
    });
    
});


  