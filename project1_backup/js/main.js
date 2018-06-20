// ==========================================================
// Main application launcher
// ==========================================================

// -----------------
// On ready
// -----------------
$(() => {
  // Create the input area
  UI.createInputArea();
  // Create the board first
  UI.createBoard();
  // Create the cover for the board
  UI.createBoardCover();
  // Update the score board
  UI.updateScore();
  // Start the game
  App.startTurn();
})
