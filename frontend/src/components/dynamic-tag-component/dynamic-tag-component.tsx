import React, { ReactNode } from "react";

interface Props {
  tag: string;
  children: ReactNode;
  className?: string;
}

export default function DynamicTagComponent(properties: Props) {
  const { tag, children, className } = properties;
  return React.createElement(tag, { className }, children);
}
