import mongoose, { Schema } from 'mongoose';

interface IDetails {
    name: string;
    email: string;
    message: string;
}

const msgSchema = new Schema<IDetails>({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    },
});
  
const UserMessage = mongoose.models.UserMessage || mongoose.model<IDetails>('UserMessage', msgSchema);
  
export default UserMessage;