$(document).ready(function () {
   $("#qiu5").click(function () {

       $("#shuaxin").html("发送请求...");
       setTimeout(function () {
           $("#shuaxin").html("爬取网页...");
       },1000);
       setTimeout(function () {
           $("#shuaxin").html("信息提取...");
       },2500);
       setTimeout(function () {
           $("#shuaxin").html("数据分析处理...");
       },20000);
       setTimeout(function () {
           $("#shuaxin").html("更新数据库");
       },27500);
       setTimeout(function () {
           $("#shuaxin").html("生成词云...");
       },28300);
       setTimeout(function () {
           // window.location.reload()
       },34000);
       console.log('开始更新知乎');
       $.ajax({
           type:'GET',
           url:"http://127.0.0.1:5000/Zgengxin",
           dataType:"jsonp",
           jsonp:"jsonpCallback",
           jsonpCallback:"success_jsonpCallback",
           success:function(json){
                console.log("起飞")
           },
           error:function () {
               console.log('知乎更新完毕');
               $("#shuaxin").html("等待数据刷新...");

               console.log('B站开始更新');
               $.ajax({
                   url:"http://127.0.0.1:5000/Bgengxin",
                   type:"GET",
                   dataType:"JSONP",
                   data:'1',
                   success:function (data) {
                       console.log(data)
                   },
                   error:function () {
                       console.log("更新完成");
                       setTimeout(function () {
                           window.location.reload();
                       },3000);
                   }
               })
           }
       })
   });});
//     $("#qiu5").click(function () {
//             $("#shuaxin").html("发送请求...");
//         setTimeout(function () {
//             alert("服务器信息一小时内已经进行过更新");
//             $("#shuaxin").html("服务器<br>数据更新");
//         },1000);
//
//     })
// });


// $("#qiu1").click(function () {
//     console.log("click");
//     $.ajax({
//         url:"../index/",
//         success:function (data) {
//             console.log(data)
//         },
//         error:function () {
//             console.log("error");
//         }
//     })
// });

