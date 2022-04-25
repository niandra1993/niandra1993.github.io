function pozycja() {
    let element = document.getElementById('aside-show');

    let position = window.pageYOffset;

        if (position < 250) {
            element.classList.add('fade')
        }else{
            element.classList.remove('fade')
        }

        setTimeout('pozycja()',5000); //sprawdzić.
}

pozycja();

document.getElementById("other").onclick = function() {other()};
document.getElementById("spring").onclick = function() {spring()};
document.getElementById("winter").onclick = function() {winter()};

function other() {
    document.documentElement.style.setProperty('--bg-color','#141E27')
    document.documentElement.style.setProperty('--box-color','#203239')
    document.documentElement.style.setProperty('--content-color','#ECDBBA')
    document.documentElement.style.setProperty('--global-text-color','seashell')
    document.documentElement.style.setProperty('--global-border-color','#ECDBBA')
    document.documentElement.style.setProperty('--link-color','seashell')
    document.documentElement.style.setProperty('--link-hover-color','#ECDBBA')
    document.getElementById('back').style.color = '#141E27'
    document.getElementById('phone').style.color = '#141E27'
    document.getElementById('foot').style.color = '#141E27'
    
    var info = document.getElementsByClassName('info-2')
    for(i = 0; i < info.length; i++)
    {
        info[i].style.color = '#19282F'
    }
}

function spring() {
    document.documentElement.style.setProperty('--bg-color','#393939')
    document.documentElement.style.setProperty('--box-color','#849561')
    document.documentElement.style.setProperty('--content-color','#EED690')
    document.documentElement.style.setProperty('--global-text-color','seashell')
    document.documentElement.style.setProperty('--global-border-color','#D6EFC7')
    document.documentElement.style.setProperty('--link-color','seashell')
    document.documentElement.style.setProperty('--link-hover-color','#FAD586')
    document.getElementById('back').style.color = '#393939'
    document.getElementById('phone').style.color = '#393939'
    document.getElementById('foot').style.color = '#393939'

    var info = document.getElementsByClassName('info-2')
    for(i = 0; i < info.length; i++)
    {
        info[i].style.color = '#393939'
    }
}

function winter() {
    document.documentElement.style.setProperty('--bg-color','#062C30');
    document.documentElement.style.setProperty('--box-color','#05595B');
    document.documentElement.style.setProperty('--content-color','#4b9a9c');
    document.documentElement.style.setProperty('--global-text-color','#F5F5F5');
    document.documentElement.style.setProperty('--global-border-color','#F5F5F5');
    document.documentElement.style.setProperty('--link-color','#F5F5F5');
    document.documentElement.style.setProperty('--link-hover-color','#41AEA9');
    document.getElementById('back').style.color = '#F5F5F5'
    document.getElementById('phone').style.color = '#F5F5F5';
    document.getElementById('foot').style.color = '#F5F5F5';

    var info = document.getElementsByClassName('info-2')
    for(i = 0; i < info.length; i++)
    {
        info[i].style.color = '#F5F5F5';
    }
}

function slide() {
    if(document.getElementById('burger').style.display == 'flex')
    {
        document.getElementById('burger').style.display = 'none';
    }
    else {
        document.getElementById('burger').style.display = 'flex';
    }
}

function show() {
    if(document.getElementById('show').style.display == 'flex')
    {
        document.getElementById('show').style.display = 'none';
    }
    else {
        document.getElementById('show').style.display = 'flex';
    }
}
 