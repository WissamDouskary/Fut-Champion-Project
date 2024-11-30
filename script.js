let addedToSquadArr = [];
let notAddTosquad = [];
// let addedSubPlayers = [];
// let cardSub = null;
let playersdata = new XMLHttpRequest();
playersdata.open("GET", "https://brofortech.com/players.json", true);
playersdata.send();

playersdata.onreadystatechange = function () {
  if (playersdata.readyState === 4 && playersdata.status === 200) {
    let ourdata = JSON.parse(playersdata.response);
    let data = ourdata.players;

    // add no gk player to list variables
    let playerPace = document.getElementById("normalePace");
    let playerShoot = document.getElementById("normaleShoot");
    let playerPass = document.getElementById("normalePass");
    let playerDriblle = document.getElementById("normaleDriblle");
    let playerDefend = document.getElementById("normaleDefend");
    let playerPhysics = document.getElementById("normalePhy");

    // add gk player to list variables

    let gkDiving = document.getElementById("gkDiving");
    let gkHandling = document.getElementById("gkHandling");
    let gkKicking = document.getElementById("gkKicking");
    let gkReflexe = document.getElementById("gkReflexe");
    let gkSpeed = document.getElementById("gkSpeed");
    let gkPosition = document.getElementById("gkPosition");

    let playerName = document.getElementById("PlayerName");
    let playersPosition = document.getElementById("Position");
    let playerNationality = document.getElementById("Nationality");
    let playerClub = document.getElementById("Club");
    let cardImageUrl = document.getElementById("cardPhotourl");

    playersPosition.addEventListener("change", function() {
      
      
      let addPlayerDiv = document.getElementById("addPlayer");
      const addGkDiv = document.getElementById("AddGkPlayer");
      
      const otherPositionsDiv = document.getElementById("otherpositionsdiv"); 
      
      if (playersPosition.value == "GK") {
        
        addGkDiv.classList.add("grid");
        addGkDiv.classList.remove("hidden");
        addPlayerDiv.classList.add("hidden");
        addPlayerDiv.classList.remove("grid");
        
       
        if (otherPositionsDiv) {
          otherPositionsDiv.classList.add("hidden");
          otherPositionsDiv.classList.remove("grid");
        }
      } else {
        
        addPlayerDiv.classList.remove("hidden");
        addPlayerDiv.classList.add("grid");
        
       
        if (otherPositionsDiv) {
          otherPositionsDiv.classList.remove("hidden");
          otherPositionsDiv.classList.add("grid");
        }
        
        
        addGkDiv.classList.add("hidden");
        addGkDiv.classList.remove("grid");
      }
    });
    
    
  let addToArrBtn = document.getElementById("addplayertolst")
  addToArrBtn.addEventListener("click",function(event){
    event.preventDefault();
    if(playerName.value.trim() !== "" && cardImageUrl.value.trim() !== "" && playersPosition.value.trim() !== "" && playerNationality.value.trim() !== "" && playerClub.value.trim() !== ""){
    if(playersPosition.value === "GK"){
      addGkToPlayersList(playerName, cardImageUrl, playersPosition, playerNationality, playerClub, gkDiving, gkHandling, gkKicking, gkReflexe, gkSpeed, gkPosition)
      noChoosenPlayers()
      document.getElementById("Addplayermodal").classList.add("hidden");
    }else{
      addNoGKToPlayersList(playerName, cardImageUrl, playersPosition, playerNationality, playerClub, playerPace, playerShoot, playerPass, playerDriblle, playerDefend, playerPhysics)
      noChoosenPlayers()
      document.getElementById("Addplayermodal").classList.add("hidden");
    }
  }else{
    document.getElementById("alert").classList.remove("hidden")
    document.getElementById("alert").classList.add("flex")
  }
    
  })
    

    // add !== GK player
  function addNoGKToPlayersList(name,cardImage, pos, nat, pclub, pPace, pShoot, pPass, pDriblle, pDefend, pPhy){
    let newNoGKPlayer = {
      name: name.value,
      photo: cardImage.value,
      position: pos.value,
      nationality : nat.value,
      flag: "https://cdn3.futbin.com/content/fifa25/img/clubs/light/112658.png?fm=png&ixlib=java-2.1.0&verzion=2&w=22&s=1d2ef9f9a688ffd60760b0bb179b3bf2",
      club: pclub.value,
      logo: "https://cdn3.futbin.com/content/fifa25/img/clubs/light/112658.png?fm=png&ixlib=java-2.1.0&verzion=2&w=22&s=1d2ef9f9a688ffd60760b0bb179b3bf2",
      rating: 85,
      pace: pPace.value,
      shooting: pShoot.value,
      passing: pPass.value,
      dribbling: pDriblle.value,
      defending: pDefend.value,
      physical: pPhy.value
    }
    data.push(newNoGKPlayer);
    
  }
  // function addGkToPlayersList(playerName, playersPosition, playerNationality, playerClub, gkDiving, gkHandling, gkKicking, gkReflexe, gkSpeed, gkPosition){}
  //add GK player 
  function addGkToPlayersList(name,cardImage, pos, nat, pclub, divinggk, gkhand, gkkick, gkref, gkspe, gkposrate){
    let newGKPlayer = {
        name: name.value,
        photo: cardImage.value,
        position: pos.value,
        nationality: nat.value,
        flag: "https://cdn3.futbin.com/content/fifa25/img/clubs/light/112658.png?fm=png&ixlib=java-2.1.0&verzion=2&w=22&s=1d2ef9f9a688ffd60760b0bb179b3bf2",
        club: pclub.value,
        logo: "https://cdn3.futbin.com/content/fifa25/img/clubs/light/112658.png?fm=png&ixlib=java-2.1.0&verzion=2&w=22&s=1d2ef9f9a688ffd60760b0bb179b3bf2",
        rating: 85,
        diving: divinggk.value,
        handling: gkhand.value,
        kicking: gkkick.value,
        reflexes: gkref.value,
        speed: gkspe.value,
        positioning: gkposrate.value
    }
    data.push(newGKPlayer);
  }
    

    function addFiltreplayerToPosition(positionFilter) {
      const filteredPlayers = data.filter(player => player.position === positionFilter);
      const filtredPlayersCase = document.getElementById("filtredPlayers");
      filtredPlayersCase.innerHTML = '';

      filteredPlayers.forEach(player => {
        let div = document.createElement("div")
        div.setAttribute("class", "cursor-pointer bg-goldcard bg-no-repeat bg-center bg-cover w-32 h-44 flex flex-col pt-8 items-center")
        if(positionFilter !== "GK"){
        div.innerHTML = `
          <div class="flex">
            <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
              <span class="mb-[-5px] font-bold">${player.rating}</span>
              <span class="text-[10px] font-medium">${player.position}</span>
            </div>
            <img class="w-20" src="${player.photo}" alt="${player.name}">
          </div>
          <p class="font-Raleway text-[11px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
          <div class="text-[#362f16] gap-1 flex">
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">PAC</span>
              <span class="font-bold text-[10px]">${player.pace}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">SHO</span>
              <span class="font-bold text-[10px]">${player.shooting}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">PAS</span>
              <span class="font-bold text-[10px]">${player.passing}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">DRI</span>
              <span class="font-bold text-[10px]">${player.dribbling}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">DEF</span>
              <span class="font-bold text-[10px]">${player.defending}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">PHY</span>
              <span class="font-bold text-[10px]">${player.physical}</span>
            </div>
          </div>
          <div class="flex justify-center items-center w-3 gap-2">
            <img src="${player.flag}" alt="${player.name}">
            <img src="${player.logo}" alt="${player.club}">
          </div>
        `
    }else{
        div.innerHTML = `
          <div class="flex">
            <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
              <span class="mb-[-5px] font-bold">${player.rating}</span>
              <span class="text-[10px] font-medium">${player.position}</span>
            </div>
            <img class="w-20" src="${player.photo}" alt="${player.name}">
          </div>
          <p class="font-Raleway text-[11px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
          <div class="text-[#362f16] gap-1 flex">
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">DIV</span>
              <span class="font-bold text-[10px]">${player.diving}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">HAN</span>
              <span class="font-bold text-[10px]">${player.handling}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">KIC</span>
              <span class="font-bold text-[10px]">${player.kicking}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">REF</span>
              <span class="font-bold text-[10px]">${player.reflexes}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">SPE</span>
              <span class="font-bold text-[10px]">${player.speed}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">POS</span>
              <span class="font-bold text-[10px]">${player.positioning}</span>
            </div>
          </div>
          <div class="flex justify-center items-center w-3 gap-2">
            <img src="${player.flag}" alt="${player.name}">
            <img src="${player.logo}" alt="${player.club}">
          </div>
        `
    }
    
    div.addEventListener('click', function () {
        let positionElement = document.querySelector(`[player-position="${player.position}"]`);

        positionElement.classList.remove("bg-blackcard")
        positionElement.classList.add("bg-goldcard")


        if(positionFilter !== "GK"){
          positionElement.innerHTML = `
            <div class="flex">
              <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                <span class="mb-[-5px] font-bold">${player.rating}</span>
                <span class="text-[10px] font-medium">${player.position}</span>
              </div>
              <img class="w-20" src="${player.photo}" alt="${player.name}">
            </div>
            <p class="font-Raleway text-[11px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
            <div class="text-[#362f16] gap-1 flex">
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">PAC</span>
                <span class="font-bold text-[10px]">${player.pace}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">SHO</span>
                <span class="font-bold text-[10px]">${player.shooting}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">PAS</span>
                <span class="font-bold text-[10px]">${player.passing}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">DRI</span>
                <span class="font-bold text-[10px]">${player.dribbling}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">DEF</span>
                <span class="font-bold text-[10px]">${player.defending}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">PHY</span>
                <span class="font-bold text-[10px]">${player.physical}</span>
              </div>
            </div>
            <div class="flex justify-center items-center w-3 gap-2">
              <img src="${player.flag}" alt="${player.name}">
              <img src="${player.logo}" alt="${player.club}">
            </div>
          `;
        }else{
            positionElement.innerHTML = `
          <div class="flex">
            <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
              <span class="mb-[-5px] font-bold">${player.rating}</span>
              <span class="text-[10px] font-medium">${player.position}</span>
            </div>
            <img class="w-20" src="${player.photo}" alt="${player.name}">
          </div>
          <p class="font-Raleway text-[11px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
          <div class="text-[#362f16] gap-1 flex">
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">DIV</span>
              <span class="font-bold text-[10px]">${player.diving}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">HAN</span>
              <span class="font-bold text-[10px]">${player.handling}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">KIC</span>
              <span class="font-bold text-[10px]">${player.kicking}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">REF</span>
              <span class="font-bold text-[10px]">${player.reflexes}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">SPE</span>
              <span class="font-bold text-[10px]">${player.speed}</span>
            </div>
            <div class="flex flex-col gap-0 justify-center items-center">
              <span class=" text-[7px] font-medium mb-[-4px]">POS</span>
              <span class="font-bold text-[10px]">${player.positioning}</span>
            </div>
          </div>
          <div class="flex justify-center items-center w-3 gap-2">
            <img src="${player.flag}" alt="${player.name}">
            <img src="${player.logo}" alt="${player.club}">
          </div>`
        
        }

        

        let img = document.createElement("img")
        img.setAttribute("class","w-5 bg-red-500 rounded-full hover:scale-110 relative bottom-[10px] left-[45px] hidden")
        img.setAttribute("src","/images/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg");
        img.setAttribute("alt","deleteico")

        
        positionElement.addEventListener("mouseover",function(){
            img.classList.remove("hidden")
            img.classList.add("block")
        })
        positionElement.addEventListener("mouseleave",function(){
            img.classList.remove("block")
            img.classList.add("hidden")
        })
        

        img.addEventListener("click",function(event){

          event.stopPropagation();

          const playerIndex = addedToSquadArr.findIndex(play => play.name === player.name);
          
          
              addedToSquadArr.splice(playerIndex, 1);
              document.getElementById("modalfilter").classList.add("hidden");
              document.getElementById("modalfilter").classList.remove("flex");
          

            positionElement.innerHTML = "";
            let addImg = document.createElement('img');
            
            addImg.setAttribute("class","mt-9 w-10 cursor-pointer bg-green-500 rounded-full hover:bg-green-700");
            addImg.setAttribute("src","/images/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg")

            positionElement.appendChild(addImg);

            positionElement.classList.add("bg-blackcard")
            positionElement.classList.remove("bg-goldcard")
            
            
            document.getElementById("modalfilter").classList.add("hidden");
            document.getElementById("modalfilter").classList.remove("flex");
            
        })
        
        positionElement.appendChild(img);

        updateArraySquadPlayers();
        noChoosenPlayers()
        

        // add players added to squad to an array
        function updateArraySquadPlayers(){
        addedToSquadArr.push(player)
      }

      
      
      
      

      // document.querySelectorAll('.substitution').forEach(card => {
      //   card.addEventListener("click", function(){
      //     noChoosenPlayers();
      //   })
      // })

    
        document.getElementById("modalfilter").classList.add("hidden");
        document.getElementById("modalfilter").classList.remove("flex");
      });

      
      
      filtredPlayersCase.appendChild(div);

      
    });

    
    
  }
    document.querySelectorAll('.position-button').forEach(card => {
      card.addEventListener('click', function () {
        
        const position = card.getAttribute('player-position');
        addFiltreplayerToPosition(position);
        
        document.getElementById("modalfilter").classList.add("flex");
        document.getElementById("modalfilter").classList.remove("hidden");

      })
    })

    // substitution function start 

    // document.querySelectorAll('.substitution').forEach(card => {
    //   card.addEventListener("click", function() {
    //     cardSub = card;
    //     noChoosenPlayers();
        
    //   })
    // });
    

    //notAddTosquad()
    //player not added (le reste)
    

    function noChoosenPlayers(){

      let notFoundOnSquad = [];
      
      for (let i = 0; i < data.length; i++) {
          let found = false;
      
          for (let j = 0; j < addedToSquadArr.length; j++) {
            if (data[i].name === addedToSquadArr[j].name) {
              found = true;
              break;       
            }
          }
      
          if (!found) {
            notFoundOnSquad.push(data[i]);
          }
        }
      
        notAddTosquad = notFoundOnSquad;
      

        addPlayersToSub();
        // document.getElementById("submodalfilter").classList.remove("hidden");
        // document.getElementById("submodalfilter").classList.add("flex");
        
    }
    // end of function 
    noChoosenPlayers();

    function addPlayersToSub() {
      const substitutionCase = document.getElementById("substitutionCase");
      substitutionCase.innerHTML = '';
      
      notAddTosquad.forEach(player => {
        // if (addedSubPlayers.includes(player.name)) {
        //   return;
        // }
        let div = document.createElement("div");
        div.setAttribute("class", "cursor-pointer bg-blackcard bg-no-repeat bg-center bg-cover w-32 h-44 flex flex-col pt-8 items-center");

        div.classList.remove("bg-blackcard")
        div.classList.add("bg-goldcard")
    
        if (player.position !== "GK") {
          div.innerHTML = `
            <div class="flex">
              <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                <span class="mb-[-5px] font-bold">${player.rating}</span>
                <span class="text-[10px] font-medium">${player.position}</span>
              </div>
              <img class="w-20" src="${player.photo}" alt="${player.name}">
            </div>
            <p class="font-Raleway text-[11px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
            <div class="text-[#362f16] gap-1 flex">
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">PAC</span>
                <span class="font-bold text-[10px]">${player.pace}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">SHO</span>
                <span class="font-bold text-[10px]">${player.shooting}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">PAS</span>
                <span class="font-bold text-[10px]">${player.passing}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">DRI</span>
                <span class="font-bold text-[10px]">${player.dribbling}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">DEF</span>
                <span class="font-bold text-[10px]">${player.defending}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">PHY</span>
                <span class="font-bold text-[10px]">${player.physical}</span>
              </div>
            </div>
            <div class="flex justify-center items-center w-3 gap-2">
              <img src="${player.flag}" alt="${player.name}">
              <img src="${player.logo}" alt="${player.club}">
            </div>
          `;
        } else {
          div.innerHTML = `
            <div class="flex">
              <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                <span class="mb-[-5px] font-bold">${player.rating}</span>
                <span class="text-[10px] font-medium">${player.position}</span>
              </div>
              <img class="w-20" src="${player.photo}" alt="${player.name}">
            </div>
            <p class="font-Raleway text-[11px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
            <div class="text-[#362f16] gap-1 flex">
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">DIV</span>
                <span class="font-bold text-[10px]">${player.diving}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">HAN</span>
                <span class="font-bold text-[10px]">${player.handling}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">KIC</span>
                <span class="font-bold text-[10px]">${player.kicking}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">REF</span>
                <span class="font-bold text-[10px]">${player.reflexes}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">SPE</span>
                <span class="font-bold text-[10px]">${player.speed}</span>
              </div>
              <div class="flex flex-col gap-0 justify-center items-center">
                <span class=" text-[7px] font-medium mb-[-4px]">POS</span>
                <span class="font-bold text-[10px]">${player.positioning}</span>
              </div>
            </div>
            <div class="flex justify-center items-center w-3 gap-2">
              <img src="${player.flag}" alt="${player.name}">
              <img src="${player.logo}" alt="${player.club}">
            </div>
          `;
        }
    
        substitutionCase.appendChild(div);

      
      });
    
      
      // document.querySelectorAll(".subPlayers").forEach(playerCard => {
      //   playerCard.addEventListener('click', function () {

          
          
      //     const player = notAddTosquad.find(player => player.name === playerCard.querySelector('p').textContent); 

         

      //     if (addedSubPlayers.includes(player.name)) {
      //       alert("This player is already added to substitutions.");
      //       return; 
      //     }
    
      //     cardSub.classList.remove("bg-blackcard");
      //     cardSub.classList.add("bg-goldcard");
  
      //     if (player.position !== "GK") {
      //       cardSub.innerHTML = `
      //         <div class="flex">
      //           <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
      //             <span class="mb-[-5px] font-bold">${player.rating}</span>
      //             <span class="text-[10px] font-medium">${player.position}</span>
      //           </div>
      //           <img class="w-20" src="${player.photo}" alt="${player.name}">
      //         </div>
      //         <p class="font-Raleway text-[11px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
      //         <div class="text-[#362f16] gap-1 flex">
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">PAC</span>
      //             <span class="font-bold text-[10px]">${player.pace}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">SHO</span>
      //             <span class="font-bold text-[10px]">${player.shooting}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">PAS</span>
      //             <span class="font-bold text-[10px]">${player.passing}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">DRI</span>
      //             <span class="font-bold text-[10px]">${player.dribbling}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">DEF</span>
      //             <span class="font-bold text-[10px]">${player.defending}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">PHY</span>
      //             <span class="font-bold text-[10px]">${player.physical}</span>
      //           </div>
      //         </div>
      //         <div class="flex justify-center items-center w-3 gap-2">
      //           <img src="${player.flag}" alt="${player.name}">
      //           <img src="${player.logo}" alt="${player.club}">
      //         </div>
      //       `
      //     } else {
      //       cardSub.innerHTML = `
      //         <div class="flex">
      //           <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
      //             <span class="mb-[-5px] font-bold">${player.rating}</span>
      //             <span class="text-[10px] font-medium">${player.position}</span>
      //           </div>
      //           <img class="w-20" src="${player.photo}" alt="${player.name}">
      //         </div>
      //         <p class="font-Raleway text-[11px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
      //         <div class="text-[#362f16] gap-1 flex">
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">DIV</span>
      //             <span class="font-bold text-[10px]">${player.diving}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">HAN</span>
      //             <span class="font-bold text-[10px]">${player.handling}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">KIC</span>
      //             <span class="font-bold text-[10px]">${player.kicking}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">REF</span>
      //             <span class="font-bold text-[10px]">${player.reflexes}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">SPE</span>
      //             <span class="font-bold text-[10px]">${player.speed}</span>
      //           </div>
      //           <div class="flex flex-col gap-0 justify-center items-center">
      //             <span class=" text-[7px] font-medium mb-[-4px]">POS</span>
      //             <span class="font-bold text-[10px]">${player.positioning}</span>
      //           </div>
      //         </div>
      //         <div class="flex justify-center items-center w-3 gap-2">
      //           <img src="${player.flag}" alt="${player.name}">
      //           <img src="${player.logo}" alt="${player.club}">
      //         </div>
      //       `
          
      //     }
      //     //delete function of sub players
      //      let img = document.createElement("img")
      //      img.setAttribute("class","w-5 bg-red-500 rounded-full hover:scale-110 relative bottom-[10px] left-[45px] hidden")
      //      img.setAttribute("src","/images/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg");
      //      img.setAttribute("alt","deleteico")

      
      //     cardSub.addEventListener("mouseover",function(){
      //       img.classList.remove("hidden")
      //       img.classList.add("block")
      //   })
      //    cardSub.addEventListener("mouseleave",function(){
      //       img.classList.remove("block")
      //      img.classList.add("hidden")

          
      // })
      
      // img.addEventListener("click",function(event){
      //   event.stopPropagation();

      //   let subPlayer = notAddTosquad.findIndex(sub => sub.name === player.name)
        
      //   notAddTosquad.splice(subPlayer, 1);

      //   // let deletePlayerFromAddedSubPlayersArr = addedSubPlayers.indexOf(player.name);
      //   // addedSubPlayers.splice(deletePlayerFromAddedSubPlayersArr,1)
        
      //   // console.log(addedSubPlayers)

      //   cardSub.innerHTML = "";
      //     let addImg = document.createElement('img');
          
      //     addImg.setAttribute("class","mt-9 w-10 cursor-pointer bg-green-500 rounded-full hover:bg-green-700");
      //     addImg.setAttribute("src","/images/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg")

      //     cardSub.appendChild(addImg);

      //     cardSub.classList.add("bg-blackcard")
      //     cardSub.classList.remove("bg-goldcard")
        

          

      // })

      // addedSubPlayers.push(player.name);
      

      // cardSub.appendChild(img)

      //       document.getElementById("submodalfilter").classList.remove('flex');
      //       document.getElementById("submodalfilter").classList.add('hidden');
      //   })
      // })
      
    } //add to sub function end
  

  }
};
