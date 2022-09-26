let chiso1=                       [ 0 , 0 , 0 , 0 , 0 , 0 ];
let chiso2=                       [ 0 , 0 , 0 , 0 , 0 , 0 ];
let copyCs1 =                     [0,0,0,0,0,0];
let copyCs2 =                     [0,0,0,0,0,0];

let overview1 = [0,0,0,0];
let overview2 = [0,0,0,0];
let copyOv1 =   [];
let copyOv2 =   [];

let allLane = [`all`,`top`,`jung`,`mid`,`adc`,`sup`]
let detailCs = [
    `Xu hướng tấn công chủ động, kỹ năng gây sát thương dồn hoặc mở giao tranh tốt.`,
    `Sát thương ổn định. Khả năng gây rỉa máu và sát thương tầm xa.`,
    `Sát thương duy trì. Khả năng gây sát thương liên tục trong giao tranh, sống càng lâu càng tốt. `,
    `Khả năng phòng thủ. Chống chịu hoặc bảo vệ đồng đội.`,
    `Khả năng khống chế. (Làm chậm, Câm lặng, Giải giới,...)`,
    `Tính thiết yếu. Khả năng tối ưu điểm mạnh.`
];
const allChamps = [
    {name: "aatrox",       fullName: "Aatrox" ,      stats:[ 1 , 1 , 0 , 0 , 0 , 1   ],    overview: [2, 0, 1],     lane:`top`},
    {name: "ahri",         fullName: "Ahri" ,        stats:[ 2 , 1 , 0 , 0 , 0 ,-0.5 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "akali",        fullName: "Akali" ,       stats:[ 3 , 1 , 0 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`top mid`},
    {name: "akshan",       fullName: "Akshan" ,      stats:[ 1 , 0 , 1 , 0 , 0 , 1   ],    overview: [2, 0, 0],     lane:`mid adc`},
    {name: "alista",       fullName: "Alista" ,      stats:[ 2 ,-0.5 , 0 , 0 , 2 , 0 ],    overview: [0, 0, 2],     lane:`sup`},
    {name: "amumu",        fullName: "Amumu" ,       stats:[ 0 ,-0.5 , 0 , 1 , 1 , 0 ],    overview: [0, 0, 2],     lane:`jung sup`}, 
    {name: "anivia",       fullName: "Anivia" ,      stats:[ 0 , 1 , 0 ,-0.5 , 1 , 0 ],    overview: [0, 2, 0],     lane:`mid sup`},
    {name: "annie",        fullName: "Annie" ,       stats:[ 0 , 1 ,-0.5 , 0 , 0 , 2 ],    overview: [0, 2, 0],     lane:`mid sup`},
    {name: "aphelios",     fullName: "Aphelios" ,    stats:[-0.5 , 2 , 1 , 0 , 0 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "ashe",         fullName: "Ashe" ,        stats:[-0.5 , 0 , 1 , 0 , 1 , 0 ],    overview: [1, 0, 0],     lane:`adc`},
    {name: "aurelion-sol", fullName: "Aurelion-Sol" ,stats:[ 0 , 0 , 2 , 0 , 1 ,-0.5 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "azir",         fullName: "Azir" ,        stats:[ 0 , 0 , 2 , 1 , 0 ,-0.5 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "bard",         fullName: "Bard" ,        stats:[ 0 ,-0.5 , 0 , 1 , 1 , 0 ],    overview: [0, 0, 0],     lane:`sup`},
    {name: "blitzcrank",   fullName: "Blitzcrank" ,  stats:[ 0 ,-0.5 , 0 , 2 , 0 , 2 ],    overview: [0, 1, 1],     lane:`sup`},
    {name: "brand",        fullName: "Brand" ,       stats:[ 0 , 1 , 1 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`mid sup`},
    {name: "braum",        fullName: "Braum" ,       stats:[-0.5 , 0 , 0 , 2 , 1 , 0 ],    overview: [0, 0, 2],     lane:`sup`},
    {name: "caitlyn",      fullName: "Caitlyn" ,     stats:[ 0 , 1 , 1 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "camile",       fullName: "Camile" ,      stats:[ 0 , 0 , 0 , 1 , 1 , 1 ],      overview: [1, 0, 1],     lane:`top`},
    {name: "cassiopeia",   fullName: "Cassiopeia" ,  stats:[ 0 , 1 , 2 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "chogath",      fullName: "Cho'Gath" ,    stats:[ 0 , 0 ,-0.5 , 3 , 1 , 0 ],    overview: [0, 0, 2],     lane:`top`},
    {name: "corki",        fullName: "Corki" ,       stats:[ 0 , 1 , 3 , 0 ,-0.5 , 0 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "darius",       fullName: "Darius" ,      stats:[ 0 , 0 , 1 , 1 , 0 , 1 ],      overview: [1, 0, 1],     lane:`top`},
    {name: "diana",        fullName: "Diana" ,       stats:[ 1 , 0 , 0 , 0 ,-0.5 , 1 ],    overview: [0, 1, 1],     lane:`jung mid`},
    {name: "draven",       fullName: "Draven" ,      stats:[ 0 , 2 , 1 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "ekko",         fullName: "Ekko" ,        stats:[ 1 , 0 , 0 , 1 , 1 , 0 ],      overview: [0, 1, 0],     lane:`jung mid`},
    {name: "elise",        fullName: "Elise" ,       stats:[ 2 , 1 , 0 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`jung`},
    {name: "evelyn",       fullName: "Evelyn" ,      stats:[ 1 , 1 , 0 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`jung`},
    {name: "ezreal",       fullName: "Ezreal" ,      stats:[ 0 , 1 , 1 , 1 , 0 , 0 ],      overview: [1, 1, 0],     lane:`mid adc`},
    {name: "fiddlestick",  fullName: "Fiddlestick",  stats:[ 0 , 1 , 0 ,-0.5 , 2 , 0 ],    overview: [0, 2, 0],     lane:`jung sup`},
    {name: "fiora",        fullName: "Fiora" ,       stats:[ 0 , 0 , 1 , 1 , 0 , 1 ],      overview: [1, 0, 1],     lane:`top`},
    {name: "fizz",         fullName: "Fizz" ,        stats:[ 2 , 1 ,-0.5 , 0 , 0 , 0 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "galio",        fullName: "Galio" ,       stats:[-0.5 , 0 , 0 , 1 , 2 , 0 ],    overview: [0, 0, 1],     lane:`mid sup`},
    {name: "gangplank",    fullName: "Gangplank" ,   stats:[ 0 , 2 , 0 ,-0.5 , 0 , 1 ],    overview: [2, 0, 0],     lane:`top mid`},
    {name: "garen",        fullName: "Garen" ,       stats:[-0.5 , 0 , 0 , 1 , 0 , 2 ],    overview: [1, 0, 1],     lane:`top`},
    {name: "gnar",         fullName: "Gnar" ,        stats:[ 0 , 0 ,-0.5 , 1 , 1 , 0 ],    overview: [1, 0, 1],     lane:`top`},
    {name: "gragas",       fullName: "Gragas" ,      stats:[ 0 , 0 ,-0.5 , 1 , 1 , 0 ],    overview: [0, 1, 1],     lane:`top jung sup`},
    {name: "graves",       fullName: "Graves" ,      stats:[ 0 , 1 , 1 , 0 ,-0.5 , 0 ],    overview: [2, 0, 0],     lane:`top jung`},
    {name: "gwen",         fullName: "Gwen" ,        stats:[ 0 , 0 , 2 , 1 ,-0.5 , 0 ],    overview: [0, 1, 1],     lane:`top jung`},
    {name: "hecarim",      fullName: "Hecarim" ,     stats:[ 0 , 0 , 1 , 1 , 1 , 0 ],      overview: [1, 0, 1],     lane:`top jung`},
    {name: "heimerdinger", fullName: "Heimerdinger", stats:[ 0 , 1 , 2 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`top mid`},
    {name: "illaoi",       fullName: "Illaoi" ,      stats:[ 0 , 0 , 1 , 2 ,-0.5 , 0 ],    overview: [1, 0, 1],     lane:`top`},
    {name: "irelia",       fullName: "Irelia" ,      stats:[-0.5 , 0 , 2 , 1 , 0 , 1 ],    overview: [1, 0, 1],     lane:`top mid`},
    {name: "ivern",        fullName: "Ivern" ,       stats:[ 0 ,-1 ,-0.5 , 2 , 0 , 0 ],    overview: [0, 1, 1],     lane:`jung`},
    {name: "janna",        fullName: "Janna" ,       stats:[ 0 ,-1 , 0 , 2 , 0 , 1 ],      overview: [0, 0, 2],     lane:`sup`},
    {name: "jarvan",       fullName: "Jarvan" ,      stats:[ 0 , 0 ,-0.5 , 1 , 0 , 3 ],    overview: [1, 0, 1],     lane:`top jung`},
    {name: "jax",          fullName: "Jax" ,         stats:[ 0 , 0 , 1 , 1 , 0 , 1 ],      overview: [1, 0, 1],     lane:`top jung`},
    {name: "jayce",        fullName: "Jayce" ,       stats:[ 2 , 2 , 0 , 0 , 0 ,-0.5 ],    overview: [2, 0, 0],     lane:`top mid`},
    {name: "jhin",         fullName: "Jhin" ,        stats:[ 0 , 2 , 1 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "jinx",         fullName: "Jinx" ,        stats:[-0.5 , 0 , 2 , 0 , 1 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "kaisa",        fullName: "Kaisa" ,       stats:[ 1 , 0 , 2 , 0 ,-0.5 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "kalista",      fullName: "Kalista",      stats:[ 1 ,-0.5 , 2 , 0 , 0 , 0 ],    overview: [2, 0, 0],     lane:`top adc`},
    {name: "karma",        fullName: "Karma" ,       stats:[-0.5 , 0 , 0 , 1 , 0 , 1 ],    overview: [0, 1, 1],     lane:`mid sup`},
    {name: "karthus",      fullName: "Karthus" ,     stats:[-0.5 , 1 , 1 , 0 , 0 , 0 ],    overview: [0, 2, 0],     lane:`jung mid`},
    {name: "kassadin",     fullName: "Kassadin" ,    stats:[-0.5 , 1 , 0 , 0 , 0 , 1 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "katarina",     fullName: "Katarina" ,    stats:[ 2 , 0 , 1 , 0 ,-0.5 , 0 ],    overview: [1, 1, 0],     lane:`mid`},
    {name: "kayle",        fullName: "Kayle" ,       stats:[-0.5 , 0 , 2 , 1 , 0 , 0 ],    overview: [1, 1, 0],     lane:`top mid`},
    {name: "kayn",         fullName: "Kayn" ,        stats:[ 1 , 1 , 0 , 1 , 0 , 0 ],      overview: [1, 0, 1],     lane:`jung`},
    {name: "kennen",       fullName: "Kennen" ,      stats:[ 0 , 2 , 0 ,-0.5 , 0 , 1 ],    overview: [0, 2, 0],     lane:`top`},
    {name: "khazix",       fullName: "Khazix" ,      stats:[ 2 , 1 , 0 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`jung`},
    {name: "kindred",      fullName: "Kindred" ,     stats:[ 0 , 1 , 1 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`jung`},
    {name: "kled",         fullName: "Kled" ,        stats:[ 1 , 0 , 0 , 1 , 0 , 1 ],      overview: [1, 0, 1],     lane:`top mid`},
    {name: "kogmaw",       fullName: "Kog'maw" ,     stats:[ 0 , 1 , 2 ,-0.5 , 0 , 0 ],    overview: [1, 1, 0],     lane:`mid adc`},
    {name: "leblanc",      fullName: "LeBlanc" ,     stats:[ 3 , 2 ,-0.5 , 0 , 0 , 0 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "leesin",       fullName: "Lee Sin" ,     stats:[ 1 , 0 , 0 , 1 , 0 , 1 ],      overview: [1, 0, 1],     lane:`top jung`},
    {name: "leona",        fullName: "Leona" ,       stats:[ 0 ,-3 , 0 , 2 , 2 , 0 ],      overview: [0, 0, 2],     lane:`sup`},
    {name: "lillia",       fullName: "Lillia" ,      stats:[ 0 , 1 , 2 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`jung sup`},
    {name: "lissandra",    fullName: "Lissandra" ,   stats:[-0.5 , 0 , 0 , 0 , 2 , 1 ],    overview: [0, 1, 1],     lane:`mid`},
    {name: "lucian",       fullName: "Lucian" ,      stats:[ 2 , 0 , 1 , 0 ,-0.5 , 0 ],    overview: [2, 0, 0],     lane:`top mid adc`},
    {name: "lulu",         fullName: "Lulu" ,        stats:[ 0 ,-0.5 , 0 , 2 , 0 , 2 ],    overview: [0, 0, 2],     lane:`sup`},
    {name: "lux",          fullName: "Lux" ,         stats:[ 0 , 2 , 0 , 0 , 1 ,-0.5 ],    overview: [0, 2, 0],     lane:`mid sup`},
    {name: "malphite",     fullName: "Malphite" ,    stats:[-0.5 , 0 , 0 , 2 , 1 , 0 ],    overview: [0, 0, 3],     lane:`top sup`},
    {name: "malzaha",      fullName: "Malzaha" ,     stats:[-0.5 , 1 , 0 , 0 , 1 , 0 ],    overview: [0, 2, 0],     lane:`mid sup`},
    {name: "maokai",       fullName: "Maokai" ,      stats:[ 0 ,-0.5 , 0 , 1 , 1 , 0 ],    overview: [0, 0, 2],     lane:`top sup`},
    {name: "master-yi",    fullName: "Master Yi",    stats:[ 0 , 0 , 1 , 0 ,-0.5 , 1 ],    overview: [2, 0, 0],     lane:`jung`},
    {name: "miss-fortune", fullName: "Miss Fortune", stats:[ 0 , 2 , 1 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "mordekaiser",  fullName: "Mordekaiser",  stats:[ 0 , 1 , 1 , 1 , 0 , 0 ],      overview: [0, 1, 1],     lane:`top`},
    {name: "morgana",      fullName: "Morgana" ,     stats:[ 0 , 0 ,-0.5 , 1 , 1 , 0 ],    overview: [0, 1, 1],     lane:`sup`},
    {name: "mundo",        fullName: "Mundo" ,       stats:[-0.5 , 0 , 1 , 1 , 0 , 0 ],    overview: [0, 0, 2],     lane:`top`},
    {name: "nami",         fullName: "Nami" ,        stats:[ 0 ,-0.5 , 0 , 0 , 1 , 1 ],    overview: [0, 0, 1],     lane:`sup`},
    {name: "nasus",        fullName: "Nasus" ,       stats:[-0.5 , 0 , 0 , 1 , 0 , 2 ],    overview: [1, 0, 1],     lane:`top`},
    {name: "nautilus",     fullName: "Nautilus" ,    stats:[ 0 , 0 ,-0.5 , 0 , 3 , 1 ],    overview: [0, 0, 2],     lane:`sup`},
    {name: "neeko",        fullName: "Neeko" ,       stats:[ 0 , 1 , 0 , 1 , 1 , 0 ],      overview: [0, 2, 0],     lane:`mid sup`},
    {name: "nidalee",      fullName: "Nidalee" ,     stats:[ 0 , 3 , 0 , 0 ,-0.5 ,-1 ],    overview: [0, 2, 0],     lane:`jung`},
    {name: "nocturne",     fullName: "Nocturne" ,    stats:[ 2 , 1 , 0 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`top jung`},
    {name: "nunu",         fullName: "Nunu" ,        stats:[-0.5 , 1 , 0 , 1 , 0 , 0 ],    overview: [0, 1, 1],     lane:`jung`},
    {name: "olaf",         fullName: "Olaf" ,        stats:[-0.5 , 0 , 1 , 1 , 0 , 0 ],    overview: [1, 0, 1],     lane:`top jung`},
    {name: "orianna",      fullName: "Orianna" ,     stats:[ 0 , 0 , 1 , 1 , 1 , 0 ],      overview: [0, 2, 0],     lane:`mid`},
    {name: "ornn",         fullName: "Ornn" ,        stats:[ 0 ,-0.5 , 0 , 2 , 1 , 0 ],    overview: [0, 0, 3],     lane:`top`},
    {name: "pantheon",     fullName: "Pantheon" ,    stats:[ 1 , 0 ,-0.5 , 0 , 0 , 1 ],    overview: [1, 0, 0],     lane:`jung sup`},
    {name: "poppy",        fullName: "Poppy" ,       stats:[ 0 ,-0.5 , 0 , 1 , 1 , 0 ],    overview: [0, 0, 2],     lane:`top jung sup`},
    {name: "pyke",         fullName: "Pyke" ,        stats:[ 2 ,-0.5 , 1 , 0 , 0 , 0 ],    overview: [1, 0, 0],     lane:`sup`},
    {name: "qiyana",       fullName: "Qiyana" ,      stats:[ 2 , 1 , 0 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`jung mid`},
    {name: "quinn",        fullName: "Quinn" ,       stats:[ 0 , 1 , 1 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`top`},
    {name: "rakan",        fullName: "Rakan" ,       stats:[ 0 ,-0.5 , 0 , 0 , 1 , 1 ],    overview: [0, 0, 1],     lane:`sup`},
    {name: "rammus",       fullName: "Rammus" ,      stats:[ 0 ,-1 , 0 , 2 , 1 , 0 ],      overview: [0, 0, 2],     lane:`jung`},
    {name: "reksai",       fullName: "Rek'Sai" ,     stats:[ 2 , 0 ,-0.5 , 1 , 0 , 0 ],    overview: [2, 0, 1],     lane:`jung`},
    {name: "rell",         fullName: "Rell" ,        stats:[ 0 ,-1 , 0 , 2 , 1 , 0 ],      overview: [0, 0, 3],     lane:`sup`},
    {name: "renata-glasc", fullName: "Renata Glasc", stats:[ 0 , 0 ,-0.5 , 1 , 1 , 0 ],    overview: [0, 1, 1],     lane:`sup`},
    {name: "renekton",     fullName: "Renektok" ,    stats:[ 3 , 0 ,-0.5 , 0 , 0 , 1 ],    overview: [1, 0, 1],     lane:`top mid`},
    {name: "rengar",       fullName: "Rengar" ,      stats:[ 2 , 1 , 0 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`top jung`},
    {name: "riven",        fullName: "Riven" ,       stats:[ 0 , 1 , 1 , 0 , 1 , 0 ],      overview: [2, 0, 0],     lane:`top`},
    {name: "rumble",       fullName: "Rumble" ,      stats:[-0.5 , 0 , 2 , 0 , 0 , 1 ],    overview: [0, 2, 0],     lane:`top`},
    {name: "ryze",         fullName: "Ryze" ,        stats:[ 0 ,-0.5 , 2 , 1 , 0 , 0 ],    overview: [0, 2, 1],     lane:`top mid`},
    {name: "samira",       fullName: "Samira" ,      stats:[ 0 , 2 , 1 , 0 ,-0.5 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "sejuani",      fullName: "Sejuani" ,     stats:[ 0 ,-1 , 0 , 2 , 2 , 0 ],      overview: [0, 0, 2],     lane:`jung`},
    {name: "senna",        fullName: "Senna" ,       stats:[-0.5 , 1 , 0 , 1 , 0 , 0 ],    overview: [2, 0, 0],     lane:`adc sup`},
    {name: "seraphine",    fullName: "Seraphine" ,   stats:[-0.5 , 0 , 0 , 2 , 1 , 0 ],    overview: [0, 1, 1],     lane:`sup`},
    {name: "sett",         fullName: "Sett" ,        stats:[ 0 , 0 ,-0.5 , 1 , 1 , 0 ],    overview: [1, 0, 1],     lane:`top sup`},
    {name: "shaco",        fullName: "Shaco" ,       stats:[ 3 , 0 , 1 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`jung`},
    {name: "shen",         fullName: "Shen" ,        stats:[ 0 ,-1 , 0 , 2 , 1 , 0 ],      overview: [0, 0, 2],     lane:`top sup`},
    {name: "shyvana",      fullName: "Shyvana" ,     stats:[-1 , 1 , 0 , 1 , 0 , 0 ],      overview: [0, 2, 0],     lane:`top jung`},
    {name: "singed",       fullName: "Singed" ,      stats:[-1 , 0 , 0 , 2 , 1 , 0 ],      overview: [0, 1, 1],     lane:`top`},
    {name: "sion",         fullName: "Sion" ,        stats:[-0.5 , 0 , 0 , 2 , 1 , 0 ],    overview: [0, 0, 2],     lane:`top`},
    {name: "sivir",        fullName: "Sivir" ,       stats:[ 0 , 1 , 1 , 0 ,-0.5 , 0 ],    overview: [1, 0, 1],     lane:`adc`},
    {name: "skarner",      fullName: "Skarner" ,     stats:[-0.5 , 0 , 0 , 2 , 1 , 0 ],    overview: [0, 0, 2],     lane:`jung`},
    {name: "sona",         fullName: "Sona" ,        stats:[-0.5 , 0 , 0 , 1 , 0 , 3 ],    overview: [0, 1, 1],     lane:`sup`},
    {name: "soraka",       fullName: "Soraka" ,      stats:[-1 , 0 , 0 , 2 , 0 , 1 ],      overview: [0, 0, 2],     lane:`sup`},
    {name: "swain",        fullName: "Swain" ,       stats:[ 0 , 1 , 1 , 1 , 0 , 0 ],      overview: [0, 2, 0],     lane:`mid sup`},
    {name: "sylas",        fullName: "Sylas" ,       stats:[ 1 , 1 , 1 , 0 , 0 , 0 ],      overview: [0, 1, 1],     lane:`top jung mid`},
    {name: "syndra",       fullName: "Syndra" ,      stats:[ 1 , 2 , 0 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "tahm-kench",   fullName: "Tahm Kench",   stats:[-0.5 , 0 , 0 , 2 , 1 , 0 ],    overview: [0, 0, 2],     lane:`top sup`},
    {name: "taliyah",      fullName: "Taliyah",      stats:[ 0 , 1 , 1 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`jung mid`},
    {name: "talon",        fullName: "Talon",        stats:[ 2 , 0 , 0 ,-0.5 , 0 , 1 ],    overview: [2, 0, 0],     lane:`jung mid`},
    {name: "taric",        fullName: "Taric",        stats:[-1 , 0 , 0 , 2 , 0 , 1 ],      overview: [0, 0, 2],     lane:`sup`},
    {name: "teemo",        fullName: "Teemo",        stats:[ 0 , 2 , 1 ,-0.5 , 0 , 0 ],    overview: [0, 1, 0],     lane:`top`},
    {name: "thresh",       fullName: "Thresh",       stats:[ 0 , 0 , 1 , 1 , 1 , 0 ],      overview: [0, 0, 2],     lane:`sup`},
    {name: "tristana",     fullName: "Tristana",     stats:[ 2 , 0 , 2 , 0 ,-0.5 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "trundle",      fullName: "Trundle",      stats:[-0.5 , 0 , 0 , 1 , 1 , 0 ],    overview: [1, 0, 1],     lane:`top jung`},
    {name: "tryndamere",   fullName: "Tryndamere" ,  stats:[ 0 , 2 , 2 ,-0.5 , 0 , 0 ],    overview: [3, 0, 0],     lane:`top jung`},
    {name: "twisted-fate", fullName: "Twisted Fate", stats:[ 1 , 0 , 0 ,-0.5 , 0 , 2 ],    overview: [0, 1, 0],     lane:`mid`},
    {name: "twitch",       fullName: "Twitch" ,      stats:[ 2 , 0 , 1 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "udyr",         fullName: "Udyr" ,        stats:[-0.5 , 0 , 0 , 1 , 0 , 2 ],    overview: [1, 0, 1],     lane:`jung`},
    {name: "urgot",        fullName: "Urgot" ,       stats:[ 1 , 0 , 1 , 1 , 0 , 0 ],      overview: [1, 0, 1],     lane:`top`},
    {name: "varus",        fullName: "Varus" ,       stats:[-0.5 , 2 , 1 , 0 , 0 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "vayne",        fullName: "Vayne" ,       stats:[ 1 ,-1 , 3 , 0 , 0 , 0 ],      overview: [1, 0, 0],     lane:`top adc`},
    {name: "veigar",       fullName: "Veigar" ,      stats:[-0.5 , 3 , 0 , 0 , 0 , 1 ],    overview: [0, 3, 0],     lane:`mid sup`},
    {name: "velkoz",       fullName: "Velkoz" ,      stats:[ 0 , 2 , 0 , 0 , 1 ,-1 ],      overview: [0, 2, 0],     lane:`mid sup`},
    {name: "vex",          fullName: "Vex" ,         stats:[ 0 , 2 , 1 , 0 , 0 ,-0.5 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "vi",           fullName: "Vi" ,          stats:[ 1 , 0 , 0 , 1 , 1 , 0 ],      overview: [1, 0, 1],     lane:`jung`},
    {name: "viego",        fullName: "Viego" ,       stats:[ 1 , 0 , 1 , 1 , 0 , 0 ],      overview: [1, 0, 1],     lane:`top jung mid`},
    {name: "viktor",       fullName: "Viktor" ,      stats:[ 0 , 2 , 1 ,-0.5 , 0 , 0 ],    overview: [0, 2, 0],     lane:`mid`},
    {name: "vladimir",     fullName: "Vladimir" ,    stats:[ 0 , 2 , 2 , 0 ,-0.5 , 0 ],    overview: [0, 1, 1],     lane:`top mid`},
    {name: "volibear",     fullName: "Volibear" ,    stats:[ 0 ,-0.5 , 0 , 2 , 1 , 0 ],    overview: [0, 0, 2],     lane:`top jung sup`},
    {name: "warwick",      fullName: "Warwick" ,     stats:[-0.5 , 0 , 1 , 0 , 1 , 0 ],    overview: [0, 0, 1],     lane:`top jung`},
    {name: "wukong",       fullName: "Wukong" ,      stats:[ 1 ,-0.5 , 0 , 0 , 0 , 2 ],    overview: [1, 0, 1],     lane:`top jung`},
    {name: "xayah",        fullName: "Xayah" ,       stats:[ 0 , 1 , 2 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "xerath",       fullName: "Xerath" ,      stats:[ 0 , 2 , 0 ,-0.5 , 0 ,-1 ],    overview: [0, 2, 0],     lane:`mid sup`},
    {name: "xin-zhao",     fullName: "Xin Zhao" ,    stats:[ 1 , 1 , 0 , 1 , 0 , 0 ],      overview: [1, 0, 1],     lane:`jung`},
    {name: "yasuo",        fullName: "Yasuo" ,       stats:[ 1 , 1 , 2 , 0 , 0 , 0 ],      overview: [2, 0, 0],     lane:`top mid`},
    {name: "yone",         fullName: "Yone" ,        stats:[ 0 , 1 , 2 ,-0.5 , 0 , 0 ],    overview: [2, 0, 0],     lane:`top mid`},
    {name: "yorick",       fullName: "Yorick" ,      stats:[-0.5 , 0 , 0 , 1 , 0 , 1 ],    overview: [0, 0, 2],     lane:`top`},
    {name: "yuumi",        fullName: "Yuumi" ,       stats:[-1 , 0 , 0 , 1 , 0 , 2 ],      overview: [0, 0, 2],     lane:`sup`},
    {name: "zac",          fullName: "Zac" ,         stats:[ 0 ,-1 , 0 , 2 , 1 , 0 ],      overview: [0, 0, 2],     lane:`jung sup`},
    {name: "zed",          fullName: "Zed" ,         stats:[ 2 , 1 , 0 , 0 ,-0.5 , 0 ],    overview: [3, 0, 0],     lane:`jung mid`},
    {name: "zeri",         fullName: "Zeri" ,        stats:[ 0 , 1 , 3 , 0 ,-0.5 , 0 ],    overview: [2, 0, 0],     lane:`adc`},
    {name: "ziggs",        fullName: "Ziggs" ,       stats:[ 0 , 2 , 1 , 0 , 0 ,-1 ],      overview: [0, 2, 0],     lane:`mid adc`},
    {name: "zilean",       fullName: "Zilean" ,      stats:[ 0 , 1 , 0 , 1 , 1 , 0 ],      overview: [0, 1, 1],     lane:`sup`},
    {name: "zoe",          fullName: "Zoe" ,         stats:[ 0 , 3 , 0 ,-0.5 , 0 ,-0.5 ],  overview: [0, 2, 0],     lane:`mid`},
    {name: "zyra",         fullName: "Zyra" ,        stats:[ 0 , 0 , 1 ,-0.5 , 1 , 0 ],    overview: [0, 2, 0],     lane:`mid sup`},

];
