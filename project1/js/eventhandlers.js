// ==========================================================
// EventHandler Object - event handlers for listener callbacks
// ==========================================================

const EventHandler = {

  // -----------------
  // Handler for chips drag and drop
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

  // -----------------
  // Handler for Emoji selection
  // -----------------
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

  // -----------------
  // Handler for the submit button in player emoticon selection screens
  // -----------------
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

    // Clear the current visible elements on screen (except background)
    let $saveDiv = $('#container').detach();
    $('body').empty().append($saveDiv);
    // Move onto next player if not already player 2
    // If player 2, go to board choice window.
    if (playerNum == 1) {
      // Display selection screen for player 2
      UI.createPlayerSelection(2);
    } else {
      // Launch grid chooser
      console.log(App.player1);
      console.log(App.player2);
      UI.createGridSelection();
    }
  },

  // -----------------
  // Handler for grid selection
  // -----------------
  gridSelectHandler: function(event) {
    let $currentGrid = $(event.currentTarget);
    $('.grid_holder_selected').removeClass('grid_holder_selected');
    $currentGrid.addClass('grid_holder_selected');
    // Store the grid size
    let rowSize = $currentGrid.attr('rowsize');
    let colSize = $currentGrid.attr('colsize');
    console.log(`row size is ${rowSize} column size is ${colSize}`);
    UI.rowNum = Number(rowSize);
    UI.colNum = Number(colSize);
  },

  // -----------------
  // Handler for the submit button on grid selection page
  // -----------------
  gridSubmitHandler: function(event) {

    // Clear the visible elements
    let $saveDiv = $('#container').detach();
    $('body').empty().append($saveDiv);
    // Rebuild the board
    UI.createStructure();
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

    $('body').hide().show();
    $('container').hide().show();

    // Start the game
    // Set the correct dimensons
    if (UI.rowNum === 6) {
      $('#message_prompt').width(525);
      $('#controls_container').width(525);
    }
    if (UI.rowNum === 9) {
      $('#message_prompt').width(750);
      $('#controls_container').width(750);
    }
    if (UI.rowNum === 12) {
      $('#message_prompt').width(975);
      $('#controls_container').width(975);
    }
    App.startTurn();
  }
}// Closes EventHandler object
