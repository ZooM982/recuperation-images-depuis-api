nbrImg = 10;

function ajoutImg(){
    for (var index= 0; index < nbrImg; index ++) {
        var image = document.createElement("img");
        image.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imagesCoprs.appendChild(image)
    }
    
}
