/**
 * Variabelen aanmaken
 */
var boos = document.getElementsByClassName('boos')[0];
var body = document.getElementsByTagName('body')[0];


/**
 * Functie die uitgevoerd wordt nadat er geklikt wordt op de class element van de variabele "boos".
 */
boos.addEventListener('click', function() {
    boos.classList.toggle('shake-fast');
    body.classList.add('background', 'shake-slow');
});


/**
 * Functie die uitgevoerd wordt nadat de muis afgaat van de class element van de variabele "boos".
 */
boos.addEventListener('mouseout', function() {
    body.classList.remove('background', 'shake-slow');
    boos.classList.remove('shake-fast');
});