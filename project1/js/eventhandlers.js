// ==========================================================
// EventHandler Object - event handlers for listener callbacks
// ==========================================================

const EventHandler = {

  // -----------------
  // UI Properties
  // -----------------
  inputHandler: function (event) {
    // Get the column ID
    const colNum = $(event.currentTarget).attr('inputcolnum');
    // Retrieve all cells in the column
    // Check which cell is available by looking for class 'none'
    const $cols = $(`div[colnum=${colNum}]`).filter('.none');
    // Check if its empty
    if ($cols.length > 0) {
      // Choose the earliest one
      const $cell = $cols.eq($cols.length-1)
      console.log(`cell selected is: ${$cell}`);
      // Set cell for current player
      $cell.css('background', App.curPlayer);
      $cell.removeClass('none').addClass(App.curPlayer);
      // End the turn
      App.endTurn();
    }
  }
}
