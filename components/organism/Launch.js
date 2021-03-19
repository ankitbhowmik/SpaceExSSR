import style from '../../styles/molecule.module.css';
import Set from '../molecule/Set';
import Image from 'next/image'

const Launch = (props) => {
    const {mission_name,
        mission_id,
        launch_year,
        launch_success,
        land_success,
        mission_patch_small} = props;

    return (
        <div className="card">
            <Image width={256} height={256} className="img" alt={mission_name} src={mission_patch_small}/>
            <div className={style['m-launch-detail']}>
                <p className={style['m-launch-name']}> {mission_name} #{mission_id} </p>
                <div>
                    <p className={style['m-text']} size="1.2em">Mission Id : </p>
                    <ul>
                        <li className="blue">{"{ list Missions Ids }"}</li>
                    </ul>
                </div>

                <Set field="Launch Year" value={launch_year}/>
                <Set field="Successfull Launch" value={launch_success}/>
                <Set field="Successfull Land" value={land_success}/>

            </div>

        </div>
    )
}

export default Launch
