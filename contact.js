import React, { Component } from 'react';
import Head from 'next/head'

class contact extends Component {
    render() {
        return (
            <div>
                <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
            
                </Head>
                <header className="page__header page__header--stack page__header--centered" >
                    <h1 className="page__title heading h1" >Contact Us</h1>
                    <div className="page__description rte">
                        Having problems with purchasing or wanting to know more about a product? Knight Owl Labs Team is here to help.
    </div>
                </header>
                <div className="form-floating fr mb-3" >
                    <input className="form-control"  id="floatingInput" placeholder="name@example.com" />
                    <label>Email address</label>
                </div>
                <div className="form-floating fr p22 mb-3" >
                    <input type="text" className="form-control"  placeholder="Phone number" />
                    <label>Phone number</label>
                </div>
                <div className="form-floating fr mb-3" >
                    <input type="text" className="form-control p3"  id="floatingInput" placeholder="Subject" />
                    <label>Subject</label>
                </div>
                <div className="form-floating p8 fr" >
                    <textarea className="form-control p6"  placeholder="Message" id="floatingTextarea2" defaultValue={""} style={{marginTop: '0px', marginBottom: '0px', height: '273px'}}/>
                    <label>Message</label>
                </div>
            </div>

        );
    }
}

export default contact;
