import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertBookingSchema,
  insertContactSchema,
  type InsertBooking,
  type InsertContact
} from "../shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { appendToSheet } from "./services/googleSheets";

export async function registerRoutes(app: Express): Promise<Server> {
  // ── POST /api/bookings ─────────────────────────────────────────────────────
  app.post("/api/bookings", async (req, res) => {
    try {
      const body = { ...req.body } as any;
      if (typeof body.num_passengers === "string") {
        body.num_passengers = parseInt(body.num_passengers, 10);
      }
      const bookingData: InsertBooking = insertBookingSchema.parse(body);

      const booking = await storage.createBooking(bookingData);

      const now = new Date().toLocaleString("vi-VN");
      const sheetRow = [[
        bookingData.fullname,
        bookingData.phone,
        bookingData.email ?? "",
        bookingData.pickup_address,
        bookingData.pickup_date,
        bookingData.pickup_time,
        bookingData.car_type === "carnival_7"
          ? "Carnival Limousine 7 chỗ"
          : "Carnival Limousine VIP 4 chỗ",
        bookingData.service_type === "airport"
          ? "Đưa đón sân bay"
          : bookingData.service_type === "tour"
          ? "Tour tham quan"
          : bookingData.service_type === "rental"
          ? "Thuê xe dài ngày"
          : "Đưa đón theo điểm",
        bookingData.destination,
        String(bookingData.num_passengers),
        bookingData.notes ?? "",
        now
      ]];
      try {
        await appendToSheet(sheetRow, "booking");
      } catch {
        console.log("Lưu local vì Sheets lỗi:", { time: now, data: bookingData });
      }

      return res.status(201).json({ message: "Booking created successfully", booking });
    } catch (err) {
      if (err instanceof ZodError) {
        const ve = fromZodError(err);
        return res.status(400).json({ message: "Validation error", errors: ve.details });
      }
      console.error("Booking error:", err);
      return res.status(500).json({ message: "Failed to create booking" });
    }
  });

  // ── GET /api/bookings ──────────────────────────────────────────────────────
  app.get("/api/bookings", async (_, res) => {
    try {
      const list = await storage.getAllBookings();
      return res.json(list);
    } catch (err) {
      console.error("Fetch bookings error:", err);
      return res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  // ── POST /api/contacts ─────────────────────────────────────────────────────
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData: InsertContact = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);

      const now = new Date().toLocaleString("vi-VN");
      const sheetRow = [[
        contactData.contact_name,
        contactData.contact_phone ?? "",
        contactData.contact_email,
        contactData.subject,
        contactData.message,
        now
      ]];
      try {
        await appendToSheet(sheetRow, "contact");
      } catch {
        console.log("Lưu local vì Sheets lỗi:", { time: now, data: contactData });
      }

      return res.status(201).json({ message: "Message sent successfully", contact });
    } catch (err) {
      if (err instanceof ZodError) {
        const ve = fromZodError(err);
        return res.status(400).json({ message: "Validation error", errors: ve.details });
      }
      console.error("Contact error:", err);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  // ── GET /api/contacts ──────────────────────────────────────────────────────
  app.get("/api/contacts", async (_, res) => {
    try {
      const list = await storage.getAllContacts();
      return res.json(list);
    } catch (err) {
      console.error("Fetch contacts error:", err);
      return res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  return createServer(app);
}
