/* eslint-disable */
const DashboardView = () => {
  return (
 <div className="container-xxl flex-grow-1 container-p-y">
  {/* Hour chart  */}
  <div className="card bg-transparent shadow-none my-4 border-0">
    <div className="card-body row p-0 pb-3">
      <div className="col-12 col-md-8 card-separator">
        <h3>Welcome back, Felecia 👋🏻</h3>
        <div className="col-12 col-lg-7">
          <p>Your progress this week is Awesome. lets keep it up and get a lot of points reward !</p>
        </div>
        <div className="d-flex justify-content-between flex-wrap gap-3 me-5">
          <div className="d-flex align-items-center gap-3 me-4 me-sm-0">
            <span className="bg-label-primary p-2 rounded">
              <i className="ti ti-device-laptop ti-xl" />
            </span>
            <div className="content-right">
              <p className="mb-0">Hours Spent</p>
              <h4 className="text-primary mb-0">34h</h4>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="bg-label-info p-2 rounded">
              <i className="ti ti-bulb ti-xl" />
            </span>
            <div className="content-right">
              <p className="mb-0">Test Results</p>
              <h4 className="text-info mb-0">82%</h4>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="bg-label-warning p-2 rounded">
              <i className="ti ti-discount-check ti-xl" />
            </span>
            <div className="content-right">
              <p className="mb-0">Course Completed</p>
              <h4 className="text-warning mb-0">14</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 ps-md-3 ps-lg-4 pt-3 pt-md-0">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div>
              <h5 className="mb-2">Time Spendings</h5>
              <p className="mb-5">Weekly report</p>
            </div>
            <div className="time-spending-chart">
              <h3 className="mb-2">231<span className="text-muted">h</span> 14<span className="text-muted">m</span></h3>
              <span className="badge bg-label-success">+18.4%</span>
            </div>
          </div>
          <div id="leadsReportChart" />
        </div>
      </div>
    </div>
  </div>
  {/* Hour chart End  */}
  {/* Topic and Instructors */}
  <div className="row mb-4 g-4">
    <div className="col-12 col-xl-8">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="card-title m-0 me-2">Topic you are interested in</h5>
          <div className="dropdown">
            <button className="btn p-0" type="button" id="topic" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="ti ti-dots-vertical" />
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="topic">
              <a className="dropdown-item" href="javascript:void(0);">Highest Views</a>
              <a className="dropdown-item" href="javascript:void(0);">See All</a>
            </div>
          </div>
        </div>
        <div className="card-body row g-3">
          <div className="col-md-6">
            <div id="horizontalBarChart" />
          </div>
          <div className="col-md-6 d-flex justify-content-around align-items-center">
            <div>
              <div className="d-flex align-items-baseline">
                <span className="text-primary me-2"><i className="ti ti-circle-filled fs-6" /></span>
                <div>
                  <p className="mb-2">UI Design</p>
                  <h5>35%</h5>
                </div>
              </div>
              <div className="d-flex align-items-baseline my-3">
                <span className="text-success me-2"><i className="ti ti-circle-filled fs-6" /></span>
                <div>
                  <p className="mb-2">Music</p>
                  <h5>14%</h5>
                </div>
              </div>
              <div className="d-flex align-items-baseline">
                <span className="text-danger me-2"><i className="ti ti-circle-filled fs-6" /></span>
                <div>
                  <p className="mb-2">React</p>
                  <h5>10%</h5>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-baseline">
                <span className="text-info me-2"><i className="ti ti-circle-filled fs-6" /></span>
                <div>
                  <p className="mb-2">UX Design</p>
                  <h5>20%</h5>
                </div>
              </div>
              <div className="d-flex align-items-baseline my-3">
                <span className="text-secondary me-2"><i className="ti ti-circle-filled fs-6" /></span>
                <div>
                  <p className="mb-2">Animation</p>
                  <h5>12%</h5>
                </div>
              </div>
              <div className="d-flex align-items-baseline">
                <span className="text-warning me-2"><i className="ti ti-circle-filled fs-6" /></span>
                <div>
                  <p className="mb-2">SEO</p>
                  <h5>9%</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-xl-4 col-md-6">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between">
          <div className="card-title mb-0">
            <h5 className="m-0 me-2">Popular Instructors</h5>
          </div>
          <div className="dropdown">
            <button className="btn p-0" type="button" id="popularInstructors" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="ti ti-dots-vertical" />
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="popularInstructors">
              <a className="dropdown-item" href="javascript:void(0);">Select All</a>
              <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
              <a className="dropdown-item" href="javascript:void(0);">Share</a>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-borderless border-top">
            <thead className="border-bottom">
              <tr>
                <th>Instructors</th>
                <th className="text-end">courses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-2">
                  <div className="d-flex justify-content-start align-items-center mt-lg-4">
                    <div className="avatar me-3 avatar-sm">
                      <img src="/admin-assets/assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-0">Maven Analytics</h6>
                      <small className="text-truncate text-muted">Business Intelligence</small>
                    </div>
                  </div>
                </td>
                <td className="text-end pt-2">
                  <div className="user-progress mt-lg-4">
                    <p className="mb-0 fw-medium">33</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="avatar me-3 avatar-sm">
                      <img src="/admin-assets/assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-0">Zsazsa McCleverty</h6>
                      <small className="text-truncate text-muted">Digital Marketing</small>
                    </div>
                  </div>
                </td>
                <td className="text-end">
                  <div className="user-progress">
                    <p className="mb-0 fw-medium">52</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="avatar me-3 avatar-sm">
                      <img src="/admin-assets/assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-0">Nathan Wagner</h6>
                      <small className="text-truncate text-muted">UI/UX Design</small>
                    </div>
                  </div>
                </td>
                <td className="text-end">
                  <div className="user-progress">
                    <p className="mb-0 fw-medium">12</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="avatar me-3 avatar-sm">
                      <img src="/admin-assets/assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-0">Emma Bowen</h6>
                      <small className="text-truncate text-muted">React Native</small>
                    </div>
                  </div>
                </td>
                <td className="text-end">
                  <div className="user-progress">
                    <p className="mb-0 fw-medium">8</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="col-12 col-xl-4 col-md-6">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="card-title m-0 me-2">Top Courses</h5>
          <div className="dropdown">
            <button className="btn p-0" type="button" id="topCourses" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="ti ti-dots-vertical" />
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="topCourses">
              <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
              <a className="dropdown-item" href="javascript:void(0);">Download</a>
              <a className="dropdown-item" href="javascript:void(0);">View All</a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li className="d-flex mb-4 pb-1 align-items-center">
              <div className="avatar flex-shrink-0 me-3">
                <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-video ti-md" /></span>
              </div>
              <div className="row w-100 align-items-center">
                <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                  <p className="mb-0 fw-medium">Videography Basic Design Course</p>
                </div>
                <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                  <div className="badge bg-label-secondary">1.2k Views</div>
                </div>
              </div>
            </li>
            <li className="d-flex mb-4 pb-1 align-items-center">
              <div className="avatar flex-shrink-0 me-3">
                <span className="avatar-initial rounded bg-label-info"><i className="ti ti-code ti-md" /></span>
              </div>
              <div className="row w-100 align-items-center">
                <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                  <p className="mb-0 fw-medium">Basic Front-end Development Course</p>
                </div>
                <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                  <div className="badge bg-label-secondary">834 Views</div>
                </div>
              </div>
            </li>
            <li className="d-flex mb-4 pb-1 align-items-center">
              <div className="avatar flex-shrink-0 me-3">
                <span className="avatar-initial rounded bg-label-success"><i className="ti ti-camera ti-md" /></span>
              </div>
              <div className="row w-100 align-items-center">
                <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                  <p className="mb-0 fw-medium">Basic Fundamentals of Photography</p>
                </div>
                <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                  <div className="badge bg-label-secondary">3.7k Views</div>
                </div>
              </div>
            </li>
            <li className="d-flex mb-4 pb-1 align-items-center">
              <div className="avatar flex-shrink-0 me-3">
                <span className="avatar-initial rounded bg-label-warning"><i className="ti ti-brand-dribbble ti-md" /></span>
              </div>
              <div className="row w-100 align-items-center">
                <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                  <p className="mb-0 fw-medium">Advance Dribble Base Visual Design</p>
                </div>
                <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                  <div className="badge bg-label-secondary">2.5k Views</div>
                </div>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className="avatar flex-shrink-0 me-3">
                <span className="avatar-initial rounded bg-label-danger"><i className="ti ti-microphone-2 ti-md" /></span>
              </div>
              <div className="row w-100 align-items-center">
                <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                  <p className="mb-0 fw-medium">Your First Singing Lesson</p>
                </div>
                <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                  <div className="badge bg-label-secondary">948 Views</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-12 col-xl-4 col-md-6">
      <div className="card h-100">
        <div className="card-body">
          <div className="bg-label-primary rounded-3 text-center mb-3 pt-4">
            <img className="img-fluid" src="/admin-assets/assets/img/illustrations/girl-with-laptop.png" alt="Card girl image" width={140} />
          </div>
          <h4 className="mb-2 pb-1">Upcoming Webinar</h4>
          <p className="small">
            Next Generation Frontend Architecture Using Layout Engine And React Native Web.
          </p>
          <div className="row mb-3 g-3">
            <div className="col-6">
              <div className="d-flex">
                <div className="avatar flex-shrink-0 me-2">
                  <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-calendar-event ti-md" /></span>
                </div>
                <div>
                  <h6 className="mb-0 text-nowrap">17 Nov 23</h6>
                  <small>Date</small>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <div className="avatar flex-shrink-0 me-2">
                  <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-clock ti-md" /></span>
                </div>
                <div>
                  <h6 className="mb-0 text-nowrap">32 minutes</h6>
                  <small>Duration</small>
                </div>
              </div>
            </div>
          </div>
          <a href="javascript:void(0);" className="btn btn-primary w-100">Join the event</a>
        </div>
      </div>
    </div>
    <div className="col-12 col-xl-4 col-md-6">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="card-title m-0 me-2">Assignment Progress</h5>
        </div>
        <div className="card-body">
          <ul className="p-0 m-0">
            <li className="d-flex mb-3 pb-1">
              <div className="chart-progress me-3" data-color="primary" data-series={72} data-progress_variant="true" />
              <div className="row w-100 align-items-center">
                <div className="col-9">
                  <div className="me-2">
                    <h6 className="mb-2">User experience Design</h6>
                    <small>120 Tasks</small>
                  </div>
                </div>
                <div className="col-3 text-end">
                  <button type="button" className="btn btn-sm btn-icon btn-label-secondary">
                    <i className="ti ti-chevron-right scaleX-n1-rtl" />
                  </button>
                </div>
              </div>
            </li>
            <li className="d-flex mb-3 pb-1">
              <div className="chart-progress me-3" data-color="success" data-series={48} data-progress_variant="true" />
              <div className="row w-100 align-items-center">
                <div className="col-9">
                  <div className="me-2">
                    <h6 className="mb-2">Basic fundamentals</h6>
                    <small>32 Tasks</small>
                  </div>
                </div>
                <div className="col-3 text-end">
                  <button type="button" className="btn btn-sm btn-icon btn-label-secondary">
                    <i className="ti ti-chevron-right scaleX-n1-rtl" />
                  </button>
                </div>
              </div>
            </li>
            <li className="d-flex mb-3 pb-1">
              <div className="chart-progress me-3" data-color="danger" data-series={15} data-progress_variant="true" />
              <div className="row w-100 align-items-center">
                <div className="col-9">
                  <div className="me-2">
                    <h6 className="mb-2">React native components</h6>
                    <small>182 Tasks</small>
                  </div>
                </div>
                <div className="col-3 text-end">
                  <button type="button" className="btn btn-sm btn-icon btn-label-secondary">
                    <i className="ti ti-chevron-right scaleX-n1-rtl" />
                  </button>
                </div>
              </div>
            </li>
            <li className="d-flex">
              <div className="chart-progress me-3" data-color="info" data-series={24} data-progress_variant="true" />
              <div className="row w-100 align-items-center">
                <div className="col-9">
                  <div className="me-2">
                    <h6 className="mb-2">Basic of music theory</h6>
                    <small>56 Tasks</small>
                  </div>
                </div>
                <div className="col-3 text-end">
                  <button type="button" className="btn btn-sm btn-icon btn-label-secondary">
                    <i className="ti ti-chevron-right scaleX-n1-rtl" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*  Topic and Instructors  End*/}
</div>

  );
};

export default DashboardView;