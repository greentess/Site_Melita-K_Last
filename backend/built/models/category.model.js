"use strict";
exports.__esModule = true;
exports.CategoryModel = exports.CategorySchema = void 0;
var mongoose_1 = require("mongoose");
exports.CategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    link: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.CategoryModel = (0, mongoose_1.model)('category', exports.CategorySchema);
