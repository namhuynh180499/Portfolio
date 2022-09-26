
function changeSex(event) {
    let selected = event.target;
    let list = selected.classList;
    list.remove("non-active");
    let idSex = list[1];
    let sex = document.getElementsByClassName(idSex);
    if      (list[0]=="male")  {sex[1].classList.add("non-active");sex[1].value=false;sex[0].value=true}
    else if (list[0]=="female"){sex[0].classList.add("non-active");sex[0].value=false;sex[1].value=true}
}

function chooseCap(event){
    if(document.querySelector('.cap') != null){
        document.querySelector('.cap').classList.remove(`cap`);
    }
    let cap = document.querySelector("." + event.target.classList[0]);
    cap.classList.add(`cap`);
}

function chooseMain(event){
    if(document.querySelector('.up-icon') != null){
        document.querySelector('.up-icon').classList.remove('up-icon'); // nếu có 1 Main sẵn, xóa cái đó
    }
    let up = document.querySelector("." + event.target.classList[0]);   // lấy thẻ Lane có chung tên class với Radio
    up.classList.add("up-icon");                                        // up 
}

function openAdd(event){
    if (document.querySelector('.being') != null) {
        document.querySelector('.being').classList.remove('being');
    }
    let lane = document.getElementsByClassName(event.target.classList[0]);
    let addAd = lane[lane.length-2];
    addAd.classList.add('being');
}
function closeAdd(event){
    let lane = document.getElementsByClassName(event.target.classList[0]);
    let addAd = lane[lane.length-2];
    addAd.classList.remove('being');
}

function pickItem(event){
    let thisItem = event.target;
    if(thisItem.classList[0]=='picked'){thisItem.classList.remove(`picked`)}
    else{thisItem.classList.add(`picked`)}
}

let homehtml = `asdaltsdxltydykl`