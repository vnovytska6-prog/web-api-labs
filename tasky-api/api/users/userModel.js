import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Compare password during login
UserSchema.methods.comparePassword = async function (passw) {
    return await bcrypt.compare(passw, this.password);
};

// Find user by username
UserSchema.statics.findByUserName = function (username) {
    return this.findOne({ username: username });
};

// Hash password before saving
UserSchema.pre('save', async function () {
    const saltRounds = 12;

    if (this.isModified('password') || this.isNew) {
        try {
            const hash = await bcrypt.hash(this.password, saltRounds);
            this.password = hash;
        } catch (error) {
            throw new Error(error);
        }
    }
});

export default mongoose.model('User', UserSchema);