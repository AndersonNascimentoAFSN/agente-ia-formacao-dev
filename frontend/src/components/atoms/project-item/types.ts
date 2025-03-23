import { IProject } from "@core";
import Link from "next/link";
import { ComponentProps } from "react";

export interface ProjectItemProps extends ComponentProps<typeof Link>{
  project: IProject;
}