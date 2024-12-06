//global variable
var siteName=document.getElementById("siteName");
var siteURL=document.getElementById("siteURL");
var infoList=[];
var btnSubmit=document.getElementById("btnSubmit");

var regex={
    siteName: {
        value:/^[\w]{3,}$/,
        status: false,
    },
    siteURL: {
        value:/^((https?|ftp|smtp):\/\/)?(www\.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
        status: false,
    },
}

if(localStorage.getItem("infoList")!=null){
    infoList=JSON.parse(localStorage.getItem("infoList"));
    displaySiteInfo(infoList);
}
// console.log(SiteURL);


// ==================> function add site <=====================
function addSite(){
  if(validation(siteName) && validation(siteURL) ){
    var siteList={
        name:siteName.value,
        url:siteURL.value,
    }
    // console.log(siteList.name);
    // console.log(siteList.url);
    infoList.push(siteList);
    console.log(infoList);
    displaySiteInfo(infoList);
    deleteInputsValue();
    addLocalStorage();
  }
    
   
else{
    window.alert(`
        🔴🟡🟢
        Site Name or Url is not valid, Please follow the rules below :

📢 Site name must contain at least 3 characters
📢 Site URL must be a valid one
        
        
        `)
}
       
   
 
    }
   
   

// ==================> function Display site info <=====================
function displaySiteInfo(details){
    var cartona=``
    for(var i = 0 ; i<details.length; i++){
cartona+=`
<tr>
            <td>${[i+1]}</td>
            <td>
                   ${details[i].name}
            </td>
            <td>
                <button onclick="visitSite(${i})"  class="btn btn-visit ">
               
                    <i class="fa-solid fa-eye"></i>
                    Visit
                </button>
            </td>
            <td>
                <button onclick="deleteSite(${i})" class="btn btn-delete">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                </button>
            </td>
        </tr>
`
    }
    document.getElementById("bodyInfo").innerHTML=cartona;
}

// ==================> function delete site inputs <=====================
function deleteInputsValue(){
    siteName.value= " ";
    siteURL.value= " ";
    siteName.classList.remove("is-valid");
    siteURL.classList.remove("is-valid");
    siteName.classList.remove("is-invalid");
    siteURL.classList.remove("is-invalid");
}

// ==================> function add localstorage <=====================
function addLocalStorage(){
    localStorage.setItem("infoList" ,JSON.stringify(infoList));
}
// ==================> function delete site <=====================
function deleteSite(index){
    infoList.splice( index , 1 );
    displaySiteInfo(infoList);
    addLocalStorage()
}
// ==================> function visit site <=====================
function visitSite(index){
    window.open(infoList[index].url , "_blank")
   
}


// ==================> function validation for site inputs <=====================
function validation(element){
    // console.log(element.id);
 
    if(regex[element.id].value.test(element.value)){
        regex[element.id].status=true;
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        return true;
    }
    else{
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
       
        return false;
    }
    
    }
    

   
        
    