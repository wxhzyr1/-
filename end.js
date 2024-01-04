window.onload = function () {
    let a = document.querySelector('.li1');
    let b = document.querySelector('.li2');
    let a1 = document.querySelector('.coin');
    let b1 = document.querySelector('.friend');
    let c = document.querySelector('.li3');
    let d = document.querySelector('.part-2').children;
    console.log(d);
    d[0].style.opacity = '1';
    d[1].style.opacity = '0';
    c.onclick = function () {
        c.style.color = 'rgb(241, 188, 88)';
    }
    a.onmouseenter = function () {
        a1.style.display = "block";
        d[0].style.opacity = '0';
        d[1].style.opacity = '1';
    }
    a.onmouseleave = function () {
        a1.style.display = "none";
        d[0].style.opacity = '1';
        d[1].style.opacity = '0';
    }
    b.onmouseenter = function () {
        b1.style.display = "block";
    }
    b.onmouseleave = function () {
        b1.style.display = "none";
    }
}