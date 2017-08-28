var images = ["images/img-1.jpg", "images/img-2.jpg", "images/img-3.jpg", "images/img-4.jpg", "images/img-5.jpg", "images/img-6.jpg", "images/img-7.jpg", "images/img-8.jpg", "images/img-9.jpg"];

var gallery = document.getElementById("imagenesData");
for (var i = 0; i < images.length; i++) {
    var divImagen = document.createElement("div");
    divImagen.setAttribute("class", "divImagen");

    var imagen = document.createElement("img");
    imagen.src = images[i];
    imagen.setAttribute("class", "imgGallery");
    imagen.setAttribute("id", i);


    var parag = document.createElement("p");
    var content = document.createTextNode("NOMBRE DEL PROYECTO");
    parag.appendChild(content);

    divImagen.appendChild(imagen);
    divImagen.appendChild(parag);
    gallery.appendChild(divImagen);
}

var galleryImages = document.getElementById("imagenesData");
galleryImages.addEventListener("click", function (event) {
    if (event.target.tagName == "IMG") {
        // var divGeneral = document.getElementById("general");
        var divGeneral = this.parentNode;
        var divBack = document.createElement("div");
        var divFondito = document.createElement("div");
        var close = document.createElement("img");
        var imagenDiv = document.createElement("img");
        var left = document.createElement("img");
        var right = document.createElement("img");

        var idImg = event.target.id;
        left.src = "images/left.png";
        left.setAttribute("class", "left");
        left.setAttribute("id", "back");
        left.addEventListener("click", function () {
            if (idImg == 0) {
                imagenDiv.src = images[8];
                idImg = 8;
            } else if (idImg == 1) {
                imagenDiv.src = images[0];
                idImg = 0;
            } else if (idImg == 2) {
                imagenDiv.src = images[1];
                idImg = 1;
            } else if (idImg == 3) {
                imagenDiv.src = images[2];
                idImg = 2;
            } else if (idImg == 4) {
                imagenDiv.src = images[3];
                idImg = 3;
            } else if (idImg == 5) {
                imagenDiv.src = images[4];
                idImg = 4;
            } else if (idImg == 6) {
                imagenDiv.src = images[5];
                idImg = 5;
            } else if (idImg == 7) {
                imagenDiv.src = images[6];
                idImg = 6;
            } else if (idImg == 8) {
                imagenDiv.src = images[7];
                idImg = 7;
            }
        });

        right.src = "images/right.png";
        right.setAttribute("class", "right");
        right.setAttribute("id", "next");
        right.addEventListener("click", function () {
            if (idImg == 0) {
                imagenDiv.src = images[8];
                idImg = 1;
            } else if (idImg == 1) {
                imagenDiv.src = images[0];
                idImg = 2;
            } else if (idImg == 2) {
                imagenDiv.src = images[1];
                idImg = 3;
            } else if (idImg == 3) {
                imagenDiv.src = images[2];
                idImg = 4;
            } else if (idImg == 4) {
                imagenDiv.src = images[3];
                idImg = 5;
            } else if (idImg == 5) {
                imagenDiv.src = images[4];
                idImg = 6;
            } else if (idImg == 6) {
                imagenDiv.src = images[5];
                idImg = 7;
            } else if (idImg == 7) {
                imagenDiv.src = images[6];
                idImg = 8;
            } else if (idImg == 8) {
                imagenDiv.src = images[7];
                idImg = 1;
            }
        });

        imagenDiv.setAttribute("class", "BigImage");
        //divFondito.style.display = "block";
        divFondito.setAttribute("class", "fondito");
        divBack.setAttribute("class", "divSubG");
        imagenDiv.src = event.target.src;

        close.src = "images/close.png";
        close.setAttribute("class", "closeIt");
        close.addEventListener("click", function () {
            divFondito.style.display = "none";
        });

        divBack.appendChild(left);
        divBack.appendChild(imagenDiv);
        divBack.appendChild(right);
        divFondito.appendChild(close);
        divFondito.appendChild(divBack);
        divGeneral.appendChild(divFondito);
    }
});

