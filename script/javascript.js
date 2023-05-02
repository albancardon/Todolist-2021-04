/*Sommaire
1-déclaration des variables
    1.1-déclaration des variable clickable
        1.1.1-déclaration des variables pour changement couleur
        1.1.2-déclaration des variables pour autre bouton cliquable
    1.2-déclaration des variables utile pour les focntions
2-ajout des écouteur pour rendre les bouton interactif
3-fonction changement de couleur de police
4-fonction changement de couleur de fond
5-fonction tache déjà effectuer
6-fonction de vérification d'intituler unique
7-fonction de vérification que les champs sont remplie
8-fonction de creation de date
9-fonction pour connaitre l'index
10-fonction pour compter le nombre de tache
11-fonction reset formulaire
12-fonction de création du stockage local storage ou du chargement des anciennes taches
13-fonction insertion nouvelle tache
14-fonction d'insertion dans hltm
15-fonction pour supprimer une tache
16-fonction pour supprimer toutes les taches
17-changement de background
17.1-fonction appel Ajax pour avoir les images
17.2-fonction changement de background
*/
// 1-déclaration des variables

// 1.1-déclaration des variable clickable

// 1.1.1-déclaration des variables pour changement couleur
var colorBlue = document.getElementById("js___color__police-blue");
var colorGreen = document.getElementById("js___color__police-green");
var colorGold = document.getElementById("js___color__police-gold");
var colorBlack = document.getElementById("js___color__police-black");
var colorWhite = document.getElementById("js___color__police-white");
var colorBackBlue = document.getElementById("js___color__back-blue");
var colorBackGreen = document.getElementById("js___color__back-green");
var colorBackGold = document.getElementById("js___color__back-gold");
var colorBackBlack = document.getElementById("js___color__back-black");
var colorBackWhite = document.getElementById("js___color__back-white");

// 1.1.2-déclaration des variables pour autre bouton cliquable
var btnPasFait = document.getElementsByClassName("js___pas-fait");
var btnAjouter= document.getElementsByClassName("form__btn-submit")[0];
var btnDelete = document.getElementsByClassName("js___delete__icon");
var btnDeleteAll = document.getElementById("btn-supp-tout");

// 1.2-déclaration des variables utile pour les focntions
var listPuce = document.getElementsByClassName("js___list__puce");
var liste= document.getElementsByClassName("art1__list")[0];
var tabListeTache=[0];
var li = document.createElement("li");
var listLi = document.getElementsByTagName("li");
var formNewTask = document.getElementsByName("formNewTask")[0];
var fait = Boolean (false);

//2-ajout des écouteur pour rendre les bouton interactif

btnAjouter.addEventListener("click",ajouter);
btnDeleteAll.addEventListener("click",supprimerTout);
window.onload = cretaStorage();
window.onload = getImg();
for (i=1; i<=5; i++){
    let id = "img" + i;
    document.getElementById(id).addEventListener("click",changeBackground);
}

//3-fonction changement de couleur de police
function suppColor(){
    listPuce[i].classList.remove("js___list__text-blue");
    btnPasFait[i].classList.remove("js___list__text-blue");
    listPuce[i].classList.remove("js___list__text-green");
    btnPasFait[i].classList.remove("js___list__text-green");
    listPuce[i].classList.remove("js___list__text-gold");
    btnPasFait[i].classList.remove("js___list__text-gold");
    listPuce[i].classList.remove("js___list__text-black");
    btnPasFait[i].classList.remove("js___list__text-black");
    listPuce[i].classList.remove("js___list__text-white");
    btnPasFait[i].classList.remove("js___list__text-white");
}

