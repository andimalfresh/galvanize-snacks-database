
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
           {  
              id: 1,
              name:"Pork - Caul Fat",
              description:"Mauris lacinia sapien quis libero.",
              is_perishable:true,
              price:"8.44",
              img:"https://images.unsplash.com/photo-1459663148042-6d8cb9340411?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=44153beb9e2d61c2970e93f8d72a862e"
           },
           {  
              id: 2,
              name:"Soup - Campbells Beef Noodle",
              description:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
              is_perishable:false,
              price:"26.37",
              img:"https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=edefdcf46c20585719c55c6377816072"
           },
           {  
              id: 3,
              name:"Pie Filling - Cherry",
              description:"Fusce posuere felis sed lacus.",
              is_perishable:false,
              price:"3.16",
              img:"https://images.unsplash.com/photo-1457609171594-20fa2108dc41?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=adeb51e4f23f6d671af282534b72c08c"
           },
           {  
              id: 4,
              name:"Chickhen - Chicken Phyllo",
              description:"Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
              is_perishable:true,
              price:"5.08",
              img:"https://images.unsplash.com/photo-1477259004500-ce2463b979ca?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=a0f46f716078547295cd897c5567348a"
           },
           {  
              id: 5,
              name:"Foam Dinner Plate",
              description:"In quis justo. Maecenas rhoncus aliquam lacus.",
              is_perishable:false,
              price:"5.88",
              img:"https://images.unsplash.com/photo-1442604699113-7d805614c476?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=a09687f4e6c814a525236c11286dce5c"
           },
           {  
              id: 6,
              name:"Wine - White, Riesling, Semi - Dry",
              description:"Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
              is_perishable:false,
              price:"13.92",
              img:"https://images.unsplash.com/photo-1444731961956-751ed90465a5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=a26b86a7598c2777cdd3bad2dfac63a3"
           },
           {  
              id: 7,
              name:"Cheese - Taleggio D.o.p.",
              description:"Nulla ut erat id mauris vulputate elementum. Nullam varius.",
              is_perishable:true,
              price:"1.17",
              img:"https://images.unsplash.com/photo-1486742913764-cdb6b28038f9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=bffd73118727b34a56e961d43e313b07"
           },
           {  
              id: 8,
              name:"Cheese - Brie",
              description:"Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
              is_perishable:false,
              price:"26.34",
              img:"https://images.unsplash.com/photo-1471102204080-fe99e6db4ef0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=1ff645176888208debab959755337d7e"
           },
           {  
              id: 9,
              name:"Tea - Darjeeling, Azzura",
              description:"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
              is_perishable:true,
              price:"18.22",
              img:"https://images.unsplash.com/photo-1425543033754-7d8f86ea397d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=05565f968342f5dbd31339d77594c070"
           },
           {  
              id: 10,
              name:"Veal Inside - Provimi",
              description:"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
              is_perishable:true,
              price:"24.80",
              img:"https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=388f9904ebecc2d0d7d5e1e5f0f4a93a"
           },
           { 
              id: 11,
              name:"Tomatoes - Roma",
              description:"Phasellus in felis. Donec semper sapien a libero. Nam dui.",
              is_perishable:false,
              price:"14.44",
              img:"https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=16b02683baf47d69d472ff0b8f50f003"
           },
           {  
              id: 12,
              name:"Sauce - Bernaise, Mix",
              description:"Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
              is_perishable:true,
              price:"8.75",
              img:"https://images.unsplash.com/photo-1452013952949-59a67c267ede?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=9df856bd636e943d4448b7fae147a041"
           },
           {  
              id:13,
              name:"Jam - Strawberry, 20 Ml Jar",
              description:"Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
              is_perishable:true,
              price:"8.14",
              img:"https://images.unsplash.com/photo-1463489995677-c1981fbd7049?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=a80e76902754e25f2d3ce2ce14188f1c"
           },
           {  
              id: 14,
              name:"Cheese - Ricotta",
              description:"Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
              is_perishable:true,
              price:"14.20",
              img:"https://images.unsplash.com/photo-1473366379653-65061f9c3b40?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=30b10cad8b5a8102e8b14ce0c9da20ec"
           },
           {  
              id: 15,
              name:"Remy Red Berry Infusion",
              description:"Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
              is_perishable:false,
              price:"20.82",
              img:"https://images.unsplash.com/photo-1474045326708-cdc78c2487cb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=3de0652b7b018f9a1b815eac506e19eb"
           },
           { 
              id: 16, 
              name:"Wine - Chateau Bonnet",
              description:"Nam nulla.",
              is_perishable:true,
              price:"21.29",
              img:"https://images.unsplash.com/photo-1432835305417-6919779246b4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=9ecac9764d4fc63dd2a3bf5f2de22199"
           },
           {  
              id: 17,
              name:"Vegetable - Base",
              description:"Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
              is_perishable:false,
              price:"10.73",
              img:"https://images.unsplash.com/photo-1481390915718-84930b788814?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=e8dc7480483c61acc7c084a30e46980b"
           },
           {  
              id: 18,
              name:"Squeeze Bottle",
              description:"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
              is_perishable:true,
              price:"15.98",
              img:"https://images.unsplash.com/photo-1488530814214-bc796945ecc3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=ba30c33fcccb36b2bf2426a09339cff0"
           },
           {  
              id: 19,
              name:"Extract Vanilla Pure",
              description:"Duis at velit eu est congue elementum.",
              is_perishable:true,
              price:"12.94",
              img:"https://images.unsplash.com/photo-1470858831619-ca02d796b2a5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=2e1e2772a654d4e3d3bd8f67aba14e83"
           },
           {  
              id: 20,
              name:"Beef Striploin Aaa",
              description:"Donec dapibus.",
              is_perishable:true,
              price:"6.18",
              img:"https://images.unsplash.com/photo-1467019972079-a273e1bc9173?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=d73b35ea7685a9a1bb6a691645a37e3f"
           },
           {  
              id: 21,
              name:"Tea - Jasmin Green",
              description:"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
              is_perishable:true,
              price:"6.41",
              img:"https://images.unsplash.com/photo-1450150205175-1e2ee46bb78b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=55a761e9e0fe7fa2e7c3069e116c3d6d"
           },
           {  
              id: 22,
              name:"Wine - Red, Gamay Noir",
              description:"Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
              is_perishable:false,
              price:"28.21",
              img:"https://images.unsplash.com/photo-1492015185162-70eff4d54ef5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=42b0cd86af6f3751aa6a4fb136e9e53d"
           },
           {  
              id: 23,
              name:"Plasticforkblack",
              description:"Duis aliquam convallis nunc.",
              is_perishable:true,
              price:"5.31",
              img:"https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=af3e2f926033794541bb7478202efc58"
           },
           {  
              id: 24,
              name:"Mushroom - Shitake, Dry",
              description:"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
              is_perishable:false,
              price:"13.45",
              img:"https://images.unsplash.com/photo-1464343256590-e0ff9b7d104c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=3312676dfd4bb4415d6b9225eac8a88b"
           },
           {  
              id: 25,
              name:"Lettuce - Radicchio",
              description:"Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
              is_perishable:false,
              price:"16.24",
              img:"https://images.unsplash.com/photo-1457386335663-6115e304bd29?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=0e3c372b4caed3434517fdeac42f8779"
           },
           {  
              id: 26,
              name:"Pail For Lid 1537",
              description:"Maecenas rhoncus aliquam lacus.",
              is_perishable:false,
              price:"1.82",
              img:"https://images.unsplash.com/photo-1481713160429-bd3226e2a787?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=bd6f17951dd89258a81c3fe098e14544"
           },
           {  
              id: 27,
              name:"Olives - Black, Pitted",
              description:"Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
              is_perishable:false,
              price:"14.01",
              img:"https://images.unsplash.com/photo-1445979323117-80453f573b71?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=c58bfe21d48bde955639324961778d70"
           },
           {  
              id: 28,
              name:"Cocoa Powder - Natural",
              description:"Donec semper sapien a libero. Nam dui.",
              is_perishable:false,
              price:"20.89",
              img:"https://images.unsplash.com/photo-1457296795659-6f458be7a874?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=d0e2fc363c7d958ae6205131e8c8496b"
           },
           { 
              id: 29, 
              name:"Mushroom - Oyster, Fresh",
              description:"Morbi ut odio.",
              is_perishable:true,
              price:"27.26",
              img:"https://images.unsplash.com/photo-1490716961549-5dbd18f53101?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=af042b89e8c0663829208244633eab54"
           },
           {  
              id: 30,
              name:"Rosemary - Primerba, Paste",
              description:"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
              is_perishable:false,
              price:"17.18",
              img:"https://images.unsplash.com/photo-1447099688328-2488c8c9648a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=5aa1ed12aede64ce99e936b337476099"
           }
      ]);
    });
};
