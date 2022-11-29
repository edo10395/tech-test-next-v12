import { db } from "../../../prisma/db";

export default async function handler(req, res) {
  // cek req method
  if (req.method !== "GET") {
    return res.status(401).json({
      success: false,
      message: "Request method not allowed",
    });
  }

  try {
    const queryParam = req.query;

    const filter = {
      OR: [
        {
          productType: {
            contains: queryParam.productType,
          },
          operator: {
            contains: queryParam.operator,
          },
        },
      ],
    };
    const result = await db.dataProduk.findMany({
      // skip: 1, // How many rows to skip
      // take: 5, // Page size,
      where: {
        ...(Object.keys(queryParam).length > 0 ? filter : {}),
      },
    });
    // const str = "%bpjsks";
    // const result =
    //   await db.$queryRaw`SELECT * FROM DataProduk WHERE productType LIKE ${str};`;
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
