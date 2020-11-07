import React from 'react';

const Client = () => {
    return (
        <section className="client">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center client-title">
                        <h1>
                        What Our Customers Have to Say
                        </h1>
                        <p>Couple of Words About This Stories Section</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="client-info">
                            <div className="client-img"><img src={process.env.PUBLIC_URL + "/assets/images/client1.png"}/></div>
                        </div>
                        <div className="client-name">
                            <h2>Celia Fields</h2>
                            <p>UX Expert</p>
                        </div>
                        <p className="client-review">
                        This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.
                        </p>
                    </div>

                    <div className="col-md-4 col-12">
                        <div className="client-info">
                            <div className="client-img"><img src={process.env.PUBLIC_URL + "/assets/images/client2.png"}/></div>
                        </div>
                        <div className="client-name">
                            <h2>Alexander Lee</h2>
                            <p>Founder</p>
                        </div>
                        <p className="client-review">
                        Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.
                        </p>
                    </div>

                    <div className="col-md-4 col-12">
                        <div className="client-info">
                            <div className="client-img"><img src={process.env.PUBLIC_URL + "/assets/images/client3.png"}/></div>
                        </div>
                        <div className="client-name">
                            <h2>Lenora Sandoval</h2>
                            <p>Product Manager</p>
                        </div>
                        <p className="client-review">
                        This sounded a very good reason, and Alice was quite pleased to know it. 'I never thought of that before!' she said.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client;