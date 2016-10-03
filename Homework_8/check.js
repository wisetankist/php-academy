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

                var paragraph = document.createElement('p');
                paragraph.innerHTML = this.name + " - " + this.count + " ";
                statistics.appendChild(paragraph);
                paragraph.appendChild(button);

                var br = document.createElement('br');
                paragraph.appendChild(br);

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
            massOfObjectTags[w].showStatistics();
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