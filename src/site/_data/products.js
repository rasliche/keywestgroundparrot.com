module.exports = products = () => {
    console.log('Importing your product catalog.')
    return [
        {
            sku: "KWGP001",
            name: "Key West Ground Parrot",
            description: `It's a Key West Ground Parrot. The bird of the Conch Republic. Ready to take on the world, one Dion's bucket at a time. This sticker is 3"x3" and holographic. Looks great on a water bottle, laptop, tackle box, or truck bumper.`,
            images: ["https://res.cloudinary.com/duzmgsio4/video/upload/ac_none,c_fill,h_300,q_auto:eco,vc_auto,w_300/v1596398041/keywestgroundparrot.com/383AEF69-9A70-4198-97DC-385CA44923E6.gif", "https://res.cloudinary.com/duzmgsio4/image/upload/w_300,h_300,f_auto,q_auto:eco/v1596398126/keywestgroundparrot.com/kwgp-002.jpg", "https://res.cloudinary.com/duzmgsio4/image/upload/w_300,h_300,f_auto,q_auto:eco/v1596398126/keywestgroundparrot.com/kwgp-003.jpg", "https://res.cloudinary.com/duzmgsio4/image/upload/w_300,h_300,f_auto,q_auto:eco/v1596398126/keywestgroundparrot.com/kwgp-001.jpg",],
            amount: 300,
            currency: "USD"
        },
        // {
        //     sku: "KWGP002",
        //     name: "Permit",
        //     description: "It's a fish.",
        //     image: "https://res.cloudinary.com/duzmgsio4/image/upload/v1595558268/keywestgroundparrot.com/permit.png",
        //     amount: 300,
        //     currency: "USD"
        // },
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
