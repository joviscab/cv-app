import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import Form from "../src/components/Form.jsx";
import Curriculum from "../src/components/Curriculum.jsx";

function App() {
  const defaultImage = "/img/sorriso.jpg";

  const [curriculumData, setCurriculumData] = useState({
    name: "Sorriso Pérez Schmutzler",
    email: "sorriso.perez.schmutzler@dogmail.com",
    phone: "+34 123 456 789",
    bio: "Sorriso is a delightful Brazilian dog from the picturesque Região dos Lagos in Rio de Janeiro. Known for his charming smile and playful antics, Sorriso brings joy to everyone he meets. His days are filled with adventures on the sandy beaches and vibrant streets of his hometown, where he loves chasing after balls, making new friends, and basking in the warm sunshine.\n\nWith a gentle spirit and a heart full of love, Sorriso is not just a playful companion but also a loyal friend. He has a unique ability to sense when someone needs cheering up, offering a comforting nuzzle or a wag of his tail. Sorriso's zest for life and infectious happiness make him a beloved member of his community, spreading smiles wherever he goes.",
    education: [
      {
        institution: "Bark University",
        title: "Bachelor of Canine Behavior",
        date: "2014 - 2018",
      },
      {
        institution: "Woofington Institute of Technology",
        title: "Master of Advanced Fetch Techniques",
        date: "2018 - 2020",
      },
      {
        institution: "Pawbridge University",
        title: "PhD in Treatology",
        date: "2020 - 2023",
      },
    ],
    experience: [
      {
        position: "Chief Barketing Officer",
        company: "Barking Mad Inc.",
        date: "2019 - 2021",
        duties:
          "Lead barketing campaigns\nIncrease tail wags per minute\nDevelop paw-sitive brand image",
      },
      {
        position: "Head of Toy R&D",
        company: "Fetch Labs",
        date: "2021 - 2022",
        duties:
          "Design innovative chew toys\nTest durability with rigorous play sessions\nOptimize squeaker placement",
      },
      {
        position: "Senior Sniffing Specialist",
        company: "Sniffology Corp.",
        date: "2022 - Present",
        duties:
          "Conduct scent research\nDevelop new sniffing techniques\nLead scent-based training workshops",
      },
    ],
    proComp: [
      "Expert in tail wag communication",
      "Advanced trick training",
      "Paw-sitive reinforcement techniques",
      "Leash-free leadership",
      "Bark-to-human translation",
    ],
    digComp: [
      "Proficient in Dogbook and BarkIn",
      "Advanced treat tracking algorithms",
      "Expert in online fetch simulation games",
      "Mastery of virtual belly rub applications",
      "Paw-sitive feedback loops in digital training",
    ],
    languages: ["Bark", "Spanish", "Portuguese"],
    image: defaultImage,
  });

  const generatePDF = () => {
    const input = document.getElementById("cv-content");

    if (!input) {
      console.error("Content container not found.");
      return;
    }

    html2canvas(input, {
      useCORS: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      backgroundColor: null,
    })
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
