import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        ></Input>
      </Spacer>

      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording}></Button>
        ) : (
          <Button title="Start Recording" onPress={startRecording}></Button>
        )}
      </Spacer>
      {!recording && locations.length ? (
        <Spacer>
          <Button title="Save Recording"> </Button>
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;