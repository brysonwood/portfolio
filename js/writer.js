document.addEventListener('DOMContentLoaded',function(event){
    var test = "Bryson Wood."

    // Get fade class.
    var faded = document.querySelector(".faded");

    // Set fade level to full transparent.
    function startFadeOut(){
        faded.style.opacity = 0;
    }

    startWriterAnimation(0);

    // Main writer function.
    function writer(tester, i, fnCallback) {
        if (i < (tester.length)) {
            // Update the intro-writer h1 with a new character.
            document.querySelector(".intro-writer h1").innerHTML = tester.substring(0, i + 1) +'<span aria-hidden="true"></span>'

            // Calls the writer function recursively after a delay.
            setTimeout(function() {
                writer(tester, i + 1, fnCallback)
            }, 100);
        }
        // If the typing is finished and a callback is provided, then call the 
        // callback function after a delay.
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    // Initiates writer animation.
    function startWriterAnimation(i) {
        if (i < 1) {
            // Call the writer function with the string provided.
            writer(test, 0, function(){
                // Start writing.
                startWriterAnimation(i + 1);
                // Fade out when writer is complete.
                startFadeOut();
                // After the fade out is done, remove the faded class' divs.
                setTimeout(function() {
                    faded.remove();
                }, 1200);
            });
        }
        
    }

    startWriterAnimation(0);
    
});