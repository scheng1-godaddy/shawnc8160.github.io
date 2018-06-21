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
      $(ui.draggable).animate({marginTop: $cell.offset().top+120}, 400, 'swing', function() {
        $(ui.draggable).remove();
        $cell.removeClass('none').addClass(App.curPlayer.color);
        App.endTurn($cell);
      });

    }
  },

  emojiSelectHandler: function(event) {
    let $currentEmoji = $(event.currentTarget);
    $('.emoji_thumbnail_selected').removeClass('emoji_thumbnail_selected');
    $currentEmoji.addClass('emoji_thumbnail_selected');
    // Get the emoji object from the Array
    App.selectedEmojiIndex = Number($currentEmoji.attr('index'));
    //Display input name area now
    $('#nameinputarea').css('display', 'block');
    $('#nameinput').val(App.emoticons[App.selectedEmojiIndex].name)
    $('#buttonarea').css('display', 'flex');
  },

  nameSubmitHandler: function(event) {
    console.log($(event.currentTarget));
    // Check which player it is and grab the correct object
    let playerNum = $(event.currentTarget).attr('player');
    // Place emoji info into players object
    let emoji = App.emoticons[App.selectedEmojiIndex]
    App['player'+playerNum].name = $('#nameinput').val();
    App['player'+playerNum].color = emoji.color;
    App['player'+playerNum].logo = emoji.logo;

    // Remove emoji from Array
    App.emoticons.splice(App.selectedEmojiIndex, 1);

    // Move onto next player if not already player 2
    // If player 2, go to board choice window.
    if (playerNum == 1) {
      let $saveDiv = $('#container').detach();
      $('body').empty().append($saveDiv);
      UI.createPlayerSelection(2);
    } else {
      // Launch grid chooser
      console.log(App.player1);
      console.log(App.player2);
    }

  }
}