colorBlue.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppColor();
        listPuce[i].classList.add("js___list__text-blue");
        btnPasFait[i].classList.add("js___list__text-blue");
    };
});
colorGreen.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppColor();
        listPuce[i].classList.add("js___list__text-green");
        btnPasFait[i].classList.add("js___list__text-green");
    };
});
colorGold.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppColor();
        listPuce[i].classList.add("js___list__text-gold");
        btnPasFait[i].classList.add("js___list__text-gold");
    };
});
colorBlack.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppColor();
        listPuce[i].classList.add("js___list__text-black");
        btnPasFait[i].classList.add("js___list__text-black");
    };
});
colorWhite.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppColor();
        listPuce[i].classList.add("js___list__text-white");
        btnPasFait[i].classList.add("js___list__text-white");
    };
});


//4-fonction changement de couleur de fond
function suppBackColor(){
    listPuce[i].classList.remove("js___list__back-blue");
    btnPasFait[i].classList.remove("js___list__back-blue");
    listPuce[i].classList.remove("js___list__back-green");
    btnPasFait[i].classList.remove("js___list__back-green");
    listPuce[i].classList.remove("js___list__back-gold");
    btnPasFait[i].classList.remove("js___list__back-gold");
    listPuce[i].classList.remove("js___list__back-black");
    btnPasFait[i].classList.remove("js___list__back-black");
    listPuce[i].classList.remove("js___list__back-white");
    btnPasFait[i].classList.remove("js___list__back-white");
}
colorBackBlue.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppBackColor()
        listPuce[i].classList.add("js___list__back-blue");
        btnPasFait[i].classList.add("js___list__back-blue");
        btnDelete[i].classList.add("js___list__back-blue");
    };
});
colorBackGreen.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppBackColor()
        listPuce[i].classList.add("js___list__back-green");
        btnPasFait[i].classList.add("js___list__back-green");
        btnDelete[i].classList.add("js___list__back-green");
    };
});
colorBackGold.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppBackColor()
        listPuce[i].classList.add("js___list__back-gold");
        btnPasFait[i].classList.add("js___list__back-gold");
        btnDelete[i].classList.add("js___list__back-gold");
    };
});
colorBackBlack.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppBackColor()
        listPuce[i].classList.add("js___list__back-black");
        btnPasFait[i].classList.add("js___list__back-black");
        btnDelete[i].classList.add("js___list__back-black");
    };
});
colorBackWhite.addEventListener("click",()=>{
    for(i=0;i<listPuce.length;i++){
        suppBackColor()
    };
});


//5-fonction tache déjà effectuer
function clickEffectuer () {
    let numBtnTemp=this.name-1;
    let tabListeTache = JSON.parse(localStorage.getItem("tabSave"));
    listPuce[numBtnTemp].setAttribute("name","fait");
    listPuce[numBtnTemp].classList.add("js___list__puce-fait");
    listPuce[numBtnTemp].classList.remove("js___list__importance-forte");
    listPuce[numBtnTemp].classList.remove("js___list__importance-moyenne");
    listPuce[numBtnTemp].classList.remove("js___list__importance-faible");
    tabListeTache[(numBtnTemp+1)][4]=true    
    localStorage.setItem("tabSave",JSON.stringify(tabListeTache));
}


//6-fonction de vérification d'intituler unique
function verifExistence(tab,val){
    let x=0;
    do{ 
        let tempValu = tab[x];
        if(tempValu[0]==val){
            alert("Ce nom de tache existe déjà");
            return 1;
        }
        else{
            x++;
        }
    }while(x<tab.length);
    return 0;
}


//7-fonction de vérification que les champs sont remplie
function verifRemplissage(titleTemp,descriptionTemp) {
    if(titleTemp.length==0){
        alert("Veuillez indiquer un intitulé s'il vous plait");
        return 2;
    }else if (descriptionTemp.length==0) {
        alert("Veuillez indiquer une description s'il vous plait");
        return 3;
    }
    else{
        return 0;
    }
}


//8-fonction de creation de date
function creatDate (){
    let newDate=new Date();
    let annéeCreate=newDate.getFullYear();
    let moisCreate=newDate.getMonth()+1;
    let jourCreate=newDate.getDate();
    let heureCreate=newDate.getHours();
    let minuteCreate=newDate.getMinutes();
    let secondCreate=newDate.getSeconds();
    var dateCreate = jourCreate+"/"+moisCreate+"/"+annéeCreate +" a "+heureCreate+":"+minuteCreate+":"+secondCreate;
    return dateCreate;
}


