export const leghe = {
    PremierLeague: {
        nome: "Premier League",
        squadre: [
             {
                nome: "Manchester United",
                calciatori: [
                    { nome: "Bruno Fernandes", posizione: "Centrocampista", eta: 29 },
                    { nome: "Marcus Rashford", posizione: "Attaccante", eta: 26 }
                ],
                pathImmagine: require("../../assets/images/manchesterunited.png")
            },
             {
                nome: "Liverpool",
                calciatori: [
                    { nome: "Mohamed Salah", posizione: "Attaccante", eta: 32 },
                    { nome: "Virgil van Dijk", posizione: "Difensore", eta: 33 }
                ],
                pathImmagine: require("../../assets/images/liverpool.png")
            }
        ]
    },
    Bundesliga: {
        nome: "Bundesliga",
        squadre: [
             {
                nome: "Bayern Monaco",
                calciatori: [
                    { nome: "Robert Lewandowski", posizione: "Attaccante", eta: 36 },
                    { nome: "Thomas Müller", posizione: "Centrocampista", eta: 34 }
                ],
                pathImmagine: require("../../assets/images/bayern.png")
            },
             {
                nome: "Borussia Dortmund",
                calciatori: [
                    { nome: "Erling Haaland", posizione: "Attaccante", eta: 24 },
                    { nome: "Jude Bellingham", posizione: "Centrocampista", eta: 20 }
                ],
                pathImmagine: require("../../assets/images/dortmund.png")
            }
        ]
    },
    SerieA: {
        nome: "Serie A",
        squadre: [
             {
                nome: "Juventus",
                calciatori: [
                    { nome: "Cristiano Ronaldo", posizione: "Attaccante", eta: 36 },
                    { nome: "Paulo Dybala", posizione: "Attaccante", eta: 30 }
                ],
                pathImmagine: require("../../assets/images/juventus.png")
            },
              {
                nome: "Inter",
                calciatori: [
                    { nome: "Lautaro Martinez", posizione: "Attaccante", eta: 27 },
                    { nome: "Samir Handanovic", posizione: "Portiere", eta: 39 }
                ],
                pathImmagine: require("../../assets/images/inter.png")
            }
        ]
    },
    Ligue1: {
        nome: "Ligue 1",
        squadre: [
             {
                nome: "PSG",
                calciatori: [
                    { nome: "Kylian Mbappé", posizione: "Attaccante", eta: 25 },
                    { nome: "Lionel Messi", posizione: "Attaccante", eta: 37 }
                ],
                pathImmagine: require("../../assets/images/psg.png")
            },
              {
                nome: "Olympique Lyon",
                calciatori: [
                    { nome: "Alexandre Lacazette", posizione: "Attaccante", eta: 33 },
                    { nome: "Houssem Aouar", posizione: "Centrocampista", eta: 25 }
                ],
                pathImmagine: require("../../assets/images/lione.png")
            }
        ]
    },
    LigaPortugal: {
        nome: "Liga Portugal",
        squadre: [
             {
                nome: "Porto",
                calciatori: [
                    { nome: "Moussa Marega", posizione: "Attaccante", eta: 33 },
                    { nome: "Pepe", posizione: "Difensore", eta: 41 }
                ],
                pathImmagine: require("../../assets/images/porto.png")
            },
             {
                nome: "Benfica",
                calciatori: [
                    { nome: "Darwin Núñez", posizione: "Attaccante", eta: 24 },
                    { nome: "Éverton Ribeiro", posizione: "Centrocampista", eta: 34 }
                ],
                pathImmagine: require("../../assets/images/benfica.png")
            }
        ]
    },
    LaLiga: {
        nome: "La Liga",
        squadre: [
             {
                nome: "Real Madrid",
                calciatori: [
                    { nome: "Karim Benzema", posizione: "Attaccante", eta: 36 },
                    { nome: "Luka Modric", posizione: "Centrocampista", eta: 38 }
                ],
                pathImmagine: require("../../assets/images/realmadrid.png")
            },
              {
                nome: "Barcellona",
                calciatori: [
                    { nome: "Lionel Messi", posizione: "Attaccante", eta: 37 },
                    { nome: "Gerard Piqué", posizione: "Difensore", eta: 37 }
                ],
                pathImmagine: require("../../assets/images/barcellona.png")
            }
        ]
    }
};
