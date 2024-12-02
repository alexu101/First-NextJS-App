import mongoose, {Document, Schema} from 'mongoose'

export interface IStartup extends Document{
    title: string;
    description: string;
    image: string;
    category: string;
    views: number;
    author: mongoose.Types.ObjectId;
}

const StartupSchema: Schema<IStartup> = new Schema<IStartup>(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String},
        category: {type: String},
        views: {type: Number, default: 0},
        author: {type: mongoose.Schema.Types.ObjectId, ref: "Author"}
    },
    {
        timestamps: {createdAt: '_createdAt', updatedAt: false}
    }
);

const Startup = mongoose.models.Startup || mongoose.model<IStartup>('Startup', StartupSchema)
export default Startup;