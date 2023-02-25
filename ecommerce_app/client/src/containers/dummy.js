const totalPrice = (items) => {return items.reduce((total, item) => total + item.price, 0)};
export const dummyOrders = [
    {
        
        customer: 1,
        products: [
            {
                "name": "Super Mario Bros.", 
                "description": "Super Mario Bros. is a platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). The successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series, it was first released in 1985 for the Famicom in Japan. Following a limited US release for the NES, it was ported to international arcades for the Nintendo VS. System in early 1986. The NES version received a wide release in North America that year and in PAL regions in 1987. Players control Mario, or his brother Luigi in the multiplayer mode, as they traverse the Mushroom Kingdom to rescue Princess Toadstool from King Koopa (later named Bowser). They traverse side-scrolling stages while avoiding hazards such as enemies and pits with the aid of power-ups such as the Super Mushroom, Fire Flower, and Starman.", 
                "category": "Games", 
                "price": 9.08,
                "image": null,
                "id": 0
            },
            {
                "name": "Elder Scrolls Morrowind", 
                "description": "The Elder Scrolls III: Morrowind is an open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the third installment in the Elder Scrolls series, following 1996's The Elder Scrolls II: Daggerfall, and was released in 2002 for Microsoft Windows and Xbox. The main story takes place on Vvardenfell, an island in the Dunmer (Dark Elf) province of Morrowind, part of the continent of Tamriel. The central quests concern the demigod Dagoth Ur, housed within the volcanic Red Mountain, who seeks to gain power and break Morrowind free from Imperial reign. Although it is primarily a fantasy game, with many gameplay elements and Western medieval and fantasy fiction tropes inspired by Dungeons & Dragons and previous RPGs, Morrowind also features some steampunk elements, and drew much inspiration from Middle Eastern and East Asian art, architecture and cultures. Morrowind was designed with an open-ended, freeform style of gameplay in mind, with less of an emphasis on the main plot than its predecessors. This choice received mixed reactions, though such feelings were tempered by reviewers' appreciation of Morrowind's expansive, detailed game world.", 
                "category": "Games", 
                "price": 14.99,
                "image": null,
                "id": 1
            }
        ],
        total_price: totalPrice(this.products),
        id: "0"
    },
    {
        
        customer: 1,
        products: [
            {
                "name": "Super Mario Bros.", 
                "description": "Super Mario Bros. is a platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). The successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series, it was first released in 1985 for the Famicom in Japan. Following a limited US release for the NES, it was ported to international arcades for the Nintendo VS. System in early 1986. The NES version received a wide release in North America that year and in PAL regions in 1987. Players control Mario, or his brother Luigi in the multiplayer mode, as they traverse the Mushroom Kingdom to rescue Princess Toadstool from King Koopa (later named Bowser). They traverse side-scrolling stages while avoiding hazards such as enemies and pits with the aid of power-ups such as the Super Mushroom, Fire Flower, and Starman.", 
                "category": "Games", 
                "price": 9.08,
                "image": null,
                "id": 0
            },
            {
                "name": "Elder Scrolls Morrowind", 
                "description": "The Elder Scrolls III: Morrowind is an open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the third installment in the Elder Scrolls series, following 1996's The Elder Scrolls II: Daggerfall, and was released in 2002 for Microsoft Windows and Xbox. The main story takes place on Vvardenfell, an island in the Dunmer (Dark Elf) province of Morrowind, part of the continent of Tamriel. The central quests concern the demigod Dagoth Ur, housed within the volcanic Red Mountain, who seeks to gain power and break Morrowind free from Imperial reign. Although it is primarily a fantasy game, with many gameplay elements and Western medieval and fantasy fiction tropes inspired by Dungeons & Dragons and previous RPGs, Morrowind also features some steampunk elements, and drew much inspiration from Middle Eastern and East Asian art, architecture and cultures. Morrowind was designed with an open-ended, freeform style of gameplay in mind, with less of an emphasis on the main plot than its predecessors. This choice received mixed reactions, though such feelings were tempered by reviewers' appreciation of Morrowind's expansive, detailed game world.", 
                "category": "Games", 
                "price": 14.99,
                "image": null,
                "id": 1
            }
        ],
        total_price: totalPrice(this.products),
        id: "1"
    },
    {
        
        customer: 1,
        products: [
            {
                "name": "Super Mario Bros.", 
                "description": "Super Mario Bros. is a platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). The successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series, it was first released in 1985 for the Famicom in Japan. Following a limited US release for the NES, it was ported to international arcades for the Nintendo VS. System in early 1986. The NES version received a wide release in North America that year and in PAL regions in 1987. Players control Mario, or his brother Luigi in the multiplayer mode, as they traverse the Mushroom Kingdom to rescue Princess Toadstool from King Koopa (later named Bowser). They traverse side-scrolling stages while avoiding hazards such as enemies and pits with the aid of power-ups such as the Super Mushroom, Fire Flower, and Starman.", 
                "category": "Games", 
                "price": 9.08,
                "image": null,
                "id": 0
            },
            {
                "name": "Elder Scrolls Morrowind", 
                "description": "The Elder Scrolls III: Morrowind is an open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the third installment in the Elder Scrolls series, following 1996's The Elder Scrolls II: Daggerfall, and was released in 2002 for Microsoft Windows and Xbox. The main story takes place on Vvardenfell, an island in the Dunmer (Dark Elf) province of Morrowind, part of the continent of Tamriel. The central quests concern the demigod Dagoth Ur, housed within the volcanic Red Mountain, who seeks to gain power and break Morrowind free from Imperial reign. Although it is primarily a fantasy game, with many gameplay elements and Western medieval and fantasy fiction tropes inspired by Dungeons & Dragons and previous RPGs, Morrowind also features some steampunk elements, and drew much inspiration from Middle Eastern and East Asian art, architecture and cultures. Morrowind was designed with an open-ended, freeform style of gameplay in mind, with less of an emphasis on the main plot than its predecessors. This choice received mixed reactions, though such feelings were tempered by reviewers' appreciation of Morrowind's expansive, detailed game world.", 
                "category": "Games", 
                "price": 14.99,
                "image": null,
                "id": 1
            }
        ],
        total_price: totalPrice(this.products),
        id: "2"
    },
]