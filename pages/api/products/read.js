import { db } from '../../../prisma/db';

export default async function handler(req, res) {
  // cek req method
  if (req.method !== 'GET') {
    return res.status(401).json({
      success: false,
      message: 'Request method not allowed',
    });
  }

  try {
    const result = await db.dataProduk.findMany();
    return res.status(200).json({
      success: true,
      query: result,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
    });
  }
}
