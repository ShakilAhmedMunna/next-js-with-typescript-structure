// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 *
 * @param {any}req
 * @param {any}res
 */
const handler = (req, res) => {
    res.status(200).json({ name: "John Doe" });
};
export default handler;
