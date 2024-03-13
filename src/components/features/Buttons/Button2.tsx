import React from "react"
import styled from "styled-components"

type StylesProp = {
	btn? : string,
	after? : string,
	before? : string,

}

type ButtonProps = {
	backContent : React.ReactNode,
	frontContent : React.ReactNode,
	href? : string,
	styles? : StylesProp,
}


const styles = {
	btn: 'cursor-pointer font  ',
	beforeBase : 'px-7 ',
	afterBase : 'w-full h-full flex justify-center items-center ',
	before: 'text-neutral-100 bg-neutral-900 ',
	after: 'text-neutral-100 bg-blue-500 ',
}

const Button = (props : ButtonProps) => {
	return (
		<Btn
			href={props.href || '#'}  
			data-back={props.backContent} 
			data-front={props.frontContent} 
			className={styles.btn + (props?.styles?.btn || '')}
		>
			<After 
				className={styles.afterBase + (props?.styles?.after || styles.after)}>
					{props.backContent}
			</After>
			<Before 
				className={styles.beforeBase + (props?.styles?.before || styles.before)}>
					{props.frontContent}
				</Before>
		</Btn>
	)
}

const After = styled.div`
	width: 100%;
	
	position: absolute;
	top: 0;
	left: 0;
	
	transition: 0.3s;
	/* opacity: 0; */
	transform: translateY(-50%) rotateX(90deg);
`

const Before = styled.div`
	position: relative;
	top: 0;
	left: 0;
			
	transition: 0.3s;
	/* padding: 0 30px; */
	opacity: 1;
	transform: translateY(0) rotateX(0);
`

const Btn = styled.a`
	display: inline-block;
  
	position: relative;
  
  line-height: 40px;
	text-align: center;
	/* font-weight: bold; */
  letter-spacing: 1px;
  font-family: 'Open Sans';
  text-transform: uppercase;
    
  &:hover{
    
    div:first-child{
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }
    
		div:last-child{
      /* opacity: 0; */
      transform: translateY(50%) rotateX(90deg);
    }
  }
  

`


export default Button