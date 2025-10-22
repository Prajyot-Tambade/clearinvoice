import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: String;
};

const Container = ({ children, className = "", ...props }: ContainerProps) => {
  return (
    <section className={`max-w-[1440px] mx-auto ${className}`} {...props}>
      {children}
    </section>
  );
};

export default Container;
