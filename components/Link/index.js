import React from "react";

import cn from "classnames";

import Link from "next/link";

const LinkComponent = ({
  route = "#",
  params,
  children,
  className,
  active,
  style,
  onClick,
  id,
  target = "",
  prefetch,
}) => {
  const isExternal = /^https?/.test(route);
  const calculateTarget = () => {
    if (!isExternal) return "";
    else if (isExternal && target) return target;
    else return "_parent";
  };
  let link = (
    <a
      style={style}
      id={id}
      className={cn(className, { active })}
      target={calculateTarget()}
      rel={isExternal ? "noreferer" : ""}
      onClick={onClick}
      href={isExternal ? route : ""}
    >
      <span>{children}</span>
    </a>
  );

  if (!isExternal) {
    link = (
      <Link href={route} params={params} passHref>
        {link}
      </Link>
    );
  }

  return link;
};

export default LinkComponent;
