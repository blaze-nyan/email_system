import React, { useState } from "react";
import "./style.css";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const API_KEY = "AIzaSyAGgmI7oRJjiEySam8WNspAyRw7qKHS7AY";
const genAI = new GoogleGenerativeAI(API_KEY);

function Body() {
  const [inputText, setInputText] = useState("");
  // const [storedText, setStoredText] = useState("");
  const [responseText, setResponseText] = useState("Copy From Here...");
  const [copySuccess, setCopySuccess] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading
  const [buttonText, setButtonText] = useState("Generate");

  const handleInputChange = async (event) => {
    await setInputText(event.target.value);
  };

  const generateEmail = async () => {
    setLoading(true);
    setButtonText("Generating...");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const generationConfig = {
        temperature: 0,
        topK: 1,
        topP: 1,
        maxOutputTokens: 40000,
      };

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
          {
            role: "user",
            parts: "Hello",
          },
          {
            role: "model",
            parts: "Hello I am Library Assistant.",
          },
        ],
      });
      // const waitList = async () => {
      //   await setStoredText(inputText);
      // };
      // waitList();
      // await setStoredText(inputText);
      const msg = inputText;

      const result = await chat.sendMessage(msg);
      const response = await result.response;
      const ai_text = response.text();

      setResponseText(ai_text);
      setButtonText("Regenerate");
    } catch (error) {
      console.error("Error generating email:", error);
    } finally {
      setLoading(false); // Set loading back to false after generation completes
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      generateEmail();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(responseText)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handlePaste = async () => {
    try {
      const clipboardData = await navigator.clipboard.readText();
      setInputText(clipboardData);
    } catch (error) {
      console.error("Failed to read clipboard:", error);
    }
  };

  return (
    <>
      <div className="textbox-container">
        <div className="textbox">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            placeholder="Enter text here..."
          ></textarea>
          <button className="button-paste" onClick={handlePaste}>
            <span className="button-text">Paste</span>
          </button>
          <button
            id="generateButton"
            className="button-generate"
            onClick={generateEmail}
            disabled={loading}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <div className="textbox-container">
        <div className="textbox">
          <textarea
            value={responseText}
            readOnly
            placeholder="Generating ... (If it takes too long pls retry with ❤️)"
          ></textarea>
          <button className="button-copy" onClick={copyToClipboard}>
            <span className="button-text">Copy</span>
          </button>
          {copySuccess && <div className="copy-success-message">Copied!</div>}
        </div>
      </div>
    </>
  );
}

export default Body;
