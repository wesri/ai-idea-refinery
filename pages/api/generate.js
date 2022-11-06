import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.idea),
    temperature: 0.8,
    max_tokens: 260
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(idea) {
  const capitalizedIdea =
    idea[0].toUpperCase() + idea.slice(1).toLowerCase();
  return `Based on the business idea, give the top four most important possible detailed risks the startup has. Sort each risk to the most suitable category.
 
Idea: Burnout detection slackbot
Risks:
1. (Product development) Might be hard to detect burnout from tone of voice.
2. (Piloting) Needs advanced text detection AI to work properly.
3. (Pricing) Pricepoint as a slackbot might be very low compared to workload.
4. (Security) People might be afraid of installing software that reads their messages.

Idea: Machine that prevents period pain for consumers
Risks:
1. (Legal) Selling machines for medical purposes might come with a lot of regulation and laws.
2. (Product) Making sure that the product actually cures pain might take a long time to develop.
3. (Customer acquisition) Building a B2C brand is very difficult, you need an expert to create your brand.
4. (Competition) Pain relief is a very competitive category, make sure you have a well-differentiated solution.

Idea: Ice cream made out of corn
Risks:
1. (Pricing) The ice cream might be too expensive for the customers.
2. (Financing) It might be hard to find financing to build the factory for your ice cream.
3. (Product development) It might be hard to find the right people to develop your product.
4. (Customer acquisition) Ice cream market has a lot of competition, make sure you have a solid marketing plan for your ice cream.

Idea: ${capitalizedIdea}
Risks:`;
}
