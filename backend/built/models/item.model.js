"use strict";
exports.__esModule = true;
exports.ItemModel = exports.ItemSchema = void 0;
var mongoose_1 = require("mongoose");
var variants_model_1 = require("./variants.model");
/* export const ItemSchema = new Schema<Item>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        description: {type: String},
        imageUrl: {type: String},
        origins: {type: [Array]},
        tags: {type: [String]},
        vars_coverage: {type: [String]},
        vars_handle: {type: [String]},
        vars_color: {type: [String]},
        vars_mod: {type: [String]},
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
); */
exports.ItemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    imageUrl: { type: String },
    origins: { type: [Array] },
    tags: { type: [String] },
    variants: { type: [variants_model_1.VariantSchema], required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.ItemModel = (0, mongoose_1.model)('item', exports.ItemSchema);
