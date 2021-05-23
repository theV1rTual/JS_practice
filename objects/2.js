let arr = {value1: "Значение1", value2: "Значение2", value3: "Значение3"};

let body = document.body;

let arr_temp = [];

function check(arr) {

    if (Array.isArray(arr)) {
        for (let i = 0;  i < arr.length; i++) {
            let a = {
                value: 0,
                label: "default"
            }
            a.value = i;
            a.label = arr[i]; 
            arr_temp.push(a);
        }
    }

    if (typeof arr === "object") {
        for (const key in arr) {
            let a = {
                value: 0,
                label: "defaut"
            };
            a.value = key;
            a.label = arr[key];
            arr_temp.push(a);
        }
    }
 
    return arr_temp;
}

let finalArr = check(arr);
console.log(finalArr);
document.body.appendChild(list(finalArr, 3));

function list(arr, value) {
    let select = document.createElement('select');
    body.appendChild(select);
    if (value === undefined) {
        value = 0;
    }

    for(let i = 0; i < arr.length; i++) {
        option = document.createElement('option');
        option.innerHTML = arr[i].label;
        option.setAttribute("value", arr[i].value);
        option.setAttribute("label", arr[i].label)
        select.appendChild(option);
    }
    return select;
}

