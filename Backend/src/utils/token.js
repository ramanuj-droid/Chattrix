import jwt from "jsonwebtoken";

/**
 * Generate JWT
 */
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

/**
 * Send token in HTTP-only cookie
 */
export const sendTokenResponse = (user, res) => {
  const token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,          // MUST be true for HTTPS (Azure)
    sameSite: "none",      // MUST be "none" for cross-origin
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return { user };
};