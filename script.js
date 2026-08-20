/* =====================================================
   PROJECT PORTFOLIO
   Liam McCabe
===================================================== */


/* =====================================================
   PROJECT ELEMENTS
===================================================== */

const projectCards = document.querySelectorAll(".project-card");

const modal = document.getElementById("projectModal");

const modalBackground =
    document.getElementById("modalBackground");

const closeModalButton =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalProjectTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalModel =
    document.getElementById("modalModel");

const modalBase =
    document.getElementById("modalBase");

const modalTopology =
    document.getElementById("modalTopology");

const modalTextures =
    document.getElementById("modalTextures");

const modalUVs =
    document.getElementById("modalUVs");


/* =====================================================
   OPEN PROJECT
===================================================== */

projectCards.forEach(card => {

    card.addEventListener("click", function () {

        /* ---------------------------------------------
           GET PROJECT INFORMATION FROM HTML
        --------------------------------------------- */

        const titleElement =
            card.querySelector(".project-name");

        const categoryElement =
            card.querySelector(".project-category");

        const descriptionElement =
            card.querySelector(".project-description");


        const title =
            titleElement
                ? titleElement.textContent.trim()
                : "Untitled Project";


        const category =
            categoryElement
                ? categoryElement.textContent.trim()
                : "3D ART";


        const description =
            descriptionElement
                ? descriptionElement.textContent.trim()
                : "";


        /* ---------------------------------------------
           SET PROJECT TEXT
        --------------------------------------------- */

        modalTitle.textContent = title;

        modalCategory.textContent = category;

        modalDescription.textContent = description;


        /* ---------------------------------------------
           GET 3D MODEL FROM HTML
        --------------------------------------------- */

        const projectModel =
            card.querySelector(".project-model");


        if (projectModel) {

            const modelPath =
                projectModel.getAttribute("src");


            if (
                modelPath &&
                modelPath !== "" &&
                !modelPath.includes("not found")
            ) {

                modalModel.setAttribute(
                    "src",
                    modelPath
                );

                modalModel.style.display = "block";

            } else {

                modalModel.removeAttribute("src");

                modalModel.style.display = "none";

            }

        }


        /* ---------------------------------------------
           GET BASE MODEL
        --------------------------------------------- */

        const baseImage =
            card.querySelector(".project-base");


        if (baseImage) {

            const imagePath =
                baseImage.getAttribute("src");


            if (
                imagePath &&
                !imagePath.includes("not found")
            ) {

                modalBase.src = imagePath;

                modalBase.style.display = "block";

            } else {

                modalBase.style.display = "none";

            }

        }


        /* ---------------------------------------------
           GET TOPOLOGY
        --------------------------------------------- */

        const topologyImage =
            card.querySelector(".project-topology");


        if (topologyImage) {

            const imagePath =
                topologyImage.getAttribute("src");


            if (
                imagePath &&
                !imagePath.includes("not found")
            ) {

                modalTopology.src = imagePath;

                modalTopology.style.display = "block";

            } else {

                modalTopology.style.display = "none";

            }

        }


        /* ---------------------------------------------
           GET TEXTURES
        --------------------------------------------- */

        const textureImage =
            card.querySelector(".project-textures");


        if (textureImage) {

            const imagePath =
                textureImage.getAttribute("src");


            if (
                imagePath &&
                !imagePath.includes("not found")
            ) {

                modalTextures.src = imagePath;

                modalTextures.style.display = "block";

            } else {

                modalTextures.style.display = "none";

            }

        }


        /* ---------------------------------------------
           GET UVS
        --------------------------------------------- */

        const uvImage =
            card.querySelector(".project-uvs");


        if (uvImage) {

            const imagePath =
                uvImage.getAttribute("src");


            if (
                imagePath &&
                !imagePath.includes("not found")
            ) {

                modalUVs.src = imagePath;

                modalUVs.style.display = "block";

            } else {

                modalUVs.style.display = "none";

            }

        }


        /* ---------------------------------------------
           OPEN MODAL
        --------------------------------------------- */

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );


        /* ---------------------------------------------
           RESET MODEL CAMERA
        --------------------------------------------- */

        if (modalModel) {

            setTimeout(() => {

                try {

                    modalModel.resetTurntableRotation();

                } catch (error) {

                    /* Model viewer may not be loaded yet */

                }

            }, 100);

        }

    });

});


/* =====================================================
   CLOSE PROJECT
===================================================== */

function closeProject() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );


    /* ---------------------------------------------
       STOP / CLEAR MODEL
    --------------------------------------------- */

    if (modalModel) {

        modalModel.removeAttribute("src");

    }

}


/* =====================================================
   CLOSE BUTTON
===================================================== */

if (closeModalButton) {

    closeModalButton.addEventListener(
        "click",
        closeProject
    );

}


/* =====================================================
   CLOSE WHEN CLICKING BACKGROUND
===================================================== */

if (modalBackground) {

    modalBackground.addEventListener(
        "click",
        closeProject
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const nav =
    document.getElementById("nav");


if (mobileMenu && nav) {

    mobileMenu.addEventListener(
        "click",
        function () {

            nav.classList.toggle("open");

        }
    );


    /* ---------------------------------------------
       CLOSE MOBILE MENU WHEN LINK IS CLICKED
    --------------------------------------------- */

    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            function () {

                nav.classList.remove("open");

            }
        );

    });

}


/* =====================================================
   PREVENT MODAL CONTENT FROM CLOSING MODAL
===================================================== */

const modalContent =
    document.querySelector(".modal-content");


if (modalContent) {

    modalContent.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );

}


/* =====================================================
   PROJECT CARD KEYBOARD ACCESSIBILITY
===================================================== */

projectCards.forEach(card => {

    card.setAttribute(
        "tabindex",
        "0"
    );


    card.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.click();

            }

        }
    );

});


/* =====================================================
   PAGE LOADED
===================================================== */

console.log(
    "Liam McCabe Portfolio loaded successfully."
);

console.log(
    `${projectCards.length} projects detected.`
);