import React from 'react';
import {card} from '../assets';
import styles, {layout} from "../styles";
import {Button} from ".";



const CardDeal = () => {
	return (
		<section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>Find a better card deal
					<br className={'sm:block hidden'}/>
					in few easy steps.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus eaque eos expedita facere harum, iure nemo obcaecati quibusdam, soluta vel, voluptatum? Enim, ratione tempora!</p>
					<Button styles={'mt-10'}/>
			</div>

			<div className={layout.sectionImg}>
				<img src={card} alt="card" className={'w-[100%] h-[100%]'}/>
			</div>
		</section>
	);
};

export default CardDeal;
