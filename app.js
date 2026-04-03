exemples = document.getElementById("exemples");
form = document.getElementById("promptForm");

prompts = [];

fetch("prompts.json")
    .then(function (res){
        return res.json()})

    .then(function (data){
        prompts = data;
        show()});

function show() {
    exemples.innerHTML = "";

    for (i = 0; i < prompts.length; i++) {
        texte =
            "<p><em>title</em>: " + prompts[i].title +
            "<br><em>category</em>: " + prompts[i].category +
            "<br><em>prompt</em>: " + prompts[i].prompt +
            "</p>";
        exemples.innerHTML = exemples.innerHTML + texte;
    }
}

form.onsubmit = function(q){
    q.preventDefault();

    title = document.getElementById("title").value;
    category = document.getElementById("category").value;
    prompt = document.getElementById("prompt").value;

    add = {
        title: title,
        category: category,
        prompt: prompt
    };

    prompts.push(add);
    show();
    form.reset();
};

