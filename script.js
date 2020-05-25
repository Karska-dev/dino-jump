var character = document.getElementById('character');
var block = document.getElementById('block');
function jump() {
    if (character.classList != 'animate')
        character.classList.add('animate');
    setTimeout(function(){
        character.classList.remove('animate');
    }, 750)
}

var checkDead = setInterval(
    function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
        if (blockLeft<141 && 
            blockLeft>75 &&
            characterTop>=95){
            block.style.animation = "none";
            //block.style.display = "none";
            console.log(`Left block is: ${blockLeft} and characterTop is: ${characterTop}`);
            //alert('you lose!');
        }
    }, 10);