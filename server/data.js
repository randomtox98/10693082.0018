// we use ES5 code because current mongo versions are not compatible with ES6

// *** users
var derek = {
    _id: ObjectId(),
    name:"Derek",
    email: "derek@dkit.ie",
    password:"Password"
};
var gilles = {
    _id: ObjectId(),
    name:"Derek_Also",
    email: "gilles@iut.fr",
    password:"Yay123"
};
db.users.drop();
db.users.insert([derek, gilles]);


// *** activities
var stun = {
    _id: ObjectId(),
    name: "Stunfest",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Rennes/Stunfest.jpg", "/images/Rennes/Stunfest2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Great Event"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "video game tournament famous in europe (12.000 spectator in 2015) Arcades games / Professional exponent gathering big independents studios / conference / presentation… Festival was focused on fighting and retro gaming, but now it’s more open. Really original and a bit crazy website top ten of big world championship with 350 players 2 cult games : Street Fighter 2 and King of Fighters Association 3hitcombo organised this event",
    url: "http://stunfest.com/",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
};
var rock = {
    _id: ObjectId(),
    name: "Rock N Solex",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Rennes/rocknsolex.jpg", "/images/Rennes/rocknsolex2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "LOve the music!!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "To loud!!!"
    }],
    likers: [],
    description: "INSA organised this event (Applied National Science Institute), it’s a engineer school. The school contain huge famous labs. The solex’s event is divided into 3 part : technicity / stamina / speed. And after, some concert are organised. This event begin with a fest-noz. Typical Brittani music and dance for a night. 50 years old.",
    url: "https://rocknsolex.fr/",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
};
var musee = {
    _id: ObjectId(),
    name: "Musee des Beaux Arts",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Rennes/Musée_des_Beaux-Arts.jpg", "/images/Rennes/Musée_des_Beaux-Arts2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "I love the art"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Art sucks!"
    }],
    likers: [],
    description: "photos / sculpture / painting / wide gallery Built in 1794 / Located in a former university palace Initial exhibition comes from revolutionary confiscation in 1794 in religious and civil places. Most of the musee pieces comes from curiosity cabinet’s Marquis de Robien. The present works come from many origins as Africa, America...",
    url: "https://www.louvrelens.fr/"

};
var yaouank = {
    _id: ObjectId(),
    name: "Yaouank",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Rennes/yaouank.jpg", "/images/Rennes/yaouank2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Great Event"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "I dont get it"
    }],
    likers: [],
<<<<<<< HEAD
    description: "Yaouank is called by his organisator by the biggest fest-noz ( name of party in britain) in the world. It’s a mix between britain’s traditions and modern music  into two week of party . The festival remember to everyone that Yaouank , in breton ( brintain’s language), mean youth",
    url: "http://yaouank.bzh/",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
=======
    description: "Fort de son succes, le Festival d'Aix accueille un public non seulement local, mais aussi national, et un grand nombre de spectateurs et de journalistes venus du monde entier.",
    url: "http://festival-aix.com/en",
    dateStart: new Date('2016'),
    dateEnd: new Date('2017')
