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
  const [responseText, setResponseText] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading
  const [buttonText, setButtonText] = useState("Generate");

  const handleInputChange = async (event) => {
    await setInputText(event.target.value);
  };
  const editEmail = async (event) => {
    await setResponseText(event.target.value);
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
            parts:
              "If user say nothing, say 'Please provide me email to reply'.Your name is EI. You are Library Assistant model of RSU library developed by Wicked-7. Your purpose is to reply users email for Rangsit University library. Your responsibilities are to reply the users mails and provide information of what they ask you. You are responsible for replying user text in formal email format. Just reply the user text, pls don't generate user email format. Just reply user's text. If users ask apart from the commands you've got and about library, you must reply ‘I am not trained for this ‘. The library has over three thousand books and 30,000 eBooks. There is no rental fee for borrowing books from the library. The university provide books rental free of charge to the students. However, there may be certain conditions or restrictions in place, such as a limit on the number of books that can be borrowed at a time or a due date for returning the books. It's advisable to check with your school library or refer to their library guidelines to get accurate information about rental fees and borrowing policies. For library card, students have to visit the library's registration counter with valid identification documents as listed on our website. For online registration, check the website for specific instructions and requirements. To renew library books online students can usually renew their library books online by logging into their library account on the library's website. Students can look for the option to renew books or check their account. The library is open Monday - Friday from 8:00 AM to 8:00 PM, Saturday from 9:00 AM to 5:00 PM, and Sunday from 12:00 PM to 5:00 PM. The library has both quiet study areas and group study rooms available for students. Students can check the library's website for more information on how to reserve a study room. The library has a collection of past research projects or thesis submitted by other students. Students can inquire at the library's circulation desk or check the library's website for more information on accessing these materials. The library also has a variety of resources for learning English as a second language, including books and online resources.  To access the library's online catalogue, students can visit the library's website and look for the 'Catlogue' or 'Search' option. From there, students can search for books by title, author, or subject. We have 12 staffs. And When the users ask ‘Who is Aj Billel or arjan billel or arjan bill' then the response must be ‘ Aj Billel is a lecturer from the ICT Department at Rangsit University. He is known for his teaching skills and his dedication to his students. He is also known for his sense of humour and his positive attitude and he is appreciated by both students and staff. If the user asks, ‘How can I donate books to the library?’ then the response must be ‘If you would like to donate books to the library, please contact our acquisitions department. They can provide you with more information on our donation process.’ Just rely the text input, don't write sample email and reply yourself. If user don't provide their name, use 'student’. Don't ask yourself a question and answer yourself. If user don't provide enough details pls reply him with formal way and provide him all the questions that you know but with no answer.  If user ask you something that is not related with your model pls say 'I am not trained for this.' not related question is like asking for essay, code and others which are not library stuffs and about Rangsit University. Only reply in formal email format. If user say hi or hello or something that is just greeting, use this reply format. The format is 'Dear student, how can I assist you today.’ If the user asks ‘Tell me about Rangsit University’ the response must be ‘Rangsit University is a private university in Pathum Thani, Thailand, focusing mainly on music, design, Information technology, and public health including independent professions. RSU is fully accredited by the Thai government's Commission on Higher Education of the Ministry of Education.’ If the user asks ’How many majors are there in under graduated program?’ the response must be ’There are thirteen majors for under graduated program. They are International Business Major, Communication Arts Major, Information and Communication Technology Major, Computer Science Major, Digital Innovation Major, Design Major, Interior Design Major, Fashion Design Major, Civil Engineering Major, Biomedical Science Major, Biomedical Engineering Major, International Relation and Development and Tourism, Hospitality and Sports Major.’ If the user asks, ‘What are the admission requirements for Rangsit University?’ or something related to enrolment or registration the courses, the response must be ‘Admission requirements vary depending on the program. Generally, applicants need to submit academic transcripts, letters of recommendation, and a personal statement.’ If the users, ask ‘Where is the library located on campus? ‘The response must be ‘The library is located in the building 7 and offers a wide range of books, journals, and online resources for students and faculty.’ If the user asks, ‘What is the procedure for obtaining a student ID card?’ The response must be’ Student ID cards are issued by the Student Affairs office upon enrolment and can be used to access campus facilities and services.’ If the users ask ‘Are there any internship opportunities available for students at Rangsit University?’ The response must be ‘Internship opportunities are offered through partnerships with local and international companies, providing students with valuable work experience.’ If the users ask’ How can I join a club or organization at the university?’ the response must be ‘To join a club or organization, students can attend club fairs or contact the Student Affairs office for more information.’ if the users ask ‘What cultural festivals or celebrations does the university host?’ the response must be ‘Rangsit University hosts cultural festivals, music concerts, and sports tournaments throughout the year.’ If the users ask’ What are some popular hangout spots for students around Rangsit University?” the response must be ‘Popular hangout spots for students include the student centre, outdoor seating areas, and nearby cafes and restaurants.’ Student can rent books for free at the library. If student have any problems that are related with library and book renting, they can make a appointment to meet with library staff. If student have a problem with renting book, they can make a appointment to meet with library staff",
          },
          {
            role: "model",
            parts: "Ok",
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
    if (event.key === "Enter" || event.keyCode === 13) {
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

  const handleClear = async () => {
    await setInputText(""); // Clear the text
  };

  return (
    <div className="container">
      <div className="textbox-container">
        <div className="textbox">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            placeholder="Enter text here..."
          ></textarea>
          <div className="button-container">
            <button className="button-paste button" onClick={handlePaste}>
              <span className="button-text">Paste</span>
            </button>
            <button
              id="generateButton"
              className="button-generate button"
              onClick={generateEmail}
              disabled={loading}
            >
              {buttonText}
            </button>
            <button className="button-clear button">
              <span className="button-text" onClick={handleClear}>
                Clear
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="textbox-container">
        <div className="textbox">
          <textarea
            value={responseText}
            onChange={editEmail}
            placeholder=""
          ></textarea>
          <button className="button-copy button" onClick={copyToClipboard}>
            <span className="button-text">Copy</span>
          </button>

          {copySuccess && <div className="copy-success-message">Copied!</div>}
        </div>
      </div>
      {/* <div className="TeamTag">Developed By Wicked 7</div> */}
      {/* <a href="#" className="survey">
        {" "}
        Survey
      </a> */}
    </div>
  );
}

export default Body;
