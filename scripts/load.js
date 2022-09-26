let turn = 1;
let doi1 = document.getElementById("thongso1");
let ctx1 = doi1.getContext("2d"); 
let doi2 = document.getElementById("thongso2");
let ctx2 = doi2.getContext("2d");  

banning(turn); 
updateInfo();
updateCs();
canvas1();                                                                                               
canvas2(); 
sort();
// updateNames();

       


function banning(x) {
    if(document.querySelector(`.banning`) != null) 
        {document.querySelector(`.banning`).classList.remove(`banning`)}
    document.querySelector(`.turn-ban-`+x).classList.add(`banning`);
}
function picking(x) {
    if(document.querySelector(`.picking`) != null) 
        {document.querySelector(`.picking`).classList.remove(`picking`)}
    document.querySelector(`.turn-pick-`+x).classList.add(`picking`);    
}

function updateCs() {
    let chiso = document.getElementsByClassName(`num`);
    let muiten = document.getElementsByClassName(`muiten`);
    for(let i=0; i<6; i++) {
        chiso[i].innerText = copyCs1[i].toFixed(1);
        if(copyCs1[i]<0)                        {chiso[i].style.color = "red";muiten[i].innerHTML = `<i class="fa fa-caret-down" style="color:red"></i>`}  
        if((copyCs1[i]>=0)  && (copyCs1[i]<1))  {chiso[i].style.color = "rgb(165, 161, 161)";muiten[i].innerHTML = `<i class="fa fa-minus" style="color:rgb(170, 166, 166)"></i>`}  
        if((copyCs1[i]>0.5) && (copyCs1[i]<2.5)){chiso[i].style.color = "white";            muiten[i].innerHTML = `<i class="fa fa-minus" style="color:rgb(170, 166, 166)"></i>`}
        if(copyCs1[i]>=2.5)                     {chiso[i].style.color = "rgb(5, 173, 5)";muiten[i].innerHTML = `<i class="fa fa-caret-up" style="color: rgb(45, 235, 45);"></i>`}
        if(copyCs1[i]>=4)                       {chiso[i].style.color = "rgb(94, 241, 94)";
                                                    chiso[i].style.fontWeight = "bolder";}
        
                                                
        chiso[i+6].innerText = copyCs2[i].toFixed(1);
        if(copyCs2[i]<0)                         {chiso[i+6].style.color = "red";muiten[i+6].innerHTML = `<i class="fa fa-caret-down" style="color:red"></i>`}  
        if((copyCs2[i]>=0)  && (copyCs2[i]<1))   {chiso[i+6].style.color = "rgb(165, 161, 161)";muiten[i+6].innerHTML = `<i class="fa fa-minus" style="color:rgb(170, 166, 166)"></i>`}  
        if((copyCs2[i]>0.5) && (copyCs2[i]<2.5)) {chiso[i+6].style.color = "white";muiten[i+6].innerHTML = `<i class="fa fa-minus" style="color:rgb(170, 166, 166)"></i>`}
        if(copyCs2[i]>=2.5)                      {chiso[i+6].style.color = "rgb(5, 173, 5)";muiten[i+6].innerHTML = `<i class="fa fa-caret-up" style="color: rgb(45, 235, 45);"></i>`}
        if(copyCs2[i]>=4)                        {chiso[i+6].style.color = "rgb(94, 241, 94)";
                                                    chiso[i+6].style.fontWeight = "bolder";}                            
    }
}
function updateInfo() {
    let allten = [`ASS`,`DMG`,`DPS`,`DEF`,`C.C`,`ACC`];
    let tenchiso = document.getElementsByClassName(`ten`);
    let allicon = [`damage`,`dmg`,`dps`,`thu`,`cc`,`chinhxac`];
    let iconChiSo = document.getElementsByClassName(`icon`);
    let noteChiSo =  document.getElementsByClassName(`note`);
    for(let i=0; i<6; i++) {
        tenchiso[i].innerText = allten[i];
        tenchiso[i+6].innerText = allten[i];

        iconChiSo[i].innerHTML = `<img src="/image/icon/stats/`+allicon[i]+`.webp" alt="">`;
        iconChiSo[i+6].innerHTML = `<img src="/image/icon/stats/`+allicon[i]+`.webp" alt="">`;

        noteChiSo[i].innerHTML = `<img src="/image/icon/stats/`+allicon[i]+`.webp" alt="">`;
    }
}

