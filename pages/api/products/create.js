import { db } from "../../../prisma/db";

export default async function handler(req, res) {
  //cek req method
  if (req.method !== "POST") {
    return res.status(401).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const data = await req.body;
    const createProduk = await db.dataProduk.create({
      data: data,
    });
    return res.status(201).json({
      success: true,
      query: createProduk,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
    });
  }
}
