var elem;
var section = 0;
var pos = 0;
var id = null;
var target = 0;
var direction = 0;
var opened = [false, false, false, false, false, false, false];
var heights = [];
var interval = [null, null, null, null, null, null, null];
var collapseHeight = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var collapseDirection = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var upCollapse = [upCollapse0, upCollapse1, upCollapse2, upCollapse3, upCollapse4, upCollapse5, upCollapse6, upCollapse7, upCollapse8, upCollapse9, upCollapse10]
var downExpand = [downExpand0, downExpand1, downExpand2, downExpand3, downExpand4, downExpand5, downExpand6, downExpand7, downExpand8, downExpand9, downExpand10]

for (let i = 0; i < 11; i++) {
    heights[i] = document.getElementsByClassName("collapsible")[i].children[1].offsetHeight;
    document.getElementsByClassName("collapsible")[i].children[1].classList.add("collapse");
}

console.log("Hello to anyone checking the console! Do not worry, bugs will not bother you, they are afraid of the power of i n f o r m a t i o n")
console.error("hello im a bug OH NO THE DEVS ARE DEBUGGING BY PRINTING VARIABLES AAAAAAH")
console.log("hehehe") 

function anim(targ, from) {
    target = targ;
    if (from == 1) {
        showSection2();
    }
    else {
        hideSection2();
    }
    elem = document.getElementById("slider");
    direction = Math.sign(target - pos);
    clearInterval(id);
    if (direction < 0) {
        id = setInterval(right, 2);
        for (i = 0; i < document.getElementsByClassName("horizontalDiv").length; i++) {
            document.getElementsByClassName("horizontalDiv")[i].classList.add("noScroll");
        }
    } else {
        id = setInterval(left, 2);
        for (i = 0; i < document.getElementsByClassName("horizontalDiv").length; i++) {
            document.getElementsByClassName("horizontalDiv")[i].classList.add("noScroll");
        }
    }
    ready = false;
}

function right() {
    if (pos <= target) {
        clearInterval(id);
        for (i = 0; i < document.getElementsByClassName("horizontalDiv").length; i++) {
            document.getElementsByClassName("horizontalDiv")[i].classList.remove("noScroll");
        }
    } else {
        pos += Math.ceil(Math.abs((target - pos) / 80.0)) * direction;
        elem.style.setProperty("margin-left", pos + "px");
    }
}

function left() {
    if (pos >= target) {
        clearInterval(id);
        for (i = 0; i < document.getElementsByClassName("horizontalDiv").length; i++) {
            document.getElementsByClassName("horizontalDiv")[i].classList.remove("noScroll");
        }
    } else {
        pos += Math.ceil(Math.abs((target - pos) / 80.0)) * direction;
        elem.style.setProperty("margin-left", pos + "px");
    }
}

function collapse(from) {
    if (document.getElementsByClassName("collapse")[from].offsetHeight == heights[from]) {
        collapseDirection[from] = -1;
        interval[from] = setInterval(upCollapse[from], 20);
    } else if (document.getElementsByClassName("collapse")[from].offsetHeight == 0) {
        collapseDirection[from] = 1
        interval[from] = setInterval(downExpand[from], 20);
    }
    opened[from] = !opened[from];
}

function upCollapse0() {
    if (Math.floor(collapseHeight[0]) > 0) {
        collapseHeight[0] /= 1.5;
        document.getElementsByClassName("collapse")[0].style.setProperty("height", Math.floor(collapseHeight[0]) + "px");
    } else {
        clearInterval(interval[0]);
        collapseHeight[0] = 0;
        document.getElementsByClassName("collapse")[0].style.setProperty("height", Math.floor(collapseHeight[0]) + "px");
    }
}

function upCollapse1() {
    if (Math.floor(collapseHeight[1]) > 0) {
        collapseHeight[1] /= 1.5;
        document.getElementsByClassName("collapse")[1].style.setProperty("height", Math.floor(collapseHeight[1]) + "px");
    } else {
        clearInterval(interval[1]);
        collapseHeight[1] = 0;
        document.getElementsByClassName("collapse")[1].style.setProperty("height", Math.floor(collapseHeight[1]) + "px");
    }
}

function upCollapse2() {
    if (Math.floor(collapseHeight[2]) > 0) {
        collapseHeight[2] /= 1.5;
        document.getElementsByClassName("collapse")[2].style.setProperty("height", Math.floor(collapseHeight[2]) + "px");
    } else {
        clearInterval(interval[2]);
        collapseHeight[2] = 0;
        document.getElementsByClassName("collapse")[2].style.setProperty("height", Math.floor(collapseHeight[2]) + "px");
    }
}

