
window.addEventListener('load', function () {
    var tab_list = document.querySelectorAll('.tab_list');
    var lis = document.querySelectorAll('.item');
    console.log(lis);

    for (var i = 0; i < tab_list.length - 1; i++) {
        tab_list[i].setAttribute('index', i);
        tab_list[i].onclick = function () {
            var index = this.getAttribute('index');
            for (var j = 0; j < lis.length; j++) {
                lis[j].style.display = 'none';
            }
            lis[index].style.display = 'block';
        }
    }
})