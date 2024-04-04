import React, { useState } from 'react';

const Accordion = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            

            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What Is The Maximum Amount I Can Borrow From African Bank?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Vel tenetur officiis ab reiciendis dolor aut quae doloremque est ipsum natus et consequatur animi aut sunt dolores ut quasi rerum. Aut velit velit id quasi velit eum reiciendis laudantium quo galisum incidunt aut velit animi hic temporibus blanditiis sit odit iure. Eum laborum dolores ea molestias fuga qui temporibus accusantium qui soluta aliquid ab vero soluta.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What Happens If I Have A Bad Credit Score? Will I Still Get A Loan?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How Can I Apply For An African Bank Loan??</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Aut architecto consequatur sit error nemo sed dolorum suscipit 33 impedit dignissimos ut velit blanditiis qui quos magni id dolore dignissimos. Sit ipsa consectetur et sint harum et dicta consequuntur id cupiditate perferendis qui quisquam enim. Vel autem illo id error excepturi est dolorum voluptas qui maxime consequatur et culpa quibusdam in iusto vero sit amet Quis.</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Accordion;