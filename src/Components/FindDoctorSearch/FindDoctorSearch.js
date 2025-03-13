import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import classes from './FindDoctorSearch.module.css';

const initSpeciality = [
    'General Physician', 'Cardiologist', 'Dentist', 'Dermatologist', 'Otolaryngologist (ENT)', 'Endocrinologist', 'Gynecologist/Obstetrician', 'Neurologist', 'Oncologist', 'Orthopedist', 'Pediatrician', 'Physical Therapist', 'Podiatrist', 'Pulmonologist', 'Rheumatologist'
]

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/appointments?speciality=${speciality}`);
        window.location.reload();
    }

    return (
        <div className={classes.search_main}>
            <div className={classes.search_image_div}>
                <img className={classes.search_image} src="dr_search.png" alt="" />
            </div>
            <div className={classes.search_title_div}>
                <h1 className={classes.search_h1}>Find a doctor</h1>
                <h1 className={`${classes.search_h1} ${classes.gradient}`}>at your own ease</h1>
                
                <div className={classes.search_box}>
                    {/* <p>Perform a search to see the results.</p> */}

                    <input type="text" className={classes.search_input} placeholder="Search doctors by specialty..." onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />

                    <div className={classes.search_results} hidden={doctorResultHidden}>
                        {
                            specialities.map(speciality => <div className={classes.search_result_item} key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                <span></span>
                                <span>{speciality}</span>
                                <span>SPECIALITY</span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindDoctorSearch;