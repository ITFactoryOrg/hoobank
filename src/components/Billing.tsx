import React from 'react';
import {apple, bill, google} from '../assets';
import styles, {layout} from "../styles";

const Billing = () => {
	return (
		<section id={'product'} className={`${layout.sectionReverse}`}>
			<div className={`${layout.sectionImgReverse}`}>
				<img className={'w-[100%] h-[100%] relative z-[5]'} src={bill} alt="billing"/>
				<div className={'absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'}/>
				<div className={'absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'}/>
			</div>
			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2}`}>Easily control your billing <br className={'sm:block hidden'}/> &
					invoicing.</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores aut consectetur culpa, deleniti distinctio ea eius est eveniet explicabo hic ipsam iste labore laboriosam magnam molestiae nobis nulla officia quae quas quis ratione recusandae similique temporibus veritatis voluptas, voluptatem voluptatum. Deleniti dolorem est eveniet ipsa laudantium, nisi placeat, quod ratione, recusandae reiciendis tempore vero. Distinctio modi nam similique tempora.
				</p>
				<div className={'flex flex-row flex-wrap sm:mt-10 mt-6'}>
					<img className={'w-[128px] h-[42px] object-contain mr-5 cursor-pointer'} src={apple} alt="ios_store"/>
					<img className={'w-[128px] h-[42px] object-contain mr-5 cursor-pointer'} src={google} alt="play_market"/>
				</div>
			</div>
		</section>
	);
};

export default Billing;
