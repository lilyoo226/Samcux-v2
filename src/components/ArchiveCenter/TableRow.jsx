import React from "react";

const TableRow = (
  {
    title,
    description,
    projectLinkGithub,
    siteLink,
    skill,
    projectImage,
    year
  }
) => {
  return (
    <tr>
      <td class="overline year">{year}</td>
      <td class="title"> {title}</td>
      {/* <td class="company hide-on-mobile">
        <span>Upstatement</span>
      </td> */}
      <td class="tech hide-on-mobile">
       
        <span>
          {skill}<span class="separator"></span>
        </span>
        {/* <span>
         <span class="separator"></span>
        </span> */}
        
      </td>
      <td class="links">
        <div>
          <a
            href={siteLink}
            aria-label="External Link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a8b2d1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            </a>
            <a href={projectLinkGithub}>
              
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a8b2d1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
