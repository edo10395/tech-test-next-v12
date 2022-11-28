import { db } from '../../../prisma/db';

export default async function handler(req, res) {
  // cek req method
  if (req.method !== 'DELETE') {
    return res.status(401).json({
      success: false,
      message: 'Request tidak diizinkan',
    });
  }

  try {
    // req query
    const deleteProduct = await db.dataProduk.deleteMany({});

    // karena ada perubahan kode 201
    return res.status(201).json({
      success: true,
      message: 'Berhasil hapus data',
      query: deleteProduct,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
    });
  }
}
