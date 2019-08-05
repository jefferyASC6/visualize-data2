// const first = list[0];
const main=document.querySelector("main");

function cap1st(str){
    return str.replace(str[0], str[0].toUpperCase());
}

const createCard=(obj, indx)=>{
    const newCard=document.createElement("div");
    newCard.className="new-card";
    newCard.id=indx;

    const face=document.createElement("img");
    //since the parameter is "obj", directions should refer/be relative to obj
    face.src=obj.picture.medium;
    face.alt="Portrait";

    const name=document.createElement("h1");
    name.innerText=cap1st(`${obj.name.title}. `)+ cap1st(`${obj.name.first} `)+ cap1st(`${obj.name.last} `);

    newCard.appendChild(face);
    newCard.appendChild(name);
    main.appendChild(newCard);
};

// createCard(first);
const loopCreate=arr=>{
    for(let i=0; i<arr.length; i++){
        createCard(arr[i], i);
        //the second i is bc you need an index id.
        //createCard(obj,indx) means that it looks at
        //createCard(arr[i], i), and makes obj=arr[i] and indx=i, since the parameter positions correlate to them.
        //then, newCard.id=indx; looks at indx.i and makes the id equal to i.
    }
};

loopCreate(list);

function firNameComp(firNames){
    return firNames == userFirName;
};

function firNameCheck(){
    document.querySelector("#displayFir").innerText = data.filter(firNameComp);
};

const button = document.querySelector("#submitButton");

button.addEventListener("click", clickListener);

function clickListener(event){
    event.preventDefault();
    const inputFirName = document.querySelector("#firstName");
    const inputLaName = document.querySelector("#lastName");
    const inputGen = document.querySelector("#gender");
    console.log(inputFirName);
    console.log(inputLaName);
    console.log(inputGen);
    const userFirName = inputFirName.value;
    const userLaName = inputLaName.value;
    const userGen = inputGen.value;
};