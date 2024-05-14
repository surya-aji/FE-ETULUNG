/* eslint-disable */

const SidebarLayout = () => {
  return (

    <div className="col-xl-4 mb-4 col-lg-5 col-12 p-4">
      <div className="card">
        <div className="d-flex align-items-end row">
          <div className="col-7">
            <div className="card-body text-nowrap">
              <h5 className="card-title mb-0">Congratulations John! 🎉</h5>
              <p className="mb-2">Best seller of the month</p>
              <h4 className="text-primary mb-1">$48.9k</h4>
              <a href="javascript:;" className="btn btn-primary">View Sales</a>
            </div>
          </div>
          <div className="col-5 text-center text-sm-left">
            <div className="card-body pb-0 px-0 px-md-4">
              <img src="admin-assets/assets/img/illustrations/card-advance-sale.png" height={140} alt="view sales" />
            </div>
          </div>
        </div>
      </div>


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

  )
}

export default SidebarLayout;