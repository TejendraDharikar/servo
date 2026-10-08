"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const database_1 = require("@servo/database");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/api/health", (_req, res) => {
    res.json({
        success: true,
        message: "Servo API is running",
    });
});
app.get("/api/health/db", async (_req, res) => {
    try {
        await database_1.prisma.$queryRaw `SELECT 1`;
        res.json({
            success: true,
            message: "Database connection is working",
        });
    }
    catch (error) {
        console.error("Database health check failed:", error);
        res.status(500).json({
            success: false,
            message: "Database connection failed",
        });
    }
});
exports.default = app;
