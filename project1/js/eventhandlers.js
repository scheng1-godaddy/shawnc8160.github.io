// ==========================================================
// EventHandler Object - event handlers for listener callbacks
// ==========================================================

const EventHandler = {

  // -----------------
  // UI Properties
  // -----------------
  inputHandler: function (event, ui) {
    // Get the input column
    const $inputCol = $(event.currentTarget);
    $inputCol.css('opacity', '.5');
    // Get the column number
    const colNum = $inputCol.attr('inputcolnum');
    // Retrieve all cells in the column
    // Check which cell is available by looking for class 'none'
    const $cols = $(`div[colnum=${colNum}]`).filter('.none');
    // Check if its empty
    if ($cols.length > 0) {
      // Choose the earliest one
      const $cell = $cols.eq($cols.length-1)
      // Set cell for current player
      $cell.css('background', App.curPlayer);
      $cell.removeClass('none').addClass(App.curPlayer);
      // Remove draggable item (might just want to remove draggable property and do animation)
      ui.draggable.remove();
      // End the turn
      App.endTurn($cell);
    }
  }
}
