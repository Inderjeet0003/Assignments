const mongoose = require('mongoose');
const Blog = require('./models/blog');


const blogs = [{
        heading: "Lily",
        img: "https://images.unsplash.com/photo-1619776391673-58f38f291197?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        desc: "Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between"
    },
    {
        heading: "Rainforest",
        img: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        desc: "Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between"
    },
    {
        heading: "Hibiscus",
        img: "https://images.unsplash.com/photo-1617261585746-dc58beb5786a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        desc: "Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between"
    },
    {
        heading: "Mixture",
        img: "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        desc: "Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between"
    },
    {
        heading: "Rose",
        img: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        desc: "Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between"
    },
    {
        heading: "Dahlia",
        img: "https://images.unsplash.com/photo-1444930694458-01babf71870c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        desc: "Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between"
    },
    {
        heading: "Sunflower",
        img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        desc: "Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between"
    },

]

const seedDB = async() => {

    await Blog.insertMany(blogs);
    console.log("DB Seeded");
}

module.exports = seedDB;