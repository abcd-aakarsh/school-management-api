import { createSchool } from "../services/school.service.js";
import { getAllSchools } from "../services/school.service.js";
import { calculateDistance } from "../utils/distance.js";

//addSchool
export const addSchool = async (req, res) => {
  try {
    const id = await createSchool(req.validated);

    res.status(201).json({
      success: true,
      message: "School added successfully",
      id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//listSchools
export const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.validated;


    const schools = await getAllSchools();

    const schoolsWithDistance = schools.map((school) => {
      const distance = calculateDistance(
        latitude,
        longitude,
        school.latitude,
        school.longitude,
      );

      return {
        ...school,
        distance: Number(distance.toFixed(2)),
      };
    });

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json({
      success: true,
      data: schoolsWithDistance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