//9-fonction pour connaitre l'index
function positionTab(tabT,valT){
    let y=0;
    do{ 
        let tempValu = tabT[y];
        y++
        if (tempValu[0]===valT){
            return y;
        }
    }while(y<tabT.length);
}


//10-fonction pour compter le nombre de tache
function countTache(tab){
    var count = tab.length-1;
    document.getElementsByName("countNbTache")[0].innerHTML=count;
}


//11-fonction reset formulaire
function restForm () {
    formNewTask.reset();
}


//12-fonction de création du stockage local storage ou du chargement des anciennes taches
function cretaStorage(){
    document.getElementById("intituler").focus();
    if ( typeof localStorage != "undefined" && JSON){
        if (localStorage.getItem("tabSave")==null){
            localStorage.setItem("tabSave",JSON.stringify(tabListeTache));
        }else{
            let tabListeTache = JSON.parse(localStorage.getItem("tabSave"));
            countTache(tabListeTache);
            for (i=1;i<tabListeTache.length;i++){
                let title = tabListeTache[i][0];
                let decription = tabListeTache[i][1];
                let importance = tabListeTache[i][2];
                let dateToDay = tabListeTache[i][3];
                insert(i,title,decription,importance,dateToDay);
                if (tabListeTache[i][4]==true){
                    document.getElementById(i).classList.add("js___list__puce-fait");
                }
            }
        }
    }else {
        alert("Le stockage sur votre PC n'a pu etre effectuer.")
    }
}


//13-fonction insertion nouvelle tache
function ajouter (){
    /*récupération du tableau dans le local storage*/
    let tabListeTache = JSON.parse(localStorage.getItem("tabSave"));

    let tabTache=[];
    let title = document.getElementById("intituler").value;
    let decription = document.getElementById("decription").value;
    let importance = document.getElementById("importance").value;
    let dateToDay=creatDate ();
    let fait = false;

    /*control*/
    if (verifExistence(tabListeTache,title)==1 || verifRemplissage(title,decription)!=0){
        return
    }

    /*ajout dans un tableu des valeur entré*/
    tabTache.push(title, decription, importance, dateToDay, fait);
    tabListeTache.push(tabTache);

    /*determination de la position de la tache dans le tableau pour en faire son ID*/
    let position =positionTab(tabListeTache,title)-1;

    /*utilisation de la fonction d'insertion*/
    insert(position,title,decription,importance,dateToDay);

    //stockage des modification dans localStorage
    localStorage.setItem("tabSave",JSON.stringify(tabListeTache));
    countTache(tabListeTache);
    restForm ();
}


