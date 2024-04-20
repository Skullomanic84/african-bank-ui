import Image from 'next/image';


const Banner = () => {

  return (
    <>
<div className="cookies-banner py-8 px-6" style={{ minHeight: '50px' }}>
  <div className='container'>
    <div className="p-6 ">
      <div className="d-flex align-items-start " style={{backgroundcolor:"#fff", minHeight: '50px' }}>
        <div className="d-inline-flex">
        
        <div className='center-banner-size'> {/* Container to control the width as a percentage of its parent */}
      <Image
        className='center-banner'
        src="https://www.africanbank.co.za/Media/dqxpfbcm/cookies.svg"
        alt="Description of image"  // It's good practice to provide an alt description for accessibility
        width={100} // Actual width in pixels of the source image
        height={100} // Actual height in pixels of the source image
        layout="responsive" // Image will scale with the container while maintaining this aspect ratio
      />
    </div>
          {/* <img className='center-banner' src="https://www.africanbank.co.za/Media/dqxpfbcm/cookies.svg"  height="25px" width="25px"></img> */}
          <h5 className="h6 mb-0 fw-bold .fs-4 center-banner cookies-text"> We use cookies to improve your experience</h5>
        </div>

        {/* <button className="btn p-0 text-warning-dark">
                <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.93341 6.00008L11.1334 1.80008C11.4001 1.53341 11.4001 1.13341 11.1334 0.866748C10.8667 0.600081 10.4667 0.600081 10.2001 0.866748L6.00008 5.06675L1.80008 0.866748C1.53341 0.600081 1.13341 0.600081 0.866748 0.866748C0.600082 1.13341 0.600082 1.53341 0.866748 1.80008L5.06675 6.00008L0.866748 10.2001C0.733415 10.3334 0.666748 10.4667 0.666748 10.6667C0.666748 11.0667 0.933415 11.3334 1.33341 11.3334C1.53341 11.3334 1.66675 11.2667 1.80008 11.1334L6.00008 6.93341L10.2001 11.1334C10.3334 11.2667 10.4667 11.3334 10.6667 11.3334C10.8667 11.3334 11.0001 11.2667 11.1334 11.1334C11.4001 10.8667 11.4001 10.4667 11.1334 10.2001L6.93341 6.00008Z" fill="currentColor"></path>
                </svg>
            </button> */}
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Banner;