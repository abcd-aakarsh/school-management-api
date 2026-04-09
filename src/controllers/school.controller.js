import { createSchool } from "../services/school.service.js";
import { getAllSchools } from "../services/school.service.js";
import { calculateDistance } from "../utils/distance.js";

//addSchool
export const addSchool = async (req, res) => {
  try {
    const id = await createSchool(req.body);

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
    const { latitude, longitude } = req.query;

    const userLat = latitude;
    const userLng = longitude;

    if (
      isNaN(userLat) ||
      isNaN(userLng) ||
      userLat < -90 ||
      userLat > 90 ||
      userLng < -180 ||
      userLng > 180
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid latitude or longitude",
      });
    }

    const schools = await getAllSchools();

    const schoolsWithDistance = schools.map((school) => {
      const distance = calculateDistance(
        userLat,
        userLng,
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
