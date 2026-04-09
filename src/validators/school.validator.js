import { z } from "zod";

export const listSchoolsSchema = z.object({
  latitude: z.string()
    .transform(Number)
    .refine((val) => !isNaN(val) && val >= -90 && val <= 90, {
      message: "Latitude must be between -90 and 90"
    }),
  longitude: z.string()
    .transform(Number)
    .refine((val) => !isNaN(val) && val >= -180 && val <= 180, {
      message: "Longitude must be between -180 and 180"
    }),
});

export const addSchoolSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  latitude: z.number()
    .min(-90, "Latitude must be >= -90")
    .max(90, "Latitude must be <= 90"),
  longitude: z.number()
    .min(-180, "Longitude must be >= -180")
    .max(180, "Longitude must be <= 180"),
});
