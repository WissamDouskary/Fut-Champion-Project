let PlayersList = document.getElementById("playersList");
let playersdata = new XMLHttpRequest();
    
playersdata.open("GET","https://brofortech.com/players.json",true);
playersdata.send();
playersdata.onreadystatechange = function(){
    if(playersdata.readyState === 4 && playersdata.status === 200){
        let ourdata = JSON.parse(playersdata.response);
        let data = ourdata.players;
        
        data.forEach(player => {

            
            let div = document.createElement("div");
            div.setAttribute("class","cursor-pointer bg-goldcard bg-no-repeat bg-center scale-100 bg-cover w-56 h-72 flex flex-col pt-8 items-center")
            if(player.position !== "GK"){
            div.innerHTML = `<div class="scale-[1.6] mt-16">
            <div class="flex">
                <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                    <span class="mb-[-5px] font-bold">${player.rating}</span>
                    <span class="text-[10px] font-medium">${player.position}</span>
                </div>
                    <img class="w-20" src="${player.photo}" alt="photo">
                </div>
                <div class="flex flex-col items-center">
                    <p class="font-Raleway text-[10px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
                    <div class="text-[#362f16] gap-1 flex">
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                PAC
                            </span>
                            <span class="font-bold text-[10px]">
                                ${player.pace}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                SHO
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.shooting}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                PAS
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.passing}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                DRI
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.dribbling}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                DEF
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.defending}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                PHY
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.physical}
                            </span>
                        </div>
                    </div>
                        
                        
                        
        
                    
                    <div class="flex justify-center items-center w-3 gap-2">
                        <img src="${player.flag}" alt="arg">
                        <img class="" src="${player.logo}" alt="">
                    </div>
                </div>
                    </div>`

            PlayersList.appendChild(div)
        }else{
            div.innerHTML = `<div class="scale-[1.6] mt-16">
            <div class="flex">
                <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                    <span class="mb-[-5px] font-bold">${player.rating}</span>
                    <span class="text-[10px] font-medium">${player.position}</span>
                </div>
                    <img class="w-20" src="${player.photo}" alt="photo">
                </div>
                <div class="flex flex-col items-center">
                    <p class="font-Raleway text-[9px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
                    <div class="text-[#362f16] gap-1 flex">
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                DIV
                            </span>
                            <span class="font-bold text-[10px]">
                                ${player.diving}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                HAN
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.handling}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                KIC
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.kicking}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                REF
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.reflexes}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                SPE
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.speed}
                            </span>
                        </div>
        
                        <div class="flex flex-col gap-0 justify-center items-center">
                            <span class=" text-[7px] font-medium mb-[-4px]">
                                POS
                            </span>
                            <span class="font-bold text-[10px]">
                            ${player.positioning}
                            </span>
                        </div>
                    </div>
                        
                        
                        
        
                    
                    <div class="flex justify-center items-center w-3 gap-2">
                        <img src="${player.flag}" alt="arg">
                        <img class="" src="${player.logo}" alt="">
                    </div>
                </div>
                    </div>`

            PlayersList.appendChild(div)
        }
        
        });
        
    }
    

}
