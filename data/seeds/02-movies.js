exports.seed = function (knex, Promise) {
  return knex("movies").insert([
    {
      name: "THE BATMAN",
      release_date: "March 4, 2022",
      image_url: "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      description:
        "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence",
      star_id: 1,
      created: "2022-03-30",
      updated: "2022-03-30",
    },
    {
      name: "THE LOST CITY",
      release_date: "March 25, 2022",
      image_url: "https://m.media-amazon.com/images/M/MV5BMmIwYzFhODAtY2I1YS00ZDdmLTkyYWQtZjI5NDIwMDc2MjEyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      description:
        "Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named",
      star_id: 3,
      created: "2022-03-30",
      updated: "2022-03-30",
    },
    {
      name: "SPIDER-MAN: NO WAY HOME",
      release_date: "December 17, 2021",
      image_url: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
      description:
        "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super",
      star_id: 2,
      created: "2022-03-30",
      updated: "2022-03-30",
    },
  ]);
};
