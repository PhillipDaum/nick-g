// updates work page with all of nicks stuffs
function cheifGangster() {

    //uptates HTML DOM 
    let parBot = document.createElement('div')  
    parBot.innerHTML = finalResult;
    parBot.className = "text-info fs-3 ms-3 mb-2 font-monospace lh-sm";
    document.getElementById("ninja").appendChild(parBot);  
} 



//displays inventory
function showInventory() {
    //displays inventory message
    let inventoryMenu = document.createElement('div');
        inventoryMenu.innerHTML = "this is what you have:";
        inventoryMenu.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(inventoryMenu);

    //displays inventory list
    //change - items to inventory
    //coins
    for (var i = 0; i < inventory.coins.length; i++) {
        let coinsList = document.createElement('div');
        coinsList.innerHTML = inventory.coins[i].name;
        coinsList.className = "col-2 text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(coinsList);
    }
    //keys
    for (var i = 0; i < items.keys.length; i++) {
        let keysList = document.createElement('div');
        keysList.innerHTML = inventory.keys[i].name;
        keysList.className = "col-2 text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(keysList);
    }
}