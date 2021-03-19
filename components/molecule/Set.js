import style from '../../styles/molecule.module.css';

const Set = ({field, value}) => {
    return (
        <div className={style['m-set']}>
            <p className={style['m-text']+" no-margin"} style={{color: "black"}}> {field} : &nbsp;</p> <span className="blue">{value}</span>
        </div> 
    )
}

export default Set
