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
  endTurn: function() {
    // Swaps player
    this.curPlayer = (this.curPlayer === 'red') ? 'blue' : 'red';
    // Keep count of how many turns (maybe for future use)
    this.gameCount++;
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
