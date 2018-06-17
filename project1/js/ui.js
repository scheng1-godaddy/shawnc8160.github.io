
// ==========================================================
// UI Object - UI related functions / objects / properties
// ==========================================================

const UI = {

  // -----------------
  // UI Properties
  // -----------------
  rowNum: 6,
  colNum: 7,

  // -----------------
  // Creates the game board
  // -----------------
  createBoard: function () {
    console.log(`Creating board with: ${this.rowNum} rows and ${this.colNum} columns`);
    // Want to create the bottom most row first (going to prepend everything)
    for(let row=1; row <= this.rowNum; row++) {
      // Create the row container, add identifier for row number
      const $row = $('<div>').addClass('row').attr('rownum', row);
      for(let col=1; col <= UI.colNum; col++) {
        // Add each cell to the row container, add identifier for column number
        const $cell =
          $('<div>')
            .addClass('col')
            .addClass('none')
            .attr('rownum', row)
            .attr('colnum', col)
            // .on('click', EventHandler.cellClick)
        $row.append($cell);
      }
      // Row created, prepend it
      $('#board_container').prepend($row);
    }
  },

  // -----------------
  // Creates the game board cover styling
  // -----------------
  createBoardCover: function () {
    console.log(`Creating board cover with: ${this.rowNum} rows and ${this.colNum} columns`);
    for(let row=1; row <= this.rowNum; row++) {
      // Create the row container, add identifier for row number
      const $row = $('<div>').addClass('row');
      for(let col=1; col <= UI.colNum; col++) {
        // Add each cell to the row container, add identifier for column number
        const $cell =
          $('<div>')
            .addClass('colcover')
        $row.append($cell);
      }
      // Row created, prepend it
      $('#board_cover_container').append($row);
    }
  },

  // -----------------
  // Creates the input area
  // -----------------
  createInputArea: function () {
    console.log(`Creating input area`);
    // Create the row container, add identifier that its the input row
    const $row = $('<div>').addClass('row').attr('rownum', 'input');
    for(let col=1; col <= UI.colNum; col++) {
      // Create individual cells and append to the row
      const $cell =
        $('<div>')
          .addClass('inputCol')
          .attr('inputcolnum', col)
          // Add listener for click
          .on('drop', EventHandler.inputHandler)
          // Adding droppable
          .droppable({
              over: function(event, ui) {
                  $(this).css('opacity', '1');
              },
              out: function(event, ui) {
                  $(this).css('opacity', '.5');
              }
          })
      $row.append($cell);
    }
    // Input created, append
    $('#input_container').append($row);

  }
}
