$(document).ready(function () {
    console.log('aaaaaaaaaaaa');
    let clientWidth = document.documentElement.clientWidth,
        clientHeight = document.documentElement.clientHeight;
    var svg = document.getElementById('Bsvg');
    svg.setAttribute('height', clientHeight);
    svg.setAttribute('width', clientWidth);


    console.log(clientWidth);
    console.log(svg);

    // var svg = document.getElementById('#Bsvg');
    // svg.setAttribute('height', '511');
    // svg.setAttribute('width', '654');
    // // let never = svg.setAttribute('d', 'M1 1 C10 12 11');

});