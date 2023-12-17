import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './List.css';

export default function () {
    const [search, setSearch] = useState('');
    const [course, setCourse] = useState([]);

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/courselist", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            response = await response.json();
            setCourse(response.data);
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
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const handleEnroll = async (courseId, index) => {
        const userEmail = localStorage.getItem("userEmail");
        const res = await fetch("http://localhost:5000/api/enroll", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userEmail: userEmail,
                courseId: courseId
            })
        })

        const json = await res.json();
        if (!json.success) {
            alert("Sign in with a valid account");
        } else {
            // Update the enrolled status for the specific course
            const updatedEnrolledCourses = [...enrolledCourses];
            updatedEnrolledCourses[index] = true;
            setEnrolledCourses(updatedEnrolledCourses);
        }
    }


    return (
        <div className='mt-5'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
            <section className="section">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-lg-12">
                            <div className="candidate-list-widgets mb-4">
                                <form action="#" className="">
                                    <div className="g-2 row">
                                        <div className="col-lg-10 ">
                                            <div className="filler-job-form">
                                                <i className="uil uil-briefcase-alt"></i><input id="exampleFormControlInput1" placeholder="Course, Instructor name... " type="search" className="form-control filler-job-input-box form-control" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                            </div>
                                        </div>


                                        <div className="col-lg-2">
                                            <div>
                                                <a className="btn btn-primary" href="#"><i className="uil uil-filter"></i> Search</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="align-items-center row">
                                <div className="col-lg-8">
                                    <div className="mb-3 mb-lg-0"><h6 className="fs-16 mb-0">Showing 1 – 8 of 11 results</h6></div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="candidate-list-widgets">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="selection-widget">
                                                    <div>Location</div>
                                                    <select className="form-select" data-trigger="true" name="choices-single-filter-orderby" id="choices-single-filter-orderby" aria-label="Default select example">
                                                        <option value="df">Online</option>
                                                        <option value="ne">Offline</option>
                                                        <option value="od">Hybrid</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="selection-widget mt-2 mt-lg-0">
                                                    <div>Enrollment Status</div>
                                                    <select className="form-select" data-trigger="true" name="choices-candidate-page" id="choices-candidate-page" aria-label="Default select example">
                                                        <option value="df">Open</option>
                                                        <option value="ne">Closed</option>
                                                        <option value="ne">In Progress</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {course.filter((item) => {
                                    return search.toLowerCase() === '' ? item :
                                        (item.name.toLowerCase().includes(search) || item.instructor.toLowerCase().includes(search) ||
                                            item.location.toLowerCase().includes(search) || item.enrollmentStatus.toLowerCase().includes(search))
                                }).map((course, index) => (
                                    <div key={index}>
                                        <div className="candidate-list">
                                            <div className="candidate-list-box card mt-4">
                                                <div className="p-4 card-body">
                                                    <div className="align-items-center row">
                                                        <div className="col-auto">
                                                            <div className="candidate-list-images">
                                                                <img src={generateThumbnail(course.name)} alt="Cannot load image" className="avatar-md img-thumbnail rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <div className="candidate-list-content mt-3 mt-lg-0">
                                                                <h5 className="fs-19 mb-0">
                                                                    <Link className="primary-link" to={`/coursedetail/${course._id}`}>{course.name}</Link>

                                                                </h5>
                                                                <p className="text-dark mb-2">{course.instructor}</p>
                                                                <p className="text-muted mb-2">{course.description}</p>
                                                                <ul className="list-inline mb-0 text-muted">
                                                                    <li className="list-inline-item"><i className="mdi mdi-map-marker"></i> {course.location}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                                                                <span className="badge bg-soft-secondary fs-14 mt-1 me-auto mb-2 mb-lg-0">Duration: {course.duration}</span>
                                                                <button
                                                                    className={`btn ${enrolledCourses[index] ? 'btn-secondary' : 'btn-success'} ml-auto`}
                                                                    type="submit"
                                                                    onClick={() => !enrolledCourses[index] && handleEnroll(course._id, index)}
                                                                    disabled={enrolledCourses[index]}
                                                                >
                                                                    {enrolledCourses[index] ? 'Already Enrolled' : 'Enroll Now'}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="favorite-icon">
                                                        <input type="checkbox" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mt-4 pt-2 col-lg-12">
                            <nav aria-label="Page navigation example">
                                <div className="pagination job-pagination mb-0 justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" tabindex="-1" href="#"><i className="mdi mdi-chevron-double-left fs-15"></i></a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#"><i className="mdi mdi-chevron-double-right fs-15"></i></a>
                                    </li>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
