
function myFace() {
    var c = document.getElementById("mycanvas")
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "yellow";
    draw.arc(550, 50, 50,0, Math.PI * 2, true);
    draw.closePath(); 
    draw.fillStyle= 'rgba(253,250,211, 1)';
    draw.fill()
}
function myHouse() {
    var c = document.getElementById("mycanvas")
    var draw = c.getContext("2d")
    draw.beginPath();
    draw.moveTo(860, 380);
   /* bottom */ draw.lineTo(528, 390);
   /* left */ draw.lineTo(715, 145);
    draw.moveTo(715,145);
    /* right */draw.lineTo(860,380);
    draw.stroke();
    draw.beginPath;
    draw.moveTo(717,145);
    draw.lineTo(445,175)
    draw.stroke();
    draw.moveTo(525,580);
    draw.lineTo(528,390)
    draw.stroke();
    draw.moveTo(528,390);
    draw.lineTo(283,370);
    draw.stroke();
    draw.moveTo(295,370);
    draw.lineTo(295,526);
    draw.stroke();
    draw.moveTo(526,580);
    draw.lineTo(295,526);
    draw.stroke();
    draw.moveTo(445,175);
    draw.lineTo(283,370);
    draw.stroke();
    draw.moveTo(526,580);
    draw.lineTo(716,560);
    draw.stroke();
    draw.moveTo(716,560);
    draw.lineTo(716,385);
    draw.stroke();
    draw.moveTo(716,560);
    draw.lineTo(780,573);
    draw.stroke();
    draw.moveTo(780,573);
    draw.lineTo(882,562);
    draw.stroke();
    draw.moveTo(882,562);
    draw.lineTo(882,550);
    draw.stroke();
    draw.moveTo(882,550);
    draw.lineTo(782,560);
    draw.stroke();
    draw.moveTo(782,560);
    draw.lineTo(715,550);
    draw.stroke();
    draw.moveTo(782,560);
    draw.lineTo(782,574);
    draw.stroke();
    draw.moveTo(716,420);
    draw.lineTo(785,425);
    draw.stroke();
    draw.moveTo(785,425);
    draw.lineTo(716,384);
    draw.stroke();
    draw.moveTo(782,425);
    draw.lineTo(895,418);
    draw.stroke();
    draw.moveTo(895 ,418);
    draw.lineTo(819,380);
    draw.stroke();
    draw.moveTo(855,380);
    draw.lineTo(855,398);
    draw.stroke();
    draw.moveTo(855,544);
    draw.lineTo(855,420);
    draw.stroke();
    draw.moveTo(880, 550);
    draw.lineTo(814,534);
    draw.stroke();
    draw.moveTo(814, 534);
    draw.lineTo(814,430);
    draw.stroke();
    draw.moveTo(814,430);
    draw.lineTo(750, 430);
    draw.stroke();
    draw.moveTo(750, 430);
    draw.lineTo(750,540);
    draw.stroke();
    draw.moveTo(750,540);
    draw.lineTo(717, 545);
    draw.stroke();
    draw.moveTo(814,535);
    draw.lineTo(750,539);
    draw.stroke();


 
}

function bodyLoad() {
            myHouse();
            myFace();
           
            

}
