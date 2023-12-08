const sheeb = document.getElementById("sheeb");
const cake = document.getElementById("cake");
const happy = document.getElementById("happy");
happy.style.visibility = "hidden";


let sheeb_top = 100
let sheeb_left = 100

sheeb.style.left = sheeb_left + "px";
sheeb.style.top = sheeb_top + "px";

let sheeb_rot = 0;

let move_px = 3;
let rot_change_deg = 3;



let cake_top = (window.innerHeight / 2) - 100
let cake_left = (window.innerWidth / 2) - 100

cake.style.left = cake_left + "px";
cake.style.top = cake_top + "px";


document.addEventListener("keydown", (event) => {

    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

    switch (key) {
        case "ArrowLeft":
            // Left pressed
            sheeb_left -= move_px;
            sheeb.style.left = sheeb_left + "px";
            
            sheeb_rot -= rot_change_deg;
            sheeb.style.transform = 'rotate(' + sheeb_rot + 'deg)';
            break;
     
        case "ArrowRight":
            // Right pressed
            sheeb_left += move_px;
            sheeb.style.left = sheeb_left + "px";
            
            sheeb_rot += rot_change_deg;
            sheeb.style.transform = 'rotate(' + sheeb_rot + 'deg)';
            break;

        case "ArrowUp":
            // Up pressed
            sheeb_top -= move_px;
            sheeb.style.top = sheeb_top + "px";

            sheeb_rot -= rot_change_deg;
            sheeb.style.transform = 'rotate(' + sheeb_rot + 'deg)';
            break;

        case "ArrowDown":
            // Down pressed
            sheeb_top += move_px;
            sheeb.style.top = sheeb_top + "px";

            sheeb_rot += rot_change_deg;
            sheeb.style.transform = 'rotate(' + sheeb_rot + 'deg)';
            break;
    }

    if ( (sheeb_left >= cake_left) && (sheeb_left <= cake_left+100) && (sheeb_top >= cake_top) && (sheeb_top <= cake_top+100) ){
        happy.style.visibility = "visible";
        cake.style.visibility = "hidden";
    }

  });


  