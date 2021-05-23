(function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max-min) + min);
    }

    var randomNum = getRandomInt(1, 1000);  
    var attemps = 10;

window.start = function () {

    function randomplay(name) {
    
        while(true) {
            var clientstring = prompt('Отгадайте число от 1 до 1000');
            if (clientstring === null) {
                alert("Вы вышли из игры!");
                if(!playAgain()){
                    break;
                }
            }
            else {
                if (isNaN(clientstring)) {
                    alert("Вы ввели не число");
                } 
                else {
                    var clientstring = +clientstring;
                    switch (true) {
                        case (clientstring < randomNum):
                            alert('Упс, вы ввели меньше число, чем загаданно! Давайте пробовать еще раз');
                            attemps--;
                            break;
                        case (clientstring > randomNum):
                            alert('Упс, вы ввели больше число, чем загаданно! Давайте пробовать еще раз');
                            attemps--;
                            break;
                        case(clientstring == randomNum):
                            alert('Угадано');
                            if(!playAgain()){
                                break;
                            }
                    }    
                }
                
            }

            if (attemps == 0){
                alert("Количестно попыток закончилось");
                if(!playAgain()) {
                    break;
                }
                
            }
        }
    }

    function playAgain() {
        let a = confirm("Сыграем еще?");
        attemps = 10;
        if(a) {
            randomplay();
        }
        else {
            alert("Спасибо за игру");
            return false;
        }
    }

    randomplay();
}   
    
})()
