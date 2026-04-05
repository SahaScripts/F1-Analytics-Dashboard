/* ===========================
   F1 DASHBOARD — SCRIPT.JS
   =========================== */

/* ── TEAM COLORS ── */
const TEAM_COLORS = {
  "Mercedes":                      { primary:"#00332f", accent:"#00d2be" },
  "Red Bull Racing":               { primary:"#0a1840", accent:"#3671c6" },
  "Red Bull Racing Honda":         { primary:"#0a1840", accent:"#3671c6" },
  "Red Bull Racing Honda RBPT":    { primary:"#0a1840", accent:"#3671c6" },
  "Red Bull Racing RBPT":          { primary:"#0a1840", accent:"#3671c6" },
  "Ferrari":                       { primary:"#6b0000", accent:"#dc0000" },
  "McLaren":                       { primary:"#6b3300", accent:"#ff8000" },
  "McLaren Mercedes":              { primary:"#6b3300", accent:"#ff8000" },
  "McLaren Renault":               { primary:"#6b3300", accent:"#ff8000" },
  "Aston Martin":                  { primary:"#003328", accent:"#006f62" },
  "Aston Martin Aramco Mercedes":  { primary:"#003328", accent:"#006f62" },
  "Aston Martin Mercedes":         { primary:"#003328", accent:"#006f62" },
  "Alpine":                        { primary:"#003f7c", accent:"#0090ff" },
  "Alpine Renault":                { primary:"#003f7c", accent:"#0090ff" },
  "Williams":                      { primary:"#001a5e", accent:"#005aff" },
  "Williams Mercedes":             { primary:"#001a5e", accent:"#005aff" },
  "AlphaTauri":                    { primary:"#182840", accent:"#4a7299" },
  "AlphaTauri Honda":              { primary:"#182840", accent:"#4a7299" },
  "AlphaTauri Honda RBPT":         { primary:"#182840", accent:"#4a7299" },
  "AlphaTauri RBPT":               { primary:"#182840", accent:"#4a7299" },
  "RB":                            { primary:"#182840", accent:"#3b6fa0" },
  "RB Honda RBPT":                 { primary:"#182840", accent:"#3b6fa0" },
  "Racing Bulls":                  { primary:"#182840", accent:"#3b6fa0" },
  "Haas":                          { primary:"#1a1a1a", accent:"#e8002d" },
  "Haas F1 Team":                  { primary:"#1a1a1a", accent:"#e8002d" },
  "Haas Ferrari":                  { primary:"#1a1a1a", accent:"#e8002d" },
  "Alfa Romeo":                    { primary:"#4a0000", accent:"#900000" },
  "Alfa Romeo Ferrari":            { primary:"#4a0000", accent:"#900000" },
  "Alfa Romeo Racing Ferrari":     { primary:"#4a0000", accent:"#900000" },
  "Sauber":                        { primary:"#003818", accent:"#00cf46" },
  "Kick Sauber":                   { primary:"#003818", accent:"#00cf46" },
  "Kick Sauber Ferrari":           { primary:"#003818", accent:"#00cf46" },
  "Renault":                       { primary:"#4a4200", accent:"#fff500" },
  "Racing Point":                  { primary:"#4a1234", accent:"#f596c8" },
  "Racing Point BWT Mercedes":     { primary:"#4a1234", accent:"#f596c8" },
  "Audi":                          { primary:"#2a0000", accent:"#c00" },
  "Cadillac":                      { primary:"#002244", accent:"#0050c8" },
};

function tc(team) { return TEAM_COLORS[team] || { primary:"#1a1a1a", accent:"#555" }; }

/* ── CAR IMAGES ── */
const CAR_IMAGES = {
  "Mercedes":                     "https://www.formula1.com/content/dam/fom-website/teams/2024/mercedes.png.transform/4col/image.png",
  "Red Bull Racing":              "https://www.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/4col/image.png",
  "Red Bull Racing Honda":        "https://www.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/4col/image.png",
  "Red Bull Racing Honda RBPT":   "https://www.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/4col/image.png",
  "Red Bull Racing RBPT":         "https://www.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/4col/image.png",
  "Ferrari":                      "https://www.formula1.com/content/dam/fom-website/teams/2024/ferrari.png.transform/4col/image.png",
  "McLaren":                      "https://www.formula1.com/content/dam/fom-website/teams/2024/mclaren.png.transform/4col/image.png",
  "McLaren Mercedes":             "https://www.formula1.com/content/dam/fom-website/teams/2024/mclaren.png.transform/4col/image.png",
  "McLaren Renault":              "https://www.formula1.com/content/dam/fom-website/teams/2024/mclaren.png.transform/4col/image.png",
  "Aston Martin":                 "https://www.formula1.com/content/dam/fom-website/teams/2024/aston-martin.png.transform/4col/image.png",
  "Aston Martin Aramco Mercedes": "https://www.formula1.com/content/dam/fom-website/teams/2024/aston-martin.png.transform/4col/image.png",
  "Aston Martin Mercedes":        "https://www.formula1.com/content/dam/fom-website/teams/2024/aston-martin.png.transform/4col/image.png",
  "Alpine":                       "https://www.formula1.com/content/dam/fom-website/teams/2024/alpine.png.transform/4col/image.png",
  "Alpine Renault":               "https://www.formula1.com/content/dam/fom-website/teams/2024/alpine.png.transform/4col/image.png",
  "Williams":                     "https://www.formula1.com/content/dam/fom-website/teams/2024/williams.png.transform/4col/image.png",
  "Williams Mercedes":            "https://www.formula1.com/content/dam/fom-website/teams/2024/williams.png.transform/4col/image.png",
  "AlphaTauri":                   "https://www.formula1.com/content/dam/fom-website/teams/2023/alphatauri.png.transform/4col/image.png",
  "AlphaTauri Honda":             "https://www.formula1.com/content/dam/fom-website/teams/2023/alphatauri.png.transform/4col/image.png",
  "AlphaTauri Honda RBPT":        "https://www.formula1.com/content/dam/fom-website/teams/2023/alphatauri.png.transform/4col/image.png",
  "AlphaTauri RBPT":              "https://www.formula1.com/content/dam/fom-website/teams/2023/alphatauri.png.transform/4col/image.png",
  "RB":                           "https://www.formula1.com/content/dam/fom-website/teams/2024/rb.png.transform/4col/image.png",
  "RB Honda RBPT":                "https://www.formula1.com/content/dam/fom-website/teams/2024/rb.png.transform/4col/image.png",
  "Racing Bulls":                 "https://www.formula1.com/content/dam/fom-website/teams/2024/rb.png.transform/4col/image.png",
  "Haas":                         "https://www.formula1.com/content/dam/fom-website/teams/2024/haas.png.transform/4col/image.png",
  "Haas F1 Team":                 "https://www.formula1.com/content/dam/fom-website/teams/2024/haas.png.transform/4col/image.png",
  "Haas Ferrari":                 "https://www.formula1.com/content/dam/fom-website/teams/2024/haas.png.transform/4col/image.png",
  "Alfa Romeo":                   "https://www.formula1.com/content/dam/fom-website/teams/2023/alfa-romeo.png.transform/4col/image.png",
  "Alfa Romeo Ferrari":           "https://www.formula1.com/content/dam/fom-website/teams/2023/alfa-romeo.png.transform/4col/image.png",
  "Alfa Romeo Racing Ferrari":    "https://www.formula1.com/content/dam/fom-website/teams/2023/alfa-romeo.png.transform/4col/image.png",
  "Kick Sauber":                  "https://www.formula1.com/content/dam/fom-website/teams/2024/kick-sauber.png.transform/4col/image.png",
  "Kick Sauber Ferrari":          "https://www.formula1.com/content/dam/fom-website/teams/2024/kick-sauber.png.transform/4col/image.png",
  "Renault":                      "https://www.formula1.com/content/dam/fom-website/teams/2020/renault.png.transform/4col/image.png",
  "Racing Point":                 "https://www.formula1.com/content/dam/fom-website/teams/2020/racing-point.png.transform/4col/image.png",
  "Racing Point BWT Mercedes":    "https://www.formula1.com/content/dam/fom-website/teams/2020/racing-point.png.transform/4col/image.png",
  "Audi":                         "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/200px-Audi-Logo_2016.svg.png",
  "Cadillac":                     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cadillac_logo.svg/200px-Cadillac_logo.svg.png",
};

function carImg(team) { return CAR_IMAGES[team] || ""; }

/* ── DRIVER IMAGES ── */
const DRIVER_IMG = {
  "Kimi Antonelli":       "https://www.formula1.com/content/dam/fom-website/drivers/A/ANDANT01_Andrea_Kimi_Antonelli/andant01.png.transform/2col/image.png",
  "George Russell":       "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png",
  "Charles Leclerc":      "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png",
  "Lewis Hamilton":       "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png",
  "Lando Norris":         "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png",
  "Oscar Piastri":        "https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png",
  "Oliver Bearman":       "https://www.formula1.com/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/2col/image.png",
  "Pierre Gasly":         "https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col/image.png",
  "Max Verstappen":       "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
  "Liam Lawson":          "https://www.formula1.com/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/2col/image.png",
  "Arvid Lindblad":       "https://www.formula1.com/content/dam/fom-website/drivers/A/ARVLIN01_Arvid_Lindblad/arvlin01.png.transform/2col/image.png",
  "Isack Hadjar":         "https://www.formula1.com/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png.transform/2col/image.png",
  "Gabriel Bortoleto":    "https://www.formula1.com/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png.transform/2col/image.png",
  "Carlos Sainz":         "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png",
  "Esteban Ocon":         "https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png",
  "Franco Colapinto":     "https://www.formula1.com/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png.transform/2col/image.png",
  "Nico Hulkenberg":      "https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png",
  "Nico Hülkenberg":      "https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png",
  "Alexander Albon":      "https://www.formula1.com/content/dam/fom-website/drivers/A/ALEXAL01_Alexander_Albon/alexal01.png.transform/2col/image.png",
  "Alex Albon":           "https://www.formula1.com/content/dam/fom-website/drivers/A/ALEXAL01_Alexander_Albon/alexal01.png.transform/2col/image.png",
  "Valtteri Bottas":      "https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png",
  "Sergio Perez":         "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png",
  "Fernando Alonso":      "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png",
  "Lance Stroll":         "https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png",
  "Yuki Tsunoda":         "https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png",
  "Daniel Ricciardo":     "https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col/image.png",
  "Sebastian Vettel":     "https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col/image.png",
  "Kimi Räikkönen":       "https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_Raikkonen/kimrai01.png.transform/2col/image.png",
  "Mick Schumacher":      "https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png.transform/2col/image.png",
  "Zhou Guanyu":          "https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/2col/image.png",
  "Daniil Kvyat":         "https://www.formula1.com/content/dam/fom-website/drivers/D/DANKVY01_Daniil_Kvyat/dankvy01.png.transform/2col/image.png",
  "Nicholas Latifi":      "https://placehold.co/80x90/001a5e/fff?text=LAT",
  "Jack Aitken":          "https://placehold.co/80x90/001a5e/fff?text=AIT",
  "Pietro Fittipaldi":    "https://placehold.co/80x90/1a1a1a/fff?text=FIT",
  "Romain Grosjean":      "https://placehold.co/80x90/1a1a1a/fff?text=GRO",
  "Kevin Magnussen":      "https://placehold.co/80x90/1a1a1a/fff?text=MAG",
  "Antonio Giovinazzi":   "https://placehold.co/80x90/4a0000/fff?text=GIO",
  "Robert Kubica":        "https://placehold.co/80x90/4a0000/fff?text=KUB",
  "Nikita Mazepin":       "https://placehold.co/80x90/1a1a1a/fff?text=MAZ",
  "George Russell (sub)": "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png",
  "Nyck De Vries":        "https://placehold.co/80x90/182840/fff?text=DEV",
  "Logan Sargeant":       "https://placehold.co/80x90/001a5e/fff?text=SAR",
  "Jack Doohan":          "https://placehold.co/80x90/003f7c/fff?text=DOO",
};

