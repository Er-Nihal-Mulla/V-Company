import React, {useState} from "react";

function Contact() {
    const[data,setData]=useState({
            fullname: '',
            phone: '',
    })
    const InputEvent=(event)=>{
        const {name, value}=event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,

            }
        })
    }
    const formSubmit=(e) => {
        e.preventDefault()
        alert(`Data Submitted`)
    }
  return (
    <>
      <div>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    onChange={InputEvent}
                    value={data.fullname}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter you name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    onChange={InputEvent}
                    value={data.phone}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter you mobile no."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-outline-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
