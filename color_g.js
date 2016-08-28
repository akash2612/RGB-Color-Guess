var easyL = false;
var hardL = false;
var r;
var flag;
var j;
var boxColorEasy = document.getElementById("easy").querySelectorAll("li");
var boxColorHard = document.getElementById("hard").querySelectorAll("li");
document.getElementById("newGame").addEventListener("click",function(){
    flag = false;
    easyL = false;
    hardL = false;
    document.getElementById("hard").style.visibility = "hidden";
    document.getElementById("easy").style.visibility = "hidden";
    document.getElementById("hLevel").classList.remove("highlight");
    document.getElementById("eLevel").classList.remove("highlight");
    document.getElementById("title").style.background = "#20759a";
    document.getElementById("correctColor").textContent = "RGB";
    document.getElementById("rite").style.visibility = "hidden";
    document.getElementById("wrong").style.visibility = "hidden";
});
document.getElementById("eLevel").addEventListener("click",function(){
    easyL = true;
    hardL = false;
    flag = false;
    j = 0;
    document.getElementById("easy").style.visibility = "visible";
    document.getElementById("hard").style.visibility = "hidden";
    document.getElementById("eLevel").classList.add("highlight");
    document.getElementById("hLevel").classList.remove("highlight");
    document.getElementById("title").style.background = "#20759a";
    document.getElementById("rite").style.visibility = "hidden";
    document.getElementById("wrong").style.visibility = "hidden";
    document.getElementById("easy").classList.remove("clicked");
    for(i=0;i<boxColorEasy.length;i++){
        boxColorEasy[i].style.background = "rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";
        boxColorEasy[i].classList.remove("clicked");
    };
    var random = function(){
        r = Math.floor(Math.random() * boxColorEasy.length);
        document.getElementById("correctColor").textContent = boxColorEasy[r].style.background;
    };
    random();
});
for(i=0;i<boxColorEasy.length;i++){
    boxColorEasy[i].addEventListener("click",function(){
            j++
            if(this.style.background == document.getElementById("correctColor").textContent && j<boxColorEasy.length){
                document.getElementById("title").style.background = this.style.background;
                flag = true;
                document.getElementById("rite").style.visibility = "visible";
                for(temp=0;temp<boxColorEasy.length;temp++){
                    boxColorEasy[temp].style.background = this.style.background;
                }
            }
            if(!flag){
                this.style.background = "#2b2222";
                this.classList.add("clicked");
            }
            if(!flag && j == (boxColorEasy.length - 1)){
                document.getElementById("wrong").style.visibility = "visible";
                flag = true;
                document.getElementById("easy").classList.add("clicked");
            }
});
}
document.getElementById("hLevel").addEventListener("click",function(){
    hardL = true;
    easyL = false;
    flag = false;
    j = 0;
    document.getElementById("hard").style.visibility = "visible";
    document.getElementById("easy").style.visibility = "hidden";
    document.getElementById("hLevel").classList.add("highlight");
    document.getElementById("eLevel").classList.remove("highlight");
    document.getElementById("title").style.background = "#20759a";
    document.getElementById("rite").style.visibility = "hidden";
    document.getElementById("wrong").style.visibility = "hidden";
    document.getElementById("hard").classList.remove("clicked");
    for(i=0;i<boxColorHard.length;i++){
        boxColorHard[i].style.background = "rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";
        boxColorHard[i].classList.remove("clicked");
    }
    var random = function(){
        r = Math.floor(Math.random() * boxColorHard.length);
        document.getElementById("correctColor").textContent = boxColorHard[r].style.background;
    };
    random();
});
for(i=0;i<boxColorHard.length;i++){
    boxColorHard[i].addEventListener("click",function(){
        j++
        if(this.style.background == document.getElementById("correctColor").textContent && j<boxColorHard.length){
            document.getElementById("title").style.background = this.style.background;
            flag = true;
            document.getElementById("rite").style.visibility = "visible";
            for(temp=0;temp<boxColorHard.length;temp++){
                boxColorHard[temp].style.background = this.style.background;
            }
        }
        if(!flag){
            this.style.background = "#2b2222";
            this.classList.add("clicked");
        }
        if(!flag && j == (boxColorHard.length - 1)){
            document.getElementById("wrong").style.visibility = "visible";
            flag = true;
        }
    });
};