function dImg(name) { return DRIVER_IMG[name] || `https://placehold.co/80x90/111/555?text=${name.split(' ').pop().slice(0,3).toUpperCase()}`; }

/* ══════════════════════════════════════
   DRIVER DATA — CORRECTED 2020–2026
══════════════════════════════════════ */
const driversByYear = {

  /* ── 2026 ── */
  2026: [
    { name:"Kimi Antonelli",   nat:"🇮🇹 ITA", team:"Mercedes",        points:72,  wins:1, podiums:3 },
    { name:"George Russell",   nat:"🇬🇧 GBR", team:"Mercedes",        points:63,  wins:2, podiums:4 },
    { name:"Charles Leclerc",  nat:"🇲🇨 MON", team:"Ferrari",         points:49,  wins:1, podiums:3 },
    { name:"Lewis Hamilton",   nat:"🇬🇧 GBR", team:"Ferrari",         points:41,  wins:1, podiums:2 },
    { name:"Lando Norris",     nat:"🇬🇧 GBR", team:"McLaren",         points:25,  wins:0, podiums:1 },
    { name:"Oscar Piastri",    nat:"🇦🇺 AUS", team:"McLaren",         points:21,  wins:0, podiums:1 },
    { name:"Oliver Bearman",   nat:"🇬🇧 GBR", team:"Haas F1 Team",    points:17,  wins:0, podiums:0 },
    { name:"Pierre Gasly",     nat:"🇫🇷 FRA", team:"Alpine",          points:15,  wins:0, podiums:0 },
    { name:"Max Verstappen",   nat:"🇳🇱 NED", team:"Red Bull Racing", points:12,  wins:0, podiums:1 },
    { name:"Liam Lawson",      nat:"🇳🇿 NZL", team:"Racing Bulls",    points:10,  wins:0, podiums:0 },
    { name:"Arvid Lindblad",   nat:"🇬🇧 GBR", team:"Racing Bulls",    points:4,   wins:0, podiums:0 },
    { name:"Isack Hadjar",     nat:"🇫🇷 FRA", team:"Red Bull Racing", points:4,   wins:0, podiums:0 },
    { name:"Gabriel Bortoleto",nat:"🇧🇷 BRA", team:"Audi",            points:2,   wins:0, podiums:0 },
    { name:"Carlos Sainz",     nat:"🇪🇸 ESP", team:"Williams",        points:2,   wins:0, podiums:0 },
    { name:"Esteban Ocon",     nat:"🇫🇷 FRA", team:"Haas F1 Team",    points:1,   wins:0, podiums:0 },
    { name:"Franco Colapinto", nat:"🇦🇷 ARG", team:"Alpine",          points:1,   wins:0, podiums:0 },
    { name:"Nico Hulkenberg",  nat:"🇩🇪 GER", team:"Audi",            points:0,   wins:0, podiums:0 },
    { name:"Alexander Albon",  nat:"🇹🇭 THA", team:"Williams",        points:0,   wins:0, podiums:0 },
    { name:"Valtteri Bottas",  nat:"🇫🇮 FIN", team:"Cadillac",        points:0,   wins:0, podiums:0 },
    { name:"Sergio Perez",     nat:"🇲🇽 MEX", team:"Cadillac",        points:0,   wins:0, podiums:0 },
    { name:"Fernando Alonso",  nat:"🇪🇸 ESP", team:"Aston Martin",    points:0,   wins:0, podiums:0 },
    { name:"Lance Stroll",     nat:"🇨🇦 CAN", team:"Aston Martin",    points:0,   wins:0, podiums:0 },
  ],

  /* ── 2025 ── */
  2025: [
    { name:"Lando Norris",      nat:"🇬🇧 GBR", team:"McLaren",              points:423, wins:12, podiums:19 },
    { name:"Max Verstappen",    nat:"🇳🇱 NED", team:"Red Bull Racing Honda RBPT", points:421, wins:8, podiums:16 },
    { name:"Oscar Piastri",     nat:"🇦🇺 AUS", team:"McLaren",              points:410, wins:6,  podiums:15 },
    { name:"George Russell",    nat:"🇬🇧 GBR", team:"Mercedes",             points:319, wins:3,  podiums:10 },
    { name:"Charles Leclerc",   nat:"🇲🇨 MON", team:"Ferrari",              points:242, wins:3,  podiums:8  },
    { name:"Lewis Hamilton",    nat:"🇬🇧 GBR", team:"Ferrari",              points:156, wins:2,  podiums:5  },
    { name:"Kimi Antonelli",    nat:"🇮🇹 ITA", team:"Mercedes",             points:150, wins:1,  podiums:4  },
    { name:"Alexander Albon",   nat:"🇹🇭 THA", team:"Williams Mercedes",    points:73,  wins:0,  podiums:1  },
    { name:"Carlos Sainz",      nat:"🇪🇸 ESP", team:"Williams Mercedes",    points:64,  wins:0,  podiums:1  },
    { name:"Fernando Alonso",   nat:"🇪🇸 ESP", team:"Aston Martin",         points:56,  wins:0,  podiums:0  },
    { name:"Nico Hülkenberg",   nat:"🇩🇪 GER", team:"Kick Sauber",          points:51,  wins:0,  podiums:0  },
    { name:"Isack Hadjar",      nat:"🇫🇷 FRA", team:"Racing Bulls",         points:51,  wins:0,  podiums:0  },
    { name:"Oliver Bearman",    nat:"🇬🇧 GBR", team:"Haas F1 Team",         points:41,  wins:0,  podiums:0  },
    { name:"Liam Lawson",       nat:"🇳🇿 NZL", team:"Racing Bulls",         points:38,  wins:0,  podiums:0  },
    { name:"Esteban Ocon",      nat:"🇫🇷 FRA", team:"Haas F1 Team",         points:38,  wins:0,  podiums:0  },
    { name:"Lance Stroll",      nat:"🇨🇦 CAN", team:"Aston Martin",         points:33,  wins:0,  podiums:0  },
    { name:"Yuki Tsunoda",      nat:"🇯🇵 JPN", team:"Red Bull Racing Honda RBPT", points:33, wins:0, podiums:0 },
    { name:"Pierre Gasly",      nat:"🇫🇷 FRA", team:"Alpine Renault",       points:22,  wins:0,  podiums:0  },
    { name:"Gabriel Bortoleto", nat:"🇧🇷 BRA", team:"Kick Sauber",          points:19,  wins:0,  podiums:0  },
    { name:"Franco Colapinto",  nat:"🇦🇷 ARG", team:"Alpine Renault",       points:0,   wins:0,  podiums:0  },
    { name:"Jack Doohan",       nat:"🇦🇺 AUS", team:"Alpine Renault",       points:0,   wins:0,  podiums:0  },
  ],

  /* ── 2024 ── */
  2024: [
    { name:"Max Verstappen",    nat:"🇳🇱 NED", team:"Red Bull Racing Honda RBPT", points:437, wins:9,  podiums:16 },
    { name:"Lando Norris",      nat:"🇬🇧 GBR", team:"McLaren Mercedes",     points:374, wins:4,  podiums:15 },
    { name:"Charles Leclerc",   nat:"🇲🇨 MON", team:"Ferrari",              points:356, wins:3,  podiums:12 },
    { name:"Oscar Piastri",     nat:"🇦🇺 AUS", team:"McLaren Mercedes",     points:292, wins:2,  podiums:11 },
    { name:"Carlos Sainz",      nat:"🇪🇸 ESP", team:"Ferrari",              points:290, wins:2,  podiums:8  },
    { name:"George Russell",    nat:"🇬🇧 GBR", team:"Mercedes",             points:245, wins:1,  podiums:6  },
    { name:"Lewis Hamilton",    nat:"🇬🇧 GBR", team:"Mercedes",             points:211, wins:2,  podiums:5  },
    { name:"Sergio Perez",      nat:"🇲🇽 MEX", team:"Red Bull Racing Honda RBPT", points:152, wins:0, podiums:2 },
    { name:"Fernando Alonso",   nat:"🇪🇸 ESP", team:"Aston Martin Aramco Mercedes", points:70, wins:0, podiums:0 },
    { name:"Lance Stroll",      nat:"🇨🇦 CAN", team:"Aston Martin Aramco Mercedes", points:24, wins:0, podiums:0 },
    { name:"Nico Hülkenberg",   nat:"🇩🇪 GER", team:"Haas Ferrari",         points:37,  wins:0,  podiums:0  },
    { name:"Yuki Tsunoda",      nat:"🇯🇵 JPN", team:"RB Honda RBPT",        points:30,  wins:0,  podiums:0  },
    { name:"Alex Albon",        nat:"🇹🇭 THA", team:"Williams Mercedes",    points:12,  wins:0,  podiums:0  },
    { name:"Daniel Ricciardo",  nat:"🇦🇺 AUS", team:"RB Honda RBPT",        points:12,  wins:0,  podiums:0  },
    { name:"Oliver Bearman",    nat:"🇬🇧 GBR", team:"Haas Ferrari",         points:7,   wins:0,  podiums:0  },
    { name:"Pierre Gasly",      nat:"🇫🇷 FRA", team:"Alpine Renault",       points:8,   wins:0,  podiums:0  },
    { name:"Kevin Magnussen",   nat:"🇩🇰 DEN", team:"Haas Ferrari",         points:14,  wins:0,  podiums:0  },
    { name:"Esteban Ocon",      nat:"🇫🇷 FRA", team:"Alpine Renault",       points:5,   wins:0,  podiums:0  },
    { name:"Valtteri Bottas",   nat:"🇫🇮 FIN", team:"Kick Sauber Ferrari",  points:0,   wins:0,  podiums:0  },
    { name:"Zhou Guanyu",       nat:"🇨🇳 CHN", team:"Kick Sauber Ferrari",  points:4,   wins:0,  podiums:0  },
    { name:"Logan Sargeant",    nat:"🇺🇸 USA", team:"Williams Mercedes",    points:0,   wins:0,  podiums:0  },
    { name:"Franco Colapinto",  nat:"🇦🇷 ARG", team:"Williams Mercedes",    points:5,   wins:0,  podiums:0  },
    { name:"Liam Lawson",       nat:"🇳🇿 NZL", team:"RB Honda RBPT",        points:4,   wins:0,  podiums:0  },
    { name:"Jack Doohan",       nat:"🇦🇺 AUS", team:"Alpine Renault",       points:0,   wins:0,  podiums:0  },
  ],

  /* ── 2023 ── */
  2023: [
    { name:"Max Verstappen",    nat:"🇳🇱 NED", team:"Red Bull Racing Honda RBPT", points:575, wins:19, podiums:21 },
    { name:"Sergio Perez",      nat:"🇲🇽 MEX", team:"Red Bull Racing Honda RBPT", points:285, wins:2,  podiums:7  },
    { name:"Lewis Hamilton",    nat:"🇬🇧 GBR", team:"Mercedes",             points:234, wins:1,  podiums:7  },
    { name:"Fernando Alonso",   nat:"🇪🇸 ESP", team:"Aston Martin Aramco Mercedes", points:206, wins:0, podiums:8 },
    { name:"Charles Leclerc",   nat:"🇲🇨 MON", team:"Ferrari",              points:206, wins:0,  podiums:7  },
    { name:"Lando Norris",      nat:"🇬🇧 GBR", team:"McLaren Mercedes",     points:205, wins:0,  podiums:6  },
    { name:"Carlos Sainz",      nat:"🇪🇸 ESP", team:"Ferrari",              points:200, wins:1,  podiums:6  },
    { name:"George Russell",    nat:"🇬🇧 GBR", team:"Mercedes",             points:175, wins:0,  podiums:3  },
    { name:"Oscar Piastri",     nat:"🇦🇺 AUS", team:"McLaren Mercedes",     points:97,  wins:0,  podiums:2  },
    { name:"Lance Stroll",      nat:"🇨🇦 CAN", team:"Aston Martin Aramco Mercedes", points:74, wins:0, podiums:3 },
    { name:"Pierre Gasly",      nat:"🇫🇷 FRA", team:"Alpine Renault",       points:62,  wins:0,  podiums:0  },
    { name:"Esteban Ocon",      nat:"🇫🇷 FRA", team:"Alpine Renault",       points:58,  wins:0,  podiums:0  },
    { name:"Alexander Albon",   nat:"🇹🇭 THA", team:"Williams Mercedes",    points:27,  wins:0,  podiums:0  },
    { name:"Yuki Tsunoda",      nat:"🇯🇵 JPN", team:"AlphaTauri Honda RBPT",points:17,  wins:0,  podiums:0  },
    { name:"Valtteri Bottas",   nat:"🇫🇮 FIN", team:"Alfa Romeo Ferrari",   points:10,  wins:0,  podiums:0  },
    { name:"Nico Hülkenberg",   nat:"🇩🇪 GER", team:"Haas Ferrari",         points:9,   wins:0,  podiums:0  },
    { name:"Daniel Ricciardo",  nat:"🇦🇺 AUS", team:"AlphaTauri Honda RBPT",points:6,   wins:0,  podiums:0  },
    { name:"Zhou Guanyu",       nat:"🇨🇳 CHN", team:"Alfa Romeo Ferrari",   points:6,   wins:0,  podiums:0  },
    { name:"Kevin Magnussen",   nat:"🇩🇰 DEN", team:"Haas Ferrari",         points:3,   wins:0,  podiums:0  },
    { name:"Liam Lawson",       nat:"🇳🇿 NZL", team:"AlphaTauri Honda RBPT",points:2,   wins:0,  podiums:0  },
    { name:"Logan Sargeant",    nat:"🇺🇸 USA", team:"Williams Mercedes",    points:1,   wins:0,  podiums:0  },
    { name:"Nyck De Vries",     nat:"🇳🇱 NED", team:"AlphaTauri Honda RBPT",points:0,   wins:0,  podiums:0  },
  ],

  /* ── 2022 ── */
  2022: [
    { name:"Max Verstappen",    nat:"🇳🇱 NED", team:"Red Bull Racing RBPT", points:454, wins:15, podiums:17 },
    { name:"Charles Leclerc",   nat:"🇲🇨 MON", team:"Ferrari",              points:308, wins:3,  podiums:10 },
    { name:"Sergio Perez",      nat:"🇲🇽 MEX", team:"Red Bull Racing RBPT", points:305, wins:2,  podiums:9  },
    { name:"George Russell",    nat:"🇬🇧 GBR", team:"Mercedes",             points:275, wins:1,  podiums:8  },
    { name:"Carlos Sainz",      nat:"🇪🇸 ESP", team:"Ferrari",              points:246, wins:1,  podiums:9  },
    { name:"Lewis Hamilton",    nat:"🇬🇧 GBR", team:"Mercedes",             points:240, wins:0,  podiums:7  },
    { name:"Lando Norris",      nat:"🇬🇧 GBR", team:"McLaren Mercedes",     points:122, wins:0,  podiums:0  },
    { name:"Esteban Ocon",      nat:"🇫🇷 FRA", team:"Alpine Renault",       points:92,  wins:0,  podiums:0  },
    { name:"Fernando Alonso",   nat:"🇪🇸 ESP", team:"Alpine Renault",       points:81,  wins:0,  podiums:2  },
    { name:"Valtteri Bottas",   nat:"🇫🇮 FIN", team:"Alfa Romeo Ferrari",   points:49,  wins:0,  podiums:0  },
    { name:"Daniel Ricciardo",  nat:"🇦🇺 AUS", team:"McLaren Mercedes",     points:37,  wins:0,  podiums:0  },
    { name:"Sebastian Vettel",  nat:"🇩🇪 GER", team:"Aston Martin Aramco Mercedes", points:37, wins:0, podiums:0 },
    { name:"Kevin Magnussen",   nat:"🇩🇰 DEN", team:"Haas Ferrari",         points:25,  wins:0,  podiums:0  },
    { name:"Pierre Gasly",      nat:"🇫🇷 FRA", team:"AlphaTauri RBPT",      points:23,  wins:0,  podiums:0  },
    { name:"Lance Stroll",      nat:"🇨🇦 CAN", team:"Aston Martin Aramco Mercedes", points:18, wins:0, podiums:0 },
    { name:"Mick Schumacher",   nat:"🇩🇪 GER", team:"Haas Ferrari",         points:12,  wins:0,  podiums:0  },
    { name:"Yuki Tsunoda",      nat:"🇯🇵 JPN", team:"AlphaTauri RBPT",      points:12,  wins:0,  podiums:0  },
    { name:"Zhou Guanyu",       nat:"🇨🇳 CHN", team:"Alfa Romeo Ferrari",   points:6,   wins:0,  podiums:0  },
    { name:"Alexander Albon",   nat:"🇹🇭 THA", team:"Williams Mercedes",    points:4,   wins:0,  podiums:0  },
    { name:"Nicholas Latifi",   nat:"🇨🇦 CAN", team:"Williams Mercedes",    points:2,   wins:0,  podiums:0  },
    { name:"Nyck De Vries",     nat:"🇳🇱 NED", team:"Williams Mercedes",    points:2,   wins:0,  podiums:0  },
    { name:"Nico Hülkenberg",   nat:"🇩🇪 GER", team:"Aston Martin Aramco Mercedes", points:0, wins:0, podiums:0 },
  ],

  /* ── 2021 ── */
  2021: [
    { name:"Max Verstappen",    nat:"🇳🇱 NED", team:"Red Bull Racing Honda", points:395.5, wins:10, podiums:18 },
    { name:"Lewis Hamilton",    nat:"🇬🇧 GBR", team:"Mercedes",              points:387.5, wins:8,  podiums:17 },
    { name:"Valtteri Bottas",   nat:"🇫🇮 FIN", team:"Mercedes",              points:226,   wins:1,  podiums:9  },
    { name:"Sergio Perez",      nat:"🇲🇽 MEX", team:"Red Bull Racing Honda", points:190,   wins:1,  podiums:6  },
    { name:"Carlos Sainz",      nat:"🇪🇸 ESP", team:"Ferrari",               points:164.5, wins:0,  podiums:3  },
    { name:"Lando Norris",      nat:"🇬🇧 GBR", team:"McLaren Mercedes",      points:160,   wins:0,  podiums:4  },
    { name:"Charles Leclerc",   nat:"🇲🇨 MON", team:"Ferrari",               points:159,   wins:0,  podiums:2  },
    { name:"Daniel Ricciardo",  nat:"🇦🇺 AUS", team:"McLaren Mercedes",      points:115,   wins:1,  podiums:3  },
    { name:"Pierre Gasly",      nat:"🇫🇷 FRA", team:"AlphaTauri Honda",      points:110,   wins:0,  podiums:1  },
    { name:"Fernando Alonso",   nat:"🇪🇸 ESP", team:"Alpine Renault",        points:81,    wins:0,  podiums:1  },
    { name:"Esteban Ocon",      nat:"🇫🇷 FRA", team:"Alpine Renault",        points:74,    wins:1,  podiums:1  },
    { name:"Sebastian Vettel",  nat:"🇩🇪 GER", team:"Aston Martin Mercedes", points:43,    wins:0,  podiums:0  },
    { name:"Lance Stroll",      nat:"🇨🇦 CAN", team:"Aston Martin Mercedes", points:34,    wins:0,  podiums:0  },
    { name:"Yuki Tsunoda",      nat:"🇯🇵 JPN", team:"AlphaTauri Honda",      points:32,    wins:0,  podiums:0  },
    { name:"George Russell",    nat:"🇬🇧 GBR", team:"Williams Mercedes",     points:16,    wins:0,  podiums:0  },
    { name:"Kimi Räikkönen",    nat:"🇫🇮 FIN", team:"Alfa Romeo Racing Ferrari", points:10, wins:0, podiums:0  },
    { name:"Nicholas Latifi",   nat:"🇨🇦 CAN", team:"Williams Mercedes",     points:7,     wins:0,  podiums:0  },
    { name:"Antonio Giovinazzi",nat:"🇮🇹 ITA", team:"Alfa Romeo Racing Ferrari", points:3,  wins:0, podiums:0  },
    { name:"Mick Schumacher",   nat:"🇩🇪 GER", team:"Haas Ferrari",          points:0,     wins:0,  podiums:0  },
    { name:"Robert Kubica",     nat:"🇵🇱 POL", team:"Alfa Romeo Racing Ferrari", points:0,  wins:0, podiums:0  },
    { name:"Nikita Mazepin",    nat:"🇷🇺 RAF", team:"Haas Ferrari",          points:0,     wins:0,  podiums:0  },
  ],

  /* ── 2020 ── */
  2020: [
    { name:"Lewis Hamilton",    nat:"🇬🇧 GBR", team:"Mercedes",              points:347, wins:11, podiums:14 },
    { name:"Valtteri Bottas",   nat:"🇫🇮 FIN", team:"Mercedes",              points:223, wins:2,  podiums:11 },
    { name:"Max Verstappen",    nat:"🇳🇱 NED", team:"Red Bull Racing Honda", points:214, wins:2,  podiums:11 },
    { name:"Sergio Perez",      nat:"🇲🇽 MEX", team:"Racing Point BWT Mercedes", points:125, wins:1, podiums:4 },
    { name:"Daniel Ricciardo",  nat:"🇦🇺 AUS", team:"Renault",               points:119, wins:0,  podiums:2  },
    { name:"Carlos Sainz",      nat:"🇪🇸 ESP", team:"McLaren Renault",       points:105, wins:0,  podiums:0  },
    { name:"Alexander Albon",   nat:"🇹🇭 THA", team:"Red Bull Racing Honda", points:105, wins:0,  podiums:2  },
    { name:"Charles Leclerc",   nat:"🇲🇨 MON", team:"Ferrari",               points:98,  wins:0,  podiums:2  },
    { name:"Lando Norris",      nat:"🇬🇧 GBR", team:"McLaren Renault",       points:97,  wins:0,  podiums:1  },
    { name:"Pierre Gasly",      nat:"🇫🇷 FRA", team:"AlphaTauri Honda",      points:75,  wins:1,  podiums:1  },
    { name:"Lance Stroll",      nat:"🇨🇦 CAN", team:"Racing Point BWT Mercedes", points:75, wins:0, podiums:1 },
    { name:"Esteban Ocon",      nat:"🇫🇷 FRA", team:"Renault",               points:62,  wins:0,  podiums:0  },
    { name:"Sebastian Vettel",  nat:"🇩🇪 GER", team:"Ferrari",               points:33,  wins:0,  podiums:0  },
    { name:"Daniil Kvyat",      nat:"🇷🇺 RUS", team:"AlphaTauri Honda",      points:32,  wins:0,  podiums:1  },
    { name:"Nico Hulkenberg",   nat:"🇩🇪 GER", team:"Racing Point BWT Mercedes", points:10, wins:0, podiums:0 },
    { name:"Kimi Räikkönen",    nat:"🇫🇮 FIN", team:"Alfa Romeo Racing Ferrari", points:4, wins:0, podiums:0 },
    { name:"Antonio Giovinazzi",nat:"🇮🇹 ITA", team:"Alfa Romeo Racing Ferrari", points:4, wins:0, podiums:0 },
    { name:"George Russell",    nat:"🇬🇧 GBR", team:"Williams Mercedes",     points:3,   wins:0,  podiums:0  },
    { name:"Romain Grosjean",   nat:"🇫🇷 FRA", team:"Haas Ferrari",          points:2,   wins:0,  podiums:0  },
    { name:"Kevin Magnussen",   nat:"🇩🇰 DEN", team:"Haas Ferrari",          points:1,   wins:0,  podiums:0  },
    { name:"Nicholas Latifi",   nat:"🇨🇦 CAN", team:"Williams Mercedes",     points:0,   wins:0,  podiums:0  },
    { name:"Jack Aitken",       nat:"🇬🇧 GBR", team:"Williams Mercedes",     points:0,   wins:0,  podiums:0  },
    { name:"Pietro Fittipaldi", nat:"🇧🇷 BRA", team:"Haas Ferrari",          points:0,   wins:0,  podiums:0  },
  ],
};

