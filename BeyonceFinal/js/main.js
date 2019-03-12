
// ------------------ move tour pics ---------------------//
let move = (a) =>{
    console.log('test');
    let tourPic1 = document.getElementById(`move${a}`);
    let tourPic2 = document.getElementById(`move${a + 1}`);
    let tourPic3 = document.getElementById(`move${a + 2}`);
    let tourPic4 = document.getElementById(`move${a + 3}`);
    let pos1 = 200;
    let pos2 = 200;
    let pos3 = 200;
    let pos4 = 200;
    let move1Down = () => { 
        if(pos1 === 1250){ 
            clearInterval(id);
        }else {
            pos1+= 2;
            tourPic1.style.top = pos1 + 'px';
        }
    }
    let id = setInterval(move1Down, .5);
    let move2Down = () => {
        if(pos2 === 950){ 
            clearInterval(id2);
        }else {
            pos2+=2;
            tourPic2.style.top = pos2 + 'px';
        }
    }
    let id2 = setInterval(move2Down, .5);
    let move3Down = () => {
        if(pos3 === 700){ 
            clearInterval(id3);
        }else {
            pos3+=2;
            tourPic3.style.top = pos3 + 'px';
        }
    }
    let id3 = setInterval(move3Down, .5);
    let move4Down = () => {
        if(pos4 === 450){ 
            clearInterval(id4);
        }else {
            pos4+=2;
            tourPic4.style.top = pos4 + 'px';
        }
    }
    let id4 = setInterval(move4Down, .5);
}
//---------------add to bag alert-------//
let purchase = () =>{
    alert("Thank you for your purchase!");
}
// ----------------move music info -------------------------//
let slideMusic = (b) => {
    let music1 = document.getElementById(`music${b}`);
    let music2 = document.getElementById(`music${b + 1}`);
    let pos = 530;
    let pos2 = 680;
    let moveRight = () => {
        if (pos === 900){
            clearInterval(id);
        }else{
            pos++;
            music1.style.left = pos + "px";
        }
    }
    let id = setInterval(moveRight, 0.25);
    let moveLeft = () => {
        if(pos2 === 1050){
            clearInterval(id2);
        }else{
            pos2++;
            music2.style.right = pos2 + "px";
        }
    }
    let id2 = setInterval(moveLeft, 0.25);
}




//---------------------------------Navigation Bar-------------------//
let slideNav = () =>{
    document.getElementById('menuBar').classList.toggle('active');
    let navBack = document.getElementById('navBackground');
    if(navBack.style.display === 'block'){
        navBack.style.display = 'none';
    }else{
        navBack.style.display = 'block';
    }
}

// -------------Modal Fuctions-------------//
let openModal = (a) =>{ //grabs argument passed through parameter in html
    document.getElementById(`modalBack${a}`).style.display="flex"; //looks for the id with the number that maches a
}

let closeBtn = (a) =>{
    document.getElementById(`modalBack${a}`).style.display="none";
}


//--------------------------Slide Show ---------------------------//
var picIndex = 0; 
let displayPics = (n) => {//function picks which pic to display showDivs
    var pics = document.getElementsByClassName('beyGoodContainer'); // images withe class 'myPics' are an array stored in the variable pics
    if (n > pics.length - 1){ //if n is greater than the index number of the pic,
        picIndex = 0;          //then show 0 (the first pic in the array)
    }
    if (n < 0){ //if n is less than 0, set picIndex to the last picture in the array (4)
        picIndex = pics.length - 1;
    }
    var i = 0; 
    while (i < pics.length){ //while i is less than the length of the array of pictures
        pics[i].style.display = "none"; //do not display picture associated with i
        i++;                    //iterate through the loop by 1
    }
    pics[picIndex].style.display = "block"; //display picture associated with index 
}
let movePics = (n) =>{//function called onclick plusDivs
    displayPics(picIndex += n); 
}
displayPics();


