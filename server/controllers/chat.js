const Category = require("../models/Category");
exports.sendChat = async (req, res) => {
  try {
    const categorys = await Category.find().populate("products");
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4-1106-preview",
        messages: [
          {
            role: "system",
            content: `You are an AI market helper. You have a list of categories and products. Your task is to assist customers in navigating through these categories and products. Here are the categories and their respective products the products :${JSON.stringify(
              categorys
            )} `,
          },
          {
            role: "user",
            content: req.body.message || "Hello",
          },
        ],
      }),
    });
    const data = await response.json();
    res.json(data.choices[0]["message"]["content"]);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
};
