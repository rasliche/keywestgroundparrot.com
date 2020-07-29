module.exports = products = () => {
    console.log('Importing your product catalog.')
    return [
        {
            sku: "KWGP001",
            name: "Key West Groud Parrot",
            description: "It's a Key West Ground Parrot. The bird of the Conch Republic.",
            image: "https://res.cloudinary.com/duzmgsio4/image/upload/v1595558268/keywestgroundparrot.com/key-west-ground-parrot.png",
            amount: 300,
            currency: "USD"
        },
        {
            sku: "KWGP002",
            name: "Permit",
            description: "It's a fish.",
            image: "https://res.cloudinary.com/duzmgsio4/image/upload/v1595558268/keywestgroundparrot.com/permit.png",
            amount: 300,
            currency: "USD"
        },
        // {
        //     sku: "KWGP003",
        //     name: "Flying Fish",
        //     description: "It's a flying fish.",
        //     image: "https://res.cloudinary.com/duzmgsio4/image/upload/v1595558268/keywestgroundparrot.com/flying-fish.png",
        //     amount: 300,
        //     currency: "USD"
        // },
    ]
}
