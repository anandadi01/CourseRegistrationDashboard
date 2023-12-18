import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';

export default function CourseDetail() {
    const { id } = useParams();

    const [coursedata, setCourseData] = useState({});

    const loadData = async () => {
        try {
            let response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/coursedetail/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            response = await response.json();
            console.log(response);
            setCourseData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);



    const generateThumbnail = (courseName) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');


        canvas.width = 200;
        canvas.height = 100;

        context.fillStyle = '#3498db';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.font = '16px Arial';
        context.fillStyle = '#fff';
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        context.fillText(courseName, canvas.width / 2, canvas.height / 2);

        const dataURL = canvas.toDataURL('image/png');

        return dataURL;
    };


    return (
        <div>
            <Navbar />
            {coursedata && (
                <div className="container mt-4">
                    <div className="card shadow">
                        <img src={generateThumbnail(coursedata.name)} className="card-img-top rounded-top" alt="Course Thumbnail" />
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4 text-primary">{coursedata.name}</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="card-subtitle mb-3">Instructor: {coursedata.instructor}</h5>
                                    <p className="card-text">Description: {coursedata.description}</p>
                                    <p className="card-text"><small className="text-muted">Duration: {coursedata.duration}</small></p>
                                    <div className="mb-3"><strong>Location:</strong> {coursedata.location}</div>
                                    <div className="mb-3"><strong>Enrollment Status:</strong> {coursedata.enrollmentStatus}</div>
                                    <div><strong>Schedule:</strong> {coursedata.schedule}</div>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="card-subtitle mb-3">Syllabus</h5>
                                    <ul className="list-group">
                                        {coursedata.syllabus && coursedata.syllabus.map((syllabus, index) => (
                                            <li className="list-group-item" key={index}>
                                                <div><strong>Week:</strong> {syllabus.week}</div>
                                                <div><strong>Topic:</strong> {syllabus.topic}</div>
                                                <div><strong>Content:</strong> {syllabus.content}</div>
                                            </li>
                                        ))}
                                    </ul>
                                    <h5 className="card-subtitle mt-4 mb-3">Prerequisites</h5>
                                    <ul className="list-group">
                                        {coursedata.prerequisites && coursedata.prerequisites.map((pre, index) => (
                                            <li className="list-group-item" key={index}>
                                                <div>{pre}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn btn-success" type="submit">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>


    )
}
