const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
title: { type: String, required: true, unique: true },
description : {type : String, required : true},
price : Number,
discountPercentage : Number,
rating : {type : Number, min : 0, max : 5},
stock : Number,
brand : String,
category : String,
thumbnail : {type : String, required : true},
images : [String]
});

const product = mongoose.model("product", productSchema);

module.exports = product