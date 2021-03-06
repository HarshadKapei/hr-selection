var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    photo: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model("HtmlBrand", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    findAll: function (data, callback) {
        HtmlBrand.find({}).exec(callback);

    }
};
module.exports = _.assign(module.exports, exports, model);