/* ══════════════════════════════════════
   CONSTRUCTOR DATA — HARDCODED CORRECT
══════════════════════════════════════ */
const constructorsByYear = {
  2026: [
    { team:"Mercedes",      points:135 },
    { team:"Ferrari",       points:90  },
    { team:"McLaren",       points:46  },
    { team:"Haas F1 Team",  points:18  },
    { team:"Alpine",        points:16  },
    { team:"Red Bull Racing",points:16 },
    { team:"Racing Bulls",  points:14  },
    { team:"Audi",          points:2   },
    { team:"Williams",      points:2   },
    { team:"Cadillac",      points:0   },
    { team:"Aston Martin",  points:0   },
  ],
  2025: [
    { team:"McLaren",             points:833 },
    { team:"Mercedes",            points:469 },
    { team:"Red Bull Racing Honda RBPT", points:451 },
    { team:"Ferrari",             points:398 },
    { team:"Williams Mercedes",   points:137 },
    { team:"Racing Bulls",        points:92  },
    { team:"Aston Martin",        points:89  },
    { team:"Haas F1 Team",        points:79  },
    { team:"Kick Sauber",         points:70  },
    { team:"Alpine Renault",      points:22  },
  ],
  2024: [
    { team:"McLaren Mercedes",              points:666 },
    { team:"Ferrari",                       points:652 },
    { team:"Red Bull Racing Honda RBPT",    points:589 },
    { team:"Mercedes",                      points:468 },
    { team:"Aston Martin Aramco Mercedes",  points:94  },
    { team:"Alpine Renault",                points:65  },
    { team:"Haas Ferrari",                  points:58  },
    { team:"RB Honda RBPT",                 points:46  },
    { team:"Williams Mercedes",             points:17  },
    { team:"Kick Sauber Ferrari",           points:4   },
  ],
  2023: [
    { team:"Red Bull Racing Honda RBPT",    points:860 },
    { team:"Mercedes",                      points:409 },
    { team:"Ferrari",                       points:406 },
    { team:"McLaren Mercedes",              points:302 },
    { team:"Aston Martin Aramco Mercedes",  points:280 },
    { team:"Alpine Renault",                points:120 },
    { team:"Williams Mercedes",             points:28  },
    { team:"AlphaTauri Honda RBPT",         points:25  },
    { team:"Alfa Romeo Ferrari",            points:16  },
    { team:"Haas Ferrari",                  points:12  },
  ],
  2022: [
    { team:"Red Bull Racing RBPT",          points:759 },
    { team:"Ferrari",                       points:554 },
    { team:"Mercedes",                      points:515 },
    { team:"Alpine Renault",                points:173 },
    { team:"McLaren Mercedes",              points:159 },
    { team:"Alfa Romeo Ferrari",            points:55  },
    { team:"Aston Martin Aramco Mercedes",  points:55  },
    { team:"Haas Ferrari",                  points:37  },
    { team:"AlphaTauri RBPT",               points:35  },
    { team:"Williams Mercedes",             points:8   },
  ],
  2021: [
    { team:"Mercedes",                      points:613.5 },
    { team:"Red Bull Racing Honda",         points:585.5 },
    { team:"Ferrari",                       points:323.5 },
    { team:"McLaren Mercedes",              points:275   },
    { team:"Alpine Renault",                points:155   },
    { team:"AlphaTauri Honda",              points:142   },
    { team:"Aston Martin Mercedes",         points:77    },
    { team:"Williams Mercedes",             points:23    },
    { team:"Alfa Romeo Racing Ferrari",     points:13    },
    { team:"Haas Ferrari",                  points:0     },
  ],
  2020: [
    { team:"Mercedes",                      points:573 },
    { team:"Red Bull Racing Honda",         points:319 },
    { team:"McLaren Renault",               points:202 },
    { team:"Racing Point BWT Mercedes",     points:195 },
    { team:"Renault",                       points:181 },
    { team:"Ferrari",                       points:131 },
    { team:"AlphaTauri Honda",              points:107 },
    { team:"Alfa Romeo Racing Ferrari",     points:8   },
    { team:"Haas Ferrari",                  points:3   },
    { team:"Williams Mercedes",             points:0   },
  ],
};

