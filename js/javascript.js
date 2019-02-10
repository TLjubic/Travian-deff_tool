//Change style on li element by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("changeStyleOnElement");
});

var el = $(".list").children();

//Delete li element by clicking
$(".remove").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){

        var t = $(this).attr('class');
        var p = document.querySelectorAll("."+ t);

        $(p).remove();

    });
    event.stopPropagation();
    
});


var legRes1 = document.querySelector(".legRes1");
var pretRes1 = document.querySelector(".pretRes1");
var falRes1 = document.querySelector(".falRes1");
var kopRes1 = document.querySelector(".kopRes1");
var palRes1 = document.querySelector(".palRes1");
var druRes1 = document.querySelector(".druRes1");
var hedRes1 = document.querySelector(".hedRes1");
var cezRes1 = document.querySelector(".cezRes1");
var food1 = document.querySelector(".food1");

var legRes2 = document.querySelector(".legRes2");
var pretRes2 = document.querySelector(".pretRes2");
var falRes2 = document.querySelector(".falRes2");
var kopRes2 = document.querySelector(".kopRes2");
var palRes2 = document.querySelector(".palRes2");
var druRes2 = document.querySelector(".druRes2");
var hedRes2 = document.querySelector(".hedRes2");
var cezRes2 = document.querySelector(".cezRes2");
var food2 = document.querySelector(".food2");

var legRes3 = document.querySelector(".legRes3");
var pretRes3 = document.querySelector(".pretRes3");
var falRes3 = document.querySelector(".falRes3");
var kopRes3 = document.querySelector(".kopRes3");
var palRes3 = document.querySelector(".palRes3");
var druRes3 = document.querySelector(".druRes3");
var hedRes3 = document.querySelector(".hedRes3");
var cezRes3 = document.querySelector(".cezRes3");
var food3 = document.querySelector(".food3");

var legRes4 = document.querySelector(".legRes4");
var pretRes4 = document.querySelector(".pretRes4");
var falRes4 = document.querySelector(".falRes4");
var kopRes4 = document.querySelector(".kopRes4");
var palRes4 = document.querySelector(".palRes4");
var druRes4 = document.querySelector(".druRes4");
var hedRes4 = document.querySelector(".hedRes4");
var cezRes4 = document.querySelector(".cezRes4");
var food4 = document.querySelector(".food4");


