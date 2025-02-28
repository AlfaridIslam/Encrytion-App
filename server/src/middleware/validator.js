/**
 * Validates that the request body contains text
 */
export const validateTextInput = (req, res, next) => {
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({ error: "Valid text input is required" });
  }

  next();
};
