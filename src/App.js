import './App.css';
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function App() {

  const [lightState, setLightState] = useState(0);
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <FormControl component="fieldset">
          <FormControlLabel control={<Switch onChange={(evt) => {

          }} />}
            label={lightState === 1 ? "On" : "Off"} labelPlacement="right" />
        </FormControl>
      </Box>
    </Container>
  );
}

export default App;
