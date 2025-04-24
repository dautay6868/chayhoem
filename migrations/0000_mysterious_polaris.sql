CREATE TABLE "bookings" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullname" text NOT NULL,
	"phone" text NOT NULL,
	"email" text,
	"pickup_address" text NOT NULL,
	"car_type" text NOT NULL,
	"service_type" text NOT NULL,
	"pickup_date" text NOT NULL,
	"pickup_time" text NOT NULL,
	"destination" text NOT NULL,
	"num_passengers" integer NOT NULL,
	"notes" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"contact_name" text NOT NULL,
	"contact_email" text NOT NULL,
	"contact_phone" text,
	"subject" text NOT NULL,
	"message" text NOT NULL,
	"is_read" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
