let addDateOption = document.querySelector("#addDateOption");
let inputDate = document.querySelector("#inputDate");
let content = document.getElementsByClassName("content")[0]
let dateArray = [];
let disp = document.getElementsByClassName("disp")[0]
// function hello(){console.log('hello')}


addDateOption.addEventListener("click", () => {
    if (inputDate.value) {
        // console.log(inputDate.value)
        if (dateArray.includes(inputDate.value)) { }
        else {
            let newdiv = document.createElement("div")
            newdiv.className = "newdivstyle"
            newdiv.id = inputDate.value;


            let newdivarea = document.createElement("div")
            newdivarea.className = "newdivareastyle";
            newdivarea.innerHTML = `
            <div class="additionsite"></div>
            <div>you can add custumr details here</div>
            <div >
            <p >name &nbsp;&nbsp; <input class="name"></p>
            <p >product <input class="prod"></p>
            <p >number <input class="numb"></p>
            </div>
            <button class="addByNewDivArea">add</button>
            `
            let additionsite = newdivarea.getElementsByClassName("additionsite")[0]
            let addByNewDivAreaBtn = newdivarea.getElementsByClassName("addByNewDivArea")[0]

            addByNewDivAreaBtn.addEventListener("click", () => {
                let prod = newdivarea.getElementsByClassName("prod")[0]
                let numb = newdivarea.getElementsByClassName("numb")[0]
                let name = newdivarea.getElementsByClassName("name")[0]
                if (name.value && prod.value && numb.value) {
                    let divUserinfo = document.createElement("div")
                    divUserinfo.innerHTML = `
                </br>   
                <p>name : ${name.value}</p>
                <p>prod : ${prod.value}</p>
                <p>numb : ${numb.value}</p>
                </br>
                <hr>    
                `
                    additionsite.appendChild(divUserinfo)
                    name.value = ""
                    prod.value = ""
                    numb.value = ""
                }
            })

            newdivarea.style.display = "none"

            newdiv.innerHTML = `
            ${inputDate.value}
            </br>
            <button class="open">Open and close</button>
            `
            let newdivopen = newdiv.getElementsByClassName("open")[0]
            newdivopen.addEventListener("click", function secondchl(params) {
                console.log("hello");
                if (newdivarea.style.display == "none") {
                    newdivarea.style.display = "block";
                } else {
                    newdivarea.style.display = "none"
                }
            })

            content.prepend(newdiv)
            newdiv.appendChild(newdivarea)
            dateArray.push(inputDate.value)
            // console.log(inputDate.value)
            // console.log(dateArray)
            // console.log(this)

            // update()
        } //else statement end     
    }
})


let newdivstyle = document.querySelectorAll(".newdivstyle")

console.log(newdivstyle);









// ()=>{console.log("hello");}

//adddateOption ends here
// let update = function update() {
//     dateArray.forEach(element => {
//         let newDiv = document.createElement("div")
//         newDiv.innerText = ""
//         content.appendChild(newDiv)
//     });
    // for each lop end ;
// }


// newdivstyle.addEventListener("click",function(){
//     console.log("hello world");
// })
