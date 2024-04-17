import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BsChevronRight } from "react-icons/bs";

const Breadcrumbs = () => {
  const router = useRouter();
  
  // Split the path and filter out empty segments
  const pathSegments = router.asPath.split('/').filter(path => path.length > 0);

  return (
    <nav aria-label="breadcrumb"  className="cookies-banner py-8 px-6">
      <ol>
        {/* Always include the Home link first */}
        
        {pathSegments.map((segment, index) => {
          // Reconstruct the URL to this segment
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          // Check if it's the last segment to conditionally render as Link or span
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={index}>
              {isLast ? (
                <span >Home <BsChevronRight className="right-icon"/> {segment}</span> // Removed the chevron for the last item
              ) : (
                <>
                  <Link href={href}>
                    <a>{segment}</a>
                  </Link>
                  <BsChevronRight className="right-icon"/>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

