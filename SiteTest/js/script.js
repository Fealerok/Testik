let itemProject = document.querySelector(".itemProject");


function CloseWindow(){
    document.querySelector(".modalWindow").classList.add("none");
}


$(".itemProject").mouseover(function(){
    ShowButton($(this).attr("name"));
    
})

$(".itemProject").mouseout(function(){
    HideButton($(this).attr("name"));
    
})

$(".itemProject").click(function(){
    ShowModalWindow($(this).attr("name"));
    
})



function ShowModalWindow(value){
    let img = document.querySelector(".modalimg");
    let link = document.querySelector(".linkSite");
    if (value == "P1"){

        $(img).attr("src", "https://ntrlab.com/images/ntr_logo_black.svg");
        $(link).attr("href", "https://ntrlab.com/");
        $(link).text("https://ntrlab.com/");
        document.querySelector(".modalWindow").classList.remove("none");
    }

    if (value == "P2"){
        $(link).attr("href", "https://pyrobyte.ru/");
        $(link).text("https://pyrobyte.ru/");
        document.querySelector(".modalWindow").classList.remove("none");
    }

    if (value == "P15"){
        
        $(link).attr("href", "https://o-savva.ru/");
        $(link).text("https://o-savva.ru/");
        document.querySelector(".modalWindow").classList.remove("none");
        
    }

    if (value == "P14"){
        $(link).attr("href", "https://www.behance.net/gallery/121265047/sajt-dlja-agentstva-nedvizhimosti");
        $(link).text("https://www.behance.net/gallery/121265047/sajt-dlja-agentstva-nedvizhimosti");
        $(link).addClass("fontS");
        document.querySelector(".modalWindow").classList.remove("none");
    }

    if (value == "P13"){
        $(link).attr("href", "https://dariya-davydova.ru/");
        $(link).text("https://dariya-davydova.ru/");
        document.querySelector(".modalWindow").classList.remove("none");
    }
    if (value == "P12"){

        $(link).attr("href", "https://www.behance.net/gallery/103668845/razrabotka-onlajn-magazina-Invatehnikru-pod-kljuch");
        $(link).text("https://www.behance.net/gallery/103668845/razrabotka-onlajn-magazina-Invatehnikru-pod-kljuch");
        $(link).addClass("fontS");
        document.querySelector(".modalWindow").classList.remove("none");
    }

    if (value == "P11"){
        $(link).attr("href", "https://digitaloxy.ru/");
        $(link).text("https://digitaloxy.ru/");
        document.querySelector(".modalWindow").classList.remove("none");
        
    }

    if (value == "P10"){
        $(link).attr("href", "https://topdrop.fun/");
        $(link).text("https://topdrop.fun/");
        document.querySelector(".modalWindow").classList.remove("none");
    }

    if (value == "P9"){
        $(link).attr("href", "https://korzilla.ru/");
        $(link).text("https://korzilla.ru/");
        document.querySelector(".modalWindow").classList.remove("none");
    }

    if (value == "P8"){
        $(link).attr("href", "https://kfadsite.ru/");
        $(link).text("https://kfadsite.ru/");
        document.querySelector(".modalWindow").classList.remove("none");
        
    }

    if (value == "P7"){
        $(link).attr("href", "https://megagroup.ru/");
        $(link).text("https://megagroup.ru/");
        document.querySelector(".modalWindow").classList.remove("none");
    }

    if (value == "P6"){
        $(link).attr("href", "https://click-storm.ru/");
        $(link).text("https://click-storm.ru/");
        document.querySelector(".modalWindow").classList.remove("none");
    }

    if (value == "P5"){
        $(link).attr("href", "https://clinpal.com/");
        $(link).text("https://clinpal.com/");
        document.querySelector(".modalWindow").classList.remove("none");
    }
    if (value == "P4"){
        $(link).attr("href", "https://www.fieldtriphealth.com/self-guided-mobile-app");
        $(link).text("https://www.fieldtriphealth.com/self-guided-mobile-app");
        document.querySelector(".modalWindow").classList.remove("none");
    }

    if (value == "P3"){
        $(link).attr("href", "https://dzing.com/");
        $(link).text("https://dzing.com/");
        document.querySelector(".modalWindow").classList.remove("none");
    }


}

