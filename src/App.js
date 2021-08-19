import './App.css';
import React, {useState} from 'react';
import {
    Container,
    Box,
    FormControl,
    FormControlLabel,
    Switch,
    Typography,
    FormGroup,
    FormLabel, Slider
} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";

function App() {

    const [lightState, setLightState] = useState(0);

    return (
        <Container maxWidth="sm">
            <Typography variant="h2">
                Smart Light Control Panel
            </Typography>
            <Box my={6}>
                <form>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                    </FormGroup>
                    <br/>
                    <FormGroup>

                        <FormLabel htmlFor="lightSwitch">Current Status</FormLabel>
                        <FormControlLabel id="lightSwitch" margin="normal" fullwidth="true" margin="normal"
                                          control={
                                              <Switch onChange={(evt) => {
                                                  evt.target.checked ? setLightState(1) : setLightState(0);
                                              }}/>
                                          }
                                          label={lightState === 1 ? "On" : "Off"} labelPlacement="end"/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <FormLabel>Brightness</FormLabel>
                        <Slider defaultValue={10}
                                aria-labelledby="discrete-slider-small-steps"
                                step={2}
                                marks
                                min={1}
                                max={100}
                                valueLabelDisplay="auto"></Slider>
                    </FormGroup>
                </form>
            </Box>
        </Container>
    );
}

export default App;
