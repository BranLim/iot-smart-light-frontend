import axios from 'axios';

const serverUrl = "http://localhost:3000/smartlights";

export const updateLightState = async (lightId, lightState, callback) => {

    const state = lightState === 1 ? 'on' : 'off';
    const api = `${serverUrl}/api/v1/lights/${state}`;
    axios.post(api, {"id": lightId})
        .then(async (response) => {
            await callback();
        });

}

export const updateLightBrightness = async (lightId, brightness, callback) => {
    const api = `${serverUrl}/api/v1/lights/brightness`;
    axios.post(api, {"id": lightId, "brightness": brightness})
        .then(async (response) => {
            await callback();
        });
};

export const fetchLightStatus = async (updateLight) => {
    axios.get(`${serverUrl}/api/v1/lights/status`)
        .then((response) => {
            const light = response.data;
            if (!light) {
                return;
            }
            updateLight(light);
        });
}

export const updateLightColor = async (lightId, pixels, callback) => {
    const api = `${serverUrl}/api/v1/lights/color`;
    axios.post(api, {"id": lightId, "pixels": pixels})
        .then(async (response) => {
            await callback();
        });
}