//Add new li element to the list
$(".inputText").keypress(function(event){
    if(event.which === 13){
        var player = $(this).val();
        $(this).val("");
        var optionText = $("option:selected").text();
        console.log(optionText);

        $(".inPlayer").append("<li class=" + player + "><span class=remove><i class='fa fa-trash-alt'></i></span> " + player +"<div class=tribeName>" + optionText + "</div></li>")

        /* List1 */
        if(optionText == "Rimljani"){
            $(".list1").append("<li class='rimljani " + player + "'><input class='in1 brLeg1' type='text' placeholder='0'><div class='icon'><img src='icons/legionarIcon.png'></div> <input class='in1 brPret1'' type='text' placeholder='0'><div class='icon'><img src='icons/pretorijanIcon.png'></div> <input class='in1 brCez1'' type='text' placeholder='0'><div class='icon'><img src='icons/cezarIcon.png'></div></li>")
        } 

        else if(optionText == "Gali"){
            $(".list1").append("<li class='gali " + player + "'><input class='in1 brFal1'' type='text' placeholder='0'><div class='icon'><img src='icons/falangaIcon.png'></div> <input class='in1 brDru1'' type='text' placeholder='0'><div class='icon'><img src='icons/druidIcon.png'></div> <input class='in1 brHed1'' type='text' placeholder='0'><div class='icon'><img src='icons/haeduanIcon.png'></div></li>")
        }

        else if(optionText == "Teuti"){
            $(".list1").append("<li class='teuti " + player + "'><input class='in1 brKop1'' type='text' placeholder='0'><div class='icon'><img src='icons/kopljanikIcon.png'></div> <input class='in1 brPal1'' type='text' placeholder='0'><div class='icon'><img src='icons/paladinIcon.png'></div>")
        }

        /* List2 */
        if(optionText == "Rimljani"){
            $(".list2").append("<li class='rimljani " + player + "'><input class='in1 brLeg2' type='text' placeholder='0'><div class='icon'><img src='icons/legionarIcon.png'></div> <input class='in1 brPret2'' type='text' placeholder='0'><div class='icon'><img src='icons/pretorijanIcon.png'></div> <input class='in1 brCez2'' type='text' placeholder='0'><div class='icon'><img src='icons/cezarIcon.png'></div></li>")
        }

        else if(optionText == "Gali"){
            $(".list2").append("<li class='gali " + player + "'><input class='in1 brFal2'' type='text' placeholder='0'><div class='icon'><img src='icons/falangaIcon.png'></div> <input class='in1 brDru2'' type='text' placeholder='0'><div class='icon'><img src='icons/druidIcon.png'></div> <input class='in1 brHed2'' type='text' placeholder='0'><div class='icon'><img src='icons/haeduanIcon.png'></div></li>")
        }

        else if(optionText == "Teuti"){
            $(".list2").append("<li class='teuti " + player + "'><input class='in1 brKop2'' type='text' placeholder='0'><div class='icon'><img src='icons/kopljanikIcon.png'></div> <input class='in1 brPal2'' type='text' placeholder='0'><div class='icon'><img src='icons/paladinIcon.png'></div>")
        }

        /* List3 */
        if(optionText == "Rimljani"){
            $(".list3").append("<li class='rimljani " + player + "'><input class='in1 brLeg3' type='text' placeholder='0'><div class='icon'><img src='icons/legionarIcon.png'></div> <input class='in1 brPret3'' type='text' placeholder='0'><div class='icon'><img src='icons/pretorijanIcon.png'></div> <input class='in1 brCez3'' type='text' placeholder='0'><div class='icon'><img src='icons/cezarIcon.png'></div></li>")
        }

        else if(optionText == "Gali"){
            $(".list3").append("<li class='gali " + player + "'><input class='in1 brFal3'' type='text' placeholder='0'><div class='icon'><img src='icons/falangaIcon.png'></div> <input class='in1 brDru3'' type='text' placeholder='0'><div class='icon'><img src='icons/druidIcon.png'></div> <input class='in1 brHed3'' type='text' placeholder='0'><div class='icon'><img src='icons/haeduanIcon.png'></div></li>")
        }

        else if(optionText == "Teuti"){
            $(".list3").append("<li class='teuti " + player + "'><input class='in1 brKop3'' type='text' placeholder='0'><div class='icon'><img src='icons/kopljanikIcon.png'></div> <input class='in1 brPal3'' type='text' placeholder='0'><div class='icon'><img src='icons/paladinIcon.png'></div>")
        }

        /* List4 */
        if(optionText == "Rimljani"){
            $(".list4").append("<li class='rimljani " + player + "'><input class='in1 brLeg4' type='text' placeholder='0'><div class='icon'><img src='icons/legionarIcon.png'></div> <input class='in1 brPret4'' type='text' placeholder='0'><div class='icon'><img src='icons/pretorijanIcon.png'></div> <input class='in1 brCez4'' type='text' placeholder='0'><div class='icon'><img src='icons/cezarIcon.png'></div></li>")
        }

        else if(optionText == "Gali"){
            $(".list4").append("<li class='gali " + player + "'><input class='in1 brFal4'' type='text' placeholder='0'><div class='icon'><img src='icons/falangaIcon.png'></div> <input class='in1 brDru4'' type='text' placeholder='0'><div class='icon'><img src='icons/druidIcon.png'></div> <input class='in1 brHed4'' type='text' placeholder='0'><div class='icon'><img src='icons/haeduanIcon.png'></div></li>")
        }

        else if(optionText == "Teuti"){
            $(".list4").append("<li class='teuti " + player + "'><input class='in1 brKop4'' type='text' placeholder='0'><div class='icon'><img src='icons/kopljanikIcon.png'></div> <input class='in1 brPal4'' type='text' placeholder='0'><div class='icon'><img src='icons/paladinIcon.png'></div>")
        }



        /* x += Number(document.querySelector(".brLeg").value);
    
        console.log(x); */

        //$(".gali").css("display", "none");
        //$(".teuti").css("display", "none");

        $(".people").val(1);
    }

});

var resultLeg1 = 0;
var resultPret1 = 0;
var resultFal1 = 0;
var resultKop1 = 0;
var resultPal1 = 0;
var resultDru1 = 0;
var resultHed1 = 0;
var resultCez1 = 0;
var resultFood1 = 0;

var resultLeg2 = 0;
var resultPret2 = 0;
var resultFal2 = 0;
var resultKop2 = 0;
var resultPal2 = 0;
var resultDru2 = 0;
var resultHed2 = 0;
var resultCez2 = 0;
var resultFood2 = 0;

