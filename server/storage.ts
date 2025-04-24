// server/storage.ts

import type { InferInsertModel } from "drizzle-orm";
import { eq } from "drizzle-orm";
import { db } from "./db";

import {
  users,
  bookings,
  contacts,
  type User,
  type Booking,
  type Contact,
  type InsertUser,
  type InsertBooking,
  type InsertContact,
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  createBooking(booking: InsertBooking): Promise<Booking>;
  getBooking(id: number): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;

  createContact(contact: InsertContact): Promise<Contact>;
  getContact(id: number): Promise<Contact | undefined>;
  getAllContacts(): Promise<Contact[]>;
  markContactAsRead(id: number): Promise<Contact | undefined>;
}

export class DatabaseStorage implements IStorage {
  // ———— Users ————

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.username, username));
    return user;
  }

  async createUser(newUser: InsertUser): Promise<User> {
    const [created] = await db
      .insert(users)
      // force the array overload & cast to Drizzle’s insert type
      .values([newUser as InferInsertModel<typeof users>])
      .returning();
    return created;
  }

  // ———— Bookings ————

  async createBooking(newBooking: InsertBooking): Promise<Booking> {
    const [created] = await db
      .insert(bookings)
      .values([newBooking as InferInsertModel<typeof bookings>])
      .returning();
    return created;
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    const [booking] = await db
      .select()
      .from(bookings)
      .where(eq(bookings.id, id));
    return booking;
  }

  async getAllBookings(): Promise<Booking[]> {
    return db.select().from(bookings);
  }

  async updateBookingStatus(
    id: number,
    newStatus: string
  ): Promise<Booking | undefined> {
    const [updated] = await db
      .update(bookings)
      // Drizzle’s `.set(...)` typing can be finicky around defaulted columns,
      // so we coerce to `any`.
      .set({ status: newStatus } as any)
      .where(eq(bookings.id, id))
      .returning();
    return updated;
  }

  // ———— Contacts ————

  async createContact(newContact: InsertContact): Promise<Contact> {
    const [created] = await db
      .insert(contacts)
      .values([newContact as InferInsertModel<typeof contacts>])
      .returning();
    return created;
  }

  async getContact(id: number): Promise<Contact | undefined> {
    const [contact] = await db
      .select()
      .from(contacts)
      .where(eq(contacts.id, id));
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return db.select().from(contacts);
  }

  async markContactAsRead(id: number): Promise<Contact | undefined> {
    const [updated] = await db
      .update(contacts)
      .set({ is_read: true } as any)
      .where(eq(contacts.id, id))
      .returning();
    return updated;
  }
}

export const storage = new DatabaseStorage();