/* ══════════════════════════════════════
   CIRCUIT IMAGE FETCHING
   Uses Wikimedia API to fetch real circuit
   photos dynamically with CORS support
══════════════════════════════════════ */

/* Cache so we don't re-fetch */
const imgCache = {};

/* Wikipedia page titles for each circuit */
const CIRCUIT_WIKI = {
  "Bahrain International Circuit":       "Bahrain_International_Circuit",
  "Jeddah Corniche Circuit":             "Jeddah_Street_Circuit",
  "Albert Park Circuit":                 "Albert_Park_Circuit",
  "Circuit de Monaco":                   "Circuit_de_Monaco",
  "Circuit de Catalunya":                "Circuit_de_Barcelona-Catalunya",
  "Silverstone Circuit":                 "Silverstone_Circuit",
  "Hungaroring":                         "Hungaroring",
  "Circuit de Spa-Francorchamps":        "Circuit_de_Spa-Francorchamps",
  "Autodromo Nazionale Monza":           "Autodromo_Nazionale_di_Monza",
  "Marina Bay Street Circuit":           "Marina_Bay_Street_Circuit",
  "Suzuka International Racing Course":  "Suzuka_International_Racing_Course",
  "Circuit of The Americas":             "Circuit_of_the_Americas",
  "Autodromo Hermanos Rodriguez":        "Autódromo_Hermanos_Rodríguez",
  "Autodromo Jose Carlos Pace":          "Autódromo_José_Carlos_Pace",
  "Yas Marina Circuit":                  "Yas_Marina_Circuit",
  "Red Bull Ring":                       "Red_Bull_Ring",
  "Circuit Zandvoort":                   "Circuit_Zandvoort",
  "Baku City Circuit":                   "Baku_City_Circuit",
  "Circuit Gilles Villeneuve":           "Circuit_Gilles_Villeneuve",
  "Miami International Autodrome":       "Miami_International_Autodrome",
  "Losail International Circuit":        "Losail_International_Circuit",
  "Las Vegas Strip Circuit":             "Las_Vegas_Street_Circuit",
  "Shanghai International Circuit":      "Shanghai_International_Circuit",
  "Autodromo Enzo e Dino Ferrari":       "Autodromo_Enzo_e_Dino_Ferrari",
  "Sochi Autodrom":                      "Sochi_Autodrom",
  "Autodromo Internacional do Algarve":  "Algarve_International_Circuit",
  "Istanbul Park":                       "Istanbul_Park",
  "Nürburgring":                         "Nürburgring",
  "Circuit Paul Ricard":                 "Circuit_Paul_Ricard",
  "Mugello Circuit":                     "Mugello_Circuit",
};

