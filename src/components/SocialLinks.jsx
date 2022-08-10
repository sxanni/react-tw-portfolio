import React from "react";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialInstagramCircular,
  TiSocialAtCircular,
} from "react-icons/ti";
import { BsPersonCircle } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id:1,
      child: (
        <>
          LinkedIn <TiSocialLinkedinCircular size={25} className="ml-5" />
        </>
      ),
      href: 'https://www.linkedin.com/in/opeyemi-sanni-0988a1167/',
      style: 'rounded-tr-md',
    },
    {
      id:2,
      child: (
        <>
          Github <TiSocialGithubCircular size={25} className="ml-5" />
        </>
      ),
      href: "http://github.com/sxanni",
    },
    {
      id:3,
      child: (
        <>
          Email <TiSocialAtCircular size={25} className="ml-5" />
        </>
      ),
      href: "mailto:opeyemisanni65@gmail.com",
    },
    {
      id:4,
      child: (
        <>
          Instagram <TiSocialInstagramCircular size={25} className="ml-5" />
        </>
      ),
      href: "https://www.instagram.com/x234.wav/",
    },
    {
      id:5,
      child: (
        <>
          Resume <BsPersonCircle size={21} className="ml-5 mr-1 " />
        </>
      ),
      href: "/WD-Resume-april22.pdf",
      style: "rounded-br-md ",
      download: true,
    },
  ];

  return (
    <div className="hidden  md:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={"flex justify-between items-center w-30 h-12 pl-5 pr-1 py-2 bg-white  ml-[-110px] hover:ml-[-9px] hover:rounded-r-md duration-300" +
              " " + style
            }
          >
            <a
              href={href}
              className="text-black flex justify-between items-center w-full "
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
