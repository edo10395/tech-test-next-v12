import { db } from "../../../prisma/db";

export default async function handler(req, res) {
  // cek req method
  if (req.method !== "POST") {
    return res.status(401).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const datas = req.body;
    const arr = [];
    datas.forEach(async (item, index) => {
      arr.push(item);
      await db.dataProduk.create({
        data: datas[index],
      });
    });

    // await db.dataProduk.create({
    //   data: req.body,
    // });
    return res.status(201).json({
      success: true,
      message: "Berhasil ditambah",
      query: arr,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
    });
  }
}
