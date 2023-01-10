{
    
    
    // Animations on load. (Don't want to wait on images, so we use DOMContentLoaded)
    document.addEventListener("DOMContentLoaded", function() {
        
        // Get all the 'Loadable' classes from our page.
        let loadables = document.getElementsByClassName("loadable");

        // Loop through them.
        for (let i=0; i< loadables.length; i++) {
            
            // This is our loadable element.
            let elem = loadables[i];
            
            // Find the loading class(es) that will be applied as our transition.
            let loadingClass = elem.getAttribute("anim-class");
            
            // Doesn't exist! Abort!
            if (typeof(loadingClass) != 'string') {
                return false;
            }  
            
            // Split it!
            let classes = loadingClass.split(" ");

            // Do we want to run the animation on the elements children?
            let animChildren = elem.getAttribute("anim-children");

            // Make it a boolean, it's easier.
            animChildren = (animChildren == 'true' ? true : false);
            
            // We're animating their children, loop through them.
           if (animChildren) {

                // Get the children 
                let children = elem.children;

                // Loop through each one and give them their parent classes transition classes.
                for (let j=0; j < children.length; j++) {
                
                    let subElem = children[j];

                    for (subClass in classes) {
                        subElem.classList.add(classes[subClass]);
                    }
                    
                    // Save the old transition settings.
                    let transitionSettings = subElem.style.transition;
                    
                    // Stop the transision!
                    subElem.style.transition = "all 0s";
                
                    // Get the anim start time.
                    let startTime = subElem.getAttribute("loading-time");
                    
                    // See if it exists.
                    if (typeof(startTime) == 'string') {
                        startTime = Number(startTime) + 300;
                    }
                
                    // Remove the class after 0.3 seconds (or the custom time given).
                    setTimeout(function() {
                        subElem.style.transition = transitionSettings;
                        
                        for (subClass in classes) {
                            subElem.classList.remove(classes[subClass]);
                        }
                        
                    }, startTime || 300);
                }
                
           } else {

                // We aren't animating it's children, just the main element.
                // Give it the transition classes.
                for (subClass in classes) {
                    elem.classList.add(classes[subClass]);
                }
                
                // Save the old transition settings.
                let transitionSettings = elem.style.transition;
            
                // Stop the transision!
                elem.style.transition = "all 0s";

                // Get the anim start time.
                let startTime = elem.getAttribute("loading-time");
                
                // See if it exists.
                if (typeof(startTime) == 'string') {
                    startTime = Number(startTime) + 300;
                }
                
                // Remove the transition classes after 0.3 seconds (or the custom time given).
                setTimeout(function () {
                    elem.style.transition = transitionSettings;
            
                    for (subClass in classes) {
                        elem.classList.remove(classes[subClass]);
                    }

                }, startTime || 300);    
           }
        }
    })
}
