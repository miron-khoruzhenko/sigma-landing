import { ReactNode } from 'react'

type ButtonProps = {
    children : ReactNode,
    className? : string,
    btnStyle? : 'red' | 'white' | 'green' | 'black',
    type? : "button" | "submit" | "reset" | undefined,
}

export const Button = (props : ButtonProps) => {

    let styleBtn = '';

    switch (props.btnStyle){
        case 'red':
            styleBtn = 'border-red-500 text-red-500 before:bg-red-500 after:bg-red-500 hover:text-zinc-100 '
            break;

        case 'green':
            styleBtn = 'border-emerald-500 text-emerald-500 before:bg-emerald-500 after:bg-emerald-500 hover:text-zinc-100 bg- '
            break;
                    
        case 'white':
        default:
            styleBtn = 'border-zinc-900 text-zinc-900 before:bg-zinc-900 after:bg-zinc-900 hover:text-zinc-100 '
            styleBtn += 'dark:border-zinc-100 dark:text-zinc-100 dark:before:bg-zinc-100 dark:after:bg-zinc-100 dark:hover:text-zinc-900 '
            break
    }

    const styles = {
        btn         : 'border-2 w-[200px] h-[45px] relative overflow-hidden block z-10 transition-colors ',
        btnText     : ' text-center text-md  uppercase tracking-wide ',
        btnHover    : ' ',
        btnBefore   : 'before:absolute before:left-0 before:top-[-60px] before:w-full before:h-full  before:skew-y-[10deg] before:transition-all before:-z-10 hover:before:top-[-20px] ',
        btnAfter    : 'after:absolute after:left-0 after:top-[60px] after:w-full after:h-full  after:skew-y-[10deg] after:transition-all after:-z-10 hover:after:top-[20px] ',
        styleBtn,
    }

return (
    <button className={styles.btn + styles.btnText + styles.btnHover + styles.btnAfter + styles.btnBefore + styles.styleBtn + props.className} type={props.type} >
        <span className="z-40 ">
            {props.children}

        </span>
    </button>
)
}