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

function startGame() {

    var numberOfColumns = $('#width');
    var numberOfRows = $('#height');
    var speed = $('#speed');

    $('#start-button').prop("disabled", true);
    $('#create-button').prop("disabled", true);
    numberOfColumns.prop("disabled", true);
    numberOfRows.prop("disabled", true);
    speed.prop("disabled", true);

    var numberOfAllCell = numberOfColumns.val() * numberOfRows.val();
    var mass = [];
    for (var i = 0; mass.length !== numberOfAllCell; i++) {
        var random = Math.round(Math.random() * (numberOfAllCell - 1) + 1) - 1;

        if (mass.indexOf(random) == -1) {
            mass.push(random);
        }
    }

    var count = 0;
    var cell = $('.cell');
    var process = setInterval(function () {
        addField(mass[count]);
    }, setSpeed(speed.val()));

    function addField(targetCell) {

        $(cell[targetCell]).css('background-color', 'green').click(function () {
            $(this).css('background-color', 'red');
        });

        count++;

        if (count == numberOfAllCell + 1) {
            window.clearInterval(process);
            var massOfCells = document.getElementsByClassName('cell');
            var countOfRedCell = 0;

            for (var i = 0; i < massOfCells.length; i++) {

                console.log(massOfCells[i].style.backgroundColor);
                if (massOfCells[i].style.backgroundColor == 'red') {
                    countOfRedCell++;
                }
            }

            if (countOfRedCell == numberOfAllCell) {
                alert('Вы победили');
            } else {
                alert('Скрипт победил');
            }

            var begin = confirm('Повторить игру?');
            if (begin == true) {
                createField();
                startGame();
            } else {
                location.reload();
            }
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
}




