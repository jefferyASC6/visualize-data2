// const first = list[0];
const main=document.querySelector("main");

const createCard=(obj, indx)=>{
    const newCard=document.createElement("div");
    newCard.className="new-card";
    newCard.id=indx;

    const face=document.createElement("img");
    //since the parameter is "obj", directions should refer/be relative to obj
    face.src=obj.picture.medium;
    face.alt="Portrait";

    const name=document.createElement("h1");
    name.innerText=`${obj.name.title}.`+` ${obj.name.first}`+` ${obj.name.last}`;

    newCard.appendChild(face);
    newCard.appendChild(name);
    main.appendChild(newCard);
};

function cap1st(str){
    return str.replace(str[0], str[0].toUpperCase());
}

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