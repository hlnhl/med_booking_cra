import React, { useEffect, useState } from 'react';
import classes from './InstantConsultation.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from './FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './DoctorCardIC/DoctorCardIC';

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    
    const getDoctorsDetails = () => {
        fetch('dr_list.json')
        .then(res => res.json())
        .then(data => {
            if (searchParams.get('speciality')) {
                // window.reload()
                const filtered = data.filter(doctor => doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase());

                setFilteredDoctors(filtered);
                
                setIsSearched(true);
                window.reload()
            } else {
                setFilteredDoctors([]);
                setIsSearched(false);
            }
            setDoctors(data);
        })
        .catch(err => console.log(err));
    }
    const handleSearch = (searchText) => {

        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
            } else {
                
            const filtered = doctors.filter(
                (doctor) =>
                // 
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
                
            );
                
            setFilteredDoctors(filtered);
            setIsSearched(true);
            window.location.reload()
        }
    };
    const navigate = useNavigate();
    useEffect(() => {
        getDoctorsDetails();
        // const authtoken = sessionStorage.getItem("auth-token");
        // if (!authtoken) {
        //     navigate("/login");
        // }
    }, [searchParams])

    return (
        <center>
            <div className={classes.searchpageContainer}>
            <FindDoctorSearchIC onSearch={handleSearch} />
            <div className={classes.searchResultsContainer}>
            {isSearched ? (
                <center>
                    <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')}</h2>
                    <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                    {filteredDoctors.length > 0 ? (
                    filteredDoctors.map(doctor => <DoctorCardIC className={classes.doctorcard} {...doctor} key={doctor.name} />)
                    ) : (
                    <p>No doctors found.</p>
                    )}
                </center>
                ) : (
                ''
                )}
            </div>
        </div>
        </center>
    )
}

export default InstantConsultation