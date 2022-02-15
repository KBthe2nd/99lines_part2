
const button = document.querySelector('button');

button.addEventListener("click", function(){

const Mark = document.createElement('div');
const Mark_nm = document.createTextNode('Mark');
const Ashley = document.createElement('div');
const Ashley_nm = document.createTextNode('Ashley');
const Madi = document.createElement('div');
const Madi_nm = document.createTextNode('Madi');
const Joe = document.createElement('div');
const Joe_nm = document.createTextNode('Joe');
const Lauren = document.createElement('div');
const Lauren_nm = document.createTextNode('Lauren');
var friends = [ 'Mark', 'Ashley', 'Madi', 'Joe', 'Lauren'];


const h3M = document.createElement('h3');
const h3A = document.createElement('h3');
const h3Ma = document.createElement('h3');
const h3J = document.createElement('h3');
const h3L = document.createElement('h3');
const div =  document.getElementsByName('div');
div.classname = 'friend';
Mark.className = 'friend';
Ashley.className = 'friend';
Madi.className = 'friend';
Joe.className = 'friend';
Lauren.className = 'friend';

h3M.appendChild(Mark_nm);
h3A.appendChild(Ashley_nm);
h3Ma.appendChild(Madi_nm);
h3J.appendChild(Joe_nm);
h3L.appendChild(Lauren_nm);


Mark.appendChild(h3M);
document.body.appendChild(Mark);
for (i = 0; i < 1; i++){
    for (j = 99; j >= 1; j--){
        const paragraph = document.createElement('p');
        const line_1 = document.createTextNode([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' +  friends[0] + ' strikes one out, clears it all out, ' + [j-1] + ' lines of code in the file');
        paragraph.appendChild(line_1);
        Mark.appendChild(paragraph);
    }     
    }
Ashley.appendChild(h3A);
document.body.appendChild(Ashley);
for (i = 0; i < 1; i++){
    for (j = 99; j >= 1; j--){
        const paragraph = document.createElement('p');
        const line_1 = document.createTextNode([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' +  friends[1] + ' strikes one out, clears it all out, ' + [j-1] + ' lines of code in the file');
        paragraph.appendChild(line_1);
        Ashley.appendChild(paragraph);
    }     
    }
Madi.appendChild(h3Ma);    
document.body.appendChild(Madi);
for (i = 0; i < 1; i++){
    for (j = 99; j >= 1; j--){
        const paragraph = document.createElement('p');
        const line_1 = document.createTextNode([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' +  friends[2] + ' strikes one out, clears it all out, ' + [j-1] + ' lines of code in the file');
        paragraph.appendChild(line_1);
        Madi.appendChild(paragraph);
    }     
    }
Joe.appendChild(h3J);    
document.body.appendChild(Joe);
for (i = 0; i < 1; i++){
    for (j = 99; j >= 1; j--){
        const paragraph = document.createElement('p');
        const line_1 = document.createTextNode([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' +  friends[3] + ' strikes one out, clears it all out, ' + [j-1] + ' lines of code in the file');
        paragraph.appendChild(line_1);
        Joe.appendChild(paragraph);
    }     
    }
Lauren.appendChild(h3L);    
document.body.appendChild(Lauren);
for (i = 0; i < 1; i++){
    for (j = 99; j >= 1; j--){
        const paragraph = document.createElement('p');
        const line_1 = document.createTextNode([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' +  friends[4] + ' strikes one out, clears it all out, ' + [j-1] + ' lines of code in the file');
        paragraph.appendChild(line_1);
        Lauren.appendChild(paragraph);
    }     
    }
       
})
