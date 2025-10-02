export default async function handler(req, res) {
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  const { model, inputs } = req.body;

  const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputs })
  });

  const result = await response.json();
  res.status(200).json(result[0] || result);
}
