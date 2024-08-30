//! SOPHIE LETTERS
const family = [
    "luhgplays", "Kray342"
];
const satimeres = [
    "Zanee_7", "nana01s", "hellokitten", "zinmood", "anatw", "plsNeves"
]
const nana = [
    "nana01s"
]
const family2 = [
    "GRAaPPY", "Japoggers"
]

ItemEvents.rightClicked("kubejs:the_star", event => {
    let player = event.player

    if(family.includes(player.username)) {
        if (player.username == "luhgplays"){
        event.player.tell(Text.white("-------------------------------------------------"))
            event.player.tell(Text.white("Para: Sabine."))
            event.player.tell(Text.white(""))
            event.player.tell(Text.green("Io non ho bisogno di denaro."))
            event.player.tell(Text.green("Ho bisogno di sentimenti."))
            event.player.tell(Text.green("Di parole, di parole scelte sapientemente,"))
            event.player.tell(Text.green("di fiori, detti pensieri,"))
            event.player.tell(Text.green("di rose, dette presenze,"))
            event.player.tell(Text.green("di sogni, che abitino gli alberi,"))
            event.player.tell(Text.green("di canzoni che faccian danzar le statue,"))
            event.player.tell(Text.green("di stelle che mormorino all’orecchio degli amanti…"))
            event.player.tell(Text.green("Ho bisogno di poesia,"))
            event.player.tell(Text.green("questa magia che brucia la pesantezza delle parole,"))
            event.player.tell(Text.green("che risveglia le emozioni e dà colori nuovi."))
            event.player.tell(Text.white(""))
            event.player.tell(Text.white("Eu preciso de você.. do meu lado."))
            event.player.tell(Text.white("Com muito amor, Sophie"))
            event.player.tell(Text.white("-------------------------------------------------"))
            player.addItemCooldown('kubejs:the_star', 700)}
        else if (player.username == "Kray342"){
            event.player.tell(Text.green("-------------------------------------------------"))
            event.player.tell(Text.green("Para: Rem."))
            event.player.tell(Text.green(""))
            event.player.tell(Text.green("Filho, a mamãe precisa ser rápida.."))
            event.player.tell(Text.green("A Estrela me prometeu que iria te entregar isso"))
            event.player.tell(Text.green("Fiquei sabendo que você queria ter uma dessas.."))
            event.player.tell(Text.green("Eu te amo, Rem"))
            event.player.tell(Text.green("Da sua querida mãe, Sophie"))
            event.player.tell(Text.green(""))
            event.player.tell(Text.green("PS: Fiquei sabendo da escola, se comporte amor"))
            event.player.tell(Text.green("-------------------------------------------------"))
            event.player.tell(Text.green(""))
            event.player.tell(Text.white(""))
            event.player.tell(Text.white("*************************************************"))
            event.player.tell(Text.white("Voce escuta Estrela falar, é como se ela realmente estivesse a sua frente."))
            event.player.tell(Text.white(""))
            event.player.tell(Text.white("XIV e Dark."))
            event.player.tell(Text.white("Primeiro gostaria de parabenizar voces."))
            event.player.tell(Text.white("Segundo, venho dar a voces uma noticia a qual eu deveria ter entregue antes."))
            event.player.tell(Text.white("A Sophie esta morrendo. Sei que parece que o estado atual dela é "))
            event.player.tell(Text.white(""))
            event.player.tell(Text.white(""))
            event.player.tell(Text.white(""))
            event.player.tell(Text.white("*************************************************"))
            player.addItemCooldown('kubejs:the_star', 700)}
        else{
            event.player.tell(Text.white("..."))
        }
    }else if(family2.includes(player.username)) {
        event.player.tell(Text.white("-------------------------------------------------"))
        event.player.tell(Text.white("Para: Neeko e Orpheu."))
        event.player.tell(Text.white(""))
        event.player.tell(Text.white("Nao posso escrever muito, Estrela falou que isso é o maximo que consigo, então serei breve"))
        event.player.tell(Text.white("Obrigada pela ajuda de vocês nisso tudo, e por apoiar a Sabine,"))
        event.player.tell(Text.white("Fiquei sabendo do que aconteceu, Neeko, espero que você esteja bem!"))
        event.player.tell(Text.white("Da amiga e co-mãe de vocês, Sophie"))
        event.player.tell(Text.white(""))
        event.player.tell(Text.white("PS: Cuidem do Rem, por favor"))
        event.player.tell(Text.white("-------------------------------------------------"))
        player.addItemCooldown('kubejs:the_star', 700)
    }
    else if(satimeres.includes(player.username)) {
        event.player.tell(Text.white("-------------------------------------------------"))
        event.player.tell(Text.white("Para: Todos os satimeres."))
        event.player.tell(Text.white(""))
        event.player.tell(Text.white("Ola gente, estou com saudades"))
        event.player.tell(Text.white("Espero que todos voces estejam bem, assim como suas crianças"))
        event.player.tell(Text.white("Estrela esta me ajudando a me comunicar desde lado de ca."))
        event.player.tell(Text.white("Da amiga de voces, Sophie"))
        event.player.tell(Text.white(""))
        event.player.tell(Text.white("PS: Amo voces"))
        event.player.tell(Text.white("-------------------------------------------------"))
        player.addItemCooldown('kubejs:the_star', 700)
    }
    else {
        event.player.tell(Text.white("Uma carta normal de tarot: A Estrela"))
        player.addItemCooldown('kubejs:the_star', 700)
    }
})