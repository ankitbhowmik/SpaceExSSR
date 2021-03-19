import style from '../../styles/molecule.module.css';
import Button from '../atom/Button';

const AllButton = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

const Filter = () => {
    return (
        <div className="card">
            <h2 style={{margin:"0 0 -15px"}}>Filters</h2>
            <p className={style['m-filter-text']}>Launch Year</p>
            <div className={style['m-filter-list']}>
                {
                    AllButton.map(year => <Button key={year}>{year}</Button>)
                }
            </div>

            <p className={style['m-filter-text']}>SuccessFul Launch</p>
            <div className={style['m-filter-list']}>
                <Button>True</Button>
                <Button>False</Button>
            </div>

            <p className={style['m-filter-text']}>SuccessFul Land</p>
            <div className={style['m-filter-list']}>
                <Button>True</Button>
                <Button>False</Button>
            </div>
        </div>
    )
}

export default Filter
