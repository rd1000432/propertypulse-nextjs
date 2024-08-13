import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Email is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    image: {
      type: String,
    },
    bookmarks: [
      // an array of these object ids for properties and refer to the Property Model
      {
        type: Schema.Types.ObjectId,
        ref: 'Property',
      },
    ],
  },
  {
    // it will automatically create the the created-at and updated-at timestamp fields
    timestamps: true,
  }
);

const User = models.User || model('User', UserSchema);

export default User;
