import { ChatOpenAI } from "langchain/chat_models/openai";


// You can also pass tools or functions to the model, learn more here
// https://platform.openai.com/docs/guides/gpt/function-calling

const modelForFunctionCalling = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0,
  openAIApiKey: "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"
});

export const generateMessage = (prompt: string) => {
    return modelForFunctionCalling.predict(prompt)
}

// import { ChatOpenAI, ChatCompletion  } from "langchain/chat_models/openai";
// import { z } from "zod";
// import { zodToJsonSchema } from "zod-to-json-schema";


// // You can also pass tools or functions to the model, learn more here
// // https://platform.openai.com/docs/guides/gpt/function-calling

// const modelForFunctionCalling = new ChatOpenAI({
//   modelName: "gpt-3.5-turbo",
//   temperature: 0,
//   openAIApiKey: "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"
// });

// const promptSchema = z.string();
// const promptJsonSchema = zodToJsonSchema(promptSchema);

// interface OpenAIResponse {
//   choices: ChatCompletion[];
// }

// export const generateMessage = async (prompt: string): Promise<string> => {
//   try {
//     const response: OpenAIResponse = await modelForFunctionCalling.predict(prompt);
//     return response.choices[0].text.trim();
//   } catch (error) {
//     console.error("Error generating message:", error);
//     return "Error generating message";
//   }
// };