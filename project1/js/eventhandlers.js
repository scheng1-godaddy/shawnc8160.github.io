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

      //What's offset for that div?
      console.log(`The offset top is `, $cell.offset().top);
      console.log(`The offset left is `, $cell.offset().left);

      // Animate the draggable!
      $(ui.draggable).animate({marginTop: $cell.offset().top}, 400, 'swing', function() {
        $(ui.draggable).remove();
        $cell.removeClass('none').addClass(App.curPlayer.color);
        App.endTurn($cell);
      });

    }
  }
}
