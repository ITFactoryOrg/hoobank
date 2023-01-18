import React from 'react';
import {features} from "../constants";
import styles from "../styles";

interface IProps {
index: number;
	id: string;
	icon: string;
	title: string;
	content: string;
}
const FeatureCard = ({content,id,title,icon,index}:IProps) => {
	return (
		<div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1? 'mb-6': 'mb-9'} feature-card`}>
			<div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter} `}>
				<img className={'w-[50%] h-[50%] object-contain'} src={icon} alt="icon"/>
			</div>
			<div className={'flex flex flex-col ml-3 font-poppins text-white'}>
				<h4 className={'font-semibold text-[18px] leading-[23px] mb-1'}>{title}</h4>
				<p className={'font-normal text-dimWhite text-[16px] leading-[24px] mb-1'}>{content}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
