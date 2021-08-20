import './App.css';
import React, {useState} from 'react';
import {
    Box,
    Container,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Slider,
    Switch,
    Typography
} from '@material-ui/core';

function App() {

    const [lightState, setLightState] = useState(0);

    return (
        <Container maxWidth="md">
            <Typography variant="h2">
                Smart Light Control Panel
            </Typography>
            <Box ml={2} pt={4}>
                <form>
                    <FormGroup>
                        <Grid container spacing={2}>
                            <Grid item sm={3}>
                                <FormLabel>Name</FormLabel>
                            </Grid>
                            <Grid>

                            </Grid>
                        </Grid>

                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Grid container spacing={2}>
                            <Grid item sm={3}>
                                <FormLabel htmlFor="lightSwitch">Current Status</FormLabel>
                            </Grid>
                            <Grid item sm={9}>
                                <FormControlLabel id="lightSwitch" margin="normal" fullwidth="true" margin="normal"
                                                  control={
                                                      <Switch onChange={(evt) => {
                                                          evt.target.checked ? setLightState(1) : setLightState(0);
                                                      }}/>
                                                  }
                                                  label={lightState === 1 ? "On" : "Off"} labelPlacement="end"/>
                            </Grid>
                        </Grid>
                    </FormGroup>
                    <FormGroup>
                        <Grid container spacing={2}>
                            <Grid item sm={3}>
                                <FormLabel>Brightness</FormLabel>
                            </Grid>
                            <Grid item sm={9}>
                                <Slider defaultValue={10}
                                        aria-labelledby="discrete-slider-small-steps"
                                        step={2}
                                        marks
                                        min={1}
                                        max={100}
                                        valueLabelDisplay="auto"></Slider>
                            </Grid>
                        </Grid>

                    </FormGroup>
                </form>
            </Box>

        </Container>
    );
}

export default App;
