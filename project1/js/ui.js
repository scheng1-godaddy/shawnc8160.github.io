
// ==================
// UI Object - UI related functions / objects / properties
// ==================

const UI = {
  rowNum: 6,
  colNum: 7,
  // Creates the game board
  createBoard: function () {
    console.log(`Creating board with: ${this.rowNum} rows and ${this.colNum} columns`);
    // Want to create the bottom most row first (going to prepend everything)
    for(let row=1; row <= this.rowNum; row++) {
      // Create the row container, add identifier for row number
      const $row = $('<div>').addClass('row').attr('rowNum', row);
      for(let col=1; col <= UI.colNum; col++) {
        // Add each cell to the row container, add identifier for column number
        $row.append($('<div>').addClass('col').attr('rowNum', row).attr('colNum', col));
      }
      // Row created, prepend it
      console.log($('#board_container'));
      $('#board_container').prepend($row);
    }
  }
}