>>>>>>> 7ada319c6101b1f56ff201e35d4181d342934573
};
var patrick = {
    _id: ObjectId(),
    name: "Saint Patricks Day",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Cork/St-Patricks-Day-Cork.jpg", "/images/Cork/St-Patricks-Day-Cork2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "I love this Irish day"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Too much green"
    }],
    likers: [],
    description: "Every year Cork is host to their own St. Patrick’s Day Parade; this year taking place on Saturday March 17th. The streets of Cork come alive with colour, music and pagentry. All can apply to take part of this fun and welcoming Parade.",
    url: "http://www.corkstpatricksfestival.ie/",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
};
var film = {
    _id: ObjectId(),
    name: "Cork Film Festival",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Cork/film.jpg", "/images/Cork/film2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "The movie here are great!!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "This sucks"
    }],
    likers: [],
    description: "Cork film festival is Ireland’s largest and most popular film festival. This year will host the 63rd Cork Film Festival taking place from 9th- 18th November. The Festival hosts local, national and international films over these 10 days every year. ",
    url: "https://corkfilmfest.org/",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
};
var jazz = {
    _id: ObjectId(),
    name: "Cork Jazz Festival",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Cork/jazz.jpg", "/images/Cork/jazz2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Great Acts"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "I hate jazz"
    }],
    likers: [],
    description: "Cork Jazz festival is an annual music festival that began in 27 October 1978. The festival is Ireland’s biggest jazz festival event attracting hundreds of musicians and thousands of music fans every year. Since the 1990s the festival has had over 40000 attendants every year from all over the world.",
    url: "https://corkfilmfest.org/",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
};
var castle = {
    _id: ObjectId(),
    name: "Blarney Castle",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Cork/castle.jpg", "/images/Cork/castle2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "The Castle is Beautiful"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "I dont get it"
    }],
    likers: [],
    description: "Blarney Castle is a medieval stronghold in Blarney, near Cork. The old kings of Desmond established the castle in 1446. The Blarney Stone would be the main attraction of this castle with modern tourists kissing it for the gift of eloquence.",
    url: "https://www.blarneycastle.ie/",
};
var town = {
    _id: ObjectId(),
    name: "Poznan Town Hall",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Poznan/hall.jpg", "/images/Poznan/hall2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "The history here is great"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "I care little for this"
    }],
    likers: [],
    description: "Town Hall is the centrepiece of the Rynek. Originally a gothic construction, erected in the first years of XIVth cent, later rebuilt in renessaince style by Giovanni Battista di Quadro from Lugano. It is said to be the most beautiful non-church renaissance building north of the Alps. The building houses the Historical Museum of Poznań.",
    url: "http://www.poznan.pl/mim/turystyka/en/town-hall,p,37,51,102.html",
};
var king = {
    _id: ObjectId(),
    name: "Kings Castle",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Poznan/kings.jpg", "/images/Poznan/kings2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "I wish I was king"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "I dont understand this horrid waste of gold"
    }],
    likers: [],
    description: "rebuilt by king Przemysl II in 1290s, but erected by is father, duke Przemysl I as a duke's residence for Poznan county. The only remnants of the original building are the foundations, and - what tourists mostly look is the newer part of the building dated from the second half of 18th century.",
    url: "http://www.poznan.pl/mim/turystyka/en/royal-castle,p,37,51,105.html",
};
var martin = {
    _id: ObjectId(),
    name: "Saint Martin Day",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Poznan/martin.jpg", "/images/Poznan/martin2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Amazing culture"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Great"
    }],
    likers: [],
    description: "in Poznań, November 11th - Polish Independence Day - takes on a very special form. One of Poznań’s main streets - Święty Marcin Street - celebrates its name day.  A colourful parade merrily rolls through the city, with both locals and many tourists enjoying the world famous Saint Martin’s Croissants.",
    url: "https://www.inyourpocket.com/poznan/St-Martins-Day_4327f",
};
var malta = {
    _id: ObjectId(),
    name: "Malta Festival Poznań",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Poznan/malta.jpg", "/images/Poznan/malta2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Great to see such culture"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "I dont understant"
    }],
    likers: [],
    description: "Poznań Malta Festival is the biggest and most famous festival that is organized by the city. It started out as a festival to promote street theater and street art. Back in the day most shows took place at Malta Lake, located in the center of the city, that’s where the Festival gets its name from. With time due to its popularity and great reputation the festival expanded and became one of the most influential festivals in Europe dedicated to performative art forms. For a number of years now each edition has had a main topic around which the whole festival revolves. Examples for these topics are: Asia, South America, Man & Machine.",
    url: "http://malta-festival.pl/pl",
};


db.activities.drop();
db.activities.insert([stun, rock, musee, yaouank, patrick, film, jazz, castle, town, king, martin, malta]);


