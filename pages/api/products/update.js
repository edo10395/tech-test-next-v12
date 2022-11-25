import { db } from "../../../prisma/db";

export default async function handler(req, res) {
  //cek req method
  if (req.method !== "PUT") {
    return res.status(401).json({
      success: false,
      message: "Request tidak diizinkan",
    });
  }

  try {
    // req query
    const { id } = await req.query;
    const newProduct = await req.body;
    const updateProduct = await db.dataProduk.update({
      where: {
        id: parseInt(id),
      },
      data: newProduct,
    });

    return res.status(201).json({
      success: true,
      message: "Data Berhasil Diubah",
      query: updateProduct,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
    });
  }
}
