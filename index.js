console.log("Hello node!!");

import slugify from "slugify";
const title = slugify("Merhabalar arkadaşlar kanalıma hoş geldiniz!!","_");
console.log(title);

import {hello,topla} from "./MyModule.js";
console.log(topla(10,3));
hello("Fatih");