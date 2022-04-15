exports.seed = function (knex, Promise) {
  return knex("stars").insert([
    {
      id: 1,
      name: "Robert Pattinson",
      age: 35,
      image_url:
        "https://media.allure.com/photos/6204067e11279f1317ce0cd1/master/pass/Robert%20Pattinson%20at%20the%2011th%20Annual%20Governors%20Awards.jpg",
      created: "2022-03-30",
      updated: "2022-03-30",
    },
    {
      id: 2,
      name: "Tom Holland",
      age: 25,
      image_url:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2f/Tom_Holland.jpg",
      created: "2022-03-30",
      updated: "2022-03-30",
    },
    {
      id: 3,
      name: "Sandra Bullock",
      age: 57,
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Sandra_Bullock_in_July_2013.jpg/640px-Sandra_Bullock_in_July_2013.jpg",
      created: "2022-03-30",
      updated: "2022-03-30",
    },
  ]);
};
