document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const status = document.querySelector('#status');

    let state=[];
    let current = 'X'; 
    squares.forEach((square, index) => {
        square.classList.add('square');
        square.addEventListener('click', function() {
            if (state[index] || status.classList.contains('you-won')) {
                return;
            }
            state[index] = current; 
            square.textContent = current; 
            square.classList.add(current);
            const winner= check(state);

            if (winner){
                status.textContent = `Congratulations! ${winner} is the Winner!`; 
                status.classList.add('you-won'); 
            }

            else{
                current = current === 'X' ? 'O' : 'X'; 
            }

        });

        square.addEventListener("mouseover", function() {
            square.classList.add('hover');
        });

        square.addEventListener("mouseleave", function() {
            square.classList.remove('hover');
        });
        
    });
    
    function check(state) {
        const c = [
          [0, 1, 2], 
          [3, 4, 5], 
          [6, 7, 8], 
          [0, 3, 6],
          [1, 4, 7], 
          [2, 5, 8], 
          [0, 4, 8], 
          [2, 4, 6], 
        ];
    
        for (const x of c) {
            const [a, b, c] = x;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a]; 
            }
        }
        return null; 
    }
});


  