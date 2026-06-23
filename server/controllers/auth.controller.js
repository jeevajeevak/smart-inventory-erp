import { registerUser } from "../services/auth.service.js";
import { registerSchema } from "../validators/auth.validator.js";
import { loginUser } from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    // Validate request body
    const validatedData = registerSchema.parse(req.body);

    // Register user
    const result = await registerUser(validatedData);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result.user,
      token: result.token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const result = await loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result.user,
      token: result.token,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
};