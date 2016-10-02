/**
 * Created by Артем on 01.10.2016.
 */
function showNumbersOfTags() {

    var statistics = document.getElementById('statistics');

    if (statistics.style.display == 'none') {

        //выбираю все теги на странице
        var listOfTags = document.getElementsByTagName('*');

        //массив для хранения тегов
        var massOfTags = [];

        //массив для хранения тегов-объектов
        var massOfObjectTags = [];

        //конструктор объекта
        function Tag(name, count) {
            this.name = name;
            this.count = count;
            this.showStatistics = function () {

                var name = this.name;
                var button = document.createElement('input');
                button.type = "button";
                button.value = "DELETE " + name;
                button.onclick = function () {

                    var element = document.getElementsByTagName(name), index;
                    for (index = element.length - 1; index >= 0; index--) {
                        element[index].parentNode.removeChild(element[index]);
                    }
                };
                document.body.appendChild(button);
                return this.name + " - " + this.count;
            }
        }

        //цикл для подсчета колличества тегов
        for (var i = 0; i < listOfTags.length; i++) {
            var count = 0;
            if (massOfTags.indexOf(listOfTags[i].tagName) == -1){
                massOfTags.push(listOfTags[i].tagName);

                for (var a = i; a < listOfTags.length; a++) {
                    if (listOfTags[i].tagName == listOfTags[a].tagName) {
                        count++;
                    }
                }
                var obj = new Tag(listOfTags[i].tagName, count);
                massOfObjectTags.push(obj);
            }
        }

        //сортировка тегов по убыванию
        massOfObjectTags.sort(compare);
        
        function compare (a, b) {
            return (b.count - a.count);
        }


        //вывод статистики по тегам в div
        for (var w = 0; w < massOfObjectTags.length; w++) {
            statistics.innerHTML += massOfObjectTags[w].showStatistics() + '<br>';
        }
        showBlock(statistics);

    } else  {
        hideBlock(statistics);
    }
}

function showBlock(target) {
    target.style.display = 'block';
}

function hideBlock(target) {
    target.style.display = 'none';
}