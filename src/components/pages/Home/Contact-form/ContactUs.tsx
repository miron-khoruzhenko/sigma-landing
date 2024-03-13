import React from 'react'
import global_styles from './../../../../assets/styles/global_styles'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { faMobileScreenButton, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { Button } from '../../../features/Buttons/Button1'

const ContactUs = () => {
	const handleSubmit : React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
	}

	const styles = {
		contactUs : 'flex flex-col justify-center items-center px-5 ',
		form : 'flex flex-col justify-center items-start gap-8 py-20 w-full transition-colors container ',
		background : ' bg-dark-plane  bg-top bg-cover bg-no-repeat bg-fixed',
		heading : 'text-2xl font-bold dark:text-zinc-100 mx-auto mb-7 font-["Roboto"] ',
		label : 'w-full ',
		inputContainer : 'flex flex-col md:flex-row gap-8 w-full',
		inputFields : 'w-full px-4 py-3 bg-white/60 dark:bg-zinc-900/60 border border-zinc-400 dark:border-zinc-600 dark:text-zinc-200 focus:outline-none ',
		input : '',
		textarea : 'resize-none h-36 ',
		btnContainer : 'w-full flex justify-between font-["Roboto"] ',
		infoBlock : 'flex flex-wrap justify-start lg:flex-nowrap lg:justify-around w-full container mx-auto text-zinc-300 ',
		
	}

	return (
		<section className={'dark ' + styles.contactUs + styles.background} id='contact'>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h2 className={global_styles.combinedHeading + styles.heading}>Bizimle İletişime Geçin</h2>
				
				<div className={styles.inputContainer}>

					<label htmlFor="contact-form__name" className={styles.label }>

						<input 
							placeholder='İsim*'
							type="text" 
							id='contact-form__name' 
							className={styles.input + styles.inputFields} />
					</label>

					<label htmlFor="contact-form__email" className={styles.label }>

						<input
							placeholder='Email*'
							type="email" 
							id='contact-form__email' 
							className={styles.input + styles.inputFields} />
					</label>

				</div>

				<label htmlFor="contact-form__subject" className={styles.label }>

					<input 
						placeholder='Subject'
						type="text" 
						id='contact-form__subject' 
						className={styles.input + styles.inputFields} />
				</label>

				<label htmlFor="contact-form__message" className={styles.label }>

					<textarea 
						placeholder='Your message...'
						name="contact-form__message-block" 
						id="contact-form__message" 
						className={styles.textarea + styles.inputFields}/>
				</label>

				<div className={styles.btnContainer}>
					<Button className='' btnStyle='white' type='submit'>Gönder</Button>
					<Button className='hidden md:block ' btnStyle='red' type='reset'>Temİzle</Button>	
				</div>				
			</form>
			<div className={styles.infoBlock}>
				{/* <InfoItem 
					icon={'icon-phone'} 
					title={'phone'} 
					text={'+905464247139'} 
					href='tel:+905464247139' 
				/> */}
				<InfoItem icon={'icon-envelope'} title={'e-mail'} text={'info@ytusigma.com'} href='mailto:info@ytusigma.com' />
				<InfoItem icon={'icon-map-pin'} title={'Adres'} text={'Yıldız Teknik Üniversitesi, R Blok, 34349 Yıldız / Beşiktaş / İstanbul '} />

			</div>
		</section>
	)
}

type InfoItemProps = {
	// icon	: IconDefinition;
	icon	: string;
	title	: string;
	text	: string | React.ReactNode;
	href?	: string,
}

const InfoItem = (props : InfoItemProps) => {
	const styles = {
		infoItem : "flex justify-center items-center gap-5 px-12 mb-16",
		icon : props.icon + " icon + text-3xl w-9 text-center  ",
		conc : "h-3/4 w-px bg-zinc-300",
		title : "capitalize font-bold text-sm text-zinc-100 ",
		text : "text-sm font-light max-w-xs ",
	}

	return(
		<div className={styles.infoItem}>
			{/* <FontAwesomeIcon icon={props.icon} className='text-3xl'/> */}
			<i className={styles.icon}></i>
			<div className={styles.conc}></div>

			<div className="">
				<h5 className={styles.title}>{props.title}</h5>
				{ props.href ? 
					<a href={props.href} className={styles.text}>{props.text}</a> :
					<p className={styles.text}>{props.text}</p>
				}
			</div>
		</div>
	)
}

export default ContactUs