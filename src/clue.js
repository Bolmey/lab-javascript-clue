// ITERATION 1
class Suspect {
    constructor(firstName, lastName, occupation, age, description, image, color) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.age = occupation;
        this.age = age;
        this.descriptio = description;
        this.image = image;
        this.color = color;
    }
}

let mrGreen = new Suspect('Jacob', 'Green', 'Entrepreneur', '45', 'He has a lot of connections', 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'green');

let drOrchid = new Suspect('Doctor', 'Orchid', 'Scientist', '26', 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'white')

let profPlum = new Suspect('Victor', 'Plum', 'Designer', '22', 'Billionaire video game designer', 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg', 'purple')

let missScarlet = new Suspect('Kasandra', 'Scarlet', 'Actor', '31', 'She is an A-list movie star with a dark past', 'https://www.radiotimes.com/uploads/images/Original/111967.jpg', 'red')

let mrsPeacock = new Suspect('Eleanor', 'Peacock', 'Socialité', '36', 'She is from a wealthy family and uses her status and money to earn popularity', 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'blue')

let mrMustard = new Suspect('Jack', 'Mustard', 'Retired Football player', '62', 'He is a former football player who tries to get by on his former glory', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg', 'yellow')

// Suspects Collection
const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];


// Rooms Collection
const roomsArray = [
    {
        name: "Dining Room",
    },
    {
        name: "Conservatory"
    },
    {
        name: "Kitchen"
    },
    {
        name: "Study"
    },
    {
        name: "Library"
    },
    {
        name: "Billiard Room"
    },
    {
        name: "Lounge"
    },
    {
        name: "Ballroom"
    },
    {
        name: "Hall"
    },
    {
        name: "Spa"
    },
    {
        name: "Living Room"
    },
    {
        name: "Observatory"
    },
    {
        name: "Theater"
    },
    {
        name: "Guest House"
    },
    {
        name: "Patio"
    }
];

// Weapons Collection
const weaponsArray = [
    {
        name: "Response",
        weight: 10,
    },
    {
        name: "knife",
        weight: 8,
    },
    {
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    },
];

// ITERATION 2

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
    return { suspect: selectRandom(suspectsArray), weapon: selectRandom(weaponsArray), room: selectRandom(roomsArray) }
}



// ITERATION 3

function revealMystery(object) {

    return `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`
}
revealMystery(pickMystery())