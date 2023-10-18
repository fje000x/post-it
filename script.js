document.addEventListener('DOMContentLoaded', function() {
    const create = document.querySelector(".create");
    const finished = document.querySelector(".finished");
    const postArea = document.querySelector(".postArea");
    const createArea = document.querySelector(".createArea");

    let textArea;
    let br;

    create.addEventListener("click", () => {
        textArea = document.createElement("textarea");
        br = document.createElement("br");
        createArea.appendChild(br);
        createArea.append(textArea);
        create.style.display = "none";
        finished.style.display = "inline-block";
    });

    finished.addEventListener("click", () => {
        const postContainer = document.createElement("div");
        postContainer.classList.add("post-container");

        const h1 = document.createElement("h1");
        h1.classList.add("post");
        remove = document.createElement("button");
        remove.classList.add("remove");
        const brk = document.createElement("break");
        remove.textContent = "remove";
        h1.textContent = textArea.value;
        h1.appendChild(br);
        h1.appendChild(remove);

        postContainer.appendChild(h1);

        // Image handling
        const selectedFile = document.getElementById('fileInput').files[0];
        if (selectedFile) {
            const img = document.createElement("img");
            img.classList.add("post-image");
            img.src = URL.createObjectURL(selectedFile);
            postContainer.appendChild(img);
        }

        postArea.appendChild(postContainer);

        createArea.removeChild(textArea);
        create.style.display = "inline-block";
        finished.style.display = "none";

        fileInput.value = '';
    });

    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('remove')) {
            var postElement = event.target.closest('.post-container');
            if (postElement) {
                postElement.parentNode.removeChild(postElement);
            }
        }
    });

    const uploadButton = document.querySelector('.upload-img');
    const fileInput = document.getElementById('fileInput');

    uploadButton.addEventListener('click', function() {
        fileInput.click(); 
    });

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            console.log('File selected:', file.name);
        }
    });
});