import User from '../models/User.js'; // Import the User model

// Create a new user
export const CreateUser = async (req, res) => {
    try {
        const { email, username, birthday } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Create a new user
        const newUser = new User({ email, username, birthday });
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

// Get user by ID
export const Getuser = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the user by ID
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user", error });
    }
};

// Update user (PUT - Full Update)
export const Updateuser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, username, birthday } = req.body;

        // Find and update the user
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { email, username, birthday },
            { new: true, runValidators: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

// Get all users
export const Getall = async (req, res) => {
    try {
        const usersx = await User.find();
        res.status(200).json(usersx);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};


// Update user (PATCH - Partial Update)
export const updateUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body; // Partial updates

        // Find and apply partial updates
        const updatedUser = await User.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

// Delete user by ID
export const Deteleuser = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the user
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};
