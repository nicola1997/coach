const serieA = [
    {
        nome: "Inter",
        pathImmagine: require("./images/seriea/inter.png"),
        reputazione: { club: 5, strutture: 5, infrastrutture: 5, allenatore: 5, organico: 5, capacitaStadio: 5, disponibilitaFinanziaria: 5 }
    },
    {
        nome: "Juventus",
        pathImmagine: require("./images/seriea/juventus.png"),
        reputazione: { club: 5, strutture: 5, infrastrutture: 5, allenatore: 5, organico: 5, capacitaStadio: 5, disponibilitaFinanziaria: 5 }
    },
    {
        nome: "Milan",
        pathImmagine: require("./images/seriea/milan.png"),
        reputazione: { club: 5, strutture: 5, infrastrutture: 5, allenatore: 5, organico: 5, capacitaStadio: 5, disponibilitaFinanziaria: 5 }
    },
    {
        nome: "Roma",
        pathImmagine: require("./images/seriea/roma.png"),
        reputazione: { club: 5, strutture: 4, infrastrutture: 4, allenatore: 4, organico: 4, capacitaStadio: 5, disponibilitaFinanziaria: 4 }
    },
    {
        nome: "Napoli",
        pathImmagine: require("./images/seriea/napoli.png"),
        reputazione: { club: 4, strutture: 4, infrastrutture: 4, allenatore: 5, organico: 4, capacitaStadio: 4, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Lazio",
        pathImmagine: require("./images/seriea/lazio.png"),
        reputazione: { club: 4, strutture: 4, infrastrutture: 4, allenatore: 4, organico: 4, capacitaStadio: 4, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Fiorentina",
        pathImmagine: require("./images/seriea/fiorentina.png"),
        reputazione: { club: 4, strutture: 4, infrastrutture: 4, allenatore: 4, organico: 4, capacitaStadio: 4, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Atalanta",
        pathImmagine: require("./images/seriea/atalanta.png"),
        reputazione: { club: 4, strutture: 4, infrastrutture: 4, allenatore: 5, organico: 4, capacitaStadio: 4, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Como",
        pathImmagine: require("./images/seriea/como.png"),
        reputazione: { club: 3, strutture: 3, infrastrutture: 3, allenatore: 3, organico: 3, capacitaStadio: 3, disponibilitaFinanziaria: 2 }
    },
    {
        nome: "Bologna",
        pathImmagine: require("./images/seriea/bologna.png"),
        reputazione: { club: 4, strutture: 4, infrastrutture: 4, allenatore: 4, organico: 4, capacitaStadio: 4, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Torino",
        pathImmagine: require("./images/seriea/torino.png"),
        reputazione: { club: 4, strutture: 4, infrastrutture: 4, allenatore: 4, organico: 4, capacitaStadio: 4, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Monza",
        pathImmagine: require("./images/seriea/monza.png"),
        reputazione: { club: 3, strutture: 3, infrastrutture: 3, allenatore: 4, organico: 3, capacitaStadio: 3, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Verona",
        pathImmagine: require("./images/seriea/verona.png"),
        reputazione: { club: 3, strutture: 3, infrastrutture: 3, allenatore: 3, organico: 3, capacitaStadio: 3, disponibilitaFinanziaria: 2 }
    },
    {
        nome: "Empoli",
        pathImmagine: require("./images/seriea/empoli.png"),
        reputazione: { club: 3, strutture: 3, infrastrutture: 3, allenatore: 4, organico: 3, capacitaStadio: 3, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Lecce",
        pathImmagine: require("./images/seriea/lecce.png"),
        reputazione: { club: 3, strutture: 3, infrastrutture: 3, allenatore: 3, organico: 3, capacitaStadio: 3, disponibilitaFinanziaria: 2 }
    },
    {
        nome: "Cagliari",
        pathImmagine: require("./images/seriea/cagliari.png"),
        reputazione: { club: 3, strutture: 3, infrastrutture: 3, allenatore: 3, organico: 3, capacitaStadio: 3, disponibilitaFinanziaria: 2 }
    },
    {
        nome: "Udinese",
        pathImmagine: require("./images/seriea/udinese.png"),
        reputazione: { club: 4, strutture: 4, infrastrutture: 4, allenatore: 4, organico: 4, capacitaStadio: 4, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Venezia",
        pathImmagine: require("./images/seriea/venezia.png"),
        reputazione: { club: 3, strutture: 3, infrastrutture: 3, allenatore: 3, organico: 3, capacitaStadio: 3, disponibilitaFinanziaria: 2 }
    },
    {
        nome: "Genoa",
        pathImmagine: require("./images/seriea/genoa.png"),
        reputazione: { club: 4, strutture: 4, infrastrutture: 4, allenatore: 4, organico: 4, capacitaStadio: 4, disponibilitaFinanziaria: 3 }
    },
    {
        nome: "Parma",
        pathImmagine: require("./images/seriea/parma.png"),
        reputazione: { club: 4, strutture: 4, infrastrutture: 4, allenatore: 4, organico: 4, capacitaStadio: 4, disponibilitaFinanziaria: 3 }
    }
];

const laLiga = [
    {
        nome: "Real Madrid",
        pathImmagine: require("./images/laliga/realmadrid.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 81044,
        disponibilitaFinanziaria: 600000000
    },
    {
        nome: "Barcelona",
        pathImmagine: require("./images/laliga/barcellona.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 5,
        capacitaStadio: 99354,
        disponibilitaFinanziaria: 450000000
    },
    {
        nome: "Atlético Madrid",
        pathImmagine: require("./images/laliga/atletico madrid.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 4,
        capacitaStadio: 68000,
        disponibilitaFinanziaria: 350000000
    },
    {
        nome: "Sevilla",
        pathImmagine: require("./images/laliga/siviglia.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 43500,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Real Sociedad",
        pathImmagine: require("./images/laliga/realsociedad.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 3,
        capacitaStadio: 32376,
        disponibilitaFinanziaria: 120000000
    },
    {
        nome: "Villarreal",
        pathImmagine: require("./images/laliga/villareal.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 23000,
        disponibilitaFinanziaria: 180000000
    },
    {
        nome: "Athletic Bilbao",
        pathImmagine: require("./images/laliga/athleticbilbao.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 53000,
        disponibilitaFinanziaria: 220000000
    },
    {
        nome: "Real Betis",
        pathImmagine: require("./images/laliga/betis.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 3,
        capacitaStadio: 60000,
        disponibilitaFinanziaria: 150000000
    },
    {
        nome: "Valencia",
        pathImmagine: require("./images/laliga/valencia.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 55000,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Celta Vigo",
        pathImmagine: require("./images/laliga/celtavigo.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 100000000
    },
    {
        nome: "Getafe",
        pathImmagine: require("./images/laliga/getafe.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 17000,
        disponibilitaFinanziaria: 90000000
    },
    {
        nome: "Alavés",
        pathImmagine: require("./images/laliga/alaves.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 19300,
        disponibilitaFinanziaria: 80000000
    },
    {
        nome: "Osasuna",
        pathImmagine: require("./images/laliga/osasuna.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 23876,
        disponibilitaFinanziaria: 70000000
    },
    {
        nome: "Rayo Vallecano",
        pathImmagine: require("./images/laliga/vallecano.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 2,
        capacitaStadio: 15000,
        disponibilitaFinanziaria: 60000000
    },
    {
        nome: "Valladolid",
        pathImmagine: require("./images/laliga/valladolid.png"),
        reputazioneClub: 2,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 2,
        capacitaStadio: 27000,
        disponibilitaFinanziaria: 50000000
    },
    {
        nome: "Leganés",
        pathImmagine: require("./images/laliga/leganes.png"),
        reputazioneClub: 2,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 2,
        capacitaStadio: 12000,
        disponibilitaFinanziaria: 40000000
    },
    {
        nome: "Espanyol",
        pathImmagine: require("./images/laliga/espanyol.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 40000,
        disponibilitaFinanziaria: 110000000
    },
    {
        nome: "Las Palmas",
        pathImmagine: require("./images/laliga/laspalmas.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 32000,
        disponibilitaFinanziaria: 75000000
    },
    {
        nome: "Girona",
        pathImmagine: require("./images/laliga/girona.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 13000,
        disponibilitaFinanziaria: 70000000
    },
    {
        nome: "Mallorca",
        pathImmagine: require("./images/laliga/maiorca.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 23000,
        disponibilitaFinanziaria: 65000000
    }
];

const ligue1 = [
    {
        nome: "Paris Saint-Germain",
        pathImmagine: require("./images/ligue1/psg.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 48712,
        disponibilitaFinanziaria: 700000000
    },
    {
        nome: "Lione",
        pathImmagine: require("./images/ligue1/lione.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 59400,
        disponibilitaFinanziaria: 300000000
    },
    {
        nome: "Marseille",
        pathImmagine: require("./images/ligue1/marsiglia.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 67394,
        disponibilitaFinanziaria: 250000000
    },
    {
        nome: "Monaco",
        pathImmagine: require("./images/ligue1/monaco.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 18523,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Lille",
        pathImmagine: require("./images/ligue1/lilla.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 50186,
        disponibilitaFinanziaria: 150000000
    },
    {
        nome: "Nizza",
        pathImmagine: require("./images/ligue1/nizza.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 35624,
        disponibilitaFinanziaria: 100000000
    },
    {
        nome: "Angers",
        pathImmagine: require("./images/ligue1/angers.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 17800,
        disponibilitaFinanziaria: 60000000
    },
    {
        nome: "Rennes",
        pathImmagine: require("./images/ligue1/rennes.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 29194,
        disponibilitaFinanziaria: 120000000
    },
    {
        nome: "Brest",
        pathImmagine: require("./images/ligue1/brest.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 15097,
        disponibilitaFinanziaria: 50000000
    },
    {
        nome: "Strasbourg",
        pathImmagine: require("./images/ligue1/strasburgo.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 26100,
        disponibilitaFinanziaria: 70000000
    },
    {
        nome: "Toulouse",
        pathImmagine: require("./images/ligue1/tolosa.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 33500,
        disponibilitaFinanziaria: 55000000
    },
    {
        nome: "Reims",
        pathImmagine: require("./images/ligue1/reims.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 21000,
        disponibilitaFinanziaria: 45000000
    },
    {
        nome: "Nantes",
        pathImmagine: require("./images/ligue1/nantes.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 38000,
        disponibilitaFinanziaria: 70000000
    },
    {
        nome: "St Etienne",
        pathImmagine: require("./images/ligue1/stetienne.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 41500,
        disponibilitaFinanziaria: 50000000
    },
    {
        nome: "Auxerre",
        pathImmagine: require("./images/ligue1/auxerre.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 2,
        capacitaStadio: 22800,
        disponibilitaFinanziaria: 35000000
    },
    {
        nome: "Montpellier",
        pathImmagine: require("./images/ligue1/montpellier.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 32000,
        disponibilitaFinanziaria: 60000000
    },
    {
        nome: "Le Havre",
        pathImmagine: require("./images/ligue1/lehavre.png"),
        reputazioneClub: 2,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 2,
        reputazioneOrganico: 2,
        capacitaStadio: 25000,
        disponibilitaFinanziaria: 40000000
    },
    {
        nome: "Lens",
        pathImmagine: require("./images/ligue1/lens.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 38000,
        disponibilitaFinanziaria: 50000000
    }
];


const bundesliga = [
    {
        nome: "Bayern Munich",
        pathImmagine: require("./images/bundesliga/bayern.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 75000,
        disponibilitaFinanziaria: 900000000
    },
    {
        nome: "Borussia Dortmund",
        pathImmagine: require("./images/bundesliga/dortmund.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 81365,
        disponibilitaFinanziaria: 500000000
    },
    {
        nome: "RB Leipzig",
        pathImmagine: require("./images/bundesliga/lipsia.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 42558,
        disponibilitaFinanziaria: 300000000
    },
    {
        nome: "Bayer Leverkusen",
        pathImmagine: require("./images/bundesliga/leverkusen.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 30404,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "VfB Stuttgart",
        pathImmagine: require("./images/bundesliga/stoccarda.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 60441,
        disponibilitaFinanziaria: 150000000
    },
    {
        nome: "Eintracht Frankfurt",
        pathImmagine: require("./images/bundesliga/francoforte.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 51000,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Union Berlin",
        pathImmagine: require("./images/bundesliga/unionberlino.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 22000,
        disponibilitaFinanziaria: 100000000
    },
    {
        nome: "Wolfsburg",
        pathImmagine: require("./images/bundesliga/wolfsburg.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 150000000
    },
    {
        nome: "Hoffenheim",
        pathImmagine: require("./images/bundesliga/hoffenheim.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 80000000
    },
    {
        nome: "Gladbach",
        pathImmagine: require("./images/bundesliga/monchengladbach.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 54000,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Werder Bremen",
        pathImmagine: require("./images/bundesliga/brema.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 42500,
        disponibilitaFinanziaria: 100000000
    },
    {
        nome: "Freiburg",
        pathImmagine: require("./images/bundesliga/friburgo.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 34200,
        disponibilitaFinanziaria: 70000000
    },
    {
        nome: "Holstein Kiel",
        pathImmagine: require("./images/bundesliga/kiel.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 11500,
        disponibilitaFinanziaria: 40000000
    },
    {
        nome: "Mainz",
        pathImmagine: require("./images/bundesliga/magonza.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 34000,
        disponibilitaFinanziaria: 60000000
    },
    {
        nome: "St Pauli",
        pathImmagine: require("./images/bundesliga/stpauli.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 29500,
        disponibilitaFinanziaria: 50000000
    },
    {
        nome: "Heidenheim",
        pathImmagine: require("./images/bundesliga/heidenheim.png"),
        reputazioneClub: 2,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 2,
        reputazioneOrganico: 2,
        capacitaStadio: 15000,
        disponibilitaFinanziaria: 35000000
    },
    {
        nome: "Augsburg",
        pathImmagine: require("./images/bundesliga/augusta.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 60000000
    },
    {
        nome: "Bochum",
        pathImmagine: require("./images/bundesliga/bochum.png"),
        reputazioneClub: 2,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 2,
        reputazioneOrganico: 2,
        capacitaStadio: 27000,
        disponibilitaFinanziaria: 30000000
    }
];

const premierLeague = [
    {
        nome: "Arsenal",
        pathImmagine: require("./images/premierleague/arsenal.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 60260,
        disponibilitaFinanziaria: 700000000
    },
    {
        nome: "Aston Villa",
        pathImmagine: require("./images/premierleague/astonvilla.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 42682,
        disponibilitaFinanziaria: 250000000
    },
    {
        nome: "Bournemouth",
        pathImmagine: require("./images/premierleague/bournemouth.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 11600,
        disponibilitaFinanziaria: 100000000
    },
    {
        nome: "Brentford",
        pathImmagine: require("./images/premierleague/brentford.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 17250,
        disponibilitaFinanziaria: 80000000
    },
    {
        nome: "Brighton & Hove Albion",
        pathImmagine: require("./images/premierleague/brighton.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 30050,
        disponibilitaFinanziaria: 150000000
    },
    {
        nome: "Chelsea",
        pathImmagine: require("./images/premierleague/chelsea.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 41000,
        disponibilitaFinanziaria: 1000000000
    },
    {
        nome: "Crystal Palace",
        pathImmagine: require("./images/premierleague/crystalpalace.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 26000,
        disponibilitaFinanziaria: 150000000
    },
    {
        nome: "Everton",
        pathImmagine: require("./images/premierleague/everton.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 39572,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Fulham",
        pathImmagine: require("./images/premierleague/fulham.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 25000,
        disponibilitaFinanziaria: 100000000
    },
    {
        nome: "Ipswich",
        pathImmagine: require("./images/premierleague/ipswich.png"),
        reputazioneClub: 2,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 2,
        reputazioneOrganico: 2,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 40000000
    },
    {
        nome: "Leicester City",
        pathImmagine: require("./images/premierleague/leicester.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 32500,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Liverpool",
        pathImmagine: require("./images/premierleague/liverpool.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 54074,
        disponibilitaFinanziaria: 800000000
    },
    {
        nome: "Manchester City",
        pathImmagine: require("./images/premierleague/manchestercity.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 55300,
        disponibilitaFinanziaria: 900000000
    },
    {
        nome: "Manchester United",
        pathImmagine: require("./images/premierleague/manchesterunited.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 75600,
        disponibilitaFinanziaria: 1000000000
    },
    {
        nome: "Newcastle United",
        pathImmagine: require("./images/premierleague/newcastle.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 52305,
        disponibilitaFinanziaria: 300000000
    },
    {
        nome: "Nottingham Forest",
        pathImmagine: require("./images/premierleague/nottingham.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 150000000
    },
    {
        nome: "Southampton",
        pathImmagine: require("./images/premierleague/southampton.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 32500,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Tottenham Hotspur",
        pathImmagine: require("./images/premierleague/tottenham.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 62500,
        disponibilitaFinanziaria: 600000000
    },
    {
        nome: "West Ham United",
        pathImmagine: require("./images/premierleague/westham.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 60000,
        disponibilitaFinanziaria: 250000000
    },
    {
        nome: "Wolverhampton Wanderers",
        pathImmagine: require("./images/premierleague/wolves.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 31800,
        disponibilitaFinanziaria: 150000000
    }
];

const ligaPortugal = [
    {
        nome: "Arouca",
        pathImmagine: require("./images/ligaportugal/arauca.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 22000,
        disponibilitaFinanziaria: 70000000
    },
    {
        nome: "Benfica",
        pathImmagine: require("./images/ligaportugal/benfica.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 65000,
        disponibilitaFinanziaria: 800000000
    },
    {
        nome: "Boavista",
        pathImmagine: require("./images/ligaportugal/boavista.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 28000,
        disponibilitaFinanziaria: 150000000
    },
    {
        nome: "Braga",
        pathImmagine: require("./images/ligaportugal/braga.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Casapia",
        pathImmagine: require("./images/ligaportugal/casapia.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 12000,
        disponibilitaFinanziaria: 50000000
    },
    {
        nome: "Estoril Praia",
        pathImmagine: require("./images/ligaportugal/estoril.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 10000,
        disponibilitaFinanziaria: 40000000
    },
    {
        nome: "Estrela",
        pathImmagine: require("./images/ligaportugal/estrela.png"),
        reputazioneClub: 2,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 2,
        reputazioneOrganico: 2,
        capacitaStadio: 5000,
        disponibilitaFinanziaria: 30000000
    },
    {
        nome: "Famalicão",
        pathImmagine: require("./images/ligaportugal/famalicao.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 22000,
        disponibilitaFinanziaria: 70000000
    },
    {
        nome: "Farense",
        pathImmagine: require("./images/ligaportugal/farense.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 28000,
        disponibilitaFinanziaria: 60000000
    },
    {
        nome: "Glivicente",
        pathImmagine: require("./images/ligaportugal/glivicente.png"),
        reputazioneClub: 2,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 2,
        reputazioneOrganico: 2,
        capacitaStadio: 15000,
        disponibilitaFinanziaria: 35000000
    },
    {
        nome: "Guimaraes",
        pathImmagine: require("./images/ligaportugal/guimaraes.png"),
        reputazioneClub: 4,
        reputazioneStrutture: 4,
        reputazioneInfrastrutture: 4,
        reputazioneAllenatore: 4,
        reputazioneOrganico: 4,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 200000000
    },
    {
        nome: "Moreirense",
        pathImmagine: require("./images/ligaportugal/moreirense.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 15000,
        disponibilitaFinanziaria: 50000000
    },
    {
        nome: "Nacional",
        pathImmagine: require("./images/ligaportugal/nacional.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 80000000
    },
    {
        nome: "Porto",
        pathImmagine: require("./images/ligaportugal/porto.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 50000,
        disponibilitaFinanziaria: 900000000
    },
    {
        nome: "Rio Ave",
        pathImmagine: require("./images/ligaportugal/rioave.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 30000,
        disponibilitaFinanziaria: 60000000
    },
    {
        nome: "Santa Clara",
        pathImmagine: require("./images/ligaportugal/santaclara.png"),
        reputazioneClub: 3,
        reputazioneStrutture: 3,
        reputazioneInfrastrutture: 3,
        reputazioneAllenatore: 3,
        reputazioneOrganico: 3,
        capacitaStadio: 22000,
        disponibilitaFinanziaria: 55000000
    },
    {
        nome: "AVS",
        pathImmagine: require("./images/ligaportugal/avs.png"),
        reputazioneClub: 2,
        reputazioneStrutture: 2,
        reputazioneInfrastrutture: 2,
        reputazioneAllenatore: 2,
        reputazioneOrganico: 2,
        capacitaStadio: 10000,
        disponibilitaFinanziaria: 25000000
    },
    {
        nome: "Sporting CP",
        pathImmagine: require("./images/ligaportugal/sportinglisbona.png"),
        reputazioneClub: 5,
        reputazioneStrutture: 5,
        reputazioneInfrastrutture: 5,
        reputazioneAllenatore: 5,
        reputazioneOrganico: 5,
        capacitaStadio: 50000,
        disponibilitaFinanziaria: 750000000
    }
];


export { serieA, laLiga, ligue1, bundesliga, premierLeague ,ligaPortugal};