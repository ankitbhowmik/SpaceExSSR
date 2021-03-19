import style from '../../styles/molecule.module.css';
import Button from '../atom/Button';
import { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const AllButton = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

const Filter = () => {
    const router = useRouter();

    const [yearFilter, setYearFilter] = useState("");
    const [landFilter, setLandFilter] = useState("");
    const [launchFilter, setLaunchFilter] = useState("");

    const routerPush = (year, land, launch)=>{
        const query = {};
        //adding to query only if filter is choose
        if(year) query.launch_year = year;
        if(land) query.land_success = land;
        if(launch) query.launch_success = launch;

        router.push({
            pathname: "/",
            query
        })
    }

    const addYearFilter = (val) => {
        if(val === yearFilter) {
            val = "";
            setYearFilter("")
        }else{
            setYearFilter(val);
        }
        routerPush(val, landFilter, launchFilter);
    }
    const addLandFilter = (val)=>{
        if(val === landFilter){
            val = "";
            setLandFilter("");
        }else{
            setLandFilter(val);
        }
        routerPush(yearFilter, val, launchFilter)
    }
    const addLaunchFilter = (val)=>{
        if(val === launchFilter){
            val="";
            setLaunchFilter("");
        }else{
            setLaunchFilter(val);
        }
        routerPush(yearFilter, landFilter, val);
    }

    return (
        <div className="card">
            <h2 style={{margin:"0 0 -15px"}}>Filters</h2>
            <p className={style['m-filter-text']}>Launch Year</p>
            <div className={style['m-filter-list']}>
                {
                    AllButton.map(year => <Button active={year === yearFilter} onClick={()=>addYearFilter(year)} key={year}>{year}</Button>)
                }
            </div>

            <p className={style['m-filter-text']}>SuccessFul Launch</p>
            <div className={style['m-filter-list']}>
                <Button onClick={()=> addLaunchFilter("true")} active={launchFilter === "true"}>True</Button>
                <Button onClick={()=> addLaunchFilter("false")} active={launchFilter === "false"}>False</Button>
            </div>

            <p className={style['m-filter-text']}>SuccessFul Land</p>
            <div className={style['m-filter-list']}>
                <Button onClick={()=> addLandFilter("true")} active={landFilter === "true"}>True</Button>
                <Button onClick={()=> addLandFilter("false")} active={landFilter === "false"}>False</Button>
            </div>
        </div>
    )
}

export default Filter
