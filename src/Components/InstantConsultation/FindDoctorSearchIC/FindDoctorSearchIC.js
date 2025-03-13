import React, { useState } from 'react';
import classes from './FindDoctorSearchIC.module.css';
import { useNavigate, Navigate } from 'react-router-dom';


const initSpeciality = [
    'General Physician', 'Cardiologist', 'Dentist', 'Dermatologist', 'Otolaryngologist (ENT)', 'Endocrinologist', 'Gynecologist/Obstetrician', 'Neurologist', 'Oncologist', 'Orthopedist', 'Pediatrician', 'Physical Therapist', 'Podiatrist', 'Pulmonologist', 'Rheumatologist'
]

const FindDoctorSearchIC = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    }
    return (
        <div className={classes.finddoctor}>
            <center>
                <h1>Find a Doctor and Consult Instantly</h1>
                <div>               <i style={{color:'#000000',fontSize:'8rem'}} className="fa fa-user-md"></i>
</div>                <div className={classes.home_search_container}  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div className={classes.doctor_search_box}>
                    {/* <p>Perform a search to see the results.</p> */}

                        <input type="text" className={classes.search_doctor_input_box} placeholder="Search doctors by specialty" onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
                        
                        <div className={classes.findiconimg}><img className={classes.findIcon} src={process.env.PUBLIC_URL + '/images/search.svg'} alt=""/></div>
                        <div className={classes.search_doctor_input_results} hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality => <div className={classes.search_doctor_result_item} key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                    <span><img src="../../../public/search.svg" alt="" style={{height:"10px", width:"10px"}} width="12" /></span>
                                    <span>{speciality}</span>
                                    <span>SPECIALITY</span>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default FindDoctorSearchIC