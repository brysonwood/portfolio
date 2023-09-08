document.addEventListener('DOMContentLoaded',function(event){
    var test = "Bryson Wood."
    var faded = document.querySelector(".faded");

    function startFadeOut(){
        faded.style.opacity = 0;
    }

    startWriterAnimation(0);

    function writer(tester, i, fnCallback) {
        if (i < (tester.length)) {
            document.querySelector(".intro-writer h1").innerHTML = tester.substring(0, i + 1) +'<span aria-hidden="true"></span>'

            setTimeout(function() {
                writer(tester, i + 1, fnCallback)
            }, 100);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function startWriterAnimation(i) {
        if (i < 1) {
            writer(test, 0, function(){
                startWriterAnimation(i + 1);
                startFadeOut();
            });
        }
        
    }

    startWriterAnimation(0);
    
});