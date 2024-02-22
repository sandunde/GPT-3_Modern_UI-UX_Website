import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Form.css";

const Form = () => {
    const [disoriented, setDisoriented] = useState('');
    const [energetic, setEnergetic] = useState('');
    const [crazy, setCrazy] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);

    const handleDisorientedChange = (event) => {
        setDisoriented(event.target.value);
    }

    const handleEnergeticChange = (event) => {
        setEnergetic(event.target.value);
    };

    const handleCrazyChange = (event) => {
        setCrazy(event.target.value);
    };

    useEffect(() => {
        if ((disoriented != '') && (energetic != '') && (crazy != '')){
            setIsCompleted(true)
            localStorage.setItem('isCompleted', JSON.stringify(isCompleted))
        }
    })

    return (
        <div className="form-container">
            <FormControl>
                <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    className="form-label"
                >
                    1. Is the person disoriented?
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="radio-group"
                    value={disoriented}
                    onChange={handleDisorientedChange}
                >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    className="form-label"
                >
                    2. Is the person very energetic/excited
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="radio-group"
                    value={energetic}
                    onChange={handleEnergeticChange}
                >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    className="form-label"
                >
                    3. Is the person crazy?
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="radio-group"
                    value={crazy}
                    onChange={handleCrazyChange}
                >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default Form;
