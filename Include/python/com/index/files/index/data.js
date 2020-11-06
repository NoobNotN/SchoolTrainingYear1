$(document).ready(function () {

    $("#qiu4").click(function () {
        window.location.replace("http://123.56.87.76:9999/")
    });

    $("#tu").attr("src", "../../zhihu.png");
    $("#ciyun").animate({"opacity": "1"});
    $("#qiuqiu").animate({"opacity": "0.3"} );
    setTimeout(function () {
        $("#qiuqiu").css("display", "none");
    });

    setTimeout(function () {
        $("#qiuqiu").css("display", "block");
        $("#ciyun").animate({"opacity": "0.3"}, 1000);
        $("#qiuqiu").animate({"opacity": "1"}, 1000);
    },1800);




    setInterval(function () {
        // Math.round(Math.random()*3)
        $("#qiu1").animate({
            left: Math.round(Math.random() * 3) + 15 + "vw",
            top: Math.round(Math.random() * 3) + 3 + "vh"
        }, 2000);
        $("#qiu2").animate({
            left: Math.round(Math.random() * 3) + 50 + "vw",
            top: Math.round(Math.random() * 3) + 10 + "vh"
        }, 2000);
        $("#qiu3").animate({
            left: Math.round(Math.random() * 5) + 1 + "vw",
            top: Math.round(Math.random() * 3) + 60 + "vh"
        }, 2000);
        $("#qiu4").animate({
            left: Math.round(Math.random() * 3) + 50 + "vw",
            top: Math.round(Math.random() * 5) + 35 + "vh"
        }, 2000);
        $("#qiu5").animate({
            left: Math.round(Math.random() * 3) + 20 + "vw",
            top: Math.round(Math.random() * 3) + 30+ "vh"
        }, 2000);
        $("#qiu6").animate({
            left: Math.round(Math.random() * 3) + 70 + "vw",
            top: Math.round(Math.random() * 3) + 10+ "vh"
        }, 2000);
        $("#qiu7").animate({
            left: Math.round(Math.random() * 3) + 30 + "vw",
            top: Math.round(Math.random() * 3) + 55+ "vh"
        }, 2000);
    }, 2000);

    $("#qiu1").click(function () {
        $("#qiuqiu").animate({"opacity": "0"}, 1000);
        $("#back").css("display", "block");
        setTimeout(function () {
            $("#qiuqiu").css("display", "none");
            $("#ciyun").css("display", "none");
        }, 1000)
    });

    $("#back").click(function () {
        window.location.reload()
    });

    $("#ciyun").click(function () {
        $("#qiuqiu").css("display", "block");
        $("#ciyun").animate({"opacity": "0.3"}, 1000);
        $("#qiuqiu").animate({"opacity": "1"}, 1000);
    });

    $("#qiu2").click(function () {
        $("#tu").attr("src", "../../Bilibili.png");
        $("#ciyun").animate({"opacity": "1"}, 1000);
        $("#qiuqiu").animate({"opacity": "0.3"}, 1000);
        setTimeout(function () {
            $("#qiuqiu").css("display", "none");
        }, 1000)
    });
    $("#qiu3").click(function () {
        $("#tu").attr("src", "../../zhihu.png");
        $("#ciyun").animate({"opacity": "1"}, 1000);
        $("#qiuqiu").animate({"opacity": "0.3"}, 1000);
        setTimeout(function () {
            $("#qiuqiu").css("display", "none");
        },1000)
    });



    $("#ciback").click(function () {
        $("#newci").animate({"left": "-100vw"}, 1000);
        $("#f7af58e272f7436b8a533a3cbba4d783").animate({"left": "-100vw"}, 1000);
        $("#476d5672fe8146508df04ededdfd2690").animate({"left": "-100vw"}, 1000);
        $("#ciback").css("display", "none");

        // setTimeout(function () {
        //     $("#476d5672fe8146508df04ededdfd2690").html("");
        //     $("#f7af58e272f7436b8a533a3cbba4d783").html("");
        // },1000);

    })
});