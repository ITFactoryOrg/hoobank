import React from 'react';
import {clients} from '../constants';
import styles from "../styles";

const Clients = () => {
	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} flex-wrap w-full`}>
				{clients.map(client =>{
					return (
						<div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} key={client.id}>
							<img className={`sm:w-[192px] w-[100px] object-contain clients__logo`} src={client.logo} alt={'client'}/>
						</div>
					)
				})}
			</div>
		</section>
	);
};

export default Clients;
