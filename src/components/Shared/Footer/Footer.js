import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (

        <div>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: '#929fba' }}
            >

                <div className="container p-4 pb-0">
                    <section className="">

                        <div className="row">

                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    MARKAS BEEL RESORT
                                </h6>
                                <p>
                                    We here at <Link to="/home#navBar">markasbeelresort.com</Link> Experience our sophisticated and lavish "Markas Beel Resort " providing you super luxury villas for rental at Sreepur Gazipur 2-hour drive from Dhaka.
                                </p>
                            </div>


                            <hr className="w-100 d-md-none" />


                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                <p className="text-white" >
                                    Luxury Villas
                                </p>
                                <p className="text-white">
                                    Food
                                </p>
                                <p className="text-white">
                                    Entertainments
                                </p>
                                <p className="text-white">
                                    Activities
                                </p>
                            </div>


                            <hr className="w-100 d-md-none" />


                            <hr className="w-100 d-md-none" />


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Dhaka, Dhaka 1227, BD</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@markasbeel.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>


                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#3b5998' }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-facebook-f"></i
                                ></a>


                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#55acee' }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-twitter"></i
                                ></a>


                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#dd4b39' }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-google"></i
                                ></a>


                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#ac2bac' }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-instagram"></i
                                ></a>


                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#0082ca' }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-linkedin-in"></i
                                ></a>

                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#333333' }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-github"></i
                                ></a>
                            </div>
                        </div>

                    </section>

                </div>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    © 2021 Copyright :
                    <a className="text-white" href="https://mdbootstrap.com/"
                    >  markasbeelresort.com</a
                    >
                </div>

            </footer>

        </div>

    );
};

export default Footer;