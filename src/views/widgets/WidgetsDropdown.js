import React from 'react'
import { FaDollarSign, FaCreditCard, FaUserPlus, FaArrowUp } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'
import { ImRocket } from 'react-icons/im'
import { MdPersonAdd, MdAttachMoney } from 'react-icons/md'
import { RiFilePaper2Line } from 'react-icons/ri'
import { FaFacebook, FaTwitter } from 'react-icons/fa';
function WidgetsDropdown() {
  return (
    <>
      <div className="row mb-6 g-6">
        <div className="col-sm-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className="content-left">
                  <h5 className="mb-1">$24,983</h5>
                  <small>Total Earning</small>
                </div>
                <span className="badge bg-label-primary rounded-circle p-2">
                  <FaDollarSign size={32} className="text-primary" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className="content-left">
                  <h5 className="mb-1">$8,647</h5>
                  <small>Unpaid Earning</small>
                </div>
                <span className="badge bg-label-warning rounded-circle p-2">
                  <FaCreditCard size={32} className="text-warning" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className="content-left">
                  <h5 className="mb-1">2,367</h5>
                  <small>Signups</small>
                </div>
                <span className="badge bg-label-success rounded-circle p-2">
                  <MdPersonAdd size={32} className="text-success" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className="content-left">
                  <h5 className="mb-1">4.5%</h5>
                  <small>Conversion Rate</small>
                </div>
                <span className="badge bg-label-info rounded-circle p-2">
                  <FaArrowUp size={32} className="text-info" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-6 mt-3 g-6">
        <div className="col-lg-7">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="mb-1">How to use</h5>
              <p className="mb-6 card-subtitle mt-0">Integrate your referral code in 3 easy steps.</p>
              <div className="d-flex flex-column flex-sm-row justify-content-between text-center gap-6">
                <div className="d-flex flex-column align-items-center">
                  <span className="p-4 border-1 border-primary rounded-circle border-dashed mb-0 w-px-75 h-px-75">
                    <ImRocket size={32} className="text-primary" />
                  </span>
                  <p className="my-2 w-75">Create & validate your referral link and get</p>
                  <h6 className="text-primary mb-0">$50</h6>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="p-4 border-1 border-primary rounded-circle border-dashed mb-0 w-px-75 h-px-75">
                    <MdAttachMoney size={32} className="text-primary" />
                  </span>
                  <p className="my-2 w-75">For every new signup you get</p>
                  <h6 className="text-primary mb-0">10%</h6>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="p-4 border-1 border-primary rounded-circle border-dashed mb-0 w-px-75 h-px-75">
                    <RiFilePaper2Line size={32} className="text-primary" />
                  </span>
                  <p className="my-2 w-75">Get other friends to generate link and get</p>
                  <h6 className="text-primary mb-0">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card h-100">
            <div className="card-body">
              <form className="referral-form" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-6 mt-1">
                  <h5 className="mb-5">Invite your friends</h5>
                  <div className="d-flex gap-4 align-items-end">
                    <div className="w-100">
                      <label className="form-label mb-1" htmlFor="referralEmail">
                        Enter friend’s email address and invite them
                      </label>
                      <input
                        type="email"
                        id="referralEmail"
                        name="referralEmail"
                        className="form-control w-100"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary">
                        <AiOutlineLink size={24} className="text-white me-2" />Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-5">Share the referral link</h5>
                  <div className="d-flex gap-4 align-items-end">
                    <div className="w-100">
                      <label className="form-label mb-1" htmlFor="referralLink">
                        Share referral link on social media
                      </label>
                      <input
                        type="text"
                        id="referralLink"
                        name="referralLink"
                        className="form-control w-100 h-px-40"
                        placeholder="pixinvent.com/?ref=6479"
                      />
                    </div>
                    <div className="d-flex">
  <button type="button" className="btn btn-facebook btn-icon me-2">
    <FaFacebook size={24} className="text-white" />
  </button>
  <button type="button" className="btn btn-twitter btn-icon">
    <FaTwitter size={24} className="text-white" />
  </button>
</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WidgetsDropdown