// **** cities
<<<<<<< HEAD
var rennes = {
=======
var a0 = {
>>>>>>> 7ada319c6101b1f56ff201e35d4181d342934573
    _id: ObjectId(),
    name: 'Rennes',
    coordinates: {
        long: "48.1119800",
        lat: "1.6742900"
    },
    description: "Rennes is a french city located in the west, in Bretagne. It is one of the biggest student city in the country with 66 000 students in 2016. It has a really strong historical background from medieval and classical patrimony, having 90 buildings classified as “Historical monuments”.One of the most famous landmark are the old house spread around the city, which were preserved by its inhabitants as a proof of the past. Rennes is also the most welcoming city in France for foreigners before Paris thanks to locals kindness, number of mode of transport, monthly rent, number of cultural sites, greenest city, ...",
    picture: '/images/Rennes/rennes.jpg',
    activities: [{
        _id: stun._id,
        name: stun.name,
        nature: stun.nature,
        picture: stun.pictures[0]
    }, {
        _id: rock._id,
        name: rock.name,
        nature: rock.nature,
        picture: rock.pictures[0]
    }, {
        _id: musee._id,
        name: musee.name,
        nature: musee.nature,
        picture: musee.pictures[0]
    }, {
        _id: yaouank._id,
        name: yaouank.name,
        nature: yaouank.nature,
        picture: yaouank.pictures[0]
    }]
};
<<<<<<< HEAD

var cork = {
    _id: ObjectId(),
    name: 'Cork',
    coordinates: {
        long: "51.903614",
        lat: "8.468399"
    },
    description: "Cork is the second largest city in Ireland with a population of about 120,000 and the capital of County Cork. It is Ireland’s southern-most city. Cork has a rich history being switched between the hands of the english and the Irish clans until the plantations of Ireland by the english put it firmly until english control. Before Ireland was granted their independence from Britian, Cork was one of the target for ‘The Black and Tans’ burnings, leaving the city in ruin.",
    picture: '/images/Cork/cork.jpg',
    activities: [{
        _id: patrick._id,
        name: patrick.name,
        nature: patrick.nature,
        picture: patrick.pictures[0]
    }, {
        _id: film._id,
        name: film.name,
        nature: film.nature,
        picture: film.pictures[0]
    }, {
        _id: jazz._id,
        name: jazz.name,
        nature: jazz.nature,
        picture: jazz.pictures[0]
    }, {
        _id: castle._id,
        name: castle.name,
        nature: castle.nature,
        picture: castle.pictures[0]
    }]
};
var poznan = {
    _id: ObjectId(),
    name: 'Poznan',
    coordinates: {
        long: "52.409538",
        lat: "16.931992"
    },
    description: "Poznań is among the oldest and largest cities in Poland. The city population is about 550,000. It is the historical capital of the Greater Poland region and is currently the administrative capital of the province called Greater Poland Voivodeship. The name comes directly from the verb poznać, which means to get to know or to recognize, so it may simply mean known town.",
    picture: '/images/Poznan/poznan2.jpg',
    activities: [{
        _id: town._id,
        name: town.name,
        nature: town.nature,
        picture: town.pictures[0]
    }, {
        _id: king._id,
        name: king.name,
        nature: king.nature,
        picture: king.pictures[0]
    }, {
        _id: martin._id,
        name: martin.name,
        nature: martin.nature,
        picture: martin.pictures[0]
    }, {
        _id: malta._id,
        name: malta.name,
        nature: malta.nature,
        picture: malta.pictures[0]
=======
var a1 = {
    _id: ObjectId(),
    name: 'Aix en Provence',
    coordinates: {
        long: "43.5263",
        lat: "5.4454"
    },
    description: "Protegee par la Montagne Sainte Victoire qui culmine à  1.011 m, Aix est entouree d'une campagne richement preservee avec d'authentiques bastides provencales entourees de jardins à la francaise. " +
    "Son nom vient des sources thermales decouvertes à la fondation de la ville en 123 avant JC par les romains. <br />" +
    "Aix en Provence etait la capitale de la Provence au XVeme siecle : marchands prosperes et notables firent de la ville la Florence provencale que l'on connait aujourd'hui. " +
    "Demeures bourgeoises, placettes fleuries, hotels particuliers, fontaines anciennes, ruelles ombragees... toutes les images de la Provence noble des XVII et XVIII sont rassemblees à Aix. <br />",
    picture: '/images/Aix/aix.jpg',
    activities: [{
        _id: granet._id,
        name: granet.name,
        nature: granet.nature,
        picture: granet.pictures[0]
    }, {
        _id: saintSauveur._id,
        name: saintSauveur.name,
        nature: saintSauveur.nature,
        picture: saintSauveur.pictures[0]
    }, {
        _id: festival._id,
        name: festival.name,
        nature: festival.nature,
        picture: festival.pictures[0]
    }]
};
var a2 = {
    _id: ObjectId(),
    name: 'Aix en Provence',
    coordinates: {
        long: "43.5263",
        lat: "5.4454"
    },
    description: "Protegee par la Montagne Sainte Victoire qui culmine à  1.011 m, Aix est entouree d'une campagne richement preservee avec d'authentiques bastides provencales entourees de jardins à la francaise. " +
    "Son nom vient des sources thermales decouvertes à la fondation de la ville en 123 avant JC par les romains. <br />" +
    "Aix en Provence etait la capitale de la Provence au XVeme siecle : marchands prosperes et notables firent de la ville la Florence provencale que l'on connait aujourd'hui. " +
    "Demeures bourgeoises, placettes fleuries, hotels particuliers, fontaines anciennes, ruelles ombragees... toutes les images de la Provence noble des XVII et XVIII sont rassemblees à Aix. <br />",
    picture: '/images/Aix/aix.jpg',
    activities: [{
        _id: granet._id,
        name: granet.name,
        nature: granet.nature,
        picture: granet.pictures[0]
    }, {
        _id: saintSauveur._id,
        name: saintSauveur.name,
        nature: saintSauveur.nature,
        picture: saintSauveur.pictures[0]
    }, {
        _id: festival._id,
        name: festival.name,
        nature: festival.nature,
        picture: festival.pictures[0]
    }]
};
var a3 = {
    _id: ObjectId(),
    name: 'Aix en Provence',
    coordinates: {
        long: "43.5263",
        lat: "5.4454"
    },
    description: "Protegee par la Montagne Sainte Victoire qui culmine à  1.011 m, Aix est entouree d'une campagne richement preservee avec d'authentiques bastides provencales entourees de jardins à la francaise. " +
    "Son nom vient des sources thermales decouvertes à la fondation de la ville en 123 avant JC par les romains. <br />" +
    "Aix en Provence etait la capitale de la Provence au XVeme siecle : marchands prosperes et notables firent de la ville la Florence provencale que l'on connait aujourd'hui. " +
    "Demeures bourgeoises, placettes fleuries, hotels particuliers, fontaines anciennes, ruelles ombragees... toutes les images de la Provence noble des XVII et XVIII sont rassemblees à Aix. <br />",
    picture: '/images/Aix/aix.jpg',
    activities: [{
        _id: granet._id,
        name: granet.name,
        nature: granet.nature,
        picture: granet.pictures[0]
    }, {
        _id: saintSauveur._id,
        name: saintSauveur.name,
        nature: saintSauveur.nature,
        picture: saintSauveur.pictures[0]
    }, {
        _id: festival._id,
        name: festival.name,
        nature: festival.nature,
        picture: festival.pictures[0]
>>>>>>> 7ada319c6101b1f56ff201e35d4181d342934573
    }]
};

db.cities.drop();
<<<<<<< HEAD
db.cities.insert([rennes, cork, poznan]);
=======
db.cities.insert([a0,a1,a2,a3]);
>>>>>>> 7ada319c6101b1f56ff201e35d4181d342934573
