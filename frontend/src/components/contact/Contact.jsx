import './Contact.css';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContact } from '../../service/api';

const intialValuesContact = {
    name : '',
    email : '',
    subject : '',
    message : '',
}

const Contact = () => {
    const [contact,setContact]= useState(intialValuesContact);
    const history = useHistory();

    const saveContact = async() => {
        await createContact(contact);
        history.push("/");
    }
    const handleChange = (e) => {
        setContact({ ...contact,[e.target.name]:e.target.value})
    }

    return (
        <>
        <div className="section">
                <div className="container matp">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">CONTACT US</h2>
                                <p className="para">Let us know what you think! In order to provide better service,
                                     please do not hesitate to give us your feedback. Thank you.</p><hr style={{color: "#eee"}}/>
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-6">
                                    <input placeholder = "Name"  id="name" type="text" 
                                        onChange={(e) => handleChange(e)} className="form-control"
                                        name="name" required  
                                       />
                                </div>
                                <div className="col-md-6">
                                    <input placeholder = "Email"  id="email" type="email"
                                      className="form-control" aria-describedby="emailHelp" name="email" 
                                      onChange={(e) => handleChange(e)}
                                      required
                                      />
                                </div>
                                </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder = "Subject"  id="subject" type="text" 
                                        onChange={(e) => handleChange(e)}
                                      className="form-control" name="subject" required 
                                      />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder = "Message"  id="message"
                                        onChange={(e) => handleChange(e)} 
                                       className="form-control" rows="1" name="message"
                                       required 
                                       />
                                </div>
                                <button type="submit" onClick={()=>saveContact()} className="btn btn-outline-success submit"><b>Submit</b></button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact;