var mostViewData = [
	{
		index: 1,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
	{
		index: 2,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
	{
		index: 3,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
	{
		index: 4,
		des: "Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
	{
		index: 5,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	}
];

var lastestData = [
	{
		index: 1,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
	{
		index: 2,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
	{
		index: 3,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
];

var commentData = [
	{
		index: 1,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
	{
		index: 2,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
	{
		index: 3,
		des: "5 things you need to know this weekend.Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
	{
		index: 4,
		des: "Ultrices montes quis bibendum hymenaeos",
		day: "14:14 November 23, 2015"
	},
];


$("document").ready(function() {
	var html = "";
	var i = 0, mostview, lastest, comment;

	mostview = document.getElementsByClassName("content-most-view");
	for (i = 0; i < mostViewData.length; i ++) {
		html += `<div class="">
			<div>${mostViewData[i].index}</div>
			<div>
				<a href="#">${mostViewData[i].des}</a>
				<p>${mostViewData[i].day}</p>
			</div>
		</div>`;
	}
	mostview[0].innerHTML = html;

	html = "";
	lastest = document.getElementsByClassName("content-lastest");
	for (i = 0; i < lastestData.length; i ++) {
		html += `<div class="">
			<div>${lastestData[i].index}</div>
			<div>
				<a href="#">${lastestData[i].des}</a>
				<p>${lastestData[i].day}</p>
			</div>
		</div>`;
	}
	lastest[0].innerHTML = html;

	html = "";
	comment = document.getElementsByClassName("content-comment");
	for (i = 0; i < commentData.length; i ++) {
		html += `<div class="">
			<div>${commentData[i].index}</div>
			<div>
				<a href="#">${commentData[i].des}</a>
				<p>${commentData[i].day}</p>
			</div>
		</div>`;
	}
	comment[0].innerHTML = html;

	document.getElementById("defaulOpen").click();

	var isshow = true;
});

function tab(e, className) {
	var i=0, tabContent, tabLink;
	tabContent = document.getElementsByClassName("tab-content");
	tabLink = document.getElementsByClassName("tab-link");

	for (i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}

	for (i = 0; i < tabLink.length; i++) {
		tabLink[i].className = tabLink[i].className.replace(" active", "");
	}

	document.getElementsByClassName(className)[0].style.display = "block";
	e.currentTarget.className += " active";

}


$('.custom-slide').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 2000,

});

function showSearch() {

	var classSearch = document.getElementById("search-here").classList;
	if(classSearch.value == "hide") {
		classSearch.remove("hide");
		classSearch.add("show");
	} else {
		classSearch.remove("show");
		classSearch.add("hide");
	}
}