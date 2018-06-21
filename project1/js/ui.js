
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
    console.log(`Creating board with: ${UI.rowNum} rows and ${UI.colNum} columns`);
    // Want to create the bottom most row first (going to prepend everything)
    for(let row=1; row <= UI.rowNum; row++) {
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
    console.log(`Creating board cover with: ${UI.rowNum} rows and ${UI.colNum} columns`);
    for(let row=1; row <= UI.rowNum; row++) {
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
  },

  // -----------------
  // Update Score
  // -----------------
  updateScore: function () {
    $('#p1_score').text(`${App.player1.score}`);
    $('#p2_score').text(`${App.player2.score}`);
  },

  // -----------------
  // Binds handlers to UI buttons
  // -----------------
  bindUI: function () {

    $('#left_menu_icon').on('click', () => {
      console.log("Restarting game");
      App.restartGame();
    });
  },

  // -----------------
  // Create body structure
  // -----------------
  createStructure: function () {

    const $mainContainer = $('<div>').attr('id', 'main_container');
    $('#container').append($mainContainer);

    const $leftsideContainer = $('<div>').attr('id', 'leftside_container');
    const $rightsideContainer = $('<div>').attr('id', 'rightside_container');
    const $centerContainer = $('<div>').attr('id', 'center_container');
    $('#main_container').append($leftsideContainer);
    $('#main_container').append($centerContainer);
    $('#main_container').append($rightsideContainer);

    const $leftMenuContainer = $('<div>').attr('id', 'left_menu_container').addClass('menu');
    const $player1Container = $('<div>').attr('id', 'player1_container');
    $('#leftside_container').append($leftMenuContainer);
    $('#leftside_container').append($player1Container);

    const $player2Container = $('<div>').attr('id', 'player2_container');
    $('#rightside_container').append($player2Container);

    const $leftMenuIcon = $('<div>').attr('id', 'left_menu_icon');
    const $leftMenuText = $('<div>').attr('id', 'left_menu_text').text("Restart Game");
    $('#left_menu_container').append($leftMenuIcon);
    $('#left_menu_container').append($leftMenuText);

    const $scoreContainer = $('<div>').attr('id', 'score_container');
    $('#center_container').append($scoreContainer);

    const $p1ScoreContainer = $('<div>').attr('id', 'p1_score_container');
    $('#score_container').append($p1ScoreContainer);

    const $p1Score = $('<div>').attr('id', 'p1_score');
    const $p1Logo =  $('<div>').attr('id', 'p1_logo');
    $('#p1_score_container').append($p1Score);
    $('#p1_score_container').append($p1Logo);

    const $scoreCenterContainer = $('<div>').attr('id', 'score_center_container');
    $scoreCenterContainer.append($('<p>').attr('id', 'score_center').text('VS'));
    $('#score_container').append($scoreCenterContainer);

    const $p2ScoreContainer = $('<div>').attr('id', 'p2_score_container');
    $('#score_container').append($p2ScoreContainer);

    const $p2Score = $('<div>').attr('id', 'p2_score');
    const $p2Logo =  $('<div>').attr('id', 'p2_logo');
    $('#p2_score_container').append($p2Logo);
    $('#p2_score_container').append($p2Score);

    const $inputContainer = $('<div>').attr('id', 'input_container');
    $inputContainer.append($('<div>').attr('id', 'message_prompt'));
    $('#center_container').append($inputContainer);

    const $boardContainer = $('<div>').attr('id', 'board_container');
    $boardContainer.append($('<div>').attr('id', 'board_cover_container'))
    $('#center_container').append($boardContainer);

    const $controlsContainer = $('<div>').attr('id', 'controls_container');
    $controlsContainer.append($('<p>').text('Do you want to play again?'));
    $controlsContainer.append($('<button>').attr('id', 'restart_yes').addClass('button').addClass('button1').text('Yes'));
    $controlsContainer.append($('<button>').attr('id', 'restart_no').addClass('button').addClass('button1').text('No'));
    $('#center_container').append($controlsContainer);


  },

  // -----------------
  // Create Player selection screen
  // -----------------
  createPlayerSelection: function(player) {
    // Create the player selection screen
    const $intro = $('<div>').addClass('intro');
    const $p1Select = $('<div>').attr('id', 'p1select').addClass('intro_overlay').attr('player', player);
    const $emojiSelectContainer = $('<div>').attr('class', 'playerSelectDivider').attr('player', player);
    const $sectionDivider = $('<div>').attr('class', 'playerSelectSection').attr('player', player);
    const $sectionDivider2 = $('<div>').attr('class', 'playerSelectSection').attr('player', player);
    const $sectionDivider3 = $('<div>').attr('class', 'playerSelectSection').attr('player', player);
    const $sectionDivider4 = $('<div>').attr('class', 'playerSelectSection').attr('player', player);
    $sectionDivider3.text("Enter your name: ");
    $sectionDivider3.append($('<input>').attr('id', 'nameinput').attr('player', player).attr('player', player));
    $sectionDivider4.append(
      $('<button>')
        .attr('id', 'player1done')
        .addClass('button')
        .addClass('button1')
        .text('Done'))
        .on('click', EventHandler.nameSubmitHandler)
    $emojiSelectContainer.append($sectionDivider.attr('id', 'emojiselectheader'));
    $emojiSelectContainer.append($sectionDivider2.attr('id', 'emojiselectarea'));
    $emojiSelectContainer.append($sectionDivider3.attr('id', 'nameinputarea'));
    $emojiSelectContainer.append($sectionDivider4.attr('id', 'buttonarea'));
    $p1Select.append($emojiSelectContainer);
    $intro.append($p1Select);
    $('body').append($intro);

    // Create the emoji selection area
    $('#emojiselectheader').append($('<h2>').text(`Player ${player}, select your Emoji`));
    for (let i = 0; i < App.emoticons.length; i++) {
      let $emojiDiv = $('<div>').addClass('emoji_holder');
      let $emjoiImg = $('<img>')
        .addClass('emoji_thumbnail')
        .attr('src', `${App.emoticons[i].logo}`)
        .attr('index', `${i}`)
        .on('click', EventHandler.emojiSelectHandler);
      $emojiDiv.append($emjoiImg);
      $('#emojiselectarea').append($emojiDiv);
    }
  }, // Close createPlayerSelection

  // -----------------
  // Create Player selection screen
  // -----------------
  createGridSelection: function(player) {
    const $intro = $('<div>').addClass('intro');
    const $gridSelect = $('<div>').attr('id', 'gridSelect').addClass('intro_overlay');
    const $gridSelectContainer = $('<div>').attr('class', 'playerSelectDivider');
    const $sectionDivider = $('<div>').attr('class', 'playerSelectSection');
    const $sectionDivider2 = $('<div>').attr('class', 'playerSelectSection');
    const $sectionDivider3 = $('<div>').attr('class', 'playerSelectSection');
    $sectionDivider3.append(
      $('<button>')
        .attr('id', 'griddone')
        .addClass('button')
        .addClass('button1')
        .text('Done'))
        .on('click', EventHandler.gridSubmitHandler)

    $gridSelectContainer.append($sectionDivider.attr('id', 'gridselectheader'));
    $gridSelectContainer.append($sectionDivider2.attr('id', 'gridselectarea'));
    $gridSelectContainer.append($sectionDivider3.attr('id', 'gridbuttonarea'));
    $gridSelect.append($gridSelectContainer);
    $intro.append($gridSelect);
    $('body').append($intro);

    $('#gridselectheader').append($('<h2>').text(`Select your grid size`));

    let $gridDiv1 = $('<div>').addClass('grid_holder').attr('id', 'gridstandard').attr('rowsize', '6').attr('colsize', '7').on('click', EventHandler.gridSelectHandler);
    let $gridDiv2 = $('<div>').addClass('grid_holder').attr('id', 'gridlarge').attr('rowsize', '9').attr('colsize', '10').on('click', EventHandler.gridSelectHandler);
    let $gridDiv3 = $('<div>').addClass('grid_holder').attr('id', 'gridxlarge').attr('rowsize', '12').attr('colsize', '13').on('click', EventHandler.gridSelectHandler);

    $gridDiv1.append($('<img>').attr('src', 'images/grid_grey.png'));
    $gridDiv1.append($('<p>').text('Regular (6x7)'));

    $gridDiv2.append($('<img>').attr('src', 'images/grid_grey.png'));
    $gridDiv2.append($('<p>').text('Large (9x10)'));

    $gridDiv3.append($('<img>').attr('src', 'images/grid_grey.png'));
    $gridDiv3.append($('<p>').text('X-Large (12x13)'));

    $('#gridselectarea').append($gridDiv1);
    $('#gridselectarea').append($gridDiv2);
    $('#gridselectarea').append($gridDiv3);

  }

} // Close UI object
