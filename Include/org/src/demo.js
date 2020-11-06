$(document).ready(function () {
    $.ajax({
        url:"../../Climb-for-ye-master/Bilitext.csv",
        success:function (res) {
            var data = d3.csvParse(res);
            console.log(data)

        }
    })
})