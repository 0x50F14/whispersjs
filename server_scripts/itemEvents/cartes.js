//! SOPHIE LETTERS
const users = [
    "luhgplays", "Kray342", "4Help"
];

const items = [
    "carte_de_credit_gamme", "carte_de_credit_prestige", "carte_de_credit"
];

ItemEvents.rightClicked(event => {
    let player = event.player;
    let clickedItem = event.item.id;

    if(!items.includes(clickedItem)) return;

    if(users.includes(player.username)) {
        if (player.username == "luhgplays"){

            //? check off hand id -> if diamond/hydra -> count off hands items -> add same quantity to json file 
            //? clear off hand items -> success


        }
    }    
    else {
        event.player.tell(Text.red("Vous n'êtes pas enregistré comme client de la Société Générale"))
        player.addItemCooldown(clickedItem, 700)
    }
})

function verify(user, item){

}