function upCollapse3() {
    if (Math.floor(collapseHeight[3]) > 0) {
        collapseHeight[3] /= 1.5;
        document.getElementsByClassName("collapse")[3].style.setProperty("height", Math.floor(collapseHeight[3]) + "px");
    } else {
        clearInterval(interval[3]);
        collapseHeight[3] = 0;
        document.getElementsByClassName("collapse")[3].style.setProperty("height", Math.floor(collapseHeight[3]) + "px");
    }
}

function upCollapse4() {
    if (Math.floor(collapseHeight[4]) > 0) {
        collapseHeight[4] /= 1.5;
        document.getElementsByClassName("collapse")[4].style.setProperty("height", Math.floor(collapseHeight[4]) + "px");
    } else {
        clearInterval(interval[4]);
        collapseHeight[4] = 0;
        document.getElementsByClassName("collapse")[4].style.setProperty("height", Math.floor(collapseHeight[4]) + "px");
    }
}

function upCollapse5() {
    if (Math.floor(collapseHeight[5]) > 0) {
        collapseHeight[5] /= 1.5;
        document.getElementsByClassName("collapse")[5].style.setProperty("height", Math.floor(collapseHeight[5]) + "px");
    } else {
        clearInterval(interval[5]);
        collapseHeight[5] = 0;
        document.getElementsByClassName("collapse")[5].style.setProperty("height", Math.floor(collapseHeight[5]) + "px");
    }
}

function upCollapse6() {
    if (Math.floor(collapseHeight[6]) > 0) {
        collapseHeight[6] /= 1.5;
        document.getElementsByClassName("collapse")[6].style.setProperty("height", Math.floor(collapseHeight[6]) + "px");
    } else {
        clearInterval(interval[6]);
        collapseHeight[6] = 0;
        document.getElementsByClassName("collapse")[6].style.setProperty("height", Math.floor(collapseHeight[6]) + "px");
    }
}

function upCollapse7() {
    if (Math.floor(collapseHeight[7]) > 0) {
        collapseHeight[7] /= 1.5;
        document.getElementsByClassName("collapse")[7].style.setProperty("height", Math.floor(collapseHeight[7]) + "px");
    } else {
        clearInterval(interval[7]);
        collapseHeight[7] = 0;
        document.getElementsByClassName("collapse")[7].style.setProperty("height", Math.floor(collapseHeight[7]) + "px");
    }
}

function upCollapse8() {
    if (Math.floor(collapseHeight[8]) > 0) {
        collapseHeight[8] /= 1.5;
        document.getElementsByClassName("collapse")[8].style.setProperty("height", Math.floor(collapseHeight[8]) + "px");
    } else {
        clearInterval(interval[8]);
        collapseHeight[8] = 0;
        document.getElementsByClassName("collapse")[8].style.setProperty("height", Math.floor(collapseHeight[8]) + "px");
    }
}

function upCollapse9() {
    if (Math.floor(collapseHeight[9]) > 0) {
        collapseHeight[9] /= 1.5;
        document.getElementsByClassName("collapse")[9].style.setProperty("height", Math.floor(collapseHeight[9]) + "px");
    } else {
        clearInterval(interval[9]);
        collapseHeight[9] = 0;
        document.getElementsByClassName("collapse")[9].style.setProperty("height", Math.floor(collapseHeight[9]) + "px");
    }
}

function upCollapse10() {
    if (Math.floor(collapseHeight[10]) > 0) {
        collapseHeight[10] /= 1.5;
        document.getElementsByClassName("collapse")[10].style.setProperty("height", Math.floor(collapseHeight[10]) + "px");
    } else {
        clearInterval(interval[10]);
        collapseHeight[10] = 0;
        document.getElementsByClassName("collapse")[10].style.setProperty("height", Math.floor(collapseHeight[10]) + "px");
    }
}

function downExpand0() {
    if (collapseHeight[0] < heights[0]) {
        collapseHeight[0] += (heights[0] - collapseHeight[0] + 1) / 3;
        document.getElementsByClassName("collapse")[0].style.setProperty("height", collapseHeight[0] + "px");
    } else {
        clearInterval(interval[0]);
        collapseHeight[0] = heights[0];
        document.getElementsByClassName("collapse")[0].style.setProperty("height", collapseHeight[0] + "px");
    }
}

function downExpand1() {
    if (collapseHeight[1] < heights[1]) {
        collapseHeight[1] += (heights[1] - collapseHeight[1] + 1) / 3;
        document.getElementsByClassName("collapse")[1].style.setProperty("height", collapseHeight[1] + "px");
    } else {
        clearInterval(interval[1]);
        collapseHeight[1] = heights[1];
        document.getElementsByClassName("collapse")[1].style.setProperty("height", collapseHeight[1] + "px");
    }
}

