export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, specialization, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await fetch("https://script.google.com/macros/s/AKfycbw-saieiW0OFerGoHXo4WE_kSv_Vyc3MlTQBu26loFSyboreKft6yoPuWfnzR2QDxl7/exec", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "",
        company: "",
        service: specialization || "",
        message,
      }),
    });

    return res.status(200).json({ message: "Inquiry received successfully" });
  } catch (error) {
    console.error("Google Sheet error:", error);
    return res.status(500).json({ error: "Failed to save inquiry" });
  }
}
