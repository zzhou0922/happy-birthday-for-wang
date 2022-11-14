import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Letter.css'

const Letter = () => {
	return (
		<div className='center'>
			<Tilt className='center ma5 br2 shadow-2' option={{ max: 55 }} style={{ height: 600, width: 550 }}>
	      		<div className="Tilt-inner pa3">
	      			<h2>老婆婆婆婆婆: >&emsp;>&emsp;>&emsp;>&emsp;>&emsp;>&emsp;>&emsp;>&emsp;💌</h2>
	      			<p>&emsp;&emsp;宝宝生日快乐😘😘😘 今年有点不一样哦! 毕竟大寿呢! 🥳</p>
	      			<p>&emsp;&emsp;今年终于有时间能花心思给你制作一个久违的生日贺卡了, 嘻嘻! 
	      			以往的每年我们总是腻在一起不是在忙店面就是在忙琐事, 时间不知不觉间就流逝了. 
	      			我们都不知道被无形的剥夺了多少的青春. 不过今年我们终于把店放下了, 希望在未
	      			来的日子里, 我们都能如意的按照自己所寄望的方向顺利的前进发展吧!💪💪💪</p>
	      			<p>&emsp;&emsp;虽然现在大环境不景气, 但我还是努力拼一把看能不能尽快的找到称心
	      			的工作吧, 毕竟这样你才不会一直焦虑, 同时也祝愿你的粉丝马上能够成千破万哦!!! 谁让
	      			我们在选择题里挑的都是房子呢~</p>
	      			<p>&emsp;&emsp;我知道, 千言万语还不如上交工资给你买包实际. 我继续去练习耕田了~</p>
	      			<p>&emsp;&emsp;爱你哦 比心🤞</p>
	      			<p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
	      			&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
	      			&emsp;老公上</p>
	      		</div>
	    	</Tilt>
		</div>
	);
}

export default Letter