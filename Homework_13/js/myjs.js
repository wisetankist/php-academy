$(document).ready(function() {
    $('.cell').click(function () {
        alert('s');
    })
});

function createField() {
    var gameField = $('.game-field');
    gameField.empty();

    var width = $('#width');
    var height = $('#height');
    var speed = $('#speed');

    if (width.val() > 10 || height.val() > 10 || speed.val() > 5) {
        alert('Введенные значения не соответствуют условию');
    }
    else {
        var numberOfColumns = width.val();
        var numberOfRows = height.val();

        gameField.append('<table class="main-field">');

        for (var i = 0; i < numberOfRows; i++) {
            $('.main-field').append('<tr class="rows">');
        }

        for (var r = 0; r < numberOfColumns; r++) {
            $('.rows').append('<td class="cell">');
        }
    }
}





    // var gameField = $('.game-field');
    // gameField.empty();
    //
    // var width = $('#width');
    // var height = $('#height');
    // var speed = $('#speed');
    //
    // if (width.val() > 10 || height.val() > 10) {
    //     alert('Введенные значения не соответствуют условию');
    // }
    // else
    //     game();
    //
    // function game() {
    //     var numberOfColumns = width.val();
    //     var numberOfRows = height.val();
    //     var speedOfGame = speed.val();
    //     var numberOfAllCell = numberOfColumns * numberOfRows;
    //
    //     gameField.append('<table class="main-field">');
    //
    //     for (var i = 0; i < numberOfRows; i++) {
    //         $('.main-field').append('<tr class="rows">');
    //     }
    //
    //     for (var r = 0; r < numberOfColumns; r++) {
    //         $('.rows').append('<td class="cell">');
    //     }
    //
    //     startGame(speedOfGame, numberOfAllCell);
    // }

    function startGame() {
        var numberOfColumns = $('#width').val();
        var numberOfRows = $('#height').val();
        var speed = $('#speed');
        var numberOfAllCell = numberOfColumns * numberOfRows;
        var mass = [];
        for (var i = 0; mass.length !== numberOfAllCell; i++) {
            var random = Math.round(Math.random() * (numberOfAllCell - 1) + 1) - 1;

            if (mass.indexOf(random) == -1) {
                mass.push(random);
            }
        }

        var count = 0;

        setInterval(function () {addGreenField(mass[count]);}, setSpeed(speed.val()));

        function addGreenField(targetCell) {
            var cell = $('.cell');
            $(cell[targetCell]).css('background', 'green').click(function () {
                $(this).css('background', 'red');
            });

            count++;
        }

    }

    function setSpeed(speed) {
        var interval = 0;
        if (speed == 1) {
            interval = 1000;
        } else if (speed == 2) {
            interval = 800;
        } else if (speed == 3) {
            interval = 600;
        } else if (speed == 4) {
            interval = 400;
        } else if (speed == 5) {
            interval = 200;
        }
        return interval;
    }