function downExpand2() {
    if (collapseHeight[2] < heights[2]) {
        collapseHeight[2] += (heights[2] - collapseHeight[2] + 1) / 3;
        document.getElementsByClassName("collapse")[2].style.setProperty("height", collapseHeight[2] + "px");
    } else {
        clearInterval(interval[2]);
        collapseHeight[2] = heights[2];
        document.getElementsByClassName("collapse")[2].style.setProperty("height", collapseHeight[2] + "px");
    }
}

function downExpand3() {
    if (collapseHeight[3] < heights[3]) {
        collapseHeight[3] += (heights[3] - collapseHeight[3] + 1) / 3;
        document.getElementsByClassName("collapse")[3].style.setProperty("height", collapseHeight[3] + "px");
    } else {
        clearInterval(interval[3]);
        collapseHeight[3] = heights[3];
        document.getElementsByClassName("collapse")[3].style.setProperty("height", collapseHeight[3] + "px");
    }
}

function downExpand4() {
    if (collapseHeight[4] < heights[4]) {
        collapseHeight[4] += (heights[4] - collapseHeight[4] + 1) / 3;
        document.getElementsByClassName("collapse")[4].style.setProperty("height", collapseHeight[4] + "px");
    } else {
        clearInterval(interval[4]);
        collapseHeight[4] = heights[4];
        document.getElementsByClassName("collapse")[4].style.setProperty("height", collapseHeight[4] + "px");
    }
}

function downExpand5() {
    if (collapseHeight[5] < heights[5]) {
        collapseHeight[5] += (heights[5] - collapseHeight[5] + 1) / 3;
        document.getElementsByClassName("collapse")[5].style.setProperty("height", collapseHeight[5] + "px");
    } else {
        clearInterval(interval[5]);
        collapseHeight[5] = heights[5];
        document.getElementsByClassName("collapse")[5].style.setProperty("height", collapseHeight[5] + "px");
    }
}

function downExpand6() {
    if (collapseHeight[6] < heights[6]) {
        collapseHeight[6] += (heights[6] - collapseHeight[6] + 1) / 3;
        document.getElementsByClassName("collapse")[6].style.setProperty("height", collapseHeight[6] + "px");
    } else {
        clearInterval(interval[6]);
        collapseHeight[6] = heights[6];
        document.getElementsByClassName("collapse")[6].style.setProperty("height", collapseHeight[6] + "px");
    }
}

function downExpand7() {
    if (collapseHeight[7] < heights[7]) {
        collapseHeight[7] += (heights[7] - collapseHeight[7] + 1) / 3;
        document.getElementsByClassName("collapse")[7].style.setProperty("height", collapseHeight[7] + "px");
    } else {
        clearInterval(interval[7]);
        collapseHeight[7] = heights[7];
        document.getElementsByClassName("collapse")[7].style.setProperty("height", collapseHeight[7] + "px");
    }
}

function downExpand8() {
    if (collapseHeight[8] < heights[8]) {
        collapseHeight[8] += (heights[8] - collapseHeight[8] + 1) / 3;
        document.getElementsByClassName("collapse")[8].style.setProperty("height", collapseHeight[8] + "px");
    } else {
        clearInterval(interval[8]);
        collapseHeight[8] = heights[8];
        document.getElementsByClassName("collapse")[8].style.setProperty("height", collapseHeight[8] + "px");
    }
}

function downExpand9() {
    if (collapseHeight[9] < heights[9]) {
        collapseHeight[9] += (heights[9] - collapseHeight[9] + 1) / 3;
        document.getElementsByClassName("collapse")[9].style.setProperty("height", collapseHeight[9] + "px");
    } else {
        clearInterval(interval[9]);
        collapseHeight[9] = heights[9];
        document.getElementsByClassName("collapse")[9].style.setProperty("height", collapseHeight[9] + "px");
    }
}

function downExpand10() {
    if (collapseHeight[10] < heights[10]) {
        collapseHeight[10] += (heights[10] - collapseHeight[10] + 1) / 3;
        document.getElementsByClassName("collapse")[10].style.setProperty("height", collapseHeight[10] + "px");
    } else {
        clearInterval(interval[10]);
        collapseHeight[10] = heights[10];
        document.getElementsByClassName("collapse")[10].style.setProperty("height", collapseHeight[10] + "px");
    }
}

function hideSection2() {
    document.getElementsByClassName("horizontalDiv")[1].children[0].children[1].style.display = "none"
}

function showSection2() {
    document.getElementsByClassName("horizontalDiv")[1].children[0].children[1].style.display = "block"
}