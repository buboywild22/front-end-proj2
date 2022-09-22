// import React, { Component } from 'react';
// import { FormErrors } from './FormErrors';
// import Swal from 'sweetalert2';

// class Book extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       email: '',
//     //   password: '',
//       formErrors: {email: '', password: ''},
//       emailValid: false,
//       passwordValid: false,
//       formValid: false
//     }
//   }

//   handleUserInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({[name]: value},
//                   () => { this.validateField(name, value) });
//   }

//   validateField(fieldName, value) {
//     let fieldValidationErrors = this.state.formErrors;
//     let emailValid = this.state.emailValid;
//     let passwordValid = this.state.passwordValid;

//     switch(fieldName) {
//       case 'email':
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         fieldValidationErrors.email = emailValid ? '' : ' is invalid';
//         break;
//       case 'password':
//         passwordValid = value.length >= 8;
//         fieldValidationErrors.password = passwordValid ? '': ' is too short';
//         break;
//       default:
//         break;
//     }
//     this.setState({formErrors: fieldValidationErrors,
//                     emailValid: emailValid,
//                     passwordValid: passwordValid
//                   }, this.validateForm);
//   }

//   validateForm() {
//     this.setState({formValid: this.state.emailValid });
//   }

//   errorClass(error) {
//     return(error.length === 0 ? '' : 'has-error');
//   }

//   render () {
//     return (
//       <form className="demoForm">
//         <div className="panel panel-default">
//           <FormErrors formErrors={this.state.formErrors} />
//         </div>
//         <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
//           <label htmlFor="email">Email address</label>
//           <input type="email" required className="form-control" name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleUserInput}  />
//         </div>
//         <div className="form-check d-grid mb-3 me-2">
//                     <label className="form-check-label" htmlFor="fname">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter First Name"
//                       name="fname"
//                       id="fname"
//                       required=""
//                     />
//                   </div>
//                   <div className="form-check d-grid mb-3 me-2">
//                     <label className="form-check-label" htmlFor="lname">
//                       Middle Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Middle Name"
//                       name="mname"
//                       id="mname"
//                       required=""
//                     />
//                   </div>
//                   <div className="form-check d-grid mb-3 me-2">
//                     <label className="form-check-label" htmlFor="lname">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Last Name"
//                       name="lname"
//                       id="lname"
//                       required=""
//                     />
//                   </div>
//                   <div className="form-check d-grid mb-3 me-2">
//                     <label className="form-check-label" htmlFor="phone">
//                       Phone Number
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Phone Number"
//                       name="phone"
//                       id="phone"
//                       required=""
//                     />
//                   </div>
//         {/* <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleUserInput}  />
//         </div> */}
//          {/* <a className='btn btn-lg d-grid col-12 bg-danger text-white' href="/client">Sign In</a> */}
//         <button  className="btn btn-lg d-grid col-12 bg-danger mt-2"  disabled={!this.state.formValid} data-bs-dismiss="modal"
//                   aria-label="Close" onClick={submit}>Book Now</button>
//       </form>
//     )
//   }
// }
// function submit()
//           {   Swal.fire({
//               icon: 'success',
//               title: 'Playground Booked!',
//               confirmButtonColor: "#CE2033",
//               allowOutsideClick: false,
//               text: 'Thank you for your booking!',
//             }).then(function() {
//                 window.location = "/client";
//                 })

//             }
// export default Book ;