/* Fallback satellite images via Google Maps Static API — no key needed for basic tiles */
const CIRCUIT_COORDS = {
  "Bahrain International Circuit":       { lat:26.0325, lng:50.5106 },
  "Jeddah Corniche Circuit":             { lat:21.6321, lng:39.1044 },
  "Albert Park Circuit":                 { lat:-37.8497, lng:144.9680 },
  "Circuit de Monaco":                   { lat:43.7347, lng:7.4206  },
  "Circuit de Catalunya":                { lat:41.5700, lng:2.2611  },
  "Silverstone Circuit":                 { lat:52.0786, lng:-1.0169 },
  "Hungaroring":                         { lat:47.5789, lng:19.2486 },
  "Circuit de Spa-Francorchamps":        { lat:50.4372, lng:5.9714  },
  "Autodromo Nazionale Monza":           { lat:45.6156, lng:9.2811  },
  "Marina Bay Street Circuit":           { lat:1.2914,  lng:103.8639},
  "Suzuka International Racing Course":  { lat:34.8431, lng:136.5407},
  "Circuit of The Americas":             { lat:30.1328, lng:-97.6411},
  "Autodromo Hermanos Rodriguez":        { lat:19.4042, lng:-99.0907},
  "Autodromo Jose Carlos Pace":          { lat:-23.7036, lng:-46.6997},
  "Yas Marina Circuit":                  { lat:24.4672, lng:54.6031 },
  "Red Bull Ring":                       { lat:47.2197, lng:14.7647 },
  "Circuit Zandvoort":                   { lat:52.3888, lng:4.5409  },
  "Baku City Circuit":                   { lat:40.3725, lng:49.8533 },
  "Circuit Gilles Villeneuve":           { lat:45.5000, lng:-73.5228},
  "Miami International Autodrome":       { lat:25.9581, lng:-80.2389},
  "Losail International Circuit":        { lat:25.4900, lng:51.4542 },
  "Las Vegas Strip Circuit":             { lat:36.1147, lng:-115.1728},
  "Shanghai International Circuit":      { lat:31.3389, lng:121.2200},
  "Autodromo Enzo e Dino Ferrari":       { lat:44.3439, lng:11.7167 },
  "Sochi Autodrom":                      { lat:43.4057, lng:39.9578 },
  "Autodromo Internacional do Algarve":  { lat:37.2272, lng:-8.6267 },
  "Istanbul Park":                       { lat:40.9517, lng:29.4050 },
  "Nürburgring":                         { lat:50.3356, lng:6.9475  },
  "Circuit Paul Ricard":                 { lat:43.2506, lng:5.7914  },
  "Mugello Circuit":                     { lat:43.9975, lng:11.3719 },
};

/* Build satellite tile URL (OpenStreetMap tiles — no API key, CORS-open) */
function latLngToTileXY(lat, lng, zoom) {
  const n = Math.pow(2, zoom);
  const x = Math.floor((lng + 180) / 360 * n);
  const latRad = lat * Math.PI / 180;
  const y = Math.floor((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n);
  return { x, y };
}

/* Primary: Wikimedia API  |  Fallback: ESRI satellite tile */
async function fetchCircuitImage(circuitName) {
  if (imgCache[circuitName]) return imgCache[circuitName];

  const wikiTitle = CIRCUIT_WIKI[circuitName];
  if (wikiTitle) {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wikiTitle)}&prop=pageimages&format=json&pithumbsize=600&origin=*`;
      const res = await fetch(url);
      const data = await res.json();
      const pages = data.query.pages;
      const page = Object.values(pages)[0];
      if (page && page.thumbnail && page.thumbnail.source) {
        imgCache[circuitName] = page.thumbnail.source;
        return page.thumbnail.source;
      }
    } catch(e) {}
  }

  /* Fallback: ESRI World Imagery satellite tile */
  const coords = CIRCUIT_COORDS[circuitName];
  if (coords) {
    const zoom = 15;
    const { x, y } = latLngToTileXY(coords.lat, coords.lng, zoom);
    const tileUrl = `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${y}/${x}`;
    imgCache[circuitName] = tileUrl;
    return tileUrl;
  }

  return null;
}

const racesByYear = {
  2026: [
    { round:1,  name:"Australian Grand Prix",      circuit:"Albert Park Circuit",                country:"Australia",    flag:"🇦🇺", date:"2026-03-15" },
    { round:2,  name:"Chinese Grand Prix",         circuit:"Shanghai International Circuit",     country:"China",        flag:"🇨🇳", date:"2026-03-22" },
    { round:3,  name:"Bahrain Grand Prix",         circuit:"Bahrain International Circuit",      country:"Bahrain",      flag:"🇧🇭", date:"2026-04-05" },
    { round:4,  name:"Saudi Arabian Grand Prix",   circuit:"Jeddah Corniche Circuit",            country:"Saudi Arabia", flag:"🇸🇦", date:"2026-04-19" },
    { round:5,  name:"Miami Grand Prix",           circuit:"Miami International Autodrome",      country:"USA",          flag:"🇺🇸", date:"2026-05-03" },
    { round:6,  name:"Emilia Romagna Grand Prix",  circuit:"Autodromo Enzo e Dino Ferrari",      country:"Italy",        flag:"🇮🇹", date:"2026-05-17" },
    { round:7,  name:"Monaco Grand Prix",          circuit:"Circuit de Monaco",                 country:"Monaco",       flag:"🇲🇨", date:"2026-05-24" },
    { round:8,  name:"Spanish Grand Prix",         circuit:"Circuit de Catalunya",              country:"Spain",        flag:"🇪🇸", date:"2026-06-07" },
    { round:9,  name:"Canadian Grand Prix",        circuit:"Circuit Gilles Villeneuve",         country:"Canada",       flag:"🇨🇦", date:"2026-06-14" },
    { round:10, name:"Austrian Grand Prix",        circuit:"Red Bull Ring",                     country:"Austria",      flag:"🇦🇹", date:"2026-06-28" },
    { round:11, name:"British Grand Prix",         circuit:"Silverstone Circuit",               country:"UK",           flag:"🇬🇧", date:"2026-07-05" },
    { round:12, name:"Belgian Grand Prix",         circuit:"Circuit de Spa-Francorchamps",     country:"Belgium",      flag:"🇧🇪", date:"2026-07-26" },
    { round:13, name:"Hungarian Grand Prix",       circuit:"Hungaroring",                       country:"Hungary",      flag:"🇭🇺", date:"2026-08-02" },
    { round:14, name:"Dutch Grand Prix",           circuit:"Circuit Zandvoort",                country:"Netherlands",  flag:"🇳🇱", date:"2026-08-30" },
    { round:15, name:"Italian Grand Prix",         circuit:"Autodromo Nazionale Monza",        country:"Italy",        flag:"🇮🇹", date:"2026-09-06" },
    { round:16, name:"Japanese Grand Prix",        circuit:"Suzuka International Racing Course",country:"Japan",        flag:"🇯🇵", date:"2026-09-20" },
    { round:17, name:"Singapore Grand Prix",       circuit:"Marina Bay Street Circuit",        country:"Singapore",    flag:"🇸🇬", date:"2026-10-04" },
    { round:18, name:"Azerbaijan Grand Prix",      circuit:"Baku City Circuit",                country:"Azerbaijan",   flag:"🇦🇿", date:"2026-10-18" },
    { round:19, name:"United States Grand Prix",   circuit:"Circuit of The Americas",          country:"USA",          flag:"🇺🇸", date:"2026-11-01" },
    { round:20, name:"Mexico City Grand Prix",     circuit:"Autodromo Hermanos Rodriguez",     country:"Mexico",       flag:"🇲🇽", date:"2026-11-08" },
    { round:21, name:"São Paulo Grand Prix",       circuit:"Autodromo Jose Carlos Pace",       country:"Brazil",       flag:"🇧🇷", date:"2026-11-15" },
    { round:22, name:"Las Vegas Grand Prix",       circuit:"Las Vegas Strip Circuit",          country:"USA",          flag:"🇺🇸", date:"2026-11-21" },
    { round:23, name:"Qatar Grand Prix",           circuit:"Losail International Circuit",     country:"Qatar",        flag:"🇶🇦", date:"2026-11-29" },
    { round:24, name:"Abu Dhabi Grand Prix",       circuit:"Yas Marina Circuit",               country:"UAE",          flag:"🇦🇪", date:"2026-12-06" },
  ],
  2025: [
    { round:1,  name:"Australian Grand Prix",      circuit:"Albert Park Circuit",               country:"Australia",    flag:"🇦🇺", date:"2025-03-16" },
    { round:2,  name:"Chinese Grand Prix",         circuit:"Shanghai International Circuit",    country:"China",        flag:"🇨🇳", date:"2025-03-23" },
    { round:3,  name:"Japanese Grand Prix",        circuit:"Suzuka International Racing Course",country:"Japan",        flag:"🇯🇵", date:"2025-04-06" },
    { round:4,  name:"Bahrain Grand Prix",         circuit:"Bahrain International Circuit",     country:"Bahrain",      flag:"🇧🇭", date:"2025-04-13" },
    { round:5,  name:"Saudi Arabian Grand Prix",   circuit:"Jeddah Corniche Circuit",           country:"Saudi Arabia", flag:"🇸🇦", date:"2025-04-20" },
    { round:6,  name:"Miami Grand Prix",           circuit:"Miami International Autodrome",     country:"USA",          flag:"🇺🇸", date:"2025-05-04" },
    { round:7,  name:"Emilia Romagna Grand Prix",  circuit:"Autodromo Enzo e Dino Ferrari",     country:"Italy",        flag:"🇮🇹", date:"2025-05-18" },
    { round:8,  name:"Monaco Grand Prix",          circuit:"Circuit de Monaco",                country:"Monaco",       flag:"🇲🇨", date:"2025-05-25" },
    { round:9,  name:"Spanish Grand Prix",         circuit:"Circuit de Catalunya",             country:"Spain",        flag:"🇪🇸", date:"2025-06-01" },
    { round:10, name:"Canadian Grand Prix",        circuit:"Circuit Gilles Villeneuve",        country:"Canada",       flag:"🇨🇦", date:"2025-06-15" },
    { round:11, name:"Austrian Grand Prix",        circuit:"Red Bull Ring",                    country:"Austria",      flag:"🇦🇹", date:"2025-06-29" },
    { round:12, name:"British Grand Prix",         circuit:"Silverstone Circuit",              country:"UK",           flag:"🇬🇧", date:"2025-07-06" },
    { round:13, name:"Belgian Grand Prix",         circuit:"Circuit de Spa-Francorchamps",    country:"Belgium",      flag:"🇧🇪", date:"2025-07-27" },
    { round:14, name:"Hungarian Grand Prix",       circuit:"Hungaroring",                      country:"Hungary",      flag:"🇭🇺", date:"2025-08-03" },
    { round:15, name:"Dutch Grand Prix",           circuit:"Circuit Zandvoort",               country:"Netherlands",  flag:"🇳🇱", date:"2025-08-31" },
    { round:16, name:"Italian Grand Prix",         circuit:"Autodromo Nazionale Monza",       country:"Italy",        flag:"🇮🇹", date:"2025-09-07" },
    { round:17, name:"Azerbaijan Grand Prix",      circuit:"Baku City Circuit",               country:"Azerbaijan",   flag:"🇦🇿", date:"2025-09-21" },
    { round:18, name:"Singapore Grand Prix",       circuit:"Marina Bay Street Circuit",       country:"Singapore",    flag:"🇸🇬", date:"2025-10-05" },
    { round:19, name:"United States Grand Prix",   circuit:"Circuit of The Americas",         country:"USA",          flag:"🇺🇸", date:"2025-10-19" },
    { round:20, name:"Mexico City Grand Prix",     circuit:"Autodromo Hermanos Rodriguez",    country:"Mexico",       flag:"🇲🇽", date:"2025-10-26" },
    { round:21, name:"São Paulo Grand Prix",       circuit:"Autodromo Jose Carlos Pace",      country:"Brazil",       flag:"🇧🇷", date:"2025-11-09" },
    { round:22, name:"Las Vegas Grand Prix",       circuit:"Las Vegas Strip Circuit",         country:"USA",          flag:"🇺🇸", date:"2025-11-22" },
    { round:23, name:"Qatar Grand Prix",           circuit:"Losail International Circuit",    country:"Qatar",        flag:"🇶🇦", date:"2025-11-30" },
    { round:24, name:"Abu Dhabi Grand Prix",       circuit:"Yas Marina Circuit",              country:"UAE",          flag:"🇦🇪", date:"2025-12-07" },
  ],
  2024: [
    { round:1,  name:"Bahrain Grand Prix",         circuit:"Bahrain International Circuit",     country:"Bahrain",      flag:"🇧🇭", date:"2024-03-02" },
    { round:2,  name:"Saudi Arabian Grand Prix",   circuit:"Jeddah Corniche Circuit",           country:"Saudi Arabia", flag:"🇸🇦", date:"2024-03-09" },
    { round:3,  name:"Australian Grand Prix",      circuit:"Albert Park Circuit",               country:"Australia",    flag:"🇦🇺", date:"2024-03-24" },
    { round:4,  name:"Japanese Grand Prix",        circuit:"Suzuka International Racing Course",country:"Japan",        flag:"🇯🇵", date:"2024-04-07" },
    { round:5,  name:"Chinese Grand Prix",         circuit:"Shanghai International Circuit",    country:"China",        flag:"🇨🇳", date:"2024-04-21" },
    { round:6,  name:"Miami Grand Prix",           circuit:"Miami International Autodrome",     country:"USA",          flag:"🇺🇸", date:"2024-05-05" },
    { round:7,  name:"Emilia Romagna Grand Prix",  circuit:"Autodromo Enzo e Dino Ferrari",     country:"Italy",        flag:"🇮🇹", date:"2024-05-19" },
    { round:8,  name:"Monaco Grand Prix",          circuit:"Circuit de Monaco",                country:"Monaco",       flag:"🇲🇨", date:"2024-05-26" },
    { round:9,  name:"Canadian Grand Prix",        circuit:"Circuit Gilles Villeneuve",        country:"Canada",       flag:"🇨🇦", date:"2024-06-09" },
    { round:10, name:"Spanish Grand Prix",         circuit:"Circuit de Catalunya",             country:"Spain",        flag:"🇪🇸", date:"2024-06-23" },
    { round:11, name:"Austrian Grand Prix",        circuit:"Red Bull Ring",                    country:"Austria",      flag:"🇦🇹", date:"2024-06-30" },
    { round:12, name:"British Grand Prix",         circuit:"Silverstone Circuit",              country:"UK",           flag:"🇬🇧", date:"2024-07-07" },
    { round:13, name:"Hungarian Grand Prix",       circuit:"Hungaroring",                      country:"Hungary",      flag:"🇭🇺", date:"2024-07-21" },
    { round:14, name:"Belgian Grand Prix",         circuit:"Circuit de Spa-Francorchamps",    country:"Belgium",      flag:"🇧🇪", date:"2024-07-28" },
    { round:15, name:"Dutch Grand Prix",           circuit:"Circuit Zandvoort",               country:"Netherlands",  flag:"🇳🇱", date:"2024-08-25" },
    { round:16, name:"Italian Grand Prix",         circuit:"Autodromo Nazionale Monza",       country:"Italy",        flag:"🇮🇹", date:"2024-09-01" },
    { round:17, name:"Azerbaijan Grand Prix",      circuit:"Baku City Circuit",               country:"Azerbaijan",   flag:"🇦🇿", date:"2024-09-15" },
    { round:18, name:"Singapore Grand Prix",       circuit:"Marina Bay Street Circuit",       country:"Singapore",    flag:"🇸🇬", date:"2024-09-22" },
    { round:19, name:"United States Grand Prix",   circuit:"Circuit of The Americas",         country:"USA",          flag:"🇺🇸", date:"2024-10-20" },
    { round:20, name:"Mexico City Grand Prix",     circuit:"Autodromo Hermanos Rodriguez",    country:"Mexico",       flag:"🇲🇽", date:"2024-10-27" },
    { round:21, name:"São Paulo Grand Prix",       circuit:"Autodromo Jose Carlos Pace",      country:"Brazil",       flag:"🇧🇷", date:"2024-11-03" },
    { round:22, name:"Las Vegas Grand Prix",       circuit:"Las Vegas Strip Circuit",         country:"USA",          flag:"🇺🇸", date:"2024-11-23" },
    { round:23, name:"Qatar Grand Prix",           circuit:"Losail International Circuit",    country:"Qatar",        flag:"🇶🇦", date:"2024-12-01" },
    { round:24, name:"Abu Dhabi Grand Prix",       circuit:"Yas Marina Circuit",              country:"UAE",          flag:"🇦🇪", date:"2024-12-08" },
  ],
  2023: [
    { round:1,  name:"Bahrain Grand Prix",         circuit:"Bahrain International Circuit",     country:"Bahrain",      flag:"🇧🇭", date:"2023-03-05" },
    { round:2,  name:"Saudi Arabian Grand Prix",   circuit:"Jeddah Corniche Circuit",           country:"Saudi Arabia", flag:"🇸🇦", date:"2023-03-19" },
    { round:3,  name:"Australian Grand Prix",      circuit:"Albert Park Circuit",               country:"Australia",    flag:"🇦🇺", date:"2023-04-02" },
    { round:4,  name:"Azerbaijan Grand Prix",      circuit:"Baku City Circuit",                country:"Azerbaijan",   flag:"🇦🇿", date:"2023-04-30" },
    { round:5,  name:"Miami Grand Prix",           circuit:"Miami International Autodrome",     country:"USA",          flag:"🇺🇸", date:"2023-05-07" },
    { round:6,  name:"Monaco Grand Prix",          circuit:"Circuit de Monaco",                country:"Monaco",       flag:"🇲🇨", date:"2023-05-28" },
    { round:7,  name:"Spanish Grand Prix",         circuit:"Circuit de Catalunya",             country:"Spain",        flag:"🇪🇸", date:"2023-06-04" },
    { round:8,  name:"Canadian Grand Prix",        circuit:"Circuit Gilles Villeneuve",        country:"Canada",       flag:"🇨🇦", date:"2023-06-18" },
    { round:9,  name:"Austrian Grand Prix",        circuit:"Red Bull Ring",                    country:"Austria",      flag:"🇦🇹", date:"2023-07-02" },
    { round:10, name:"British Grand Prix",         circuit:"Silverstone Circuit",              country:"UK",           flag:"🇬🇧", date:"2023-07-09" },
    { round:11, name:"Hungarian Grand Prix",       circuit:"Hungaroring",                      country:"Hungary",      flag:"🇭🇺", date:"2023-07-23" },
    { round:12, name:"Belgian Grand Prix",         circuit:"Circuit de Spa-Francorchamps",    country:"Belgium",      flag:"🇧🇪", date:"2023-07-30" },
    { round:13, name:"Dutch Grand Prix",           circuit:"Circuit Zandvoort",               country:"Netherlands",  flag:"🇳🇱", date:"2023-08-27" },
    { round:14, name:"Italian Grand Prix",         circuit:"Autodromo Nazionale Monza",       country:"Italy",        flag:"🇮🇹", date:"2023-09-03" },
    { round:15, name:"Singapore Grand Prix",       circuit:"Marina Bay Street Circuit",       country:"Singapore",    flag:"🇸🇬", date:"2023-09-17" },
    { round:16, name:"Japanese Grand Prix",        circuit:"Suzuka International Racing Course",country:"Japan",       flag:"🇯🇵", date:"2023-09-24" },
    { round:17, name:"Qatar Grand Prix",           circuit:"Losail International Circuit",    country:"Qatar",        flag:"🇶🇦", date:"2023-10-08" },
    { round:18, name:"United States Grand Prix",   circuit:"Circuit of The Americas",         country:"USA",          flag:"🇺🇸", date:"2023-10-22" },
    { round:19, name:"Mexico City Grand Prix",     circuit:"Autodromo Hermanos Rodriguez",    country:"Mexico",       flag:"🇲🇽", date:"2023-10-29" },
    { round:20, name:"São Paulo Grand Prix",       circuit:"Autodromo Jose Carlos Pace",      country:"Brazil",       flag:"🇧🇷", date:"2023-11-05" },
    { round:21, name:"Las Vegas Grand Prix",       circuit:"Las Vegas Strip Circuit",         country:"USA",          flag:"🇺🇸", date:"2023-11-18" },
    { round:22, name:"Abu Dhabi Grand Prix",       circuit:"Yas Marina Circuit",              country:"UAE",          flag:"🇦🇪", date:"2023-11-26" },
  ],
  2022: [
    { round:1,  name:"Bahrain Grand Prix",         circuit:"Bahrain International Circuit",     country:"Bahrain",      flag:"🇧🇭", date:"2022-03-20" },
    { round:2,  name:"Saudi Arabian Grand Prix",   circuit:"Jeddah Corniche Circuit",           country:"Saudi Arabia", flag:"🇸🇦", date:"2022-03-27" },
    { round:3,  name:"Australian Grand Prix",      circuit:"Albert Park Circuit",               country:"Australia",    flag:"🇦🇺", date:"2022-04-10" },
    { round:4,  name:"Emilia Romagna Grand Prix",  circuit:"Autodromo Enzo e Dino Ferrari",     country:"Italy",        flag:"🇮🇹", date:"2022-04-24" },
    { round:5,  name:"Miami Grand Prix",           circuit:"Miami International Autodrome",     country:"USA",          flag:"🇺🇸", date:"2022-05-08" },
    { round:6,  name:"Spanish Grand Prix",         circuit:"Circuit de Catalunya",             country:"Spain",        flag:"🇪🇸", date:"2022-05-22" },
    { round:7,  name:"Monaco Grand Prix",          circuit:"Circuit de Monaco",                country:"Monaco",       flag:"🇲🇨", date:"2022-05-29" },
    { round:8,  name:"Azerbaijan Grand Prix",      circuit:"Baku City Circuit",               country:"Azerbaijan",   flag:"🇦🇿", date:"2022-06-12" },
    { round:9,  name:"Canadian Grand Prix",        circuit:"Circuit Gilles Villeneuve",        country:"Canada",       flag:"🇨🇦", date:"2022-06-19" },
    { round:10, name:"British Grand Prix",         circuit:"Silverstone Circuit",              country:"UK",           flag:"🇬🇧", date:"2022-07-03" },
    { round:11, name:"Austrian Grand Prix",        circuit:"Red Bull Ring",                    country:"Austria",      flag:"🇦🇹", date:"2022-07-10" },
    { round:12, name:"French Grand Prix",          circuit:"Circuit Paul Ricard",              country:"France",       flag:"🇫🇷", date:"2022-07-24" },
    { round:13, name:"Hungarian Grand Prix",       circuit:"Hungaroring",                      country:"Hungary",      flag:"🇭🇺", date:"2022-07-31" },
    { round:14, name:"Belgian Grand Prix",         circuit:"Circuit de Spa-Francorchamps",    country:"Belgium",      flag:"🇧🇪", date:"2022-08-28" },
    { round:15, name:"Dutch Grand Prix",           circuit:"Circuit Zandvoort",               country:"Netherlands",  flag:"🇳🇱", date:"2022-09-04" },
    { round:16, name:"Italian Grand Prix",         circuit:"Autodromo Nazionale Monza",       country:"Italy",        flag:"🇮🇹", date:"2022-09-11" },
    { round:17, name:"Singapore Grand Prix",       circuit:"Marina Bay Street Circuit",       country:"Singapore",    flag:"🇸🇬", date:"2022-10-02" },
    { round:18, name:"Japanese Grand Prix",        circuit:"Suzuka International Racing Course",country:"Japan",       flag:"🇯🇵", date:"2022-10-09" },
    { round:19, name:"United States Grand Prix",   circuit:"Circuit of The Americas",         country:"USA",          flag:"🇺🇸", date:"2022-10-23" },
    { round:20, name:"Mexico City Grand Prix",     circuit:"Autodromo Hermanos Rodriguez",    country:"Mexico",       flag:"🇲🇽", date:"2022-10-30" },
    { round:21, name:"São Paulo Grand Prix",       circuit:"Autodromo Jose Carlos Pace",      country:"Brazil",       flag:"🇧🇷", date:"2022-11-13" },
    { round:22, name:"Abu Dhabi Grand Prix",       circuit:"Yas Marina Circuit",              country:"UAE",          flag:"🇦🇪", date:"2022-11-20" },
  ],
  2021: [
    { round:1,  name:"Bahrain Grand Prix",         circuit:"Bahrain International Circuit",     country:"Bahrain",      flag:"🇧🇭", date:"2021-03-28" },
    { round:2,  name:"Emilia Romagna Grand Prix",  circuit:"Autodromo Enzo e Dino Ferrari",     country:"Italy",        flag:"🇮🇹", date:"2021-04-18" },
    { round:3,  name:"Portuguese Grand Prix",      circuit:"Autodromo Internacional do Algarve",country:"Portugal",    flag:"🇵🇹", date:"2021-05-02" },
    { round:4,  name:"Spanish Grand Prix",         circuit:"Circuit de Catalunya",             country:"Spain",        flag:"🇪🇸", date:"2021-05-09" },
    { round:5,  name:"Monaco Grand Prix",          circuit:"Circuit de Monaco",                country:"Monaco",       flag:"🇲🇨", date:"2021-05-23" },
    { round:6,  name:"Azerbaijan Grand Prix",      circuit:"Baku City Circuit",               country:"Azerbaijan",   flag:"🇦🇿", date:"2021-06-06" },
    { round:7,  name:"French Grand Prix",          circuit:"Circuit Paul Ricard",              country:"France",       flag:"🇫🇷", date:"2021-06-20" },
    { round:8,  name:"Styrian Grand Prix",         circuit:"Red Bull Ring",                    country:"Austria",      flag:"🇦🇹", date:"2021-06-27" },
    { round:9,  name:"Austrian Grand Prix",        circuit:"Red Bull Ring",                    country:"Austria",      flag:"🇦🇹", date:"2021-07-04" },
    { round:10, name:"British Grand Prix",         circuit:"Silverstone Circuit",              country:"UK",           flag:"🇬🇧", date:"2021-07-18" },
    { round:11, name:"Hungarian Grand Prix",       circuit:"Hungaroring",                      country:"Hungary",      flag:"🇭🇺", date:"2021-08-01" },
    { round:12, name:"Belgian Grand Prix",         circuit:"Circuit de Spa-Francorchamps",    country:"Belgium",      flag:"🇧🇪", date:"2021-08-29" },
    { round:13, name:"Dutch Grand Prix",           circuit:"Circuit Zandvoort",               country:"Netherlands",  flag:"🇳🇱", date:"2021-09-05" },
    { round:14, name:"Italian Grand Prix",         circuit:"Autodromo Nazionale Monza",       country:"Italy",        flag:"🇮🇹", date:"2021-09-12" },
    { round:15, name:"Russian Grand Prix",         circuit:"Sochi Autodrom",                  country:"Russia",       flag:"🇷🇺", date:"2021-09-26" },
    { round:16, name:"Turkish Grand Prix",         circuit:"Istanbul Park",                    country:"Turkey",       flag:"🇹🇷", date:"2021-10-10" },
    { round:17, name:"United States Grand Prix",   circuit:"Circuit of The Americas",         country:"USA",          flag:"🇺🇸", date:"2021-10-24" },
    { round:18, name:"Mexico City Grand Prix",     circuit:"Autodromo Hermanos Rodriguez",    country:"Mexico",       flag:"🇲🇽", date:"2021-11-07" },
    { round:19, name:"São Paulo Grand Prix",       circuit:"Autodromo Jose Carlos Pace",      country:"Brazil",       flag:"🇧🇷", date:"2021-11-14" },
    { round:20, name:"Qatar Grand Prix",           circuit:"Losail International Circuit",    country:"Qatar",        flag:"🇶🇦", date:"2021-11-21" },
    { round:21, name:"Saudi Arabian Grand Prix",   circuit:"Jeddah Corniche Circuit",          country:"Saudi Arabia", flag:"🇸🇦", date:"2021-12-05" },
    { round:22, name:"Abu Dhabi Grand Prix",       circuit:"Yas Marina Circuit",              country:"UAE",          flag:"🇦🇪", date:"2021-12-12" },
  ],
  2020: [
    { round:1,  name:"Austrian Grand Prix",        circuit:"Red Bull Ring",                    country:"Austria",      flag:"🇦🇹", date:"2020-07-05" },
    { round:2,  name:"Styrian Grand Prix",         circuit:"Red Bull Ring",                    country:"Austria",      flag:"🇦🇹", date:"2020-07-12" },
    { round:3,  name:"Hungarian Grand Prix",       circuit:"Hungaroring",                      country:"Hungary",      flag:"🇭🇺", date:"2020-07-19" },
    { round:4,  name:"British Grand Prix",         circuit:"Silverstone Circuit",              country:"UK",           flag:"🇬🇧", date:"2020-08-02" },
    { round:5,  name:"70th Anniversary Grand Prix",circuit:"Silverstone Circuit",              country:"UK",           flag:"🇬🇧", date:"2020-08-09" },
    { round:6,  name:"Spanish Grand Prix",         circuit:"Circuit de Catalunya",             country:"Spain",        flag:"🇪🇸", date:"2020-08-16" },
    { round:7,  name:"Belgian Grand Prix",         circuit:"Circuit de Spa-Francorchamps",    country:"Belgium",      flag:"🇧🇪", date:"2020-08-30" },
    { round:8,  name:"Italian Grand Prix",         circuit:"Autodromo Nazionale Monza",       country:"Italy",        flag:"🇮🇹", date:"2020-09-06" },
    { round:9,  name:"Tuscan Grand Prix",          circuit:"Mugello Circuit",                  country:"Italy",        flag:"🇮🇹", date:"2020-09-13" },
    { round:10, name:"Russian Grand Prix",         circuit:"Sochi Autodrom",                  country:"Russia",       flag:"🇷🇺", date:"2020-09-27" },
    { round:11, name:"Eifel Grand Prix",           circuit:"Nürburgring",                     country:"Germany",      flag:"🇩🇪", date:"2020-10-11" },
    { round:12, name:"Portuguese Grand Prix",      circuit:"Autodromo Internacional do Algarve",country:"Portugal",   flag:"🇵🇹", date:"2020-10-25" },
    { round:13, name:"Emilia Romagna Grand Prix",  circuit:"Autodromo Enzo e Dino Ferrari",    country:"Italy",        flag:"🇮🇹", date:"2020-11-01" },
    { round:14, name:"Turkish Grand Prix",         circuit:"Istanbul Park",                    country:"Turkey",       flag:"🇹🇷", date:"2020-11-15" },
    { round:15, name:"Bahrain Grand Prix",         circuit:"Bahrain International Circuit",     country:"Bahrain",      flag:"🇧🇭", date:"2020-11-29" },
    { round:16, name:"Sakhir Grand Prix",          circuit:"Bahrain International Circuit",     country:"Bahrain",      flag:"🇧🇭", date:"2020-12-06" },
    { round:17, name:"Abu Dhabi Grand Prix",       circuit:"Yas Marina Circuit",               country:"UAE",          flag:"🇦🇪", date:"2020-12-13" },
  ],
};

/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
let currentYear = 2026;
let liveDrivers = [];
let sortAsc = false;

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  populateYearSelects();
  setupNav();
  setupSearch();
  loadYear(2026);
  displayConstructors(2026);
  displayRaces(2026);
  setupNavScroll();
});

function populateYearSelects() {
  const years = [2026,2025,2024,2023,2022,2021,2020];
  ["standings-year","constructor-year","calendarYear"].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = "";
    years.forEach(y => {
      const opt = document.createElement("option");
      opt.value = y; opt.textContent = y;
      if (y === 2026) opt.selected = true;
      sel.appendChild(opt);
    });
  });
  document.getElementById("standings-year").addEventListener("change", function(){ loadYear(+this.value); });
  document.getElementById("constructor-year").addEventListener("change", function(){ displayConstructors(+this.value); });
}

function loadYear(year) {
  currentYear = year;
  liveDrivers = JSON.parse(JSON.stringify(driversByYear[year] || []));
  sortAsc = false;
  displayDrivers(liveDrivers);
  displayDriverCards(liveDrivers);
  const lbl = document.getElementById("profileYearLabel");
  if (lbl) lbl.textContent = year;
}

/* ══════════════════════════════════════
   DISPLAY DRIVERS TABLE
══════════════════════════════════════ */
function displayDrivers(list) {
  const sorted = [...list].sort((a,b) => b.points - a.points);
  const tbody = document.getElementById("driversBody");
  tbody.innerHTML = "";

  sorted.forEach((d, i) => {
    const rank = i + 1;
    const color = tc(d.team);
    const medal = rank===1?"gold":rank===2?"silver":rank===3?"bronze":"";
    const tr = document.createElement("tr");
    if (medal) tr.classList.add(medal);

    const img = dImg(d.name);
    const car = carImg(d.team);

    tr.innerHTML = `
      <td class="pos-cell">${rank}</td>
      <td>
        <div class="driver-cell">
          <img class="driver-thumb" src="${img}" alt="${d.name}" onerror="this.src='https://placehold.co/42x42/111/555?text=${d.name.split(' ').pop()[0]}'"/>
          <div>
            <div class="driver-name">${d.name}</div>
            <div class="driver-num">${d.nat}</div>
          </div>
        </div>
      </td>
      <td><span class="nat-flag">${d.nat.split(' ')[0]}</span></td>
      <td><span class="team-color-text" style="color:${color.accent}">${d.team}</span></td>
      <td>${car ? `<img class="car-img-cell" src="${car}" alt="${d.team}" onerror="this.style.display='none'"/>` : "—"}</td>
      <td class="pts-cell">${d.points}</td>
    `;
    tr.addEventListener("click", () => openModal(d));
    tbody.appendChild(tr);
  });
}

/* ══════════════════════════════════════
   SORT
══════════════════════════════════════ */
function sortDrivers() {
  sortAsc = !sortAsc;
  const sorted = [...liveDrivers].sort((a,b) => sortAsc ? a.points - b.points : b.points - a.points);
  displayDrivers(sorted);
}

/* ══════════════════════════════════════
   SEARCH
══════════════════════════════════════ */
function searchDriver(q) {
  const ql = q.toLowerCase();
  document.querySelectorAll("#driversBody tr").forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(ql) ? "" : "none";
  });
}

function setupSearch() {
  document.getElementById("searchInput").addEventListener("input", e => searchDriver(e.target.value));
}

/* ══════════════════════════════════════
   DRIVER CARDS
══════════════════════════════════════ */
function displayDriverCards(list) {
  const grid = document.getElementById("driverCards");
  grid.innerHTML = "";
  const sorted = [...list].sort((a,b) => b.points - a.points);

  sorted.forEach(d => {
    const color = tc(d.team);
    const img = dImg(d.name);
    const div = document.createElement("div");
    div.className = "driver-card";
    div.style.background = `linear-gradient(155deg, ${color.primary} 0%, #0d0d0d 100%)`;
    div.style.borderColor = color.accent + "40";

    div.innerHTML = `
      <div class="card-top">
        <div class="card-team-txt">${d.team}</div>
        <div class="card-pts-block"><span class="card-pts-val">${d.points}</span><span class="card-pts-lbl">PTS</span></div>
      </div>
      <div class="card-img-wrap">
        <img class="card-img" src="${img}" alt="${d.name}" onerror="this.src='https://placehold.co/95x105/111/555?text=${d.name.split(' ').pop()[0]}'"/>
      </div>
      <div class="card-body">
        <div class="card-name">${d.name}</div>
        <div class="card-sub">${d.wins} wins · ${d.podiums} podiums</div>
      </div>
      <div class="card-bottom-stripe" style="background:linear-gradient(90deg,${color.primary},${color.accent})"></div>
    `;
    div.addEventListener("click", () => openModal(d));
    grid.appendChild(div);
  });
}

