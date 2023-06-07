import { NavLink } from 'react-router-dom';

export function About(){return(<li><NavLink to="/aboutme">About Me</NavLink></li>)};
export function Portfolio(){return(<li><NavLink to="/portfolio">Portfolio</NavLink></li>)};
export function Contact(){return(<li><NavLink to="/contactme">Contact Me</NavLink></li>)};
export function Resume(){return(<li><NavLink to="/resume">Resume</NavLink></li>)};