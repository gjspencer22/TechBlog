const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Like, Contribution } = require("../../models");