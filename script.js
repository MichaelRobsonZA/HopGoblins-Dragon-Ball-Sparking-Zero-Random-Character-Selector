const characters = {
    "10": [
        { name: "Whis", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/05/153.png/revision/latest/scale-to-width-down/89?cb=20241023184514" },
        { name: "Vegito (Super Saiyan God Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/a/a9/63.png/revision/latest/scale-to-width-down/89?cb=20241022025502" },
        { name: "Gogeta (Super, Super Saiyan God Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/30/67.png/revision/latest/scale-to-width-down/89?cb=20241022025751" },
        { name: "Gogeta (GT, Super Saiyan 4)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/5/55/68.png/revision/latest/scale-to-width-down/89?cb=20241022025801" },
        { name: "Beerus", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/db/152.png/revision/latest/scale-to-width-down/89?cb=20241023184504" }
    ],
    "9": [
        { name: "Jiren (Full Power)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/3f/173.png/revision/latest/scale-to-width-down/89?cb=20241023192340" },
        { name: "Goku (Super, Ultra Instinct)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/c/c0/13.png/revision/latest/scale-to-width-down/89?cb=20241020062617" },
        { name: "Fused Zamasu (half corrupted)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/5/5d/158.png/revision/latest/scale-to-width-down/89?cb=20241023184947" },
        { name: "Broly (Z. Legendary Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/2/28/125.png/revision/latest/scale-to-width-down/89?cb=20241023173736" },
        { name: "Broly (Super, Super Saiyan Full Power)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/32/128.png/revision/latest/scale-to-width-down/89?cb=20241023173809" }
    ],
    "8": [
        { name: "Vegeta (Super, Super Saiyan God Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/7/7d/31.png/revision/latest/scale-to-width-down/89?cb=20241022023745" },
        { name: "Vegeta (GT, Super Saiyan 4)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/16/32.png/revision/latest/scale-to-width-down/89?cb=20241022023821" },
        { name: "Toppo (God of Destruction)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/2/24/175.png/revision/latest/scale-to-width-down/89?cb=20241023192350" },
        { name: "Super Vegito", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/6/62/62.png/revision/latest/scale-to-width-down/89?cb=20241022025454" },
        { name: "Super Gogeta (Z)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/86/64.png/revision/latest/scale-to-width-down/89?cb=20241022025508" },
        { name: "Omega Shenron (GT)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/09/150.png/revision/latest/scale-to-width-down/89?cb=20241023184425" },
        { name: "Kefla (Super Saiyan 2)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/b/bb/171.png/revision/latest/scale-to-width-down/89?cb=20241023192126" },
        { name: "Jiren", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/6/60/172.png/revision/latest/scale-to-width-down/89?cb=20241023192132" },
        { name: "Hit", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/e2/159.png/revision/latest/scale-to-width-down/89?cb=20241023184953" },
        { name: "Gotenks (Super Saiyan 3)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/d2/71.png/revision/latest/scale-to-width-down/89?cb=20241022030054" },
        { name: "Golden Frieza", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/dc/82.png/revision/latest/scale-to-width-down/89?cb=20241022031214" },
        { name: "Goku Black (Super Saiyan Rose)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/39/155.png/revision/latest/scale-to-width-down/89?cb=20241023184855" },
        { name: "Goku (Super, Ultra Instinct Sign)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/9e/12.png/revision/latest/scale-to-width-down/89?cb=20241020060810" },
        { name: "Goku (Super, Super Saiyan God Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/5/59/11.png/revision/latest/scale-to-width-down/89?cb=20241020060759" },
        { name: "Goku (GT, Super Saiyan 4)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/c/c9/17.png/revision/latest/scale-to-width-down/89?cb=20241020062659" },
        { name: "Gogeta (Super, Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/99/66.png/revision/latest/scale-to-width-down/89?cb=20241022025743" }
    ],
    "7": [
        { name: "Vegito", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/a/ac/61.png/revision/latest/scale-to-width-down/89?cb=20241022025448" },
        { name: "Vegeta (Super, Super Saiyan God)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/19/30.png/revision/latest/scale-to-width-down/89?cb=20241022023740" },
        { name: "Ultimate Gohan", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/c/c2/41.png/revision/latest/scale-to-width-down/89?cb=20241022024413" },
        { name: "Toppo", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/6/65/174.png/revision/latest/scale-to-width-down/89?cb=20241023192345" },
        { name: "Syn Shenron (GT)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/d2/149.png/revision/latest/scale-to-width-down/89?cb=20241023184420" },
        { name: "Super Janemba", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/d3/142.png/revision/latest/scale-to-width-down/89?cb=20241023180726" },
        { name: "Super Buu (Gotenks absorbed)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/ec/91.png/revision/latest/scale-to-width-down/89?cb=20241022031848" },
        { name: "Super Buu (Gohan absorbed)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/d6/92.png/revision/latest/scale-to-width-down/89?cb=20241022031919" },
        { name: "Super Baby 2 (GT)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/a/a3/147.png/revision/latest/scale-to-width-down/89?cb=20241023181232" },
        { name: "Perfect Cell", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/1d/86.png/revision/latest/scale-to-width-down/89?cb=20241022031544" },
        { name: "Metal Cooler", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/de/136.png/revision/latest/scale-to-width-down/89?cb=20241023180146" },
        { name: "Majin Vegeta", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/f/ff/27.png/revision/latest/scale-to-width-down/89?cb=20241022020015" },
        { name: "Kid Buu", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/b/bc/93.png/revision/latest/scale-to-width-down/89?cb=20241022031928" },
        { name: "Kefla (Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/b/be/170.png/revision/latest/scale-to-width-down/89?cb=20241023192115" },
        { name: "Kale (Super Saiyan Berserk)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/0b/167.png/revision/latest/scale-to-width-down/89?cb=20241023192032" },
        { name: "Great Ape Baby (GT)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/5/51/148.png/revision/latest/scale-to-width-down/89?cb=20241023181239" },
        { name: "Gotenks (Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/8e/70.png/revision/latest/scale-to-width-down/89?cb=20241022025826" },
        { name: "Goku (Z – End, Super Saiyan 3)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/a/af/07.png/revision/latest/scale-to-width-down/89?cb=20241020060720" },
        { name: "Goku (Super, Super Saiyan God)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/5/58/10.png/revision/latest/scale-to-width-down/89?cb=20241020060745" },
        { name: "Goku (GT, Super Saiyan 3)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/1e/16.png/revision/latest/scale-to-width-down/89?cb=20241020062647" },
        { name: "Gohan (Teen, Super Saiyan 2)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/b/bf/36.png/revision/latest/scale-to-width-down/89?cb=20241022024133" },
        { name: "Gohan (Adult, Super Saiyan 2)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/6/68/39.png/revision/latest/scale-to-width-down/89?cb=20241022024209" }
    ],
    "6": [
{ name: "Majin Buu", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/9d/88.png/revision/latest/scale-to-width-down/89?cb=20241022031557" },
{ name: "Lord Slug (Giant Form)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/6/6c/133.png/revision/latest/scale-to-width-down/89?cb=20241023180058" },
{ name: "Kefla", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/09/169.png/revision/latest/scale-to-width-down/89?cb=20241023192052" },
{ name: "Kale (Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/f/f8/168.png/revision/latest/scale-to-width-down/89?cb=20241023192040" },
{ name: "Hirudegarn", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/9a/144.png/revision/latest/scale-to-width-down/89?cb=20241023181058" },
{ name: "Gotenks", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/1f/69.png/revision/latest/scale-to-width-down/89?cb=20241022025812" },
{ name: "Goku (Z – Mid, Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/9a/03.png/revision/latest/scale-to-width-down/89?cb=20241020014000" },
{ name: "Goku (Z – End, Super Saiyan 2)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/5/5f/06.png/revision/latest/scale-to-width-down/89?cb=20241020014034" },
{ name: "Goku (Z – End, Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/7/79/05.png/revision/latest/scale-to-width-down/89?cb=20241020014022" },
{ name: "Goku (Super, Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/12/09.png/revision/latest/scale-to-width-down/89?cb=20241020060736" },
{ name: "Goku (GT, Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/d6/15.png/revision/latest/scale-to-width-down/89?cb=20241020062634" },
{ name: "Gohan (Teen, Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/c/c1/35.png/revision/latest/scale-to-width-down/89?cb=20241022024119" },
{ name: "Gohan (Future, Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/1e/43.png/revision/latest/scale-to-width-down/89?cb=20241022024425" },
{ name: "Gohan (Adult, Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/87/38.png/revision/latest/scale-to-width-down/89?cb=20241022024201" },
{ name: "Future Trunks (Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/18/56.png/revision/latest/scale-to-width-down/89?cb=20241022025125" },
{ name: "Frost", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/2/20/160.png/revision/latest/scale-to-width-down/89?cb=20241023185006" },
{ name: "Frieza (Z, 4th Form)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/b/b7/78.png/revision/latest/scale-to-width-down/89?cb=20241022031144" },
{ name: "Frieza (Super)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/ec/81.png/revision/latest/scale-to-width-down/89?cb=20241022031208" },
{ name: "Dyspo", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/dd/176.png/revision/latest/scale-to-width-down/89?cb=20241023192416" },
{ name: "Dabura", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/d2/121.png/revision/latest/scale-to-width-down/89?cb=20241023170019" },
{ name: "Cooler", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/3e/134.png/revision/latest/scale-to-width-down/89?cb=20241023180129" },
{ name: "Cell (Perfect Form)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/6/60/85.png/revision/latest/scale-to-width-down/89?cb=20241022031522" },
{ name: "Cabba (Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/0f/162.png/revision/latest/scale-to-width-down/89?cb=20241023185342" },
{ name: "Android 17 (Super)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/d1/116.png/revision/latest/scale-to-width-down/89?cb=20241023165732" }
],
"5": [
{ name: "Zamasu", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/4/43/156.png/revision/latest/scale-to-width-down/89?cb=20241023184901" },
{ name: "Vegeta (Z – End)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/2/24/24.png/revision/latest/scale-to-width-down/89?cb=20241022015947" },
{ name: "Vegeta (Z – Early)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/7/71/21.png/revision/latest/scale-to-width-down/89?cb=20241021232446" },
{ name: "Vegeta (Super)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/b/b9/28.png/revision/latest/scale-to-width-down/89?cb=20241022020026" },
{ name: "Trunks (Melee)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/85/52.png/revision/latest/scale-to-width-down/89?cb=20241022024834" },
{ name: "Trunks (Kid, Super Saiyan)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/5/55/58.png/revision/latest/scale-to-width-down/89?cb=20241022025138" },
{ name: "Roasie", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/02/180.png/revision/latest/scale-to-width-down/89?cb=20241023194234" },
{ name: "Ribrianne", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/04/178.png/revision/latest/scale-to-width-down/89?cb=20241023192602" },
{ name: "Piccolo (fused with Kami)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/1f/45.png/revision/latest/scale-to-width-down/89?cb=20241022024438" },
{ name: "Kale", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/4/4f/166.png/revision/latest/scale-to-width-down/89?cb=20241023185531" },
{ name: "Kakunsa", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/93/179.png/revision/latest/scale-to-width-down/89?cb=20241023194227" },
{ name: "Janemba", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/6/67/141.png/revision/latest/scale-to-width-down/89?cb=20241023180710" },
{ name: "Great Ape Vegeta", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/07/20.png/revision/latest/scale-to-width-down/89?cb=20241021232441" },
{ name: "Goten", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/39/59.png/revision/latest/scale-to-width-down/89?cb=20241022025423" },
{ name: "Goku Black", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/f/fc/154.png/revision/latest/scale-to-width-down/89?cb=20241023184523" },
{ name: "Goku (Z – Mid)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/d9/02.png/revision/latest/scale-to-width-down/89?cb=20241020013843" },
{ name: "Goku (Z – End)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/96/04.png/revision/latest/scale-to-width-down/89?cb=20241020014012" },
{ name: "Goku (Super)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/0b/08.png/revision/latest/scale-to-width-down/89?cb=20241020060726" },
{ name: "Goku (GT)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/7/7b/14.png/revision/latest/scale-to-width-down/89?cb=20241020062622" },
{ name: "Gohan (Future)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/3d/42.png/revision/latest/scale-to-width-down/89?cb=20241022024419" },
{ name: "Future Trunks", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/83/55.png/revision/latest/scale-to-width-down/89?cb=20241022025117" },
{ name: "Frieza (Z, 3rd form)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/4/4a/77.png/revision/latest/scale-to-width-down/89?cb=20241022031134" },
{ name: "Frieza (Z, 2nd form)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/9b/76.png/revision/latest/scale-to-width-down/89?cb=20241022030145" },
{ name: "Frieza (Z)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/e9/75.png/revision/latest/scale-to-width-down/89?cb=20241022030125" },
{ name: "Cell", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/82/84.png/revision/latest/scale-to-width-down/89?cb=20241022031515" },
{ name: "Caulifla", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/c/c2/164.png/revision/latest/scale-to-width-down/89?cb=20241023185505" },
{ name: "Cabba", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/81/161.png/revision/latest/scale-to-width-down/89?cb=20241023185336" },
{ name: "Broly (Z)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/81/123.png/revision/latest/scale-to-width-down/89?cb=20241023170259" },
{ name: "Broly (Super)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/a/af/126.png/revision/latest/scale-to-width-down/89?cb=20241023173742" },
{ name: "Bojack", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/d1/139.png/revision/latest/scale-to-width-down/89?cb=20241023180643" }
],
"4": [
{ name: "Vegeta (Z – Scouter)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/b/ba/19.png/revision/latest/scale-to-width-down/89?cb=20241021232420" },
{ name: "Uub (GT)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/ec/98.png/revision/latest/scale-to-width-down/89?cb=20241022035803" },
{ name: "Turles", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/83/131.png/revision/latest/scale-to-width-down/89?cb=20241023180046" },
{ name: "Trunks (Sword)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/e1/50.png/revision/latest/scale-to-width-down/89?cb=20241022024813" },
{ name: "Trunks (Kid)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/09/57.png/revision/latest/scale-to-width-down/89?cb=20241022025131" },
{ name: "Tien", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/92/49.png/revision/latest/scale-to-width-down/89?cb=20241022024805" },
{ name: "Tapion", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/7/7d/143.png/revision/latest/scale-to-width-down/89?cb=20241023181048" },
{ name: "Super Garlic Jr.", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/ea/129.png/revision/latest/scale-to-width-down/89?cb=20241023173815" },
{ name: "Piccolo", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/8b/44.png/revision/latest/scale-to-width-down/89?cb=20241022024430" },
{ name: "Nail", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/f/ff/46.png/revision/latest/scale-to-width-down/89?cb=20241022024444" },
{ name: "Lord Slug", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/6/60/132.png/revision/latest/scale-to-width-down/89?cb=20241023180052" },
{ name: "King Cold", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/34/113.png/revision/latest/scale-to-width-down/89?cb=20241023165702" },
{ name: "Great Saiyaman", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/4/4d/40.png/revision/latest/scale-to-width-down/89?cb=20241022024215" },
{ name: "Goten", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/39/59.png/revision/latest/scale-to-width-down/89?cb=20241022025423" },
{ name: "Goku (Z – Early)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/f/fe/01.png/revision/latest/scale-to-width-down/89?cb=20241020013808" },
{ name: "Goku (Mini)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/ec/182.png/revision/latest/scale-to-width-down/89?cb=20241021232412" },
{ name: "Gohan (Teen)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/0a/34.png/revision/latest/scale-to-width-down/89?cb=20241022023848" },
{ name: "Gohan (Adult)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/87/37.png/revision/latest/scale-to-width-down/89?cb=20241022024155" },
{ name: "Dr. Wheelo", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/c/ca/130.png/revision/latest/scale-to-width-down/89?cb=20241023173821" },
{ name: "Dr. Gero", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/5/56/119.png/revision/latest/scale-to-width-down/89?cb=20241023170003" },
{ name: "Captain Ginyu", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/5/55/108.png/revision/latest/scale-to-width-down/89?cb=20241022040420" },
{ name: "Bardock", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/7/7c/100.png/revision/latest/scale-to-width-down/89?cb=20241022035816" },
{ name: "Android 19", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/f/fe/118.png/revision/latest/scale-to-width-down/89?cb=20241023165802" }
],
"3": [
{ name: "Zarbon", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/4/48/104.png/revision/latest/scale-to-width-down/89?cb=20241022040046" },
{ name: "Yamcha", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/e7/48.png/revision/latest/scale-to-width-down/89?cb=20241022024758" },
{ name: "Super Zarbon", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/01/105.png/revision/latest/scale-to-width-down/89?cb=20241022040055" },
{ name: "Recoome", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/94/109.png/revision/latest/scale-to-width-down/89?cb=20241022040427" },
{ name: "Raditz", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/b/b5/101.png/revision/latest/scale-to-width-down/89?cb=20241022040014" },
{ name: "Pan (GT)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/f/fc/97.png/revision/latest/scale-to-width-down/89?cb=20241022035740" },
{ name: "Nappa", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/6/64/103.png/revision/latest/scale-to-width-down/89?cb=20241022040027" },
{ name: "Krillin", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/2/23/47.png/revision/latest/scale-to-width-down/89?cb=20241022024752" },
{ name: "Jeice", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/7/72/111.png/revision/latest/scale-to-width-down/89?cb=20241022040500" },
{ name: "Goku (Teen)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/8/88/18.png/revision/latest/scale-to-width-down/89?cb=20241020062718" },
{ name: "Gohan (Kid)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/9c/33.png/revision/latest/scale-to-width-down/89?cb=20241022023834" },
{ name: "Dodoria", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/3a/106.png/revision/latest/scale-to-width-down/89?cb=20241022040102" },
{ name: "Cui", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/9/91/107.png/revision/latest/scale-to-width-down/89?cb=20241022040412" },
{ name: "Cell Jr.", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/0/06/87.png/revision/latest/scale-to-width-down/89?cb=20241022031551" },
{ name: "Burter", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/f/f7/110.png/revision/latest/scale-to-width-down/89?cb=20241022040448" },
{ name: "Babidi", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/7/7b/120.png/revision/latest/scale-to-width-down/89?cb=20241023170011" }
],
"2": [
{ name: "Yajirobe", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/e/eb/96.png/revision/latest/scale-to-width-down/89?cb=20241022035732" },
{ name: "Videl", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/1/1f/72.png/revision/latest/scale-to-width-down/89?cb=20241022030102" },
{ name: "Spopovich", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/3/39/151.png/revision/latest/scale-to-width-down/89?cb=20241023184437" },
{ name: "Saibaman", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/d/df/102.png/revision/latest/scale-to-width-down/89?cb=20241022040021" },
{ name: "Master Roshi (Max Power)", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/7/74/74.png/revision/latest/scale-to-width-down/89?cb=20241022030118" },
{ name: "Master Roshi", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/a/a0/73.png/revision/latest/scale-to-width-down/89?cb=20241022030112" },
{ name: "Guldo", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/c/c2/112.png/revision/latest/scale-to-width-down/89?cb=20241022040511" },
{ name: "Frieza Force Soldier", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/b/be/122.png/revision/latest/scale-to-width-down/89?cb=20241023170248" },
{ name: "Chiaotzu", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/c/c9/95.png/revision/latest/scale-to-width-down/89?cb=20241022035727" }
],
"1": [
{ name: "Mr. Satan", img: "https://static.wikia.nocookie.net/dbzsparkingzero/images/2/2b/94.png/revision/latest/scale-to-width-down/89?cb=20241022031949" }
]
};

function getRandomCharacter(points, usedCharacters) {
    if (!characters[points]) return null;
    let availableCharacters = characters[points].filter(character => !usedCharacters.includes(character.name));
    if (availableCharacters.length === 0) return null;
    const randomCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    return randomCharacter;
}

function selectMode(mode) {
    let characterList = document.getElementById('character-list');
    characterList.innerHTML = '';

    if (mode === '1v1') {
        let randomPoints = Math.floor(Math.random() * 10) + 1;
        characterList.innerHTML = '<h3 class="player-title">PLAYER 1</h3>';
        const player1 = getRandomCharacter(randomPoints.toString(), []);
        characterList.innerHTML += `<div class="character-grid"><img src="${player1.img}" alt="${player1.name}"></div>`;
        characterList.innerHTML += '<div class="separator"></div>';
        characterList.innerHTML += '<h3 class="player-title">PLAYER 2</h3>';
        const player2 = getRandomCharacter(randomPoints.toString(), []);
        characterList.innerHTML += `<div class="character-grid"><img src="${player2.img}" alt="${player2.name}"></div>`;
    } else if (mode === 'team') {
        let teamNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
        let player1Characters = [];
        let player2Characters = [];
        let usedCharacters1 = [];
        let usedCharacters2 = [];

        teamNumbers.forEach(number => {
            let character1 = getRandomCharacter(number.toString(), usedCharacters1);
            if (character1) {
                player1Characters.push(character1);
                usedCharacters1.push(character1.name);
            }
            let character2 = getRandomCharacter(number.toString(), usedCharacters2);
            if (character2) {
                player2Characters.push(character2);
                usedCharacters2.push(character2.name);
            }
        });

        characterList.innerHTML = '<h3 class="player-title">PLAYER 1</h3><div class="character-grid">';
        player1Characters.forEach(character => {
            characterList.innerHTML += `<img src="${character.img}" alt="${character.name}">`;
        });
        characterList.innerHTML += '</div>';

        characterList.innerHTML += '<div class="separator"></div>';

        characterList.innerHTML += '<h3 class="player-title">PLAYER 2</h3><div class="character-grid">';
        player2Characters.forEach(character => {
            characterList.innerHTML += `<img src="${character.img}" alt="${character.name}">`;
        });
        characterList.innerHTML += '</div>';
    } else if (mode === 'dp') {
        let dpNumbers = [];
        while (dpNumbers.reduce((a, b) => a + b, 0) < 15 && dpNumbers.length < 5) {
            let remaining = 15 - dpNumbers.reduce((a, b) => a + b, 0);
            dpNumbers.push(Math.min(remaining, Math.floor(Math.random() * 10) + 1));
        }

        let player1Characters = [];
        let player2Characters = [];
        let usedCharacters1 = [];
        let usedCharacters2 = [];

        dpNumbers.forEach(number => {
            let character1 = getRandomCharacter(number.toString(), usedCharacters1);
            if (character1) {
                player1Characters.push(character1);
                usedCharacters1.push(character1.name);
            }
            let character2 = getRandomCharacter(number.toString(), usedCharacters2);
            if (character2) {
                player2Characters.push(character2);
                usedCharacters2.push(character2.name);
            }
        });

        characterList.innerHTML = '<h3 class="player-title">PLAYER 1</h3><div class="character-grid">';
        player1Characters.forEach(character => {
            characterList.innerHTML += `<img src="${character.img}" alt="${character.name}">`;
        });
        characterList.innerHTML += '</div>';

        characterList.innerHTML += '<div class="separator"></div>';

        characterList.innerHTML += '<h3 class="player-title">PLAYER 2</h3><div class="character-grid">';
        player2Characters.forEach(character => {
            characterList.innerHTML += `<img src="${character.img}" alt="${character.name}">`;
        });
        characterList.innerHTML += '</div>';
    }
}