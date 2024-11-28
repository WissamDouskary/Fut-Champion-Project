let addedToSquadArr = [];
let notAddTosquad = [];
let cardSub = null;
let playersdata = new XMLHttpRequest();
playersdata.open("GET", "https://brofortech.com/players.json", true);
playersdata.send();

playersdata.onreadystatechange = function () {
  if (playersdata.readyState === 4 && playersdata.status === 200) {
    let ourdata = JSON.parse(playersdata.response);
    let data = ourdata.players;
    

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

        

        // add players added to squad to an array
        function updateArraySquadPlayers(){
        addedToSquadArr.push(player)
        
      }

      // substitution

      document.querySelectorAll('.substitution').forEach(card => {
        card.addEventListener("click", function() {
          cardSub = card;
          noChoosenPlayers();
          
        })
      });
      

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
          document.getElementById("submodalfilter").classList.remove("hidden");
          document.getElementById("submodalfilter").classList.add("flex");
          
      }
      // end of function 

      function addPlayersToSub() {
        const subFilteredPlayersCase = document.getElementById("filtredSubPlayers");
        subFilteredPlayersCase.innerHTML = ''; 
        
        notAddTosquad.forEach(player => {
          let div = document.createElement("div");
          div.setAttribute("class", "cursor-pointer bg-goldcard bg-no-repeat bg-center bg-cover w-32 h-44 flex flex-col pt-8 items-center subPlayers");
      
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
      
          subFilteredPlayersCase.appendChild(div);

        
        });
      
        
        document.querySelectorAll(".subPlayers").forEach(playerCard => {
          playerCard.addEventListener('click', function () {
            
            const player = notAddTosquad.find(player => player.name === playerCard.querySelector('p').textContent);
      
            
              cardSub.classList.remove("bg-blackcard");
              cardSub.classList.add("bg-goldcard");
      
              if (player.position !== "GK") {
                cardSub.innerHTML = `
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
              } else {
                cardSub.innerHTML = `
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
              document.getElementById("submodalfilter").classList.remove('flex');
              document.getElementById("submodalfilter").classList.add('hidden');
          })
        })
        
      } //add to sub function end
      
      
      

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

  }
};
