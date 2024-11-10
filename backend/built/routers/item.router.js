"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var item_model_1 = require("../models/item.model");
var category_model_1 = require("../models/category.model");
var variants_model_1 = require("../models/variants.model");
var router = (0, express_1.Router)();
router.get("/seed", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemsCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, item_model_1.ItemModel.countDocuments()];
            case 1:
                itemsCount = _a.sent();
                if (itemsCount > 0) {
                    res.send("Загрузка данных уже была!");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, item_model_1.ItemModel.create()];
            case 2:
                _a.sent();
                res.send("Загрузка данных выполнена!");
                return [2 /*return*/];
        }
    });
}); }));
router.get("/", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var items;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, item_model_1.ItemModel.find()];
            case 1:
                items = _a.sent();
                res.send(items);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/categories", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, category_model_1.CategoryModel.find()];
            case 1:
                categories = _a.sent();
                res.send(categories);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/variants", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var variants;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, variants_model_1.VariantModel.find()];
            case 1:
                variants = _a.sent();
                res.send(variants);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/search/:searchTerm", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchRegex, items;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRegex = new RegExp(req.params.searchTerm, 'i');
                return [4 /*yield*/, item_model_1.ItemModel.find({ name: { $regex: searchRegex } })];
            case 1:
                items = _a.sent();
                res.send(items);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/tags", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tags, all;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, item_model_1.ItemModel.aggregate([
                    {
                        $unwind: '$tags'
                    },
                    {
                        $group: {
                            _id: '$tags',
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            name: '$_id',
                            count: '$count'
                        }
                    }
                ]).sort({ count: -1 })];
            case 1:
                tags = _b.sent();
                _a = {
                    name: 'Все'
                };
                return [4 /*yield*/, item_model_1.ItemModel.countDocuments()];
            case 2:
                all = (_a.count = _b.sent(),
                    _a);
                tags.push(all);
                res.send(tags);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/tag/:tagName", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var items;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, item_model_1.ItemModel.find({ tags: req.params.tagName })];
            case 1:
                items = _a.sent();
                res.send(items);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/tags/:tagMame", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tags, all;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, item_model_1.ItemModel.aggregate([
                    {
                        $unwind: '$tags'
                    },
                    {
                        $group: {
                            _id: '$tags[1]',
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            name: '$_id',
                            count: '$count',
                            maintag: '$tags[0]'
                        }
                    }
                ]).sort({ count: -1 })];
            case 1:
                tags = _b.sent();
                _a = {
                    name: 'Все'
                };
                return [4 /*yield*/, item_model_1.ItemModel.countDocuments()];
            case 2:
                all = (_a.count = _b.sent(),
                    _a);
                tags.push(all);
                res.send(tags);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/:itemId", (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, item_model_1.ItemModel.findById(req.params.itemId)];
            case 1:
                item = _a.sent();
                res.send(item);
                return [2 /*return*/];
        }
    });
}); }));
/* DELETE */
router["delete"]('/:itemId', (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, item_model_1.ItemModel.findByIdAndRemove(req.params.itemId)];
            case 1:
                item = _a.sent();
                res.send(item);
                return [2 /*return*/];
        }
    });
}); }));
/* SAVE */
router.post('/', (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, item_model_1.ItemModel.create(req.body)];
            case 1:
                item = _a.sent();
                res.send(item);
                return [2 /*return*/];
        }
    });
}); }));
/* UPDATE BOOK */
router.put('/', (0, express_async_handler_1["default"])(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemID, itemData, item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                itemID = req.body.id;
                itemData = req.body;
                return [4 /*yield*/, item_model_1.ItemModel.findByIdAndUpdate(itemID, itemData)];
            case 1:
                item = _a.sent();
                res.send(item);
                return [2 /*return*/];
        }
    });
}); }));
exports["default"] = router;
