import React, { useState } from 'react';
import './FindDoctorSearchIC.css';
import { useNavigate, Navigate } from 'react-router-dom';


const initSpeciality = [
    'General Physician', 'Cardiologist', 'Dermatologist', 'Ear-Nose-Throat (ENT) Specialist', 'Endocrinologist', 'Gynecologist/Obstetrician', 'Oncologist', 'Pediatrician', 'Physical Therapist'
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
        <div className='finddoctor'>
            <center>
                <h1>Find a Doctor and Consult Instantly</h1>
                <div>               <i style={{color:'#000000',fontSize:'8rem'}} className="fa fa-user-md"></i>
</div>                <div className="home-search-container"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div className="doctor-search-box">
                    {/* <p>Perform a search to see the results.</p> */}

                        <input type="text" className="search-doctor-input-box" placeholder="Search doctors by specialty" onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
                        
                        <div className="findiconimg"><img className='findIcon' src={process.env.PUBLIC_URL + '/images/search.svg'} alt=""/></div>
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                    <span><img src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" style={{height:"10px", width:"10px"}} width="12" /></span>
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