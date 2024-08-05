import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import Form from "../src/components/Form.jsx";
import Curriculum from "../src/components/Curriculum.jsx";
import "../src/styles/App.css";

function App() {
  const defaultImage = "/img/sorriso.jpg";

  const [curriculumData, setCurriculumData] = useState({
    name: "Sorriso Pérez Schmutzler",
    email: "joviscab@gmail.com",
    phone: "+34 123 456 789",
    education: [],
    experience: [],
    proComp: [],
    digComp: [],
    languages: [],
    image: defaultImage,
  });

  const generatePDF = () => {
    const input = document.getElementById("cv-content");

    if (!input) {
      console.error("Content container not found.");
      return;
    }

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // Add the first page
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add subsequent pages
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("curriculum.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  return (
    <div className="App">
      <Form
        curriculumData={curriculumData}
        setCurriculumData={setCurriculumData}
      />
      <div id="cv-content" className="curriculum-container">
        <Curriculum data={curriculumData} />
      </div>
      <div>
        <button onClick={generatePDF} className="download-pdf-button">
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default App;
