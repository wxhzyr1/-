window.onload = function () {
    var time = setInterval(next, 3000);
    var arr = new Array();
    var arrro = new Array();
    var a = document.querySelector('#banner');
    // console.log(a);
    for (var i = 1; i <= 5; i++) {
        var creatli = document.createElement('li');
        var creatimg = document.createElement('img');
        creatimg.src = "img/轮播" + i + ".png";
        creatimg.style.width = "800px";
        creatimg.style.height = "400px";
        creatli.appendChild(creatimg);
        a.appendChild(creatli);
        arr.push(creatli);
        arr[arr.length - 1].style.left = "0px";
        creatli.onmouseenter = function () {
            clearInterval(time);
        }
        creatli.onmouseleave = function () {
            time = setInterval(next, 3000);
        }
        let divro = document.createElement('div');
        divro.style.left = 170 + 130 * i + 'px';
        divro.name = i;
        arrro.push(divro);
        a.appendChild(divro);
        if (i != 5)
            creatli.id = 5 - i;
        else
            creatli.id = 5;
    }
    console.log(arrro);
    arrro[0].style.background = "rgb(168, 235, 235)";
    let pro = document.createElement("li");
    pro.innerHTML = "";
    pro.style.left = "1240px";
    pro.style.fontSize = "80px";
    pro.style.color = "rgba(126, 240, 230, .7)";
    pro.style.top = "159px";
    pro.style.margin = "auto";
    pro.style.zIndex = 100;
    a.appendChild(pro);
    pro.onclick = function () {
        clearInterval(time);
        next();
        time = setInterval(next, 3000);
    }
    let beh = document.createElement("li");
    beh.innerHTML = "";
    beh.style.left = "-121px";
    beh.style.fontSize = "80px"
    beh.style.color = "rgba(126, 240, 230, .7)";
    beh.style.top = "159px";
    beh.style.margin = "auto";
    beh.style.zIndex = 100;
    a.appendChild(beh);
    beh.onclick = function () {
        clearInterval(time);
        last();
        time = setInterval(next, 3000);
    }
    var sum = arr.length - 1;
    arr[sum - 2].style.left = "-100px";
    arr[sum - 1].style.zIndex = 100;
    arr[sum - 1].style.left = "200px";
    arr[sum - 1].style.transform = "scale(1.3)";
    arr[sum].style.left = "500px";
    function last() {
        var arr3 = arr[0];
        arr.shift();
        arr.push(arr3);
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.zIndex = i;
            arr[i].style.transform = "scale(1)";
            arr[sum - 2].style.left = "-100px";
            arr[sum - 1].style.zIndex = 100;
            arr[sum - 1].style.left = "200px";
            arr[sum - 1].style.transform = "scale(1.3)";
            arr[sum - 1].style.opacity = 1;
            arr[sum].style.left = "500px";
            simply();
        }
    }
    function next() {
        var arr3 = arr[sum];
        arr.pop();
        arr.unshift(arr3);
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.zIndex = i;
            arr[i].style.transform = "scale(1)";
            arr[sum - 2].style.left = "-100px";
            arr[sum - 1].style.zIndex = 100;
            arr[sum - 1].style.left = "200px";
            arr[sum - 1].style.transform = "scale(1.3)";
            arr[sum - 1].style.opacity = 1;
            arr[sum].style.left = "500px";
            simply();
        }
    }
    for (let i = 0; i < arrro.length; i++) {
        console.log(arrro[i]);
        arrro[i].onmouseenter = function () {
            clearInterval(time);
            let a1 = arr[sum - 1].id;
            console.log(arrro[i]);
            let a2 = arrro[i].name;
            let a3 = Math.abs(a1 - a2);
            if (a1 > a2) {
                while (a3--) {
                    last();
                }
            }
            else {
                while (a3--) {
                    next();
                }
            }
            time = setInterval(next, 3000);
        }
    }
    function simply() {
        for (var i = 0; i < arrro.length; i++) {
            if (arrro[i].name == arr[sum - 1].id)
                arrro[i].style.background = "rgb(168, 235, 235)";
            else
                arrro[i].style.background = "white";
        }
    }
}