import { pgTable, text, serial, integer, timestamp, boolean as pgBoolean } from "drizzle-orm/pg-core";
import { z } from "zod";

// ── Bảng bookings ───────────────────────────────────────────────────────────
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  fullname: text("fullname").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  pickup_address: text("pickup_address").notNull(),
  car_type: text("car_type").notNull(),
  service_type: text("service_type").notNull(),
  pickup_date: text("pickup_date").notNull(),
  pickup_time: text("pickup_time").notNull(),
  destination: text("destination").notNull(),
  num_passengers: integer("num_passengers").notNull(),
  notes: text("notes"),
  status: text("status").notNull().default("pending"),
  created_at: timestamp("created_at").defaultNow(),
});

// Zod schema để validate khi insert
export const insertBookingSchema = z.object({
  fullname: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email().optional(),
  pickup_address: z.string().min(1),
  car_type: z.string().min(1),
  service_type: z.string().min(1),
  pickup_date: z.string().min(1),
  pickup_time: z.string().min(1),
  destination: z.string().min(1),
  num_passengers: z.number().int().positive(),
  notes: z.string().optional(),
});
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

// ── Bảng contacts ──────────────────────────────────────────────────────────
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  contact_name: text("contact_name").notNull(),
  contact_email: text("contact_email").notNull(),
  contact_phone: text("contact_phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  is_read: pgBoolean("is_read").notNull().default(false),
  created_at: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = z.object({
  contact_name: z.string().min(1),
  contact_email: z.string().email(),
  contact_phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(1),
});
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// ── Bảng users (nếu cần) ───────────────────────────────────────────────────
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
