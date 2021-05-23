var btn = document.querySelector("button");
var list = document.getElementById("search_result");
var name1 = document.getElementById("name");
var height = document.getElementById("height");
var mass = document.getElementById("mass");
var birth_year = document.getElementById("birth_year");
var films_count = document.getElementById("films_count");


btn.addEventListener('click', function(ev){
    ev.preventDefault();
    list.innerHTML = "";

    var input = document.getElementById("person_search_input").value;
    console.log(input);

    var api = "https://swapi.dev/api/";
    
    var url = api + "people/?search=";
    url += input;

    var request = new XMLHttpRequest();

    request.addEventListener("load", function () {
        console.log(request.response); 
    
        var response = JSON.parse(request.response); 
  
        if (request.status !== 200) {
          alert(
            "Произошла ошибка при получении ответа от сервера:\n\n" +
              response.message
          );
          return;
        }

        if (response.count == 0) {
          alert("К сожалению, данные не получены по запросу: " + url);
          return;
        }
  
        alert("Найдено персонажей: " + response.count);

        for (let i = 0; i < response.count; i++) {
          var li = document.createElement('li');
          li.appendChild(document.createTextNode(response.results[i].name));
          list.appendChild(li);
          li.addEventListener('click', function() {
            name1.innerHTML = response.results[i].name;
            height.innerHTML = response.results[i].height;
            mass.innerHTML = response.results[i].mass;
            birth_year.innerHTML = response.results[i].birth_year;
            let arr = response.results[i].films;
            let n = arr.length;
            films_count.innerHTML = n;
          })

        }


        });
  
        request.open("get", url);
        request.send();
})