//14-fonction d'insertion dans hltm
function insert(position,title,decription,importance,dateToDay){
    /*insertion du text dans html, j'ai utiliser "insertAdjacentHTML" plutôt que appendChild, 
    car je trouve cela plus lisible et manipulable. Je ne sais pas quelle méthode est la plus rapide en revanche*/
    liste.insertAdjacentHTML("beforeend",
    `
    <li name="liTemp" class="list__puce js___list__puce js___list__text-white">
        <section class="puce__tache">
            <p name="numTemp" class="tache__num"></p>
            <p name="titleTemp" class="tache__title"></p>
            <p name="decriptionTemp" class="tache__decription"></p>
        </section>
        <section class="puce__part-bas">
            <button name="btnEffectuer" class="part-bas__btn-effectuer js___list__text-white js___pas-fait">
                Effectuer ?
            </button>
            <div class="part-bas__date-delete">
                <p>Créer le <span name="dateTemp"></span></p>
                <button name="deleteTemp" class="delete__icon js___delete__icon">
                    <img class="icon_sup" src="asset/icon/delete.png" alt="suppression de la tache">
                </button>
                </div>
        </section>
    </li>
    `)

    /*modification des elements insérés*/
    document.getElementsByName("titleTemp")[0].innerHTML=title;
    document.getElementsByName("decriptionTemp")[0].innerHTML=decription;
    document.getElementsByName("dateTemp")[0].innerHTML=dateToDay;
    if (importance==="faible"){
        document.getElementsByName("liTemp")[0].classList.add("js___list__importance-faible");
    }else if (importance==="moyenne"){
        document.getElementsByName("liTemp")[0].classList.add("js___list__importance-moyenne");
    }else if (importance==="forte"){
        document.getElementsByName("liTemp")[0].classList.add("js___list__importance-forte");
    }
    document.getElementsByName("liTemp")[0].setAttribute("id",position);
    document.getElementsByName("numTemp")[0].innerHTML=position;
    document.getElementsByName("numTemp")[0].setAttribute("name",position);
    document.getElementsByName("btnEffectuer")[0].addEventListener("click",clickEffectuer);
    document.getElementsByName("btnEffectuer")[0].setAttribute("name",position);
    document.getElementsByName("deleteTemp")[0].addEventListener("click",suppression);
    document.getElementsByName("deleteTemp")[0].setAttribute("name",position);

    document.getElementsByName("titleTemp")[0].removeAttribute("name");
    document.getElementsByName("decriptionTemp")[0].removeAttribute("name");
    document.getElementsByName("dateTemp")[0].removeAttribute("name");
    document.getElementsByName("liTemp")[0].removeAttribute("name");
}


//15-fonction pour supprimer une tache
function suppression(){
    let tabListeTache = JSON.parse(localStorage.getItem("tabSave"));
    let numTache = this.name;
    let tache = document.getElementById(numTache);
    let y=1;
    tache.remove();
    tabListeTache.splice(numTache, 1);
    for (x=1; x<tabListeTache.length+1;x++) {
        let elemID = document.getElementById(x);
        let elemName = document.getElementsByName(x);
        if (elemID!=null){
            if (y>=numTache){
                elemID.setAttribute("id",y);
                elemName[0].innerHTML=y;
                for(z=0;z<=elemName.length;z){
                    if (elemName[z]!=undefined){
                        elemName[z].setAttribute("name",y);
                    }else{
                        break;
                    }
                }
                y++;
            }else{
                y++;
            }
        }
    }
    countTache(tabListeTache);
    localStorage.setItem("tabSave",JSON.stringify(tabListeTache));
}


//16-fonction pour supprimer toutes les taches
function supprimerTout(){
    let tabListeTache = JSON.parse(localStorage.getItem("tabSave"));
    for (i=1;i<tabListeTache.length;i++){
        document.getElementById(i).remove();
    }
    tabListeTache=[0];
    countTache(tabListeTache);
    localStorage.clear();
    localStorage.setItem("tabSave",JSON.stringify(tabListeTache));
}

//17-changement de background
var imgSelecBack = document.getElementsByClassName("js___box-img__interaction");
var background = document.getElementsByClassName("js__main-contenue")[0];

//17.1-fonction appel Ajax pour avoir les images
function getImg(){
    var xhr = new XMLHttpRequest();
    var api = "https://picsum.photos/v2/list?page=2&limit=100";
    xhr.open("GET", api, true);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status ==0)){
            donneJson = xhr.responseText;
            listeImg=JSON.parse(donneJson);
            for (i=0; i<imgSelecBack.length ;i++){
                min = Math.ceil(0);
                max = Math.floor(listeImg.length);
                let tirage = Math.floor(Math.random() * (max - min)) + min;
                let imgTirer = listeImg[tirage].download_url;
                let img = document.createElement("img",'class="interaction__img"');
                imgSelecBack[i].appendChild(img);
                img.setAttribute("src",imgTirer);
                img.setAttribute("class","interaction__img");
                listeImg.splice(tirage, 1);
            }
        }
    }
}

//17.2-fonction changement de background
function changeBackground(){
    let id=this.id;
    let src = document.getElementById(id).childNodes[1].currentSrc;
    document.getElementById("center").style.backgroundImage = "url("+src+")";
}