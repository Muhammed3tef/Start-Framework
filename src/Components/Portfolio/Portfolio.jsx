import React, { useEffect, useState } from "react";
import style from "./Portfolio.module.css";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
// import {  Button, Modal } from "flowbite-react";

// export default function Portfolio() {

//   const [text, settext] = useState("");
//   const [openModal, setOpenModal] = useState(true);

//   useEffect(() => {
//     document.title = "Portfolio";
//   }, []);
//   return (
//     <>
//       <div className="text-black ">
//         <div className="photo  m-auto pt-7 flex flex-col justify-center items-center">
//           {/* ---------head home-------- */}
//           <div className="titleAndDesc py-2">
//             <h1 className="uppercase text-2xl md:text-4xl  font-bold flex gap-4 align-middle justify-center">
//               portfolio <span>component</span>
//             </h1>
//           </div>
//           {/* ----- after the head------- */}
//           <div className="star gap-6 flex justify-center items-center">
//             <div className="bg-black w-20 h-1"></div>
//             <i class="fa-solid fa-star block  "></i>
//             <div className="bg-black w-20 h-1"></div>
//           </div>
//           {/* -------Desc of the tittle----- */}

// <div className="md:flex p-14 " >
//  <div className="p-4 homePh modal">
//  <span className="close" onClick={closeModal}>&times;</span>

//                <div className="relative w-[90%]">
//                  <img src={selectedImage.src} className="modal-content w-[100%] rounded-xl cursor-pointer" alt="" />
//                  <div className="layer absolute bg-[#2ec2a4ab] top-0 rounded-xl cursor-pointer opacity-0  left-0 right-0 bottom-0  flex justify-center items-center fa-3x "><i class="fa-solid fa-plus text-white"></i></div>
//                  <div className="caption">{selectedImage.alt}</div>
//                </div>
//              </div>

// </div>

//           {/* <Button  onClick={() => setOpenModal(true)} >

//         </Button>
//       <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
//         <Modal.Header />
//         <Modal.Body className="bg-em">
//           <div className="text-center">
//             <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 bg-black">
//               Are you sure you want to delete this product?
//             </h3>
//             <div className="flex justify-center gap-4">
//               <Button color="failure" onClick={() => setOpenModal(false)}>
//                 {"Yes, I'm sure"}
//               </Button>
//               <Button color="gray" onClick={() => setOpenModal(false)}>
//                 No, cancel
//               </Button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal> */}
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState } from 'react';
// // import './App.css'; // Make sure to style your modal

const images = [{ src: port1 }, { src: port2 }, { src: port3 }];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="titleAndDesc py-7">
        <h1 className="uppercase text-2xl md:text-4xl  font-bold flex gap-4 align-middle justify-center">
          portfolio <span>component</span>
        </h1>
      </div>
      <div className="star gap-6 flex justify-center items-center">
        <div className="bg-black w-20 h-1"></div>
        <i class="fa-solid fa-star block  "></i>
        <div className="bg-black w-20 h-1"></div>
      </div>
      <div className="image-gallery md:w-1/3 md:p-5 md:flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(image)}
            className="thumbnail p-4 "
          />
        ))}
      </div>
      <div className="image-gallery md:w-1/3 md:p-5  md:flex ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(image)}
            className="thumbnail p-4 "
            
          />
        ))}
      </div>

      {isOpen && (
        <div className="p-4 homePh modal">
          <span className="close md:px-[35px]" onClick={closeModal}>
            &times;
          </span>
          <div className="relative w-[100%] md:mt-0 mt-28 p-6">
            <img
              src={selectedImage.src}
              className="modal-content  md:w-[40%] w-[100%] rounded-xl cursor-pointer"
              alt="image"
            />
            {/* <div className="layer absolute bg-[#2ec2a4ab] top-0 rounded-xl cursor-pointer opacity-0  left-0 right-0 bottom-0  flex justify-center items-center fa-3x "><i class="fa-solid fa-plus text-white"></i></div> */}
            <div className="caption">{selectedImage.alt}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
