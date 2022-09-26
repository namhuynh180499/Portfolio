function next(){
    let         sex1, sex2, sex3, sex4, sex5;  
    let sexs = [sex1, sex2, sex3, sex4, sex5];
    let        ad1, ad2, ad3, ad4, ad5;
    let ads = [ad1, ad2, ad3, ad4, ad5];

    let names = [];

    for(let i=1;i<=5;i++) {
        if(document.getElementsByClassName('p'+i)[1].value == "")
            {names[i-1] = "Player "+i;}
        else{names[i-1] = document.getElementsByClassName('p'+i)[1].value;}

        if(document.querySelector('.sex'+i).value==false)
             {sexs[i-1]=false}
        else {sexs[i-1]=true}
    }
    
    let top  = new Player(names[0],sex1,"ko co",)
    let jung = new Player(names[1],sex2,"ko co",)
    let mid  = new Player(names[2],sex3,"ko co")
    let ad   = new Player(names[3],sex4,"ko co")
    let sup  = new Player(names[4],sex5,"ko co")

    let players = [top, jung, mid, ad, sup];

    for(let i=0;i<5;i++) {
        sessionStorage.setItem(`player`+(i+1)+`_name`,players[i].name);
        sessionStorage.setItem(`player`+(i+1)+`_sex`,players[i].sex);
        sessionStorage.setItem(`player`+(i+1)+`_advan`,players[i].advan);
    }

    let mainPlayer = document.querySelector(`.up-icon`).classList[1];
    let capPlayer = document.querySelector(`.cap`).classList[1];
    for(let i=1;i<6;i++){
        if(mainPlayer == ("p"+i))
        {sessionStorage.setItem(`main`,(`p`+i))}

        if(capPlayer == ("p"+i))
        {sessionStorage.setItem(`cap`,(`p`+i))}
    }
    window.location.href='/home.html';   
}

function changeInfo() {
    alert("ok");
}
function ok() {
    if (document.querySelector(`.being`) != null) {
        // var audio = new Audio(`./audio/pick/nami_select.ogg`);
        // audio.play();
        document.querySelector(`.being`).classList.add(`done`);
        document.querySelector(`.being`).classList.remove(`being`);   
        if(document.querySelector(`.banning`) != null) { 
            document.querySelector(`.banning`).classList.add(`banned`); }
        if(document.querySelector(`.ing`) != null) { 
            let ds = document.getElementsByClassName(`ing`).length;
            for (let i = 0;i< ds ;i++) {
                document.querySelector(`.ing`).classList.remove(`ing`);
            }
        }
        if (turn==7 || turn == 10 || turn ==11 || turn==18 || turn==19) {
            for(let i=0;i<6;i++) {chiso1[i]     = copyCs1[i]}
            for(let i=0;i<4;i++) {overview1[i]  = copyOv1[i]}
        }
        if (turn==8 || turn == 9 || turn ==12 || turn==17 || turn==20) {
            for(let i=0;i<6;i++) {chiso2[i] = copyCs2[i];}    
            for(let i=0;i<4;i++) {overview2[i]  = copyOv2[i]}
        }       
        
        nextTurn();
    }
}
function nextTurn() {
    turn++;
    let x = [2, 4, 6, 8, 9, 12, 13, 15, 17, 20];
    if(document.querySelector(`.change`) != null){ document.querySelector(`.change`).classList.remove(`change`);}
    for(let i=0; i<10; i++) {if(turn == x[i]) {document.getElementById(`moment`).classList.add(`change`);}}

    if(turn <= 6)               {banning(turn)} 
    if(turn >= 7 && turn <= 12) {picking(turn-6);}
    if(turn >= 13 && turn <= 16){banning(turn-6)}
    if(turn >= 17 && turn <= 20){picking(turn-10);}

    if(turn == 7  || turn == 17){document.querySelector(`.banning`).classList.remove(`banning`)}
    if(turn == 13 || turn == 21){document.querySelector(`.picking`).classList.remove(`picking`)}
    if(turn == 21) {document.querySelector(`#moment`).style.display = "none";}
}

