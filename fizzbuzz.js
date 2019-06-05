
function clearAll() {
    console.log('delete');
    var myNode = document.getElementById("main");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
function generate() {
    var mygen = document.getElementById('main');
    const inputs = document.getElementById('num');
    const count = inputs.value;

    for (let i = 1; i <= count; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', 'myid' + i);


        if (i % 3 == 0 && i % 5 == 0) {
            div.setAttribute("class", "box1");
            div.innerText = "FizzBuzz";
            main.appendChild(div);
        } else if (i % 3 == 0 && i % 5 !== 0) {
            div.setAttribute("class", "box2");
            div.innerText = "Fizz";
            main.appendChild(div);
        } else if (i % 3 !== 0 && i % 5 === 0) {
            div.setAttribute("class", "box3");
            div.innerText = "Buzz";
            main.appendChild(div);
        } else {
            div.setAttribute("class", "box4");
            div.innerText = i;
            main.appendChild(div);
        }
    }
}

function fizz() {
    var mygen = document.getElementById('main');
    const inputs = document.getElementById('num');
    const count = inputs.value;

    for (let i = 1; i <= count; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', 'myid' + i);


         if (i % 3 == 0 && i % 5 !== 0) {
            div.setAttribute("class", "box2");
            div.innerText = "Fizz";
            main.appendChild(div);
        } 
        }
    }

    function buzz() {
        var mygen = document.getElementById('main');
        const inputs = document.getElementById('num');
        const count = inputs.value;
    
        for (let i = 1; i <= count; i++) {
            let div = document.createElement('div');
            div.setAttribute('id', 'myid' + i);
    
    
             if (i % 3 !== 0 && i % 5 === 0) {
                div.setAttribute("class", "box3");
                div.innerText = "Buzz";
                main.appendChild(div);
            } 
        }
    }




(function () {

    var slider = document.getElementById("slider");

    

    const inputs = document.getElementById('num');
    inputs.value = slider.value;

    slider.oninput = function () {
        inputs.value = this.value;

    }



    const main = document.getElementById('main');
    console.log(main);

    for (let i = 1; i <= 100; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', 'myid' + i);


        if (i % 3 == 0 && i % 5 == 0) {
            div.setAttribute("class", "box1");
            div.innerText = "FizzBuzz";
            main.appendChild(div);
        } else if (i % 3 == 0 && i % 5 !== 0) {
            div.setAttribute("class", "box2");
            div.innerText = "Fizz";
            main.appendChild(div);
        } else if (i % 3 !== 0 && i % 5 === 0) {
            div.setAttribute("class", "box3");
            div.innerText = "Buzz";
            main.appendChild(div);
        } else {
            div.setAttribute("class", "box4");
            div.innerText = i;
            main.appendChild(div);
        }
    }
})();

