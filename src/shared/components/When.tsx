import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  expr: boolean;
}

export function When({ children, expr }: Props) {
  return <>{expr ? children : null}</>;
}