function pick(event) {
    let click = event.currentTarget;      
    if (click.classList[click.classList.length-1] != `done`) {
        if (document.querySelector(`.being`) != null) {document.querySelector(`.being`).classList.remove(`being`)}                          
        click.classList.add(`being`);
        let hinh = click.innerHTML;
        if(turn <= 6)                {document.querySelector(`.turn-ban-`   + (turn)   ).innerHTML = hinh;}
        if(turn >= 13 && turn <= 16) {document.querySelector(`.turn-ban-`   + (turn-6) ).innerHTML = hinh;}   
        if(turn >= 7  && turn <= 12) {document.querySelector(`.turn-pick-`  + (turn-6) ).innerHTML = hinh;}
        if(turn >= 17 && turn <= 20) {document.querySelector(`.turn-pick-`  + (turn-10)).innerHTML = hinh;}
        let ten = click.getAttribute("name");
        let champStats;
        let cs =[];
        let ov;
        for(let i=0;i<159;i++){
            if(allChamps[i].name == ten) {
                champStats = allChamps[i].stats;
                ov = allChamps[i].overview;
                break;                
            }
        } 
        if(turn==7 || turn==10 || turn==11 || turn==18 || turn==19) { 
            let ing = document.getElementsByClassName(`ing`);
            if( ing !=null){
                let ds = ing.length;
                for(let i=1;i<=ds;i++) {
                    document.querySelector(`.ing`).remove();
                }
            }
            for (let i=0;i<3;i++) {
                if(ov[i]>0){
                    for(let a=1; a <= ov[i] ;a++) {
                        document.getElementsByClassName(`dl`+(i+1))[0].innerHTML += `<div class="percent ing"></div>`;
                    }
                }  
            } 
            for(let i=0;i<6;i++) {
                cs[i] = chiso1[i];
                cs[i] += champStats[i];
                copyCs1[i] = cs[i];
                cs[i] = cs[i]*0.7;
                if(cs[i]<-1){cs[i]=-1} 
            }
            updateCs();
            canvas1();
            ctx1.beginPath();
            ctx1.lineWidth = 2;
            ctx1.strokeStyle = "#2de91b";
            ctx1.moveTo(  80 - (cs[0]*16) , 100               );
            ctx1.lineTo(  90 - (cs[1]* 8) ,  84 - (cs[1]*13)  );
            ctx1.lineTo( 110 + (cs[2]* 8) ,  84 - (cs[2]*13)  );
            ctx1.lineTo( 120 + (cs[3]*16) , 100               );
            ctx1.lineTo( 110 + (cs[4]* 8) , 116 + (cs[4]*13)  );
            ctx1.lineTo(  90 - (cs[5]* 8) , 116 + (cs[5]*13)  );
            ctx1.lineTo(  80 - (cs[0]*16) , 100               ); 
            ctx1.stroke();
            ctx1.closePath();
        }   
        if(turn==8 || turn==9 || turn==12 || turn==17 || turn==20) {   
            let ing = document.getElementsByClassName(`ing`);
            if( ing !=null){
                let ds = ing.length;
                for(let i=1;i<=ds;i++) {
                    document.querySelector(`.ing`).remove();
                }
            }
            for (let i=0;i<3;i++) {
                if(ov[i]>0){
                    for(let a=1; a <= ov[i] ;a++) {
                        document.getElementsByClassName(`dl`+(i+1))[1].innerHTML += `<div class="percent ing"></div>`;
                    }
                }  
            }      
            for(let i=0;i<6;i++) {
                cs[i] = chiso2[i];
                cs[i] += champStats[i];
                copyCs2[i] = cs[i];
                cs[i] = cs[i]*0.7;
                if(cs[i]<-1){cs[i]=-1} 
            }
            updateCs();
            canvas2();
            ctx2.beginPath();
            ctx2.lineWidth = 2;
            ctx2.strokeStyle = "#2de91b";
            ctx2.moveTo(  80 - (cs[0]*16) , 100               );
            ctx2.lineTo(  90 - (cs[1]* 8) ,  84 - (cs[1]*13)  );
            ctx2.lineTo( 110 + (cs[2]* 8) ,  84 - (cs[2]*13)  );
            ctx2.lineTo( 120 + (cs[3]*16) , 100               );
            ctx2.lineTo( 110 + (cs[4]* 8) , 116 + (cs[4]*13)  );
            ctx2.lineTo(  90 - (cs[5]* 8) , 116 + (cs[5]*13)  );
            ctx2.lineTo(  80 - (cs[0]*16) , 100               ); 
            ctx2.stroke();
        }
    }
}

function explain(event) {
    document.querySelector(`.explain`).classList.remove(`explain`);
    let explaining = event.currentTarget;
    explaining.classList.add(`explain`);
    let note = document.getElementsByClassName(`note`);
    for (let i=0;i<6;i++) {
        if (note[i].classList.length > 1) {
            document.querySelector(`.detail-note`).innerText = detailCs[i];
        }
    }
}
function sortLane(event) {
    let sorting = event.currentTarget;
    document.querySelector(`.laning`).classList.remove(`laning`);
    sorting.classList.add(`laning`);
    sort();    
}
function sort() {
    let chosen = document.getElementsByClassName(`chosen`);
    let chosens = chosen.length; 
    for(let i=0;i<chosens;i++) {
        chosen[0].classList.remove(`chosen`);
    }

    let laning = document.querySelector(`.laning`);
    let lane = document.getElementsByClassName(`lane`);  
    let laneSorted;
    for(let i=0;i<6;i++) {
        if(lane[i] == laning ) {
                laneSorted = allLane[i];
                break;
        }
    }
    console.log(laneSorted); 
    let champsSorted = [];  
    if(laneSorted == 'all')
        {for(let i=0;i<159;i++) {champsSorted.push(allChamps[i])}}
    else{
        for(let i=0;i<159;i++) {
            if(allChamps[i].lane.search(laneSorted) != -1) {
                champsSorted.push(allChamps[i]);
            }
        }
    }  
    let champs = document.getElementsByClassName(`champ`);
    for(let i=0;i<159;i++) {
        for(let x=0;x<champsSorted.length;x++) {
            if (champsSorted[x].name == champs[i].getAttribute(`name`)) {
                champs[i].classList.add(`chosen`);
            }
       }
    }
}
function searchName() {
    sort(); 
    let name = document.querySelector(`.tim`).value;
    let chosens = document.getElementsByClassName(`chosen`);
    let dlt = chosens.length;
    if(name != ``)  { 
        for(let i=0;i<chosens.length;i++) {
            if (chosens[i].getAttribute(`name`).search(name) != -1) {
                chosens[i].classList.add(`sorted`);
            }
        } 
        for(let i=0;i<dlt;i++) {
            chosens[0].classList.remove(`chosen`);
        }
        let sorted = document.getElementsByClassName(`sorted`);
        let slsorted = sorted.length;
        for(let i=0;i<slsorted;i++) {
            sorted[i].classList.add(`chosen`);
        }
        for(let i=0;i<slsorted;i++){
            sorted[0].classList.remove(`sorted`);
        }
    } else {sort()}    

}