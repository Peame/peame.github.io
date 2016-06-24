/**
 *
 * @param triggerClass the classname of the element that triggers the shake
 * @param containerClass the classname of the outermost container to shake
 * @param speed the speed with which to shake
 * @constructor
 */
function BoosJS(triggerClass, containerClass, speed) {
    /**
     * Instance variables
     */
    this.triggerClass = triggerClass;
    this.containerClass = containerClass;

    this.speed = speed;
    if (!(this.speed > 0)) {
        alert("Onjuiste snelheid ingevoerd!");
    }

    this.triggerObject = document.getElementsByClassName(triggerClass)[0];
    if (this.triggerObject === undefined) {
        alert("Trigger klasse niet gevonden!");
    }


    this.containerObject = document.getElementsByClassName(containerClass)[0];
    if (this.containerObject === undefined) {
        alert("Container klasse niet gevonden!");
    }

    /**
     * Deze methode start het schudden
     */
    this.launch = function () {
        var co = this.containerObject;
        /**
         * Functie die uitgevoerd wordt nadat er geklikt wordt op de class element van de variabele "boos".
         */
        this.triggerObject.addEventListener('click', function () {
            this.classList.toggle('shake-fast');
            co.classList.add('background', 'shake-slow');
        });

        /**
         * Functie die uitgevoerd wordt nadat de muis afgaat van de class element van de variabele "boos".
         */
        this.triggerObject.addEventListener('mouseout', function () {
            co.classList.remove('background', 'shake-slow');
            this.classList.remove('shake-fast');
        });
    }

    /**
     * Deze methode stopt het schudden
     */
    this.terminate = function () {
        //stop met shaken

        //listener weg

    }
}