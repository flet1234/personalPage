import * as React from "react";

interface emailTemplateProps {
  text: string;
}

export const EmailTemplate: React.FC<Readonly<emailTemplateProps>> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
