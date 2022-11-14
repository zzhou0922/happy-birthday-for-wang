import React from 'react';
//import as special animation
import {TextAnim} from "text-animations-react"
import './Prelude.css'

const Prelude = () => {

	const words = [
		{ name: "🙈亲爱的王小宝👧" }, { name: "今天" }, { name: "是你的18 + 12岁生日哦🍰" }, { name: "为此我做了这个给你👉" },
		{ name: "希望你会觉得特别吧🤭" }, { name: "毕竟" }, { name: "这薅头发🤣" }, { name: "Anyway..." }, { name: "请用脚趾点击下方吧🥰" }];

	const effects = [
		{ name: "bounceone" }, { name: "rotatein" }, { name: "lightspeed" }, { name: "rubberband" }, 
		{ name: "wobble" }, { name: "swing" }, { name: "hinge" }, { name: "reveal" }, { name: "goup" }];

	const [word, setWord] = React.useState(words[0]); // <-- seed initial state
  	const [indexOfWords, setIndexOfWords] = React.useState(0);

	React.useEffect(() => {
		const timerId = setInterval(() => 
			setIndexOfWords((i) => (i + 1) % words.length), 2070); // <-- increment indexOfWords
		    return () => clearInterval(timerId);
	}, []);

	React.useEffect(() => {
		setWord(words[indexOfWords]); // <-- update media state when indexOfWords updates
	}, [indexOfWords]);


	const [effect, setEffect] = React.useState(effects[0]); // <-- seed initial state
  	const [indexOfEffects, setIndexOfEffects] = React.useState(0);

	React.useEffect(() => {
		const timerId = setInterval(() => 
			setIndexOfEffects((i) => (i + 1) % effects.length), 2100); // <-- increment indexOfEffects
		    return () => clearInterval(timerId);
	}, []);

	React.useEffect(() => {
		 setEffect(effects[indexOfEffects]); // <-- update media state when indexOfEffects updates
	}, [indexOfEffects]);

	return (
	    <div className='viewportcenter'>
	      <TextAnim name={word.name} type={effect.name} color="white" size={2.5} count="infinite" duration={2}/>
	    </div>
	);
}

export default Prelude