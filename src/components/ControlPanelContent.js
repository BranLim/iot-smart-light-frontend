import React, {useEffect, useState} from 'react';
import {Box, FormControlLabel, FormGroup, FormLabel, Grid, Slider, Switch, Typography} from '@material-ui/core';
import {updateLightState, updateLightBrightness, fetchLightStatus} from "../services/SmartLightsApi";
import {SketchPicker} from 'react-color'

export const ControlPanelContent = () => {

    const [light, setLight] = useState({name: '', state: 0, brightness: 0, pixels: []});

    const handleSwitchToggle = (evt) => {
        if (evt.target.checked) {
            updateLightState(light.id, 1, () => fetchLightStatus(updateLight));
            return;
        }
        updateLightState(light.id, 0, () => fetchLightStatus(updateLight));
    };

    const handleSliderValueChanged = (evt, value) => {
        updateLightBrightness(light.id, value, () => fetchLightStatus(updateLight));
    };

    const updateLight = (light) => {
        setLight(light);
    }

    useEffect(() => {
        const retrieveLightStatus = async () => {
            await fetchLightStatus(updateLight);
        }
        retrieveLightStatus();
    }, []);

    return (<Box ml={2} pt={4}>
        <form>
            <FormGroup>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <FormLabel>Name</FormLabel>
                    </Grid>
                    <Grid>
                        <Typography variant='body1'>
                            {light?.name}
                        </Typography>
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
                                              <Switch onChange={(evt) => handleSwitchToggle(evt)}
                                                      checked={light.state === 1}/>
                                          }
                                          label={light.state === 1 ? "On" : "Off"} labelPlacement="end"/>
                    </Grid>
                </Grid>
            </FormGroup>
            <FormGroup>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <FormLabel>Brightness</FormLabel>
                    </Grid>
                    <Grid item sm={4}>
                        <Slider key={`slider-${light.brightness}`}
                                defaultValue={light.brightness}
                                aria-labelledby="discrete-slider-small-steps"
                                step={2}
                                marks
                                min={1}
                                max={100}
                                valueLabelDisplay="auto"
                                onChangeCommitted={(evt, value) => handleSliderValueChanged(evt, value)}></Slider>
                    </Grid>
                    <Grid item sm={5}>
                        <Typography variant='body1'>
                            {light?.brightness || 'NaN'}
                        </Typography>
                    </Grid>
                </Grid>
            </FormGroup>
            <FormGroup>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <FormLabel>Light Color</FormLabel>
                    </Grid>
                    <Grid item sm={9}>
                        <SketchPicker></SketchPicker>
                    </Grid>
                </Grid>
            </FormGroup>
        </form>
    </Box>);
}