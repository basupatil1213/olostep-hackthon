import mongoose, { Schema } from "mongoose";

const WebScrapSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},
    {
        timestamps: true,
    }
);

const WebScrap = mongoose.model('WebScrap', WebScrapSchema);

export default WebScrap;