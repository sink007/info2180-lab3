// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all div elements inside the #board container
    const squares = document.querySelectorAll('#board div');
    
    // Loop through each div and add the 'square' class
    squares.forEach(function(square) {
      square.classList.add('square');
    });
  });
  