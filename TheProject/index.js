
const URL = "https://cdn.theprojectfactory.com/pokemon/get.php"; //enter your URL to get POKEMON image data
/*
    JSON structure: {
        name: '',
        description:'',
        pokeImg: 'imgUrl'
    };
*/

/*
- fetch data
- process json (could be string so JSON.parse)
- observe structure
- just populate 1 field in html to start with 
*/

function genHeaderElem(name) {
    let header = document.createElement("h2");
    header.classList.add("nameHeader");
    header.appendChild(document.createTextNode(name));   
    return header;
}

function genPElem(text) {
    let pElem = document.createElement("p");
    pElem.appendChild(document.createTextNode(text));
    return pElem;
}
function genImgElem(url, css) {
    let imgElem = document.createElement("img");
    imgElem.src = url;
    let style = (css === undefined)? "pokeImg": css;
    imgElem.classList.add(style);
    return imgElem;
}
function fetchData() {
    
    fetchFrom(URL).then(data => {
        let div = document.getElementById("pokemons");
        data.pokemon.forEach(e => {
            let header = genHeaderElem(e.name);
            div.appendChild(header);
            
            let pDesc = genPElem(e.description);
            div.appendChild(pDesc);

            let imgElem = genImgElem(e.image, "pokeImg");
            div.appendChild(imgElem);
        });
    });
}

//kind of like a prive method
async function fetchFrom(url) {
    let resp = await fetch(url);
    return resp.json();
}
module.exports = {
    create: {
        header: genHeaderElem,
        paragraph: genPElem,
        image: genImgElem
    }
};