ReadFile('http://localhost/Homework_7/server.php');

function ReadFile(filename) {

    var name = 'Artem';
    var role = 'admin';
    var args = "name=" + name + "&" + "role=" + role;

        //Создаю функцию обработчик
        var Handler = function (Request) {

            var div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML += Request.responseText;
        };

        //Отправляю запрос
        SendRequest("POST", filename, args, Handler);


}

function SendRequest(method, path, args, handler) {
    //Создаю запрос
    var Request = new XMLHttpRequest();

    //Назначаю обработчик
    Request.onreadystatechange = function () {
        //Если обмен данными завершен
        if (Request.readyState == 4) {
            //Передаю управление обработчику пользователя
            handler(Request);
        }
    };

    if (method.toLowerCase() == "get" && args.length > 0)
        path += "?" + args;

    //Инициализирую соединение
    Request.open(method, path, true);

    if (method.toLowerCase() == "post") {
        //Устанавливаю заголовок
        Request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        //Посылаю запрос
        Request.send(args);
    } else {
        //Если это GET-запрос
        Request.send(null);
    }
}

var MyName = function() {
    return "Artem";
};