/* ══════════════════════════════════════
   CONSTRUCTORS
══════════════════════════════════════ */
function displayConstructors(year) {
  const data = constructorsByYear[year] || [];
  const maxPts = data.reduce((m,c) => Math.max(m,c.points), 1);
  const tbody = document.getElementById("constructorsBody");
  tbody.innerHTML = "";

  data.forEach((con, i) => {
    const rank = i + 1;
    const color = tc(con.team);
    const medal = rank===1?"gold":rank===2?"silver":rank===3?"bronze":"";
    const pct = Math.round((con.points / maxPts) * 100);

    /* gather driver names for this team+year */
    const drivers = (driversByYear[year]||[])
      .filter(d => d.team === con.team)
      .map(d => d.name.split(" ").pop())
      .slice(0,3);

    const tr = document.createElement("tr");
    if (medal) tr.classList.add(medal);
    tr.innerHTML = `
      <td class="pos-cell">${rank}</td>
      <td>
        <div class="team-dot-cell">
          <span class="team-dot" style="background:${color.accent}"></span>
          <span class="con-name">${con.team}</span>
        </div>
      </td>
      <td>
        <div class="driver-pills">
          ${drivers.map(n=>`<span class="dpill">${n}</span>`).join("")}
        </div>
      </td>
      <td class="pts-cell">${con.points}</td>
      <td class="bar-wrap">
        <div class="pts-bar-bg">
          <div class="pts-bar-fill" style="width:${pct}%;background:linear-gradient(90deg,${color.primary},${color.accent})"></div>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/* ══════════════════════════════════════
   RACE CALENDAR
══════════════════════════════════════ */
function getRaceStatus(dateStr) {
  const today = new Date(); today.setHours(0,0,0,0);
  const rd = new Date(dateStr); rd.setHours(0,0,0,0);
  const diff = rd - today;
  if (diff < 0) return "completed";
  if (diff <= 7 * 86400000) return "next";
  return "upcoming";
}

function highlightNextRace(races) {
  const today = new Date(); today.setHours(0,0,0,0);
  return races.filter(r => { const d=new Date(r.date); d.setHours(0,0,0,0); return d>=today; })
    .sort((a,b)=>new Date(a.date)-new Date(b.date))[0] || null;
}

async function displayRaces(year) {
  const races = racesByYear[year] || [];
  const grid = document.getElementById("raceGrid");
  grid.innerHTML = "";
  const next = highlightNextRace(races);

  /* Build all cards first with skeleton loaders, then load images */
  const cards = races.map(race => {
    const status = getRaceStatus(race.date);
    const isNext = next && race.round === next.round;
    const dateLabel = new Date(race.date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});

    let badgeClass, badgeLabel;
    if (isNext)                    { badgeClass="badge-next";     badgeLabel="NEXT RACE"; }
    else if (status==="completed") { badgeClass="badge-done";     badgeLabel="COMPLETED"; }
    else                           { badgeClass="badge-upcoming"; badgeLabel="UPCOMING";  }

    const card = document.createElement("div");
    card.className = "race-card" + (isNext?" next-race":"");

    const imgId = `circuit-img-${year}-${race.round}`;
    card.innerHTML = `
      <div class="race-track-img">
        <div class="img-skeleton" id="skel-${imgId}"></div>
        <img id="${imgId}" src="" alt="${race.circuit}"
          style="opacity:0;transition:opacity 0.5s"
          onerror="this.src='';this.style.display='none';document.getElementById('skel-${imgId}').style.background='linear-gradient(135deg,#1a1a1a,#0d0d0d)'"
        />
        ${isNext ? `<span class="next-flag">🏁 NEXT</span>` : ""}
        <span class="race-badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <div class="race-info">
        <div class="race-round">ROUND ${race.round} · ${year}</div>
        <div class="race-name">${race.name}</div>
        <div class="race-circuit">${race.circuit}</div>
        <div class="race-meta">
          <div class="race-country"><span class="race-flag">${race.flag}</span>${race.country}</div>
          <div class="race-date">${dateLabel}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
    return { imgId, circuit: race.circuit };
  });

  /* Load images asynchronously — non-blocking */
  cards.forEach(async ({ imgId, circuit }) => {
    const src = await fetchCircuitImage(circuit);
    const imgEl = document.getElementById(imgId);
    const skelEl = document.getElementById(`skel-${imgId}`);
    if (!imgEl) return;
    if (src) {
      imgEl.onload = () => {
        imgEl.style.opacity = "1";
        if (skelEl) skelEl.style.display = "none";
      };
      imgEl.src = src;
    } else {
      if (skelEl) skelEl.style.background = "linear-gradient(135deg,#1a1a1a,#0d0d0d)";
    }
  });
}

