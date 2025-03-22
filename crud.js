let fetchData= async ()=>{

    let url="http://localhost:3000/car"

    let res= await fetch(url,{method:"GET"})

    let data=await res.json()

    DataShow(data)

    // console.log(data);

    // search
}

    let search=async()=>{
        let searching= document.querySelector("#Searching").value.toLowerCase()

        let url=http://localhost:3000/car
        let res=await fetch(url,{method:"GET"})

        let data =await res.json()

        let filterData=data.filter((e)=>{
            return e.name.toLowerCase().includes (searching)
        })
        DataShow(filterData)
    }
   
    let DataShow=(data)=>{
    let Show=document.querySelector("#show")
     Show.innerHTML=""
    data.map((e)=>{
       
        Show.innerHTML+=
        `
        <tr>
        <td> ${e.name} </td>
        <td> ${e.age} </td>
        <td> ${e.adhar} </td>
        <td> ${e.number} </td>
        <td> ${e.date} </td>
        <td> ${e.destination} </td>
        <td> ${e.person} </td>
        <td> ${e.price} </td>
         <td> ${e.price*e.person} </td>
        <td onclick="del('${e.id}')"> cancel</td>
        <td onclick="formfill('${e.id}')"> update</td>
        `
    })
}

    let del=(id)=>{
        let url =http://localhost:3000/car/${id}
        fetch(url,{method:"DELETE"})
    }




let ins=()=>{
    let inpname=document.querySelector("#name").value
    let inpage=document.querySelector("#age").value
    let inpadhar=document.querySelector("#adhar").value
    let inpnumber=document.querySelector("#number").value
    let inpdate=document.querySelector("#date").value
    let inpdestination=document.querySelector("#destination").value
    let inpperson=document.querySelector("#person").value

    let url ="http://localhost:3000/car"

    fetch(url,{

        method:"POST",
        headers:{
            "Content-type":"application/json"

              
        },
        body:JSON.stringify(
            {
                "name":inpname,
                "age":inpage,
                "adhar":inpadhar,
                "number":inpnumber,
                "date":inpdate,
                "destination":inpdestination,
                "person":inpperson,
                "price":400

                        }

        )
    })

    location.href="index.html"
    return false
}

let formfill=async(id)=>{
    let url=http://localhost:3000/car/${id}

    let res = await fetch(url,{method:"GET"})
    let data = await res.json()

    let formdata=`
    
    Enter Name: <input type="text" id="upname" value="${data.name}"> <br> <br>
        Enter Age: <input type="number" id="upage" value="${data.age}"> <br> <br>  
        Enter Adharno: <input type="number" id="upadhar" value="${data.adhar}"> <br> <br>  
        Enter Mobile: <input type="number" id="upnumber" value="${data.number}"> <br> <br>  
        Enter Date: <input type="Date" id="update" value="${data.date}"> <br> <br> 
        
        Destination : <select name="" id="updestination" value="${data.destination}">
            <option value="bhopal">bhopal</option>
            <option value="london">london</option>
            <option value="uk">uk</option>
            <option value="d">d</option>
            <option value="c">c</option>
        </select> <br> <br>

        Enter person: <input type="number" id="upperson" value="${data.person}"> <br> <br>
        <input type="submit"  value="update"  onclick="return finalupdate('${data.id}')">
    `

    document.querySelector("#formdata").innerHTML=formdata
}
let finalupdate=(id)=>{
    let inpname=document.querySelector("#upname").value
    let inpage=document.querySelector("#upage").value
    let inpadhar=document.querySelector("#upadhar").value
    let inpnumber=document.querySelector("#upnumber").value
    let inpdate=document.querySelector("#update").value
    let inpdestination=document.querySelector("#updestination").value
    let inpperson=document.querySelector("#upperson").value


    let url =http://localhost:3000/car/${id}

    fetch(url,{

        method:"PUT",
        headers:{
            "Content-type":"application/json"

              
        },
        body:JSON.stringify(
            {
                "name":inpname,
                "age":inpage,
                "adhar":inpadhar,
                "number":inpnumber,
                "date":inpdate,
                "destination":inpdestination,
                "person":inpperson,
                "price":400

                        }
                    )

        
                })
            
                return false;
            
            }