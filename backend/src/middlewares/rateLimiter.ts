import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute in milliseconds
  max: 1000,
  message: "You have exceeded the 1000 requests in 1 minute limit!",
  standardHeaders: true,
  legacyHeaders: false,
});
