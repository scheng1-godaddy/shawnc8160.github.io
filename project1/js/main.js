// ==========================================================
// Main application launcher
// ==========================================================

// -----------------
// On ready
// -----------------
$(() => {

  // UI.createIntro();

  $('#container').empty();
  UI.createStructure();

  // Start Game stuff
  // Create the input area
  UI.createInputArea();
  // Create the board first
  UI.createBoard();
  // Create the cover for the board
  UI.createBoardCover();
  // Update the score board
  UI.updateScore();
  // Bind the UI
  UI.bindUI();
  // Start the game
  App.startTurn();
})
