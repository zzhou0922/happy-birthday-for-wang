import React from 'react';
import audioSong from "./music/BirthdaySongForLetter.mp3";

const BirthdaySongForLetter = () => {
	return (
		<div className='ma3' style={{display: 'flex', justifyContent: 'flex-end'}}>
		<audio src={audioSong} loop autoPlay controls />
		</div>
	);
}

export default BirthdaySongForLetter