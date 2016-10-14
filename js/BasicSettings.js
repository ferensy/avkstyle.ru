/*--------- Функционал для DropDown меню каталога ------------- */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown_catalogue").classList.toggle("show_catalogue");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_catalogue')) {

    var dropdowns = document.getElementsByClassName("dropdown-content_catalogue");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_catalogue')) {
        openDropdown.classList.remove('show_catalogue');
      }
    }
  }
}
/*--------- Конец функционал для DropDown меню каталога ------------- */

/*--------- Подключаем функцию прокрутки вверх страницы ------------- */
window.onload = function() { // после загрузки страницы

	var scrollUp = document.getElementById('scrollup'); // найти элемент

	scrollUp.onmouseover = function() { // добавить прозрачность
		scrollUp.style.opacity=0.3;
		scrollUp.style.filter  = 'alpha(opacity=30)';
	};

	scrollUp.onmouseout = function() { //убрать прозрачность
		scrollUp.style.opacity = 0.5;
		scrollUp.style.filter  = 'alpha(opacity=50)';
	};

	scrollUp.onclick = function() { //обработка клика
		window.scrollTo(0,0);
	};

// show button

	window.onscroll = function () { // при скролле показывать и прятать блок
		if ( window.pageYOffset > 0 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
};
