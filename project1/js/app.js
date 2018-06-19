// ==========================================================
// App Object - application logic
// ==========================================================

const App ={
  // -----------------
  // Properties for the game
  // -----------------
  winAmount: 3,
  gameCount: 0,
  checkRowNum: 0,
  checkColNum: 0,
  checkCount: 0,
  player1: {
    id: 'player1',
    name: 'Hangry',
    color: 'red',
    score: 0,
    logo: '../images/Very_Angry_Emoji_small.png'
  },
  player2: {
    id: 'player2',
    name: 'El Diablo',
    color: 'purple',
    score: 0,
    logo: '../images/Smiling_Devil_Emoji_small.png'
  },
  curPlayer: this.player1,

  // -----------------
  // Starts the current turn
  // -----------------
  startTurn: function() {
    console.log("Starting new turn");
    // Swaps player
    this.curPlayer = (this.curPlayer === this.player1) ? this.player2 : this.player1;
    // Display message for whose turn
    // $('#message_prompt').text(`${this.curPlayer.name} turn`).css('color', this.curPlayer.color);
    // Create new chip (div), make it draggable and able to snap into the input area
    $newChip = $('<div>').addClass(this.curPlayer.color).draggable({ snap: ".ui-droppable" });
    console.log("Created new chip", $newChip);
    // Append new chip to the correct side bar
    $(`#${this.curPlayer.id}_container`).append($newChip);
  },

  // -----------------
  // Ends the current turn
  // -----------------
  endTurn: function($cell) {
    // Keep count of how many turns (maybe for future use)
    this.gameCount++;

    // Check if there's a winner
    this.winCheck($cell);

    // Call next function to start next turn
    this.startTurn();
  },

  // -----------------
  // Evaluates if there's a winner
  // -----------------
  winEval: function() {
    console.log(`Check count is: ${this.checkCount}`);
    // Check if we have a winner?
    if (this.checkCount >= this.winAmount) {
        //We have a winner, prompt the user
        console.log(`${this.curPlayer.name} has won the game`);
        $('#message_prompt').text(`${this.curPlayer.name} Won!`)
        $('#message_prompt').css('color', `${this.curPlayer.color}`);
        $('#message_prompt').css('display', 'block');
        // Reset the game and take score
        this.curPlayer.score++;
        UI.updateScore();
    } else {
      this.checkCount = 0;
    }
  },

  // -----------------
  // Check win, calls other helper functions
  // -----------------
  winCheck: function($cell) {

    console.log("Check win has ", $cell);

    // Check horizontally count matches
    this.checkCell($cell, 0, 1);
    this.checkCell($cell, 0, -1);
    // Check for winner
    this.winEval();

    // Check vertically count matches
    this.checkCell($cell, 1, 0);
    this.checkCell($cell, -1, 0);
    // Check for winner
    this.winEval();

    // Check diagonally (left-bottom to top-right) for a winner
    this.checkCell($cell, 1, 1);
    this.checkCell($cell, -1, -1);
    // Check for winner
    this.winEval();

    // Check diagonally (left-top to bottom-right) for a winner
    this.checkCell($cell, 1, -1);
    this.checkCell($cell, -1, 1);
    // Check for winner
    this.winEval();

    // After all the checks, reset the checkRowNum and checkColNum
    console.log("Didn't find a winner");
    this.checkRowNum = 0;
    this.checkColNum = 0;
  },

  // -----------------
  // Checks adjacent cells for a match. Direction of check is based
  // on the parameters given
  //
  // Parameters: $cell - the current cell (as jquery object)
  //              row - if negative: looks down
  //                    if positive, looks up
  //                    if 0, stays on the same row
  //              col - if negative: looks left
  //                    if positive, looks right
  //                    if 0, stays on the same column
  // -----------------
  checkCell: function($cell, row, col) {

    // What's the current cell's position
    this.checkRowNum = Number($cell.attr('rownum'));
    this.checkColNum = Number($cell.attr('colnum'));
    console.log(`Checking horizontal for row: ${this.checkRowNum}, col: ${this.checkColNum}`);

    // Check for the next cell (this is dependent on what was passed)
    let rowNum = this.checkRowNum+row;
    let colNum = this.checkColNum+col;
    let $nextCell = $(`.col[rownum=${rowNum}][colnum=${colNum}]`);
    console.log('next cell is:', $nextCell);
    let matchFound = true;
    //  Loop and check the cells in certain direction (direction dependent on parameters)
    //  Keep checking as long as these conditions are true:
    //  1. Its valid position on the board, so its not off the board
    //  2. The cell actually matches current player's color
    //  3. We found 4 matches and the player won
    // console.log(`rowNum: ${rowNum} colNum: ${colNum} UI.rowNum: ${UI.rowNum} UI.colNum: ${UI.colNum}`);
    while(
      (rowNum > 0) && (colNum > 0) &&
      (rowNum <= UI.rowNum) && (colNum <= UI.colNum) &&
      (matchFound) && (this.checkCount <= this.winAmount)) {
      // Check if the cell matches
      // console.log($nextCell.hasClass(`${this.curPlayer}`));
      if ($nextCell.hasClass(`${this.curPlayer.color}`)) {
        console.log('Found match');
        // If it does, increment checkCount
        this.checkCount++;

        // Get the next cell
        rowNum += row;
        colNum += col;
        $nextCell = $(`.col[rownum=${rowNum}][colnum=${colNum}]`);
      } else {
        // No match, stop the loop
        matchFound = false;
      }
    } // End while loop here

  }// Close checkCell function

} // Close App object
