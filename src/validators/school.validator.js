import { z } from "zod";

export const addSchoolSchema = z
  .object({
    name: z.string().min(1, "Name is required").trim(),
    address: z.string().min(1, "Address is required").trim(),

    latitude: z.number().min(-90).max(90),

    longitude: z.number().min(-180).max(180),
  })
  .strict();

export const listSchoolsSchema = z.object({
  latitude: z.preprocess(
    (val) => {
      if (val === "" || val === undefined) return undefined;
      return Number(val);
    },
    z
      .number({
        required_error: "Latitude is required",
        invalid_type_error: "Latitude must be a number",
      })
      .min(-90)
      .max(90),
  ),

  longitude: z.preprocess(
    (val) => {
      if (val === "" || val === undefined) return undefined;
      return Number(val);
    },
    z
      .number({
        required_error: "Longitude is required",
        invalid_type_error: "Longitude must be a number",
      })
      .min(-180)
      .max(180),
  ),
});