// function updateNames() {
//     let names = [];
//     for (let i=1;i<=5;i++) {
//         names[i-1] = sessionStorage.getItem(`player`+i+`_name`);
//         document.getElementsByClassName(`player1`)[i-1].innerText = names[i-1];
//     }
// }
function canvas1() {   
    ctx1.clearRect(0, 0, 200, 200);
        ctx1.beginPath();
            ctx1.lineWidth = 3;
            ctx1.strokeStyle = "#c0c5c0";;
            ctx1.moveTo(  0, 100);
            ctx1.lineTo( 50,  20);
            ctx1.lineTo(150,  20);
            ctx1.lineTo(200, 100); 
            ctx1.lineTo(150, 180);
            ctx1.lineTo( 50, 180); 
            ctx1.lineTo(  0, 100);
            ctx1.stroke();
        ctx1.closePath();
        ctx1.beginPath();
            ctx1.lineWidth = 1;
            ctx1.strokeStyle = "#878d9c";
            ctx1.moveTo(  80 , 100  );
            ctx1.lineTo(  90 ,  84  );
            ctx1.lineTo( 110 ,  84  );
            ctx1.lineTo( 120  , 100 );
            ctx1.lineTo( 110, 116 );
            ctx1.lineTo(  90  , 116 );
            ctx1.lineTo(  80  , 100  ); 
            ctx1.stroke();
        ctx1.closePath();
        ctx1.beginPath();           
            ctx1.lineWidth = 1;
            ctx1.strokeStyle = "#878d9c";       
            ctx1.moveTo(  0 , 100  );
            ctx1.lineTo( 200 , 100 );
            ctx1.moveTo(  50 , 20  );
            ctx1.lineTo( 150 ,  180 );
            ctx1.moveTo( 150 , 20  );
            ctx1.lineTo( 50 ,  180 );
        ctx1.stroke();
}
function canvas2() {
    ctx2.clearRect(0, 0, 200, 200);
        ctx2.beginPath();
            ctx2.lineWidth = 3;
            ctx2.strokeStyle = "#c0c5c0";
            ctx2.moveTo(  0, 100);
            ctx2.lineTo( 50,  20);
            ctx2.lineTo(150,  20);
            ctx2.lineTo(200, 100); 
            ctx2.lineTo(150, 180);
            ctx2.lineTo( 50, 180); 
            ctx2.lineTo(  0, 100);
            ctx2.stroke();
        ctx2.closePath();
        ctx2.beginPath();
            ctx2.lineWidth = 1;
            ctx2.strokeStyle = "#878d9c";
            ctx2.moveTo(  80 , 100  );
            ctx2.lineTo(  90 ,  84  );
            ctx2.lineTo( 110 ,  84  );
            ctx2.lineTo( 120  , 100 );
            ctx2.lineTo( 110, 116 );
            ctx2.lineTo(  90  , 116 );
            ctx2.lineTo(  80  , 100  ); 
            ctx2.stroke();
        ctx2.closePath();
        ctx2.beginPath();           
            ctx2.lineWidth = 1;
            ctx2.strokeStyle = "#878d9c";
            ctx2.moveTo(  0 , 100  );
            ctx2.lineTo( 200 , 100 );
            ctx2.moveTo(  50 , 20  );
            ctx2.lineTo( 150 ,  180 );
            ctx2.moveTo( 150 , 20  );
            ctx2.lineTo( 50 ,  180 );
        ctx2.stroke();
}