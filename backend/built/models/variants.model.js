"use strict";
exports.__esModule = true;
exports.VariantModel = exports.VariantSchema = void 0;
var mongoose_1 = require("mongoose");
exports.VariantSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    bonus: { type: Number, required: false },
    type: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.VariantModel = (0, mongoose_1.model)('variant', exports.VariantSchema);
