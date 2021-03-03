import { PageProps } from "gatsby"
import React, { FC } from "react";

type NotFoundProps = {
  title?: string; //optional
};

const NotFoundPage: FC<PageProps<NotFoundProps>> = ({}) => {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default NotFoundPage;