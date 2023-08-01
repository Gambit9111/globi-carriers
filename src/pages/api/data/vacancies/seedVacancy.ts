import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";

const items = [
    {
        title: "Car Mechanic",
        description: "Assist with basic carpentry tasks under the guidance of a senior carpenter.",
        location: "Rotterdam, Netherlands",
        salaryRange: "€350 - €500 per week",
        experienceLevel: "Junior",
        publishedDate: new Date("2023-05-12T00:00:00.000Z"),
      },
      {
        title: "Welder",
        description: "General labor on construction sites, no specific skill required but familiarity with construction tools and practices is a plus.",
        location: "Amsterdam, Netherlands",
        salaryRange: "€400 - €600 per week",
        experienceLevel: "Entry",
        publishedDate: new Date("2023-05-13T00:00:00.000Z"),
      },
      {
        title: "Construction Worker",
        description: "Routine plumbing maintenance and repair tasks, must have basic plumbing skills.",
        location: "The Hague, Netherlands",
        salaryRange: "€500 - €650 per week",
        experienceLevel: "Mid-level",
        publishedDate: new Date("2023-05-14T00:00:00.000Z"),
      },
      {
        title: "Painter",
        description: "Responsible for electrical installations and repairs, must have relevant certification and experience.",
        location: "Utrecht, Netherlands",
        salaryRange: "€600 - €800 per week",
        experienceLevel: "Senior",
        publishedDate: new Date("2023-05-15T00:00:00.000Z"),
      },
      {
        title: "CNC Programmer",
        description: "General warehouse duties including packing, sorting, and loading goods. No specific skills required.",
        location: "Eindhoven, Netherlands",
        salaryRange: "€400 - €550 per week",
        experienceLevel: "Entry",
        publishedDate: new Date("2023-05-16T00:00:00.000Z"),
      },
  ]

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      try {
        for (const item of items) {
            await prisma.vacancy.create({
                data:{
                    title: item.title,
                    description: item.description,
                    location: item.location,
                    salaryRange: item.salaryRange,
                    experienceLevel: item.experienceLevel,
                    publishedDate: new Date(item.publishedDate),
                }
            })
        }
        res.status(200).json({ message: "Database seeded successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error seeding the database", error });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  };
  
  export default handler;