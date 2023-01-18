import React from 'react';
import styles from '../styles';
import {arrowUp} from '../assets'

const GetStarted = () => {
	return (
		<div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 p-[5px] cursor-pointer animate-gradient-xy`}>
				<div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
					<div className={`${styles.flexStart} flex-row`}>
						<p className={'font-poppins font-medium text-18px leading-[23px] mr-2'}>
							<span className={'text-gradient'}>Get</span>
						</p>
							<img className={'w-[23px] object-contain animate-move-top'} src={arrowUp} alt="arrow up"/>
					</div>
					<p className={'font-poppins font-medium text-18px leading-[23px]'}>
						<span className={'text-gradient'}>Started</span>
					</p>
				</div>
		</div>
	);
};

export default GetStarted;
