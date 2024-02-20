let colorPickerMenu = document.getElementById("color-picker");
let color;
function show(){ 
    colorPickerMenu.classList.add("active");
    colorPickerMenu.style.backgroundColor
}

function hide(){ 
    colorPickerMenu.classList.remove("active");
}

let navHide = false;
function hideNavBar(){
    navHide = !navHide;
    let navbar = document.getElementById("navBar");
    let arrow = document.getElementById("arrow");
    let hideButton = document.getElementById("hide");

    if(navHide){
        navbar.classList.add("hideNav");
        arrow.innerHTML = "&#65516;";
        hideButton.classList.add("top");
    }
    else{
        navbar.classList.remove("hideNav");
        arrow.innerHTML = "&#65514;";
        hideButton.classList.remove("top");
    }

}

function showDiv(){
    // linear.style.display = "block";
    let gradientType = document.getElementById("gradient-type").value;

    if(gradientType === "linear-gradient"){
        document.getElementById(gradientType).style.display = "block";
        document.getElementById("radial-gradient").style.display = "none";
        document.getElementById("conic-gradient").style.display = "none";
    }

    else if(gradientType === "radial-gradient"){
        document.getElementById(gradientType).style.display = "block";
        document.getElementById("linear-gradient").style.display = "none";
        document.getElementById("conic-gradient").style.display = "none";
    }

    else if(gradientType === "conic-gradient"){
        document.getElementById(gradientType).style.display = "block";
        document.getElementById("radial-gradient").style.display = "none";
        document.getElementById("linear-gradient").style.display = "none";
    }
    else{
        document.getElementById("linear-gradient").style.display = "none";
        document.getElementById("radial-gradient").style.display = "none";
        document.getElementById("conic-gradient").style.display = "none";
    }
}

let colorPicker = document.getElementById("color_picker")

colorPicker.addEventListener("change", updateColorInfo);

function updateColorInfo(ev){
    let p = document.getElementById("color_output");
    p.innerHTML = ev.target.value;
}

function copyToClipboard(){
    let copyCode = document.getElementById("output");

    copyCode.select();
    copyCode.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyCode.value);
}
let colors = [];
let color_display = document.getElementById("color_display");
function addColor(){
    let color = document.getElementById("color_picker").value;
    colors.push(" "+color);
    color_display.value = colors.toString();
}

function deleteColor(){
    colors.pop();
    color_display.value = colors.toString();
}

function applyGradient(){
    let finalColor = colors.toString();
    let gradient_type = document.getElementById("gradient-type").value;
    let clipboardValue = document.getElementById("output");
    let displayOutput = document.getElementById("displayOutput");
    if(gradient_type === "linear-gradient"){
        let direction = document.getElementById("direction").value;
        displayOutput .style.background = gradient_type+"("+direction+","+finalColor+")";
        clipboardValue.value = "background-image: "+gradient_type+"("+direction+","+finalColor+");"
    }

    if(gradient_type === "radial-gradient"){
        let shape = document.getElementById("shape").value;
        displayOutput .style.background = gradient_type+"("+shape+","+finalColor+")";
        clipboardValue.value = "background-image: "+gradient_type+"("+shape+","+finalColor+");"
    }

    if(gradient_type === "conic-gradient"){
        let from_angle = "from "+document.getElementById("from-angle").value+"deg";
        let at_position = "at "+document.getElementById("x-position").value+"% "+document.getElementById("y-position").value+"%"; 
        displayOutput .style.background = gradient_type+"("+from_angle+" "+at_position+","+finalColor+")";
        clipboardValue.value = "background-image: "+gradient_type+"("+from_angle+" "+at_position+","+finalColor+");";
    }

    hide();
}