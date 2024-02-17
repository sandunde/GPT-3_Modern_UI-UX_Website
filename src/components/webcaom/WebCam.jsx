import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./WebCam.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const WebCam = () => {
    const [label, setLabel] = useState("Take Picture");
    const [uploadImg, setUploadImg] = useState(false);
    const [isImageTake, setIsImageTake] = useState(false);
    const [imageData, setImageData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [saveImage, setSaveImage] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const webcamRef = useRef(null);

    const handleCapture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageData(imageSrc);
        setIsImageTake(true);
        setIsOpen(true);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert("please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        // Example using fetch:
        fetch("/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                // Handle response from server
                console.log("File uploaded successfully!");
            })
            .catch((error) => {
                // Handle errors
                console.error("Error uploading file:", error);
            });
    };

    const handleRetake = () => {
        setIsOpen(false);
        setIsImageTake(false);
    };

    const handleSave = () => {
        setIsOpen(false);
        setSaveImage(true);
    };

    const handleToggle = () => {
        setLabel(label === "Take Picture" ? "Upload Photo" : "Take Picture");
        setUploadImg(!uploadImg);
    };
    return (
        <div className="main-photo-container">
            <div className="photo-container">
                {!uploadImg ? (
                    !saveImage ? (
                        <>
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                            />
                            {!isImageTake && (
                                <Button
                                    variant="contained"
                                    className="photo-take-button"
                                    onClick={handleCapture}
                                >
                                    Take Image
                                </Button>
                            )}
                        </>
                    ) : (
                        <img src={imageData} alt="Captured image" />
                    )
                ) : (
                    <div className="upload-photo-container">
                        <input type="file" onChange={handleFileChange} />
                        <Button variant="contained" onClick={handleUpload}>
                            Upload
                        </Button>
                    </div>
                )}
                {isImageTake && (
                    <Modal
                        open={isOpen}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Image Taken
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <img src={imageData} alt="Captured image" />
                            </Typography>
                            <Button onClick={handleRetake}>Retake Image</Button>
                            <Button onClick={handleSave}>Save Image</Button>
                        </Box>
                    </Modal>
                )}
                <br />
            </div>
            <FormControlLabel
                control={<Switch defaultChecked />}
                label={label}
                onChange={handleToggle}
            />
        </div>
    );
};

export default WebCam;