var resultLeg3 = 0;
var resultPret3 = 0;
var resultFal3 = 0;
var resultKop3 = 0;
var resultPal3 = 0;
var resultDru3 = 0;
var resultHed3 = 0;
var resultCez3 = 0;
var resultFood3 = 0;

var resultLeg4 = 0;
var resultPret4 = 0;
var resultFal4 = 0;
var resultKop4 = 0;
var resultPal4 = 0;
var resultDru4 = 0;
var resultHed4 = 0;
var resultCez4 = 0;
var resultFood4 = 0;

function myFunction() {


    /* Result of legionars in first column */ 
    var legX1 = document.querySelectorAll(".brLeg1");

    for(var i = 0; i < legX1.length; i++){
        var legY1 = legX1[i].value;
        resultLeg1 += Number(legY1);
    }

    legRes1.innerHTML = resultLeg1;
    resultFood1 += resultLeg1;
    resultLeg1 = 0;

    /* Result of pretorians in first column */ 
    var pretX1 = document.querySelectorAll(".brPret1");

    for(var i = 0; i < pretX1.length; i++){
        var pretY1 = pretX1[i].value;
        resultPret1 += Number(pretY1);
    }

    pretRes1.innerHTML = resultPret1;
    resultFood1 += resultPret1;
    resultPret1 = 0;

    /* Result of falangs in first column */ 
    var falX1 = document.querySelectorAll(".brFal1");

    for(var i = 0; i < falX1.length; i++){
        var falY1 = falX1[i].value;
        resultFal1 += Number(falY1);
    }

    falRes1.innerHTML = resultFal1;
    resultFood1 += resultFal1;
    resultFal1 = 0;

    /* Result of lancers in first column */ 
    var kopX1 = document.querySelectorAll(".brKop1");

    for(var i = 0; i < kopX1.length; i++){
        var kopY1 = kopX1[i].value;
        resultKop1 += Number(kopY1);
    }

    kopRes1.innerHTML = resultKop1;
    resultFood1 += resultKop1;
    resultKop1 = 0;

    /* Result of druids in first column */ 
    var druX1 = document.querySelectorAll(".brDru1");
    
    for(var i = 0; i < druX1.length; i++){
        var druY1 = druX1[i].value;
        resultDru1 += Number(druY1);
    }
    
    druRes1.innerHTML = resultDru1;
    resultFood1 += resultDru1*2;
    resultDru1 = 0;

    /* Result of paladins in first column */ 
    var palX1 = document.querySelectorAll(".brPal1");
    
    for(var i = 0; i < palX1.length; i++){
        var palY1 = palX1[i].value;
        resultPal1 += Number(palY1);
    }
    
    palRes1.innerHTML = resultPal1;
    resultFood1 += resultPal1*2;
    resultPal1 = 0;

    /* Result of haeduans in first column */ 
    var hedX1 = document.querySelectorAll(".brHed1");
    
    for(var i = 0; i < hedX1.length; i++){
        var hedY1 = hedX1[i].value;
        resultHed1 += Number(hedY1);
    }
    
    hedRes1.innerHTML = resultHed1;
    resultFood1 += resultHed1*3;
    resultHed1 = 0;

    /* Result of caesaris in first column */ 
    var cezX1 = document.querySelectorAll(".brCez1");
    
    for(var i = 0; i < cezX1.length; i++){
        var cezY1 = cezX1[i].value;
        resultCez1 += Number(cezY1);
    }
    
    cezRes1.innerHTML = resultCez1;
    resultFood1 += resultCez1*4;
    resultCez1 = 0;

    /* Reset of consuming food in first column */ 
    food1.innerHTML = resultFood1;
    resultFood1 = 0;



    /* Result of legionars in second column */ 
    var legX2 = document.querySelectorAll(".brLeg2");

    for(var i = 0; i < legX2.length; i++){
        var legY2 = legX2[i].value;
        resultLeg2 += Number(legY2);
    }

    legRes2.innerHTML = resultLeg2;
    resultFood2 += resultLeg2;
    resultLeg2 = 0;

    /* Result of pretorians in second column */ 
    var pretX2 = document.querySelectorAll(".brPret2");

    for(var i = 0; i < pretX2.length; i++){
        var pretY2 = pretX2[i].value;
        resultPret2 += Number(pretY2);
    }

    pretRes2.innerHTML = resultPret2;
    resultFood2 += resultPret2;
    resultPret2 = 0;

    /* Result of falangs in second column */ 
    var falX2 = document.querySelectorAll(".brFal2");

    for(var i = 0; i < falX2.length; i++){
        var falY2 = falX2[i].value;
        resultFal2 += Number(falY2);
    }

    falRes2.innerHTML = resultFal2;
    resultFood2 += resultFal2;
    resultFal2 = 0;

    /* Result of lancers in second column */ 
    var kopX2 = document.querySelectorAll(".brKop2");

    for(var i = 0; i < kopX2.length; i++){
        var kopY2 = kopX2[i].value;
        resultKop2 += Number(kopY2);
    }

    kopRes2.innerHTML = resultKop2;
    resultFood2 += resultKop2;
    resultKop2 = 0;

    /* Result of druids in second column */ 
    var druX2 = document.querySelectorAll(".brDru2");
    
    for(var i = 0; i < druX2.length; i++){
        var druY2 = druX2[i].value;
        resultDru2 += Number(druY2);
    }
    
    druRes2.innerHTML = resultDru2;
    resultFood2 += resultDru2*2;
    resultDru2 = 0;

    /* Result of paladins in second column */ 
    var palX2 = document.querySelectorAll(".brPal2");
    
    for(var i = 0; i < palX2.length; i++){
        var palY2 = palX2[i].value;
        resultPal2 += Number(palY2);
    }
    
    palRes2.innerHTML = resultPal2;
    resultFood2 += resultPal2*2;
    resultPal2 = 0;

    /* Result of haeduans in second column */ 
    var hedX2 = document.querySelectorAll(".brHed2");
    
    for(var i = 0; i < hedX2.length; i++){
        var hedY2 = hedX2[i].value;
        resultHed2 += Number(hedY2);
    }
    
    hedRes2.innerHTML = resultHed2;
    resultFood2 += resultHed2*3;
    resultHed2 = 0;

    /* Result of caesaris in second column */ 
    var cezX2 = document.querySelectorAll(".brCez2");
    
    for(var i = 0; i < cezX2.length; i++){
        var cezY2 = cezX2[i].value;
        resultCez2 += Number(cezY2);
    }
    
    cezRes2.innerHTML = resultCez2;
    resultFood2 += resultCez2*4;
    resultCez2 = 0;

    /* Reset of consuming food in second column */ 
    food2.innerHTML = resultFood2;
    resultFood2 = 0;



    /* Result of legionars in third column */ 
    var legX3 = document.querySelectorAll(".brLeg3");

    for(var i = 0; i < legX3.length; i++){
        var legY3 = legX3[i].value;
        resultLeg3 += Number(legY3);
    }

    legRes3.innerHTML = resultLeg3;
    resultFood3 += resultLeg3;
    resultLeg3 = 0;

    /* Result of pretorians in third column */ 
    var pretX3 = document.querySelectorAll(".brPret3");

    for(var i = 0; i < pretX3.length; i++){
        var pretY3 = pretX3[i].value;
        resultPret3 += Number(pretY3);
    }

    pretRes3.innerHTML = resultPret3;
    resultFood3 += resultPret3;
    resultPret3 = 0;

    /* Result of falangs in third column */ 
    var falX3 = document.querySelectorAll(".brFal3");

    for(var i = 0; i < falX3.length; i++){
        var falY3 = falX3[i].value;
        resultFal3 += Number(falY3);
    }

    falRes3.innerHTML = resultFal3;
    resultFood3 += resultFal3;
    resultFal3 = 0;

    /* Result of lancers in third column */ 
    var kopX3 = document.querySelectorAll(".brKop3");

    for(var i = 0; i < kopX3.length; i++){
        var kopY3 = kopX3[i].value;
        resultKop3 += Number(kopY3);
    }

    kopRes3.innerHTML = resultKop3;
    resultFood3 += resultKop3;
    resultKop3 = 0;

    /* Result of druids in third column */ 
    var druX3 = document.querySelectorAll(".brDru3");
    
    for(var i = 0; i < druX3.length; i++){
        var druY3 = druX3[i].value;
        resultDru3 += Number(druY3);
    }
    
    druRes3.innerHTML = resultDru3;
    resultFood3 += resultDru3*2;
    resultDru3 = 0;

    /* Result of paladins in third column */ 
    var palX3 = document.querySelectorAll(".brPal3");
    
    for(var i = 0; i < palX3.length; i++){
        var palY3 = palX3[i].value;
        resultPal3 += Number(palY3);
    }
    
    palRes3.innerHTML = resultPal3;
    resultFood3 += resultPal3*2;
    resultPal3 = 0;

    /* Result of haeduans in third column */ 
    var hedX3 = document.querySelectorAll(".brHed3");
    
    for(var i = 0; i < hedX3.length; i++){
        var hedY3 = hedX3[i].value;
        resultHed3 += Number(hedY3);
    }
    
    hedRes3.innerHTML = resultHed3;
    resultFood3 += resultHed3*3;
    resultHed3 = 0;

    /* Result of caesaris in third column */ 
    var cezX3 = document.querySelectorAll(".brCez3");
    
    for(var i = 0; i < cezX3.length; i++){
        var cezY3 = cezX3[i].value;
        resultCez3 += Number(cezY3);
    }
    
    cezRes3.innerHTML = resultCez3;
    resultFood3 += resultCez3*4;
    resultCez3 = 0;

    /* Reset of consuming food in third column */ 
    food3.innerHTML = resultFood3;
    resultFood3 = 0;



    /* Result of legionars in fourth column */ 
    var legX4 = document.querySelectorAll(".brLeg4");

    for(var i = 0; i < legX4.length; i++){
        var legY4 = legX4[i].value;
        resultLeg4 += Number(legY4);
    }

    legRes4.innerHTML = resultLeg4;
    resultFood4 += resultLeg4;
    resultLeg4 = 0;

    /* Result of pretorians in fourth column */ 
    var pretX4 = document.querySelectorAll(".brPret4");

    for(var i = 0; i < pretX4.length; i++){
        var pretY4 = pretX4[i].value;
        resultPret4 += Number(pretY4);
    }

    pretRes4.innerHTML = resultPret4;
    resultFood4 += resultPret4;
    resultPret4 = 0;

    /* Result of falangs in fourth column */ 
    var falX4 = document.querySelectorAll(".brFal4");

    for(var i = 0; i < falX4.length; i++){
        var falY4 = falX4[i].value;
        resultFal4 += Number(falY4);
    }

    falRes4.innerHTML = resultFal4;
    resultFood4 += resultFal4;
    resultFal4 = 0;

    /* Result of lancers in fourth column */ 
    var kopX4 = document.querySelectorAll(".brKop4");

    for(var i = 0; i < kopX4.length; i++){
        var kopY4 = kopX4[i].value;
        resultKop4 += Number(kopY4);
    }

    kopRes4.innerHTML = resultKop4;
    resultFood4 += resultKop4;
    resultKop4 = 0;

    /* Result of druids in fourth column */ 
    var druX4 = document.querySelectorAll(".brDru4");
    
    for(var i = 0; i < druX4.length; i++){
        var druY4 = druX4[i].value;
        resultDru4 += Number(druY4);
    }
    
    druRes4.innerHTML = resultDru4;
    resultFood4 += resultDru4*2;
    resultDru4 = 0;

    /* Result of paladins in fourth column */ 
    var palX4 = document.querySelectorAll(".brPal4");
    
    for(var i = 0; i < palX3.length; i++){
        var palY4 = palX4[i].value;
        resultPal4 += Number(palY4);
    }
    
    palRes4.innerHTML = resultPal4;
    resultFood4 += resultPal4*2;
    resultPal4 = 0;

    /* Result of haeduans in fourth column */ 
    var hedX4 = document.querySelectorAll(".brHed4");
    
    for(var i = 0; i < hedX4.length; i++){
        var hedY4 = hedX4[i].value;
        resultHed4 += Number(hedY4);
    }
    
    hedRes4.innerHTML = resultHed4;
    resultFood4 += resultHed4*3;
    resultHed4 = 0;

    /* Result of caesaris in fourth column */ 
    var cezX4 = document.querySelectorAll(".brCez4");
    
    for(var i = 0; i < cezX4.length; i++){
        var cezY4 = cezX4[i].value;
        resultCez4 += Number(cezY4);
    }
    
    cezRes4.innerHTML = resultCez4;
    resultFood4 += resultCez4*4;
    resultCez4 = 0;

    /* Reset of consuming food in fourth column */ 
    food4.innerHTML = resultFood4;
    resultFood4 = 0;
    
}


$(".fa-plus").click(function(){
    $("input").fadeToggle()
});
