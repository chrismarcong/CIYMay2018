var fred = [ 'fred', 'flintstone', 'fred@gmail.com', 50];

console.log('length =', fred.length);

// for(var i = 0; i < fred.length; i++) {
   for (var i in fred) {
       if (i == 0)
        console.log('First name:', fred[i])
        else if (i == 1)
        console.log('Last name:', fred[i])
        else if (i == 2)
        console.log('Email:', fred[i])
        else 
        console.log('Age:', fred[i])

   //  console.log(i);
    // console.log(fred[i]);


}

function createBottle(imageName) {
var imgElem = document.createElement('img');
imgElem.setAttribute('src', imageName);
imgElem.classList.add('small-bottle');
return (imgElem);


var dogs 


}
