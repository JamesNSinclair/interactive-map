let style="<style> @media only screen and (min-width: 768px) { .test-partner-card { width: 48%; height: 150px; display: inherit;}}  @media only screen and (min-width: 998px) { .test-partner-card { height: 135px;}}</style>",alphabet=["All","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],partnerKeyboard=document.createElement("ul");partnerKeyboard.className="rm-list rm-list--pagination-az",partnerKeyboard.style.position="relative",partnerKeyboard.innerHTML=style;for(var i=0;i<alphabet.length;i++){let e=document.createElement("li");e.id=`rm-parter-key-${i}`,e.className="rm-partnerKey",newKeyLink=document.createElement("a"),newKeyLink.innerHTML=alphabet[i],e.appendChild(newKeyLink),partnerKeyboard.appendChild(e)}let partnerPods=document.querySelectorAll(".rm-partner-card-v2"),placement=document.querySelector(".rm-towncity-detail-template-v2__partner-cards");partnerPods[0].insertAdjacentElement("beforebegin",partnerKeyboard);let newPartnerPods=document.getElementById("newParterSect"),keyboardArr=[],pachoon=document.querySelectorAll(".rm-partner-card-v2__rating > h3 > a");for(i=0;i<pachoon.length;i++)keyboardArr.push(pachoon[i].innerHTML.charAt(0));let activeArr=[],keyForArr=document.querySelectorAll(".rm-partnerKey > a");keyForArr[0].addEventListener("click",function(){partnerPods.forEach(e=>{e.style.display="inline-block"})});let parterPodDeets=document.querySelector(".rm-partner-card-v2"),parterPodDetails=document.getElementsByClassName("rm-partner-card-v2"),topDiv=document.createElement("div");topDiv.id="topDiv";let partnerPodsDiv=document.createElement("div");topDiv.appendChild(partnerPodsDiv),partnerPodsDiv.id="newParterSect",partnerPodsDiv.style="display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n    column-gap: 15px;";let description=document.querySelectorAll(".rm-partner-card-v2__descrip"),rating=document.querySelectorAll(".rm-partner-card-v2__rating");for(i=0;i<description.length;i++)description[i].setAttribute("style","display: none;"),rating[i].setAttribute("style","width: auto;");for(i=0;i<partnerPods.length;i++){let e=document.createElement("div");e.innerHTML=partnerPods[i].innerHTML,e.className="rm-partner-card-v2 test-partner-card",partnerPodsDiv.appendChild(e)}placement.appendChild(topDiv);for(i=0;i<partnerPods.length;i++)partnerPods[i].remove();partnerPods=document.querySelectorAll(".rm-partner-card-v2");for(i=0;i<keyForArr.length;i++)if(keyboardArr.includes(keyForArr[i].innerHTML)||"All"===keyForArr[i].innerHTML){activeArr.push(keyForArr[i]);let e=keyForArr[i].innerHTML;keyForArr[i].addEventListener("click",r=>{for(var t=0;t<keyboardArr.length;t++)keyboardArr[t]===e?partnerPods[t].style.display="inline-block":"All"===e?partnerPods.forEach(e=>{e.style.display="inline-block"}):partnerPods[t].style.display="none";toRemove.classList.remove("active"),r.target.parentNode.classList.add("active"),toRemove=r.target.parentNode,current=0}),activeArr[0].parentNode.classList.add("active"),toRemove=activeArr[0].parentNode}else keyForArr[i].parentNode.classList.add("disabled");




  const londonDirect = {
    "londonDirectory": [
        {
            "name": 'Bishopsgate Law',
            "county": 'barnet',
            "postcode": 'SW142ED'
        },
        {


            "name": 'Hodders Law',
            "county": 'bexley',
            "postcode": 'W140HD'
        },
{
            "name": 'John W Davies Solicitors',
            "county": 'brent',
            "postcode": 'EN144RH'
        }

    ]
}


for (var i = 0; i < londonDirect.londonDirectory.length; i++) {
  console.log(londonDirect.londonDirectory[i].county)
  var boroughClass = '.rm-map-position-' + londonDirect.londonDirectory[i].county
  console.log(boroughClass)
  var boroughPiece = document.querySelector(boroughClass)
  boroughPiece.style.background

}
