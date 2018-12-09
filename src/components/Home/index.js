import React from 'react';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="jumbotron bg-warning text-center">
                <h1>This is no place for gumblers</h1>
                <p>Hackers are real! monsters are real too. They live inside us, and sometimes, they win!</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="box">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor..</p>
                            <p>Ut enim ad..</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor..</p>
                            <p>Ut enim ad..</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor..</p>
                            <p>Ut enim ad..</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor..</p>
                            <p>Ut enim ad..</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
