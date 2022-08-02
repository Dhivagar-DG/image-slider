// Global variable
let index = 1;
let backward = false;

// GET IMAGE URL
async function imgBlob(url){
    try{
        const data = await fetch(url)
        let res = await data.blob();
        return URL.createObjectURL(res);
    }catch(exception){
        alert(exception.message);
    }
}

// LOAD IMAGES
(async function (){
    for (i=1; i<=3; i++){
        let url = await imgBlob(`images/nat${i}.jpg`);
        let div = document.createElement('div');
        if(i == 1) div.classList = "slide first";
        else div.classList = "slide";
        let img = document.createElement("img");
        img.src = url;
        img.alt = `nature${i}`;
        div.appendChild(img);
        document.querySelector('.slides').appendChild(div);
    }
})();

// MANUAL CLICK EVENT
function manual(t_this){
    index = t_this.getAttribute('for').slice(-1);
    t_this.style.background = "lightblue";
}

// AUTO 
setInterval(()=>{
    if (index == 1) backward = false;
    
    document.getElementById(`radio_${index}`).checked = true;
    document.querySelectorAll('.radioLbl').forEach((data, idx)=>{
        if( idx == index-1) data.style.background = "lightblue";
        else data.style.background = "transparent";
    });

    // Backward controller
    if (index == 3 || backward){
        index--;
        backward = true;
    }else{
        index++;
    }
},4000);