$(document).ready(function(){$("#scroll").on("click",function(){$("html, body").animate({scrollTop:$("#about").offset().top},1e3)}),$(".full-menu a").on("click",function(){$("#op-menu").attr("checked",!1)}),$("#do .item").on("click",function(){$(this).hasClass("act")?$(this).removeClass("act"):$(this).addClass("act")}),function(){var o=0,t=!1,n=!0;$(window).scroll(function(){t=!0;var a=$(this).scrollTop();n=a>o?!0:!1,o=a}),setInterval(function(){t&&(t=!1,n?$("#about .bg-holder").animate({"background-position":"-=10px"},100):$("#about .bg-holder").animate({"background-position":"+=10px"},100))},75)}()});