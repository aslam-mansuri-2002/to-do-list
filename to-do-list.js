// to do list

// let div2 = document.getElementsByClassName("my-div2")[0];
let my_input = document.getElementsByClassName("my-input")[0];
let my_btn = document.getElementsByClassName("my-btn")[0];
let div = document.getElementsByClassName("my-div")[0]
let abc = document.getElementsByClassName("abc")[0];

my_btn.addEventListener("click",function(){
    let div2 = document.createElement("div")
    let h4 = document.createElement("h4");
    let del_btn = document.createElement("button");
    h4.innerText=my_input.value;
    del_btn.innerText ="delete";

    // style
    h4.style.display="inline-block";
    h4.style.margin="0px";
    div2.style.display="flex";
    div2.style.justifyContent ="space-between"
    div2.style.margin="10px 20px 10px 20px";


    del_btn.addEventListener("click",function(){
        div2.remove();
    })
    if(my_input.value===""){
        alert("please Enter value");
    }
    else{

        div2.appendChild(h4);
        div2.appendChild(del_btn);
        abc.appendChild(div2);
        my_input.value = "";
    }    
})

// enter dabane se..

my_input.addEventListener("keydown", function (a, b) {
    if (a.key === "Enter") {
        let div2 = document.createElement("div")
        let h4 = document.createElement("h4");
        let del_btn = document.createElement("button");
        h4.innerText = my_input.value;
        del_btn.innerText = "delete";

        // style
        h4.style.display = "inline-block";
        h4.style.margin = "0px";
        div2.style.display = "flex";
        div2.style.justifyContent = "space-between"
        div2.style.margin = "10px 20px 10px 20px";


        del_btn.addEventListener("click", function () {
            h4.remove();
            del_btn.remove();
        })
        if (my_input.value === "") {
            alert("please Enter value");
        }
        else {

            div2.appendChild(h4);
            div2.appendChild(del_btn);
            abc.appendChild(div2);
            my_input.value = "";
        }
    }
})