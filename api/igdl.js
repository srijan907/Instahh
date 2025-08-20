export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      status: false,
      message: "❌ Instagram URL is required!"
    });
  }

  try {
    // আসল API কল
    const apiURL = `https://api-aswin-sparky.koyeb.app/api/downloader/igdl?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiURL);
    const data = await response.json();

    // override → তোমার নাম বসানো
    data.creator = "Rabbit";

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "⚠️ Server error",
      error: error.message
    });
  }
}
