import mongoose, {Document, Schema} from 'mongoose'

export interface IAuthor extends Document{
    name: string;
    username: string;
    email: string;
    image: string;
    url: string;
    bio: string;
}

const AuthorSchema: Schema<IAuthor> = new Schema<IAuthor>(
    {
        name: {type: String, required: true},
        username: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        image: {type: String},
        url:{type: String},
        bio: {type: String}
    },
    {
        timestamps: true
    }
);

const Author = mongoose.models.Author || mongoose.model<IAuthor>('Author', AuthorSchema)
export default Author;