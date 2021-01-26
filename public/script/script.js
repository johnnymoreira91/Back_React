document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
    console.log("DOM completamente carregado e analisado");
});

function updatePosts() {
    fetch("http://localhost:3001/api/all")
        .then(res => { return res.json() })
        .then(json => {
            console.log(json);

            let postElements = '';
            let posts = JSON.parse(json);
            //let posts = JSON(JSON.stringify(json));
            posts.forEach((post) => {
                let postElement = `<div id=${post.id} class="card mb-4">
                                            <div class="card-header">
                                                <h5 class="card-title">${post.title}</h5>
                                            </div>
                                                <div class="card-body">
                                                <div class="card-text">
                                                    ${post.description}
                                                </div>
                                            </div>
                                        </div>`
                postElements += postElement;
            })
            document.getElementById('posts').innerHTML = postElements;
        })
};

function newPost() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    let post = { title, description };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch('http://localhost:3001/api/new', options).then(res => {
        updatePosts();
        let title = document.getElementById('title').value = '';
        let description = document.getElementById('description').value = '';
    })

};