function filterByYear() {
  const y = +document.getElementById("calendarYear").value;
  displayRaces(y);
}

/* ══════════════════════════════════════
   MODAL
══════════════════════════════════════ */
function openModal(driver) {
  const color = tc(driver.team);
  document.getElementById("modalImg").src = dImg(driver.name);
  document.getElementById("modalName").textContent = driver.name;
  document.getElementById("modalTeam").textContent = driver.team;
  document.getElementById("modalNat").textContent = driver.nat || "";
  document.getElementById("modalWins").textContent = driver.wins;
  document.getElementById("modalPodiums").textContent = driver.podiums;
  document.getElementById("modalPoints").textContent = driver.points;
  const cImg = carImg(driver.team);
  const mCar = document.getElementById("modalCarImg");
  mCar.src = cImg; mCar.style.display = cImg ? "" : "none";
  document.getElementById("modalTeamBadge").style.background = `linear-gradient(90deg,${color.primary},${color.accent})`;
  document.getElementById("driverModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModalBtn() {
  document.getElementById("driverModal").classList.remove("open");
  document.body.style.overflow = "";
}

function closeModal(e) {
  if (e.target === document.getElementById("driverModal")) closeModalBtn();
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModalBtn(); });

/* ══════════════════════════════════════
   NAVIGATION
══════════════════════════════════════ */
function navTo(section) {
  document.querySelectorAll(".nav-link").forEach(l => {
    l.classList.toggle("active", l.dataset.section === section);
  });
  document.querySelectorAll(".section").forEach(s => {
    s.classList.toggle("active-section", s.id === section);
  });
  const main = document.getElementById("main");
  if (main) { window.scrollTo({ top: main.offsetTop - 60, behavior: "smooth" }); }

  /* sync year-linked sections */
  if (section === "drivers") displayDriverCards(liveDrivers);
  if (section === "constructors") {
    const y = +document.getElementById("constructor-year").value;
    displayConstructors(y);
  }
  if (section === "calendar") {
    const y = +document.getElementById("calendarYear").value;
    displayRaces(y);
  }
}

function setupNav() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      navTo(link.dataset.section);
    });
  });
}

/* make navbar visible only after hero */
function setupNavScroll() {
  const nav = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  const obs = new IntersectionObserver(entries => {
    nav.style.opacity = entries[0].isIntersecting ? "0" : "1";
    nav.style.pointerEvents = entries[0].isIntersecting ? "none" : "all";
  }, { threshold: 0.1 });
  obs.observe(hero);
  nav.style.transition = "opacity 0.3s";
}

function scrollToMain() {
  const main = document.getElementById("main");
  if (main) window.scrollTo({ top: main.offsetTop, behavior: "smooth" });
}