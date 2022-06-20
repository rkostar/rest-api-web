// const get=  document.getElementById('get');
let wkCont= document.getElementById('wkCont');
const arr= Array.from(document.getElementsByClassName('cell'));

console.log(arr);
//get
function getAll(event){
    event.preventDefault();
    window.open('http://44.207.148.96:9000/api')
    
}
//getBin
function getBin(event){
    event.preventDefault();
    const binId= document.getElementById("id").value;

    url = `http://44.207.148.96:9000/api/${binId}`
    
        fetch(url).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        }).catch(() => {
            console.log("sorry")
        })
}
//post
function post(event){
    event.preventDefault();
    const postVal= Array.from(document.getElementsByClassName("postVal"))
    
    url = "http://44.207.148.96:9000/api"
    Data= {
        
    "binRange": postVal[0].value,
    "cardBraand": postVal[1].value,
    "cardIssuer": postVal[2].value,
    "cardType": postVal[3].value,
    "cardSubtype": postVal[4].value,
    "country": postVal[5].value,
    "countryCode": postVal[6].value,
    "iso": postVal[7].value,
    "currencyCode": postVal[8].value,
    "url": postVal[9].value,
    "contact": postVal[10].value
  
      }
      console.log(Data)
    params={
        method: "post",
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(Data)
    }
    fetch(url, params).then(response => {
        return response.text()
    }).then(data => {
        console.log(data)
    }).catch(() => {
        console.log("sorry")
    })
}

//put
function put(event){
    event.preventDefault();
    const putVal= Array.from(document.getElementsByClassName("putVal"))
    for(let i=0;i<putVal.length;i++)
        console.log(putVal[i].value)
    url = "http://44.207.148.96:9000/api"
    Data= {
        
    "binRange": parseInt(putVal[0].value),
    "cardBraand": putVal[1].value,
    "cardIssuer": putVal[2].value,
    "cardType": putVal[3].value,
    "cardSubtype": putVal[4].value,
    "country": putVal[5].value,
    "countryCode": putVal[6].value,
    "iso": putVal[7].value,
    "currencyCode": putVal[8].value,
    "url": putVal[9].value,
    "contact": putVal[10].value
  
      }
      console.log(Data)
    params={
        method: "put",
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(Data)
    }
    fetch(url, params).then(response => {
        return response.text()
    }).then(data => {
        console.log(data)
    }).catch(() => {
        console.log("sorry")
    })
}

//delete
function delet(event){
    event.preventDefault();
    const deleteId= document.getElementById("delid").value;
    console.log(deleteId)

    url=`http://44.207.148.96:9000/api/${deleteId}`
    fetch(url, {
    method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    }



const htmlArr=[
    `
    <form onsubmit="getAll(event)">
        <button id="btn">get</button>
    </form>
    `,
    `
    <form onsubmit="getBin(event)">
        <label for="id">Enter BIN</label>
        <input type="text" id="id">
        <input type="submit" value="get details">
    </form>
    `,
    `
    <form onsubmit="post(event)">
        <label for="id">Enter BIN</label>
        <input type="text" id="id" class="postVal">

        <label for="cBrand">Card Brand</label>
        <input type="text" id="cBrand" class="postVal">

        <label for="cIssuer">Card Issuer</label>
        <input type="text" id="cIssuer" class="postVal">

        <label for="cType">Card Type</label>
        <input type="text" id="cType" class="postVal">

        <label for="cSubtype">Card Subype</label>
        <input type="text" id="cSubtype" class="postVal">

        <label for="country">Country</label>
        <input type="text" id="country" class="postVal">

        <label for="cCode">Country Code</label>
        <input type="text" id="cCode" class="postVal">

        <label for="iso">Iso</label>
        <input type="text" id="iso" class="postVal">

        <label for="currCode">Currency Code</label>
        <input type="text" id="currCode" class="postVal">

        <label for="url">URL</label>
        <input type="text" id="url" class="postVal">

        <label for="contact">Contact</label>
        <input type="text" id="contact" class="postVal">
        
        
        <button>click</button>
    </form>
    `,
    `
    <form onsubmit="put(event)">
        <label for="id">Enter BIN</label>
        <input type="text" id="id" class="putVal">

        <label for="cBrand">Card Brand</label>
        <input type="text" id="cBrand" class="putVal">

        <label for="cIssuer">Card Issuer</label>
        <input type="text" id="cIssuer" class="putVal">

        <label for="cType">Card Type</label>
        <input type="text" id="cType" class="putVal">

        <label for="cSubtype">Card Subype</label>
        <input type="text" id="cSubtype" class="putVal">

        <label for="country">Country</label>
        <input type="text" id="country" class="putVal">

        <label for="cCode">Country Code</label>
        <input type="text" id="cCode" class="putVal">

        <label for="iso">Iso</label>
        <input type="text" id="iso" class="putVal">

        <label for="currCode">Currency Code</label>
        <input type="text" id="currCode" class="putVal">

        <label for="url">URL</label>
        <input type="text" id="url" class="putVal">

        <label for="contact">Contact</label>
        <input type="text" id="contact" class="putVal">
        
        
        <button>put</button>
    </form>
    `,
    `
    <form onsubmit="delet(event)">
        <label for="id">Enter BIN</label>
        <input type="text" id="delid">
        <button>delete</button>
    </form>
    `
]

arr.map(button=>{

    button.addEventListener("click", ()=>{
        wkCont.innerHTML=""
        wkCont.style.height="70vh"
        console.log(button.innerText)
        for(var i=0;i<arr.length;i++){
            if(arr[i].innerText==button.innerText)
                break;
        }
        console.log(i)
        wkCont.innerHTML+=htmlArr[i];
    })
})

