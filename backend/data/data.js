const mongoose = require('mongoose')

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    username: "Batman1",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profileImg: "p11.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    username: "Batman2",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profileImg: "p3.jpeg",
    friends: [],
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    username: "Batman3",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    profileImg: "p4.jpeg",
    friends: [],
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    username: "Batman5",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profileImg: "p6.jpeg",
    friends: [],
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    username: "Batman45",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profileImg: "p5.jpeg",
    friends: [],
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    username: "Batman58",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profileImg: "p7.jpeg",
    friends: [],
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    username: "Batman79",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profileImg: "p8.jpeg",
    friends: [],
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    username: "Batman55",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profileImg: "p9.jpeg",
    friends: [],
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    user: new mongoose.Types.ObjectId("64fc86b3b61fa09c7aeb2189"),
    location: "New York, CA",
    desc: "Some really long random description",
    photo: "post1.jpeg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    user: userIds[1],
    firstName: "Whatcha",
    lastName: "Doing",
    location: "Korea, CA",
    desc: "Another really long random description. This one is longer than the previous one.",
    photoh: "post2.jpeg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    user: new mongoose.Types.ObjectId("64fc86b3b61fa09c7aeb2189"),
    location: "Utah, CA",
    desc: "This is the last really long random description. This one is longer than the previous one.",
    photo: "post3.jpeg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    user: new mongoose.Types.ObjectId("64fc86b3b61fa09c7aeb2189"),
    location: "Los Angeles, CA",
    desc: "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    photo: "post4.jpeg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    user: new mongoose.Types.ObjectId("64fc86b3b61fa09c7aeb2189"),
    location: "Chicago, IL",
    desc: "Just a short description. I'm tired of typing. I'm going to play video games now.",
    photo: "post5.jpeg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    user: new mongoose.Types.ObjectId("64fc86b3b61fa09c7aeb2189"),
    location: "Washington, DC",
    desc: "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    photo: "post6.jpeg",
  },
];

module.exports = { users, posts };

