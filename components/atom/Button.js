import style from '../../styles/atom.module.css';

const Button = ({className, active, children, ...props}) => {
    return (
        <button className={`${style['a-button']} ${active ? style['a-button-active'] : ""} `} {...props}>{children}</button>
    )
}

export default Button
