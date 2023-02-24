const database = {
    fish: [
        {
            name: "Bart",
            picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-nhYlXLwZsbrVm7I4tTLxHcyrX7DN13P4g&amp;usqp=CAU",//might have to change key to image here
            species:"cartoon",
            size: 3,
            quotes:"Eat my shorts!",
            harvest:"Springfield",
            food: "crustaceans",
            
        },
        {
            name: "Gill",
          picture: "img src=https://ueeshop.ly200-cdn.com/u_file/UPAC/UPAC952/1908/photo/da5ef9b7f2.jpg",
          species: "angelfish",
           size: 4,
           quote:"You have Survived 100% of your worst days.",
         harvest: "dentist office tank",
            food: "worms",
        },
        {
            name: "Nemo",
            picture:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1956b76d-23e1-4886-89ab-977e26faa63b/d2wu6sl-af60b1bb-7dcb-43fa-9085-f40828c50a30.jpg/v1/fill/w_900,h_600,q_75,strp/baby_clownfish_by_citron__vert_d2wu6sl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvMTk1NmI3NmQtMjNlMS00ODg2LTg5YWItOTc3ZTI2ZmFhNjNiXC9kMnd1NnNsLWFmNjBiMWJiLTdkY2ItNDNmYS05MDg1LWY0MDgyOGM1MGEzMC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uNW-OU6mBXnlGeLQdvifSf-EgKIj84RCsLtPbn9OKc0",
            species:"clownfish",
            size: 2.5,
            quotes:"It's okay to get lost every once in awhile, sometimes getting lost is how we find ourselves.",
            harvest:"ocean",
            food: "plankton",
            
        },
        {
            name: "Dory",
            picture:"https://upload.wikimedia.org/wikipedia/commons/1/13/Paletten-Doktorfisch_M%C3%BCnster.JPG",
            species:"blue tang",
            size: 3.5,
            quotes:"If I had a world of my own, everything would be nonsense.Nothing would be what it is, because everything would be what it isn't. And contrary wise, what is, it wouldn't be.",
            harvest:"muddy puddle",
            food: "alage",
            
        },
    ]
}


export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

