$(document).ready(function () {
    $("#qiu7").click(function () {
        $("#ciback").css("display","block");
        console.log("知乎分析页");
        setTimeout(function () {
            $("#476d5672fe8146508df04ededdfd2690").css("position","fixed");
            $("#476d5672fe8146508df04ededdfd2690").css("position","fixed");
        },1010);
        $("#newci").animate({"left": "0"}, 1000);
        $("#476d5672fe8146508df04ededdfd2690").animate({"left": "10vw"}, 1000);
        $("#f7af58e272f7436b8a533a3cbba4d783").animate({"left": "0"}, 1000);
        setTimeout(function () {
            var chart_476d5672fe8146508df04ededdfd2690 = echarts.init(
                document.getElementById('476d5672fe8146508df04ededdfd2690'), 'white', {renderer: 'canvas'});
            var option_476d5672fe8146508df04ededdfd2690 = {
                "animation": true,
                "animationThreshold": 2000,
                "animationDuration": 1000,
                "animationEasing": "cubicOut",
                "animationDelay": 0,
                "animationDurationUpdate": 300,
                "animationEasingUpdate": "cubicOut",
                "animationDelayUpdate": 0,
                "color": [
                    "#c23531",
                    "#2f4554",
                    "#61a0a8",
                    "#d48265",
                    "#749f83",
                    "#ca8622",
                    "#bda29a",
                    "#6e7074",
                    "#546570",
                    "#c4ccd3",
                    "#f05b72",
                    "#ef5b9c",
                    "#f47920",
                    "#905a3d",
                    "#fab27b",
                    "#2a5caa",
                    "#444693",
                    "#726930",
                    "#b2d235",
                    "#6d8346",
                    "#ac6767",
                    "#1d953f",
                    "#6950a1",
                    "#918597"
                ],
                "series": [
                    {
                        "type": "wordCloud",
                        "name": "\u70ed\u70b9\u5206\u6790",
                        "shape": "circle",
                        "rotationRange": [
                            -90,
                            90
                        ],
                        "rotationStep": 45,
                        "girdSize": 20,
                        "sizeRange": [
                            10,
                            150
                        ],
                        "data": [

                            {
                                "name": "\u5f00\u53d1\u8005",
                                "value": 0.0909942635876033,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(108,77,106)"
                                    }
                                }
                            },
                            {
                                "name": "\u82f9\u679c",
                                "value": 0.08302156698887053,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(34,156,89)"
                                    }
                                }
                            },
                            {
                                "name": "\u82f1\u7279\u5c14",
                                "value": 0.0781655074007438,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(113,32,136)"
                                    }
                                }
                            },
                            {
                                "name": "\u5929\u5751",
                                "value": 0.0765877556584022,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(17,147,82)"
                                    }
                                }
                            },
                            {
                                "name": "\u82f1\u96c4",
                                "value": 0.07490198996639119,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(58,20,128)"
                                    }
                                }
                            },
                            {
                                "name": "\u9ad8\u8003",
                                "value": 0.07015728595140497,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(5,24,107)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e2d\u5355",
                                "value": 0.06586648761928374,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(1,72,55)"
                                    }
                                }
                            },
                            {
                                "name": "\u5fae\u4fe1",
                                "value": 0.06586648761928374,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(37,17,109)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e3b\u64ad",
                                "value": 0.06586648761928374,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(123,148,2)"
                                    }
                                }
                            },
                            {
                                "name": "\u8003\u7814",
                                "value": 0.06513077746721763,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(141,23,129)"
                                    }
                                }
                            },
                            {
                                "name": "\u5065\u8eab\u623f",
                                "value": 0.05822850215867769,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(114,87,88)"
                                    }
                                }
                            },
                            {
                                "name": "\u53d1\u5e03",
                                "value": 0.05611194526931129,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(159,7,92)"
                                    }
                                }
                            },
                            {
                                "name": "\u7b97\u4e0d\u7b97",
                                "value": 0.054409509428319555,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(121,9,35)"
                                    }
                                }
                            },
                            {
                                "name": "\u9876\u66ff",
                                "value": 0.05251366280721763,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(53,44,1)"
                                    }
                                }
                            },
                            {
                                "name": "\u624b\u673a",
                                "value": 0.05100679196793388,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(46,96,9)"
                                    }
                                }
                            },
                            {
                                "name": "\u5927\u4f1a",
                                "value": 0.05093078805198348,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(3,152,159)"
                                    }
                                }
                            },
                            {
                                "name": "\u5c0f\u7c73",
                                "value": 0.05049299836683195,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(1,92,101)"
                                    }
                                }
                            },
                            {
                                "name": "\u7269\u79cd",
                                "value": 0.04664989337972452,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(29,9,33)"
                                    }
                                }
                            },
                            {
                                "name": "\u75ab\u60c5",
                                "value": 0.04455397862341597,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(55,33,117)"
                                    }
                                }
                            },
                            {
                                "name": "\u6765\u5f97\u53ca",
                                "value": 0.04197471573046832,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(83,97,82)"
                                    }
                                }
                            },
                            {
                                "name": "\u7535\u8111",
                                "value": 0.040893487657134985,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(60,66,15)"
                                    }
                                }
                            },
                            {
                                "name": "\u8f6f\u4ef6",
                                "value": 0.04050152567349862,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(160,51,131)"
                                    }
                                }
                            },
                            {
                                "name": "\u6708\u4efd",
                                "value": 0.0403649981568595,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(83,116,38)"
                                    }
                                }
                            },
                            {
                                "name": "\u5927\u5bb6",
                                "value": 0.04026032652123967,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(29,19,157)"
                                    }
                                }
                            },
                            {
                                "name": "\u4fe1\u4efb",
                                "value": 0.03898790072688705,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(150,10,36)"
                                    }
                                }
                            },
                            {
                                "name": "\u820d\u53cb",
                                "value": 0.0382938778292011,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(117,46,159)"
                                    }
                                }
                            },
                            {
                                "name": "\u59d0\u59d0",
                                "value": 0.03663153553785124,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(63,3,125)"
                                    }
                                }
                            },
                            {
                                "name": "\u82f9\u679c\u7535\u8111",
                                "value": 0.03638438146391185,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(52,106,105)"
                                    }
                                }
                            },
                            {
                                "name": "\u97f3\u4e50\u8282\u76ee",
                                "value": 0.03638438146391185,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(89,118,147)"
                                    }
                                }
                            },
                            {
                                "name": "\u53d1\u751f",
                                "value": 0.03594172378181818,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(104,17,3)"
                                    }
                                }
                            },
                            {
                                "name": "\u9752\u6728",
                                "value": 0.03526739769504132,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(142,148,159)"
                                    }
                                }
                            },
                            {
                                "name": "\u7f16\u9020\u8c0e\u8a00",
                                "value": 0.03526739769504132,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(81,132,26)"
                                    }
                                }
                            },
                            {
                                "name": "\u670b\u53cb\u5708",
                                "value": 0.034474885098898074,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(22,34,99)"
                                    }
                                }
                            },
                            {
                                "name": "\u5c0f\u8bf4",
                                "value": 0.034257490259504135,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(16,19,28)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e13\u4e1a",
                                "value": 0.034122123732121215,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(149,8,137)"
                                    }
                                }
                            },
                            {
                                "name": "\u6bb5\u4f4d",
                                "value": 0.03386016457162534,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(50,30,100)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e2d\u56fd",
                                "value": 0.03335890563812672,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(137,143,66)"
                                    }
                                }
                            },
                            {
                                "name": "\u503c\u5f97",
                                "value": 0.03315486667035813,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(143,115,137)"
                                    }
                                }
                            },
                            {
                                "name": "\u7ec6\u54c1",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(117,97,71)"
                                    }
                                }
                            },
                            {
                                "name": "\u52a0\u66f4",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(89,62,76)"
                                    }
                                }
                            },
                            {
                                "name": "\u77f3\u57a3\u5e02",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(61,151,4)"
                                    }
                                }
                            },
                            {
                                "name": "\u8bed\u6570",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(65,123,26)"
                                    }
                                }
                            },
                            {
                                "name": "\u684c\u9762\u58c1\u7eb8",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(98,139,103)"
                                    }
                                }
                            },
                            {
                                "name": "\u8f85\u6838",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(119,98,142)"
                                    }
                                }
                            },
                            {
                                "name": "\u864e\u6e56",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(21,92,54)"
                                    }
                                }
                            },
                            {
                                "name": "\u663e\u5361",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(37,63,77)"
                                    }
                                }
                            },
                            {
                                "name": "\u5927\u7586",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(70,81,76)"
                                    }
                                }
                            },
                            {
                                "name": "\u624b\u6e38",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(53,50,29)"
                                    }
                                }
                            },
                            {
                                "name": "\u7537\u5458\u5de5",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(118,46,112)"
                                    }
                                }
                            },
                            {
                                "name": "\u76f4\u51fb",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(155,2,18)"
                                    }
                                }
                            },
                            {
                                "name": "\u73af\u6750",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(33,18,10)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e09\u4f53",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(107,31,63)"
                                    }
                                }
                            },
                            {
                                "name": "\u5973\u4e3b",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(5,121,111)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e2a\u7ebf",
                                "value": 0.03293324380964187,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(21,17,12)"
                                    }
                                }
                            },
                            {
                                "name": "\u7ec4\u7f51",
                                "value": 0.03256538873360881,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(136,79,139)"
                                    }
                                }
                            },
                            {
                                "name": "\u5b66\u533a",
                                "value": 0.032240917560881543,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(95,101,119)"
                                    }
                                }
                            },
                            {
                                "name": "\u610f\u5473\u7740",
                                "value": 0.032170112272396696,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(32,35,68)"
                                    }
                                }
                            },
                            {
                                "name": "\u5f00\u59cb",
                                "value": 0.031777083537520665,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(75,79,74)"
                                    }
                                }
                            },
                            {
                                "name": "\u5356\u65ad",
                                "value": 0.03168810572782369,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(75,42,9)"
                                    }
                                }
                            },
                            {
                                "name": "\u5927\u5b66",
                                "value": 0.03148326844380165,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(63,74,2)"
                                    }
                                }
                            },
                            {
                                "name": "\u7403\u978b",
                                "value": 0.03144840496473829,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(2,150,95)"
                                    }
                                }
                            },
                            {
                                "name": "\u5b66\u6821",
                                "value": 0.03136190578644628,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(140,62,16)"
                                    }
                                }
                            },
                            {
                                "name": "\u7f51\u540d",
                                "value": 0.03122790163774105,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(51,89,91)"
                                    }
                                }
                            },
                            {
                                "name": "\u5370\u5ea6",
                                "value": 0.031041317954104683,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(17,10,34)"
                                    }
                                }
                            },
                            {
                                "name": "\u526a\u5f00",
                                "value": 0.031023747444628103,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(88,26,66)"
                                    }
                                }
                            },
                            {
                                "name": "\u540e\u4f1a\u6709\u671f",
                                "value": 0.03065589236831956,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(79,14,109)"
                                    }
                                }
                            },
                            {
                                "name": "\u89c6\u754c",
                                "value": 0.03048888239090909,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(140,91,68)"
                                    }
                                }
                            },
                            {
                                "name": "\u5f00\u64ad",
                                "value": 0.029906763675757574,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(43,69,50)"
                                    }
                                }
                            },
                            {
                                "name": "\u7325\u4eb5",
                                "value": 0.029778609362534438,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(99,26,27)"
                                    }
                                }
                            },
                            {
                                "name": "\u884c\u4e3a",
                                "value": 0.029677625176749312,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(57,21,85)"
                                    }
                                }
                            },
                            {
                                "name": "\u97ad\u7b56",
                                "value": 0.02965615271625344,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(1,35,11)"
                                    }
                                }
                            },
                            {
                                "name": "\u4fb5\u7565\u6027",
                                "value": 0.02965615271625344,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(111,140,19)"
                                    }
                                }
                            },
                            {
                                "name": "\u653e\u98ce\u7b5d",
                                "value": 0.029114251079338845,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(55,33,34)"
                                    }
                                }
                            },
                            {
                                "name": "\u7ffb\u8f66",
                                "value": 0.029114251079338845,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(3,119,128)"
                                    }
                                }
                            },
                            {
                                "name": "\u9493\u9c7c\u5c9b",
                                "value": 0.028924188072451788,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(46,37,134)"
                                    }
                                }
                            },
                            {
                                "name": "\u6539\u53d8",
                                "value": 0.028780049273002754,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(118,108,0)"
                                    }
                                }
                            },
                            {
                                "name": "\u6284\u88ad",
                                "value": 0.028746396003305787,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(96,139,87)"
                                    }
                                }
                            },
                            {
                                "name": "\u51fa\u6f14",
                                "value": 0.028346445562809918,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(132,50,69)"
                                    }
                                }
                            },
                            {
                                "name": "\u6253\u95f9",
                                "value": 0.028201421503581268,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(1,139,94)"
                                    }
                                }
                            },
                            {
                                "name": "\u804c\u4e1a\u5316",
                                "value": 0.02799726731046832,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(82,124,79)"
                                    }
                                }
                            },
                            {
                                "name": "\u53e5\u5f0f",
                                "value": 0.027932445003581264,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(119,73,136)"
                                    }
                                }
                            },
                            {
                                "name": "\u62c9\u4f38",
                                "value": 0.027629412234435262,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(140,109,153)"
                                    }
                                }
                            },
                            {
                                "name": "\u65e5\u672c",
                                "value": 0.027582063450027547,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(124,4,10)"
                                    }
                                }
                            },
                            {
                                "name": "\u5b09\u7b11",
                                "value": 0.027572609790358128,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(79,151,23)"
                                    }
                                }
                            },
                            {
                                "name": "\u8ba1\u5212",
                                "value": 0.027402183271184575,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(115,92,63)"
                                    }
                                }
                            },
                            {
                                "name": "\u7cfb\u7edf",
                                "value": 0.027328812310303027,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(156,95,129)"
                                    }
                                }
                            },
                            {
                                "name": "\u51c6\u5907",
                                "value": 0.02731152036402204,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(44,82,36)"
                                    }
                                }
                            },
                            {
                                "name": "\u5de5\u79d1",
                                "value": 0.02715599554859504,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(18,81,68)"
                                    }
                                }
                            },
                            {
                                "name": "\u88e4\u88c6",
                                "value": 0.02710808441165289,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(119,14,51)"
                                    }
                                }
                            },
                            {
                                "name": "\u7f16\u7a0b",
                                "value": 0.02710808441165289,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(9,77,123)"
                                    }
                                }
                            },
                            {
                                "name": "\u5168\u7403",
                                "value": 0.027008520406005508,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(34,107,129)"
                                    }
                                }
                            },
                            {
                                "name": "\u7ed5\u5f00",
                                "value": 0.026880283541542697,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(50,55,73)"
                                    }
                                }
                            },
                            {
                                "name": "\u604b\u60c5",
                                "value": 0.026836899638071624,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(121,118,27)"
                                    }
                                }
                            },
                            {
                                "name": "\u5904\u7406\u5668",
                                "value": 0.02671070256909091,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(84,113,135)"
                                    }
                                }
                            },
                            {
                                "name": "\u5957\u8def",
                                "value": 0.02659003418713499,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(30,76,54)"
                                    }
                                }
                            },
                            {
                                "name": "\u6218\u5730",
                                "value": 0.02659003418713499,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(111,144,45)"
                                    }
                                }
                            },
                            {
                                "name": "\u91ce\u9e21",
                                "value": 0.026550958057658402,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(82,22,72)"
                                    }
                                }
                            },
                            {
                                "name": "\u8717\u725b",
                                "value": 0.026550958057658402,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(115,91,59)"
                                    }
                                }
                            },
                            {
                                "name": "\u8349\u8393",
                                "value": 0.026512428465454544,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(119,115,154)"
                                    }
                                }
                            },
                            {
                                "name": "\u7d20\u517b",
                                "value": 0.026436949197713496,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(96,145,90)"
                                    }
                                }
                            },
                            {
                                "name": "\u5f00\u5e97",
                                "value": 0.026087770945261705,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(63,137,74)"
                                    }
                                }
                            },
                            {
                                "name": "\u70c8\u58eb\u9675\u56ed",
                                "value": 0.025991100642754825,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(145,110,46)"
                                    }
                                }
                            },
                            {
                                "name": "\u518d\u9020",
                                "value": 0.025928488380826446,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(74,81,130)"
                                    }
                                }
                            },
                            {
                                "name": "\u5e94\u8be5",
                                "value": 0.025807476815647382,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(13,43,135)"
                                    }
                                }
                            },
                            {
                                "name": "\u94f6\u884c",
                                "value": 0.02573243315862259,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(47,3,129)"
                                    }
                                }
                            },
                            {
                                "name": "\u5973\u53cb",
                                "value": 0.025635145459614324,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(24,105,126)"
                                    }
                                }
                            },
                            {
                                "name": "\u65b0\u54c1",
                                "value": 0.025607458583994488,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(110,73,110)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e70\u8f66",
                                "value": 0.025580047204214876,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(64,103,79)"
                                    }
                                }
                            },
                            {
                                "name": "\u884c\u4e1a",
                                "value": 0.025567493361707987,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(62,139,153)"
                                    }
                                }
                            },
                            {
                                "name": "\u4f5c\u6587",
                                "value": 0.02555290589170799,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(45,50,101)"
                                    }
                                }
                            },
                            {
                                "name": "\u5fc3\u5f97",
                                "value": 0.025473050418236914,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(112,12,152)"
                                    }
                                }
                            },
                            {
                                "name": "\u7591\u4f3c",
                                "value": 0.02537005446212121,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(121,64,144)"
                                    }
                                }
                            },
                            {
                                "name": "\u5386\u53f2",
                                "value": 0.025362218033884297,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(111,44,66)"
                                    }
                                }
                            },
                            {
                                "name": "\u5f02\u6027",
                                "value": 0.025270770890523417,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(158,118,154)"
                                    }
                                }
                            },
                            {
                                "name": "\u53e5\u5b50",
                                "value": 0.02510519534212121,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(141,26,119)"
                                    }
                                }
                            },
                            {
                                "name": "\u683c\u8c03",
                                "value": 0.024970787176363637,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(15,109,142)"
                                    }
                                }
                            },
                            {
                                "name": "\u5bfc\u822a\u7cfb\u7edf",
                                "value": 0.02494900982236915,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(153,15,150)"
                                    }
                                }
                            },
                            {
                                "name": "\u4f7f\u7528",
                                "value": 0.02488319527707989,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(149,27,99)"
                                    }
                                }
                            },
                            {
                                "name": "\u6a21\u5757",
                                "value": 0.024680537821955922,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(47,92,70)"
                                    }
                                }
                            },
                            {
                                "name": "\u7537\u670b\u53cb",
                                "value": 0.024641461692479338,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(90,125,27)"
                                    }
                                }
                            },
                            {
                                "name": "\u5a31\u4e50\u5708",
                                "value": 0.024622129536418732,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(38,106,79)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e8c\u624b\u8f66",
                                "value": 0.024453986587134983,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(122,147,143)"
                                    }
                                }
                            },
                            {
                                "name": "\u7855\u58eb",
                                "value": 0.024435922122809917,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(46,39,135)"
                                    }
                                }
                            },
                            {
                                "name": "\u5065\u8eab",
                                "value": 0.024417975343140493,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(104,22,126)"
                                    }
                                }
                            },
                            {
                                "name": "\u7d22\u8d54",
                                "value": 0.024347335038429754,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(84,13,52)"
                                    }
                                }
                            },
                            {
                                "name": "\u666e\u901a\u4eba",
                                "value": 0.024347335038429754,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(154,30,136)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e0d\u4f1a",
                                "value": 0.02430700374413223,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(4,3,125)"
                                    }
                                }
                            },
                            {
                                "name": "\u96cc\u6027",
                                "value": 0.02419472132110193,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(133,53,42)"
                                    }
                                }
                            },
                            {
                                "name": "\u5927\u5b66\u6bd5\u4e1a",
                                "value": 0.024113452273168044,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(31,144,106)"
                                    }
                                }
                            },
                            {
                                "name": "\u5927\u8d5b",
                                "value": 0.024081604277575757,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(93,139,77)"
                                    }
                                }
                            },
                            {
                                "name": "\u8eab\u5bb6",
                                "value": 0.02400355880479339,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(133,79,21)"
                                    }
                                }
                            },
                            {
                                "name": "\u60ca\u53f9",
                                "value": 0.02394267630614325,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(2,132,129)"
                                    }
                                }
                            },
                            {
                                "name": "\u526a\u5200",
                                "value": 0.02381041950399449,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(36,63,48)"
                                    }
                                }
                            },
                            {
                                "name": "\u9009\u624b",
                                "value": 0.023767708246308538,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(134,6,3)"
                                    }
                                }
                            },
                            {
                                "name": "\u96c4\u6027",
                                "value": 0.023697962218815427,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(15,15,104)"
                                    }
                                }
                            },
                            {
                                "name": "\u53d8\u6001",
                                "value": 0.023576703581294763,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(145,48,76)"
                                    }
                                }
                            },
                            {
                                "name": "\u5973\u795e",
                                "value": 0.02355046699311295,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(30,97,18)"
                                    }
                                }
                            },
                            {
                                "name": "\u8bcd\u6c47",
                                "value": 0.02348594833137741,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(121,8,155)"
                                    }
                                }
                            },
                            {
                                "name": "\u751f\u5316",
                                "value": 0.023422906199614325,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(72,56,76)"
                                    }
                                }
                            },
                            {
                                "name": "\u884c\u653f\u533a\u5212",
                                "value": 0.02328909168129477,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(1,52,60)"
                                    }
                                }
                            },
                            {
                                "name": "\u6d89\u8db3",
                                "value": 0.02323035126953168,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(42,35,83)"
                                    }
                                }
                            },
                            {
                                "name": "\u5929\u624d",
                                "value": 0.023218752006336087,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(94,85,139)"
                                    }
                                }
                            },
                            {
                                "name": "\u53cd\u9a73",
                                "value": 0.023116499491322315,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(39,147,153)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e50\u961f",
                                "value": 0.02307224438798898,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(126,2,67)"
                                    }
                                }
                            },
                            {
                                "name": "\u5206\u7ed9",
                                "value": 0.02275143410754821,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(103,145,115)"
                                    }
                                }
                            },
                            {
                                "name": "\u653e\u7f6e",
                                "value": 0.02260866532553719,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(23,70,160)"
                                    }
                                }
                            },
                            {
                                "name": "\u5e26\u56de",
                                "value": 0.022580978449917355,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(117,82,153)"
                                    }
                                }
                            },
                            {
                                "name": "\u9ad8\u624b",
                                "value": 0.022377480244490357,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(96,140,48)"
                                    }
                                }
                            },
                            {
                                "name": "\u9ad8\u6821",
                                "value": 0.022228085880688708,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(71,93,56)"
                                    }
                                }
                            },
                            {
                                "name": "\u5357\u660c",
                                "value": 0.022228085880688708,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(111,82,113)"
                                    }
                                }
                            },
                            {
                                "name": "\u89c6\u9891",
                                "value": 0.02219595932490358,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(27,86,137)"
                                    }
                                }
                            },
                            {
                                "name": "\u9009\u51fa",
                                "value": 0.02218003546013774,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(116,147,71)"
                                    }
                                }
                            },
                            {
                                "name": "\u6b3a\u9a97",
                                "value": 0.02214846123556474,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(27,152,120)"
                                    }
                                }
                            },
                            {
                                "name": "\u8003\u751f",
                                "value": 0.022094062439614325,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(52,112,79)"
                                    }
                                }
                            },
                            {
                                "name": "\u5317\u6d77",
                                "value": 0.02207107353619835,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(12,37,50)"
                                    }
                                }
                            },
                            {
                                "name": "\u5f71\u54cd",
                                "value": 0.021961720964352616,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(108,123,117)"
                                    }
                                }
                            },
                            {
                                "name": "\u62b5\u5236",
                                "value": 0.021900923138815427,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(70,97,86)"
                                    }
                                }
                            },
                            {
                                "name": "\u5bbf\u820d",
                                "value": 0.021532171457024792,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(17,67,113)"
                                    }
                                }
                            },
                            {
                                "name": "\u628a\u5934",
                                "value": 0.0215009726984573,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(64,120,6)"
                                    }
                                }
                            },
                            {
                                "name": "\u66f4\u540d",
                                "value": 0.02137366459060606,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(78,44,72)"
                                    }
                                }
                            },
                            {
                                "name": "\u629b\u5f03",
                                "value": 0.02136184130663912,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(85,115,68)"
                                    }
                                }
                            },
                            {
                                "name": "\u544a\u522b",
                                "value": 0.021315049167878786,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(131,32,116)"
                                    }
                                }
                            },
                            {
                                "name": "\u5382\u5bb6",
                                "value": 0.021291947808705233,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(89,146,125)"
                                    }
                                }
                            },
                            {
                                "name": "\u8f66\u4e3b",
                                "value": 0.021240667344683196,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(7,6,148)"
                                    }
                                }
                            },
                            {
                                "name": "\u53d1\u6587",
                                "value": 0.02109767048628099,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(141,70,97)"
                                    }
                                }
                            },
                            {
                                "name": "\u4f53\u9a8c",
                                "value": 0.02047652596658402,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(69,44,71)"
                                    }
                                }
                            },
                            {
                                "name": "\u5fe7\u8651",
                                "value": 0.020379855664077136,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(87,160,57)"
                                    }
                                }
                            },
                            {
                                "name": "\u6c34\u6df1",
                                "value": 0.020379855664077136,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(23,73,55)"
                                    }
                                }
                            },
                            {
                                "name": "\u8861\u91cf",
                                "value": 0.02027848952165289,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(73,77,27)"
                                    }
                                }
                            },
                            {
                                "name": "\u63a8\u5f00",
                                "value": 0.020274511440192836,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(64,124,147)"
                                    }
                                }
                            },
                            {
                                "name": "\u8bae\u6848",
                                "value": 0.020270539094958677,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(139,102,100)"
                                    }
                                }
                            },
                            {
                                "name": "\u821e\u53f0",
                                "value": 0.020246824564545452,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(72,136,160)"
                                    }
                                }
                            },
                            {
                                "name": "\u5e73\u884c",
                                "value": 0.020231127536694215,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(105,59,93)"
                                    }
                                }
                            },
                            {
                                "name": "\u601d\u7ef4",
                                "value": 0.020188416279008265,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(53,46,138)"
                                    }
                                }
                            },
                            {
                                "name": "\u5047\u8bbe",
                                "value": 0.020188416279008265,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(73,97,22)"
                                    }
                                }
                            },
                            {
                                "name": "\u540e\u6094",
                                "value": 0.02016921884289256,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(149,72,63)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e00\u4e8b",
                                "value": 0.020123683575785124,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(137,74,114)"
                                    }
                                }
                            },
                            {
                                "name": "\u5931\u671b",
                                "value": 0.02006043710319559,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(10,105,6)"
                                    }
                                }
                            },
                            {
                                "name": "\u5c55\u793a",
                                "value": 0.02003845703231405,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(114,25,104)"
                                    }
                                }
                            },
                            {
                                "name": "\u9020\u578b",
                                "value": 0.02001303332311295,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(150,157,114)"
                                    }
                                }
                            },
                            {
                                "name": "\u81ea\u79f0",
                                "value": 0.019948715515950413,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(86,25,115)"
                                    }
                                }
                            },
                            {
                                "name": "\u808c\u8089",
                                "value": 0.01986180543955923,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(95,68,64)"
                                    }
                                }
                            },
                            {
                                "name": "\u7ec6\u8282",
                                "value": 0.019851558108677687,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(5,147,22)"
                                    }
                                }
                            },
                            {
                                "name": "\u6559\u5e08",
                                "value": 0.01981767304509642,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(151,58,132)"
                                    }
                                }
                            },
                            {
                                "name": "\u770b\u8d77\u6765",
                                "value": 0.019767614352093663,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(156,0,41)"
                                    }
                                }
                            },
                            {
                                "name": "\u6279\u8bc4",
                                "value": 0.019764309227603305,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(65,66,75)"
                                    }
                                }
                            },
                            {
                                "name": "\u5a5a\u59fb",
                                "value": 0.01973147426275482,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(53,135,74)"
                                    }
                                }
                            },
                            {
                                "name": "\u8d85\u8d8a",
                                "value": 0.019566769253443524,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(12,152,130)"
                                    }
                                }
                            },
                            {
                                "name": "\u5ab3\u5987",
                                "value": 0.019493950363443525,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(96,106,62)"
                                    }
                                }
                            },
                            {
                                "name": "\u903b\u8f91",
                                "value": 0.019385328541377412,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(14,106,63)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e34\u8fd1",
                                "value": 0.01929193583705234,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(97,92,138)"
                                    }
                                }
                            },
                            {
                                "name": "\u521b\u4e1a",
                                "value": 0.019242298080826448,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(82,108,30)"
                                    }
                                }
                            },
                            {
                                "name": "\u7f16\u5236",
                                "value": 0.019090764666198346,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(3,117,7)"
                                    }
                                }
                            },
                            {
                                "name": "\u63a8\u5e7f",
                                "value": 0.018869664476336086,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(142,21,6)"
                                    }
                                }
                            },
                            {
                                "name": "\u6bd4\u8d5b",
                                "value": 0.018824677144132232,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(62,88,112)"
                                    }
                                }
                            },
                            {
                                "name": "\u7981\u6b62",
                                "value": 0.01878272474550964,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(118,25,139)"
                                    }
                                }
                            },
                            {
                                "name": "\u6709\u6ca1\u6709",
                                "value": 0.018714193327465566,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(123,21,151)"
                                    }
                                }
                            },
                            {
                                "name": "\u7279\u6027",
                                "value": 0.01867387815523416,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(58,74,158)"
                                    }
                                }
                            },
                            {
                                "name": "\u81ea\u4e3b",
                                "value": 0.01861884594289256,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(135,55,40)"
                                    }
                                }
                            },
                            {
                                "name": "\u516c\u4f17",
                                "value": 0.018575598258209366,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(58,120,70)"
                                    }
                                }
                            },
                            {
                                "name": "\u671f\u5f85",
                                "value": 0.018482777746391184,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(96,101,88)"
                                    }
                                }
                            },
                            {
                                "name": "\u5b89\u88c5",
                                "value": 0.018464171005151516,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(61,40,14)"
                                    }
                                }
                            },
                            {
                                "name": "\u9002\u5408",
                                "value": 0.018365015075013775,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(129,106,72)"
                                    }
                                }
                            },
                            {
                                "name": "\u97f3\u4e50",
                                "value": 0.01826355127738292,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(45,64,128)"
                                    }
                                }
                            },
                            {
                                "name": "\u6e56\u5357",
                                "value": 0.018169392387272727,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(146,135,135)"
                                    }
                                }
                            },
                            {
                                "name": "\u6311\u6218",
                                "value": 0.018161996890385675,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(8,92,33)"
                                    }
                                }
                            },
                            {
                                "name": "\u770b\u6cd5",
                                "value": 0.01813992878090909,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(109,60,20)"
                                    }
                                }
                            },
                            {
                                "name": "\u56de\u5f52",
                                "value": 0.01813992878090909,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(115,65,22)"
                                    }
                                }
                            },
                            {
                                "name": "\u5ba3\u4f20",
                                "value": 0.018000640505922864,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(21,0,82)"
                                    }
                                }
                            },
                            {
                                "name": "\u8f66\u8f86",
                                "value": 0.017623658460881545,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(121,103,81)"
                                    }
                                }
                            },
                            {
                                "name": "\u8001\u5e08",
                                "value": 0.017557635626997244,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(37,132,18)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e8b\u4e1a",
                                "value": 0.017513510482837467,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(53,146,94)"
                                    }
                                }
                            },
                            {
                                "name": "\u6253\u51fb",
                                "value": 0.017411813316887053,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(117,133,73)"
                                    }
                                }
                            },
                            {
                                "name": "\u5178\u578b",
                                "value": 0.017301550637465565,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(121,156,156)"
                                    }
                                }
                            },
                            {
                                "name": "\u7f51\u7edc",
                                "value": 0.01710599877258953,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(92,11,49)"
                                    }
                                }
                            },
                            {
                                "name": "\u52a0\u901f",
                                "value": 0.017015628086225896,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(15,25,101)"
                                    }
                                }
                            },
                            {
                                "name": "\u653e\u5fc3",
                                "value": 0.017010760910165287,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(120,37,76)"
                                    }
                                }
                            },
                            {
                                "name": "\u5bf9\u65b9",
                                "value": 0.016814868620358126,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(41,132,116)"
                                    }
                                }
                            },
                            {
                                "name": "\u5931\u53bb",
                                "value": 0.016794562723002754,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(131,67,119)"
                                    }
                                }
                            },
                            {
                                "name": "\u683c\u5c40",
                                "value": 0.016689804057465563,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(65,110,150)"
                                    }
                                }
                            },
                            {
                                "name": "\u6d59\u6c5f",
                                "value": 0.016655395229972454,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(14,65,94)"
                                    }
                                }
                            },
                            {
                                "name": "\u603b\u4f53",
                                "value": 0.016648991148953168,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(14,60,20)"
                                    }
                                }
                            },
                            {
                                "name": "\u7c7b\u4f3c",
                                "value": 0.016459496791294766,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(80,16,144)"
                                    }
                                }
                            },
                            {
                                "name": "\u89c4\u5212",
                                "value": 0.016423899184077134,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(155,90,11)"
                                    }
                                }
                            },
                            {
                                "name": "\u9605\u8bfb",
                                "value": 0.016175125612561982,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(97,59,150)"
                                    }
                                }
                            },
                            {
                                "name": "\u6838\u5fc3",
                                "value": 0.016122668182672176,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(6,94,154)"
                                    }
                                }
                            },
                            {
                                "name": "\u5bb6\u5ead",
                                "value": 0.015911665651763086,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(69,40,39)"
                                    }
                                }
                            },
                            {
                                "name": "\u9000\u51fa",
                                "value": 0.015901893885316803,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(133,135,34)"
                                    }
                                }
                            },
                            {
                                "name": "\u5b66\u751f",
                                "value": 0.01587680942677686,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(59,4,93)"
                                    }
                                }
                            },
                            {
                                "name": "\u7ecf\u5386",
                                "value": 0.0158591451107438,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(101,142,150)"
                                    }
                                }
                            },
                            {
                                "name": "\u89e3\u91ca",
                                "value": 0.015737802226666667,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(31,152,122)"
                                    }
                                }
                            },
                            {
                                "name": "\u559c\u6b22",
                                "value": 0.015709609925674932,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(155,19,149)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e8b\u4ef6",
                                "value": 0.015692229294297522,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(82,36,86)"
                                    }
                                }
                            },
                            {
                                "name": "\u8fd0\u884c",
                                "value": 0.01569147609647383,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(60,43,24)"
                                    }
                                }
                            },
                            {
                                "name": "\u529b\u91cf",
                                "value": 0.015307570467134988,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(141,117,134)"
                                    }
                                }
                            },
                            {
                                "name": "\u529f\u80fd",
                                "value": 0.015183946228264463,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(2,84,135)"
                                    }
                                }
                            },
                            {
                                "name": "\u64cd\u4f5c",
                                "value": 0.015175815294407712,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(11,150,80)"
                                    }
                                }
                            },
                            {
                                "name": "\u5ba3\u5e03",
                                "value": 0.014929824330330578,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(112,144,150)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e0d\u5230",
                                "value": 0.014700328562231404,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(53,124,48)"
                                    }
                                }
                            },
                            {
                                "name": "\u53c2\u4e0e",
                                "value": 0.014598190942506887,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(139,23,24)"
                                    }
                                }
                            },
                            {
                                "name": "\u7a7a\u95f4",
                                "value": 0.0145395701892562,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(118,157,61)"
                                    }
                                }
                            },
                            {
                                "name": "\u611f\u5230",
                                "value": 0.014495799016969697,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(123,19,160)"
                                    }
                                }
                            },
                            {
                                "name": "\u63a5\u53d7",
                                "value": 0.014391903457327824,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(39,59,40)"
                                    }
                                }
                            },
                            {
                                "name": "\u91c7\u7528",
                                "value": 0.014197802568622589,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(6,157,153)"
                                    }
                                }
                            },
                            {
                                "name": "\u6587\u5316",
                                "value": 0.014019353729559229,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(19,60,136)"
                                    }
                                }
                            },
                            {
                                "name": "\u652f\u6301",
                                "value": 0.013986307721157025,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(144,82,76)"
                                    }
                                }
                            },
                            {
                                "name": "\u516c\u5e03",
                                "value": 0.013944850797878789,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(3,95,46)"
                                    }
                                }
                            },
                            {
                                "name": "\u6d88\u606f",
                                "value": 0.013884007592754821,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(87,111,159)"
                                    }
                                }
                            },
                            {
                                "name": "\u5e26\u6765",
                                "value": 0.01381607917429752,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(57,72,74)"
                                    }
                                }
                            },
                            {
                                "name": "\u57ce\u5e02",
                                "value": 0.013734568538898071,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(157,2,146)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e8b\u60c5",
                                "value": 0.0135127843169146,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(88,109,70)"
                                    }
                                }
                            },
                            {
                                "name": "\u89c9\u5f97",
                                "value": 0.013302782175922866,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(55,15,65)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e2d\u5fc3",
                                "value": 0.013278524347272728,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(103,99,13)"
                                    }
                                }
                            },
                            {
                                "name": "\u5168\u56fd",
                                "value": 0.013072511262617081,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(157,76,147)"
                                    }
                                }
                            },
                            {
                                "name": "\u53d8\u5316",
                                "value": 0.013047305279173553,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(156,52,130)"
                                    }
                                }
                            },
                            {
                                "name": "\u5b58\u5728",
                                "value": 0.012590941837272728,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(133,28,40)"
                                    }
                                }
                            },
                            {
                                "name": "\u8fdb\u5165",
                                "value": 0.012567823642424241,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(20,158,25)"
                                    }
                                }
                            },
                            {
                                "name": "\u4ea7\u751f",
                                "value": 0.012508608834077135,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(107,100,113)"
                                    }
                                }
                            },
                            {
                                "name": "\u8868\u73b0",
                                "value": 0.012384100847658402,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(71,41,120)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e16\u754c",
                                "value": 0.012031761447851239,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(27,78,54)"
                                    }
                                }
                            },
                            {
                                "name": "\u8fd8\u6709",
                                "value": 0.01109545263614325,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(17,112,74)"
                                    }
                                }
                            },
                            {
                                "name": "\u4e0d\u80fd",
                                "value": 0.010992189626721762,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(36,108,155)"
                                    }
                                }
                            },
                            {
                                "name": "\u77e5\u9053",
                                "value": 0.01094795741046832,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(10,46,80)"
                                    }
                                }
                            },
                            {
                                "name": "\u8ba4\u4e3a",
                                "value": 0.010566223268429752,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(104,60,34)"
                                    }
                                }
                            }
                        ],
                        "drawOutOfBound": false,
                        "textStyle": {
                            "emphasis": {}
                        }
                    }
                ],
                "legend": [
                    {
                        "data": [],
                        "selected": {},
                        "show": true,
                        "padding": 5,
                        "itemGap": 10,
                        "itemWidth": 25,
                        "itemHeight": 14
                    }
                ],
                "tooltip": {
                    "show": true,
                    "trigger": "item",
                    "triggerOn": "mousemove|click",
                    "axisPointer": {
                        "type": "line"
                    },
                    "showContent": true,
                    "alwaysShowContent": false,
                    "showDelay": 0,
                    "hideDelay": 100,
                    "textStyle": {
                        "fontSize": 14
                    },
                    "borderWidth": 0,
                    "padding": 5
                },
                "title": [
                    {
                        "padding": 5,
                        "itemGap": 10
                    }
                ]
            };
            chart_476d5672fe8146508df04ededdfd2690.setOption(option_476d5672fe8146508df04ededdfd2690);
            setTimeout(function () {
                var chart_f7af58e272f7436b8a533a3cbba4d783 = echarts.init(
                    document.getElementById('f7af58e272f7436b8a533a3cbba4d783'), 'white', {renderer: 'canvas'});
                var option_f7af58e272f7436b8a533a3cbba4d783 = {
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u65b0\u5173\u952e\u5b57\u7edf\u8ba1",
                            "legendHoverLink": true,
                            "data": [
                                0.4498283642284848,
                                0.1859281594509642,
                                0.0909942635876033,
                                0.08302156698887053,
                                0.0781655074007438,
                                0.0765877556584022,
                                0.07490198996639119,
                                0.07015728595140497,
                                0.06586648761928374,
                                0.06586648761928374,
                                0.06586648761928374,
                                0.06513077746721763,
                                0.05822850215867769,
                                0.05611194526931129,
                                0.054409509428319555
                            ],
                            "showBackground": false,
                            "barMinHeight": 0,
                            "barCategoryGap": "20%",
                            "barGap": "30%",
                            "large": false,
                            "largeThreshold": 400,
                            "seriesLayoutBy": "column",
                            "datasetIndex": 0,
                            "clip": true,
                            "zlevel": 0,
                            "z": 2,
                            "label": {
                                "show": false,
                                "position": "top",
                                "margin": 8
                            },
                            "rippleEffect": {
                                "show": true,
                                "brushType": "stroke",
                                "scale": 2.5,
                                "period": 4
                            }
                        }
                    ],
                    "legend": [
                        {
                            "data": [
                                "\u65b0\u5173\u952e\u5b57\u7edf\u8ba1"
                            ],
                            "selected": {
                                "\u65b0\u5173\u952e\u5b57\u7edf\u8ba1": true
                            }
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "showContent": true,
                        "alwaysShowContent": false,
                        "showDelay": 0,
                        "hideDelay": 100,
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5
                    },
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                "\u75ab\u60c5",
                                "\u5317\u4eac",
                                "\u5f00\u53d1\u8005",
                                "\u82f9\u679c",
                                "\u82f1\u7279\u5c14",
                                "\u5929\u5751",
                                "\u82f1\u96c4",
                                "\u9ad8\u8003",
                                "\u4e2d\u5355",
                                "\u5fae\u4fe1",
                                "\u4e3b\u64ad",
                                "\u8003\u7814",
                                "\u5065\u8eab\u623f",
                                "\u53d1\u5e03",
                                "\u7b97\u4e0d\u7b97"
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ]
                };
                chart_f7af58e272f7436b8a533a3cbba4d783.setOption(option_f7af58e272f7436b8a533a3cbba4d783);
            },500);
        },1000);

    });


});