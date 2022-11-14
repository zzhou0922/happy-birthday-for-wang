import React from 'react';
import audioSong from "./music/BirthdaySongForPrelude.mp3";

const BirthdaySongForPrelude = () => {
	return <audio src={audioSong} loop autoPlay controls='' />
}

export default BirthdaySongForPrelude