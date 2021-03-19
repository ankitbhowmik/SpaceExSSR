import Filter from "../components/organism/Filter";
import Launch from "../components/organism/Launch";

export const getStaticProps = async ()=>{
	const res = await fetch("https://api.spaceXdata.com/v3/launches?limit=100");
	const data = await res.json();
	const payload = data.map( item => ({
		flight_number: item.flight_number,
		mission_name : item.mission_name,
		mission_id : item.mission_id,
		launch_year : item.launch_year,
		launch_success: item.launch_success,
		land_success: item.rocket.first_stage.cores[0].land_success,
		mission_patch_small : item.links.mission_patch_small
	}) )
	
	return {
		props: {launches: payload}
	}
}

export default function Home({launches}) {
  return (
    <div className="main-content">
      	<div>
        	<Filter/>
      	</div>
      	<article>
			<div className="responsive-cards">
				{
					launches.map(item=> (
						<Launch
							key = {item.flight_number}
							flight_number = {item.flight_number}
							mission_name = {item.mission_name}
							mission_id = {item.mission_id}
							launch_year = {item.launch_year}
							launch_success = {item.launch_success}
							land_success = {item.land_success}
							mission_patch_small = {item.mission_patch_small}
						/>  
					))
				}
			</div>
    	</article>
    </div>
	)
}
