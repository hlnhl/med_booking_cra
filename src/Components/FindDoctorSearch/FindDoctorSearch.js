import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, Navigate } from 'react-router-dom';


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
        <div>
            <div className='docSearch'>
                <img src="../../../public/dr_search.png" alt="" />
                <h1>Find a doctor</h1>
                <h1 className='gradient'>at your own ease</h1>
                <div>
                    <i style={{ color: '#000000', fontSize: '8rem' }} className="fa fa-user-md"></i>
                </div>
                <div className="searchBox">
                    <div className="doctor-search-box">
                        {/* <p>Perform a search to see the results.</p> */}

                        <input type="text" className="search-doctor-input-box" placeholder="Search doctors by specialty..." onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />

                        <div className="findiconimg"><img className='findIcon' src="../Assets/search.svg" alt="" /></div>
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                    <span></span>
                                    <span>{speciality}</span>
                                    <span>SPECIALITY</span>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindDoctorSearch