let style="<style> @media only screen and (min-width: 768px) { .test-partner-card { width: 48%; height: 150px; display: inherit;}}  @media only screen and (min-width: 998px) { .test-partner-card { height: 135px;}}</style>",alphabet=["All","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],partnerKeyboard=document.createElement("ul");partnerKeyboard.className="rm-list rm-list--pagination-az",partnerKeyboard.style.position="relative",partnerKeyboard.innerHTML=style;for(var i=0;i<alphabet.length;i++){let e=document.createElement("li");e.id=`rm-parter-key-${i}`,e.className="rm-partnerKey",newKeyLink=document.createElement("a"),newKeyLink.innerHTML=alphabet[i],e.appendChild(newKeyLink),partnerKeyboard.appendChild(e)}let partnerPods=document.querySelectorAll(".rm-partner-card-v2"),placement=document.querySelector(".rm-towncity-detail-template-v2__partner-cards");partnerPods[0].insertAdjacentElement("beforebegin",partnerKeyboard);let newPartnerPods=document.getElementById("newParterSect"),keyboardArr=[],pachoon=document.querySelectorAll(".rm-partner-card-v2__rating > h3 > a");for(i=0;i<pachoon.length;i++)keyboardArr.push(pachoon[i].innerHTML.charAt(0));let activeArr=[],keyForArr=document.querySelectorAll(".rm-partnerKey > a");keyForArr[0].addEventListener("click",function(){partnerPods.forEach(e=>{e.style.display="inline-block"})});let parterPodDeets=document.querySelector(".rm-partner-card-v2"),parterPodDetails=document.getElementsByClassName("rm-partner-card-v2"),topDiv=document.createElement("div");topDiv.id="topDiv";let partnerPodsDiv=document.createElement("div");topDiv.appendChild(partnerPodsDiv),partnerPodsDiv.id="newParterSect",partnerPodsDiv.style="display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n    column-gap: 15px;";let description=document.querySelectorAll(".rm-partner-card-v2__descrip"),rating=document.querySelectorAll(".rm-partner-card-v2__rating");for(i=0;i<description.length;i++)description[i].setAttribute("style","display: none;"),rating[i].setAttribute("style","width: auto;");for(i=0;i<partnerPods.length;i++){let e=document.createElement("div");e.innerHTML=partnerPods[i].innerHTML,e.className="rm-partner-card-v2 test-partner-card",partnerPodsDiv.appendChild(e)}placement.appendChild(topDiv);for(i=0;i<partnerPods.length;i++)partnerPods[i].remove();partnerPods=document.querySelectorAll(".rm-partner-card-v2");for(i=0;i<keyForArr.length;i++)if(keyboardArr.includes(keyForArr[i].innerHTML)||"All"===keyForArr[i].innerHTML){activeArr.push(keyForArr[i]);let e=keyForArr[i].innerHTML;keyForArr[i].addEventListener("click",r=>{for(var t=0;t<keyboardArr.length;t++)keyboardArr[t]===e?partnerPods[t].style.display="inline-block":"All"===e?partnerPods.forEach(e=>{e.style.display="inline-block"}):partnerPods[t].style.display="none";toRemove.classList.remove("active"),r.target.parentNode.classList.add("active"),toRemove=r.target.parentNode,current=0}),activeArr[0].parentNode.classList.add("active"),toRemove=activeArr[0].parentNode}else keyForArr[i].parentNode.classList.add("disabled");


async function load () { // We need to wrap the loop into an async function for this to work
  for (var i = 0; i < 3; i++) {
    console.log(i);
    await timer(3000); // then the created Promise can be awaited
  }
}



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


function addHovers(boroughStyles) {
  document.body.appendChild(boroughStyles);
}

function yo() {
  // var boroughsAvailable = $('[class^="rm-map-position-"]');

  var boroughsAvailable = document.querySelectorAll('*[id^="rm-map-"]');

for (var i = 0; i < boroughsAvailable.length; i++) {
   // console.log(londonDirect.londonDirectory[i].county)
  console.log(boroughsAvailable[i].firstChild)
    var boroughClass = boroughsAvailable[i].firstChild
    console.log(boroughClass.offsetHeight)
  // if (boroughClass.offsetHeight < 100) {
    console.log(boroughsAvailable[i].id)
    load();
 
     var boroughStyles = document.createElement('div')
      boroughStyles.innerHTML = '<style> #' + (boroughsAvailable[i].id) + `:hover {
  // background-color: yellow;
// transform: translate(50%, 50%) scale(0.65);
z-index: 550;}

#` + (boroughsAvailable[i].id) + `:hover:after {
opacity: 1;
}

#` + (boroughsAvailable[i].id) + `:after {
  content: "We currently have X removal firms covering [borough name]";
      text-align: center;
      font-size: 8px;
      position: absolute;
      // transform: translate(50%) scale(2);
      top: 50%;
      width: fit-content;
      padding: 0 25px;
      transition: 2s;
          opacity: 0;
}


.` + (boroughClass.className) + `{
  content: url(images/` + (boroughsAvailable[i].id.substring(7)) +`.svg);
  // transform: translate(50%) scale(2);
 position: absolute;
 pointer-events:none;
}

#` + (boroughsAvailable[i].id) + ` {
  // transform: scale(0.5);
}
</style>`

    document.body.appendChild(boroughStyles);

  }
//   else {
//     boroughsAvailable[i].style.background = 'pink'
//     console.log(boroughsAvailable[i].id)
//      var boroughStyles = document.createElement('div')
//       boroughStyles.innerHTML = '<style> #' + (boroughsAvailable[i].id) + `:hover {
//   // background-color: yellow;
// transform: translate(50%, 50%) scale(1.2);
// z-index: 550;}
// </style>`
//     document.body.appendChild(boroughStyles);
//
//   }

// }
}

// console.log(londonDirect.londonDirectory[i].county)
  // var boroughClass = '.rm-map-position-' + londonDirect.londonDirectory[i].county


setTimeout(yo, 3000);
