// let Isbroke = true ; 
// function PrepareFood () { 
//     return new Promise(function (res , rej ) {
//             console.log('lets start'); 

//           if(Isbroke){ 
//             res(); 
//           }else {
//             rej()
//           }
//     } )
// }

// function buy(){ 
//     console.log('go to the market '); 
// }

// function broke(){ 
//     console.log('dont have money '); 
// }

// PrepareFood().then(buy).catch(broke); 

async function GetAllVersion(){ 
    let ver = await fetch("https://api.quranhub.com/v1/edition/"); 
    let res= await ver.json() ; 
    console.log(res.data);
    DisplayALlVersion(res)
}

GetAllVersion(); 

function DisplayALlVersion(list){ 
    let box = "" ; 
    let conatiner = document.querySelector('#container')
    for (let index = 0; index < list.length; index++) {
        box += `<div class="item">
                <p>${list[index].name}</p>
                <p>${list[index].language}</p>
                <p>${list[index].format}</p>
            </div>`
        
    }
    conatiner.innerHTML = box; 
}