#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var algorithmA_1 = __importDefault(require("./algorithmA"));
var algorithmB_1 = __importDefault(require("./algorithmB"));
var numberArray = [];
for (var i = 3; i < process.argv.length; i += 1) {
    numberArray.push(Number(process.argv[i]));
}
if (process.argv[2] === '-a') {
    console.log(algorithmA_1.default(numberArray));
}
if (process.argv[2] === '-b') {
    console.log(algorithmB_1.default(numberArray));
}
