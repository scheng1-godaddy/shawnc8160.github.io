// ==========================================================
// App Object - application logic
// ==========================================================

const App ={
  // -----------------
  // Properties for the game
  // -----------------
  curPlayer: 'red',
  gameCount: 0,

  // -----------------
  // Ends the current turn
  // -----------------
  startTurn: function() {
    // Swaps player
    this.curPlayer = (this.curPlayer === 'red') ? 'blue' : 'red';
    // Display message for whose turn
    $('#msg').text(`${this.curPlayer} turn`);
    // Create new chip (div) and append to the correct side bar
    $newChip = $('<div>').addClass(this.curPlayer).draggable({ snap: ".ui-droppable" });
    $(`#${this.curPlayer}_container`).append($newChip);
  },

  // -----------------
  // Ends the current turn
  // -----------------
  endTurn: function() {
    // Keep count of how many turns (maybe for future use)
    this.gameCount++;

    // Might put logic here to check for end game

    // Call next function to start next turn
    this.startTurn();
  }

  // // -----------------
  // // Checks the column for available cell
  // // -----------------
  // checkOpenCell: function() {
  //   // Get the column ID
  //   // Retrieve all cells in the column
  //   // Check which cell is available by looking for class 'none'
  //   // Choose the earliest one
  //   // Return the object if found
  //   // Return null if not
  // }
}
