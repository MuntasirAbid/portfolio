import Head from "next/head";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaDatabase, FaFigma, FaReact } from 'react-icons/fa'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/me.JPG";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fvykxff', 'template_amzssdb', form.current, 'fS0vV5F_k8ihXdq6e')
      .then((result) => {
        alert("Message send to Muntasir")
      }, (error) => {
        console.log(error.text);

      });
    e.target.reset();

  };

  return (
    <div className={darkMode ? "dark" : ""} >
      <Head>
        <title>Muntasir Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div className="navbar flex justify-between">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#technology">Technologies</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact me</a></li>
                </ul>
              </div>
              <a className="normal-case font-burtons text-black text-xl dark:text-white">Muntasir's Portfolio</a>
            </div>
            <div className=" hidden lg:flex mr-44">
              <ul className="menu menu-horizontal px-auto text-black dark:text-white ">
                <li className="hover:text-amber-500"><a href="#projects">Projects</a></li>
                <li className="hover:text-amber-500"><a href="#technology">Technologies</a></li>
                <li className="hover:text-amber-500"><a href="#about">About</a></li>
                <li className="hover:text-amber-500"><a href="#contact">Contact me</a></li>
              </ul>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" dark:text-white dark:hover:text-amber-500 cursor-pointer text-2xl text-black hover:text-amber-500  "
                />
              </li>
              <li >
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-cyan-700 text-white px-4 py-2 border-none rounded-md ml-8 hover:text-amber-500"
                  href="https://drive.google.com/file/d/1-Hc3ZCQPfEnGUMiFlQ6nwRnrMl4F2Nr2/view?usp=sharing" rel="noreferrer" target='_blank'
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center lg:flex sm:block justify-between items-center  pt-32 ">
            <div>
              <h2 className="text-5xl text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Muntasir Al Abid
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                MERN Stack Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Final year Student, Studying Bachelor in Computer Science at <br />
                University of Lodz. <br /> I am continuing my education through online classes. I am flexible to relocate.
              </p>
              <p className="text-md pb-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">I have experience working on basic HTML, CSS, JavaScript, Typescript, ReactJS, NextJS, NodeJs, MongoDB.</p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">

                <a className="transition duration-300 hover:scale-125 hover:text-teal-600" href="https://github.com/MuntasirAbid?tab=repositories" rel="noreferrer" target='_blank'> <AiFillGithub /> </a>

                <a className="transition duration-300 hover:scale-125 hover:text-teal-600" href="https://www.linkedin.com/in/muntasir-al-abid-b62247172/" rel="noreferrer" target='_blank'> <AiFillLinkedin /> </a>

                <a className="transition duration-300 hover:scale-125 hover:text-teal-600" href="https://www.facebook.com/muntasiralabid/" rel="noreferrer" target='_blank'> <AiFillFacebook /></a>

              </div>
            </div>
            <div>
              <div className="mx-auto rounded-md w-80 h-80 relative overflow-hidden mt-16 md:h-96 md:w-96 drop-shadow-2xl transition duration-[2500ms] hover:scale-110">
                <Image src={deved} alt="" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="text-black py-2">
          <div>
            <h3 className="font-burtons text-3xl py-1 dark:text-white ">Projects</h3>

          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap dark:text-white">
            <div className="basis-1/3 h-auto flex-1 rounded-md border-2 border-grey-800 drop-shadow-2xl">
              <Image

                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={web1} alt=""
              />
              <div className="text-center px-2">
                <h1 className="py-5 text-3xl">Doctor's Portal</h1>
                <p>
                  I developed this doctor's portal website where patients could take appointments for treatment from a specific doctor and also added booking system on a specific date and time. I've used React, Firebase authentication,TailwindCSS with daisyUI, and a protected route system and data fetching on this website. and finally, include Stripe for payment and also used json web token to verify admin. Please visit about page.
                  <br />
                  Stack
                </p>
                <p className="pt-5 text-gray-600">React Javascript TailWindcss MongoDB</p>
              </div>
              <div className="flex justify-between py-4 px-2 ">
                <a href="https://github.com/MuntasirAbid/doctor-prtal-client-side" rel="noreferrer" target='_blank'> <button className=" btn capitalize bg-amber-400 hover:bg-amber-600 text-black border-opacity-0 rounded-lg p-2">Client Side</button> </a>
                <a href="https://doctors-portal-d453c.web.app/" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg p-2 capitalize border-opacity-0 text-black">Live Site</button> </a>
                <a href="https://github.com/MuntasirAbid/doctors-portal-server-side" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg p-2 capitalize border-opacity-0 text-black">Server Side</button> </a>

              </div>
            </div>
            <div className="basis-1/3 flex-1 rounded-md border-2 border-grey-800 drop-shadow-2xl">
              <Image

                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={web2} alt=""
              />

              <div className="text-center px-2">
                <h1 className="py-5 text-3xl">E-Commerce</h1>
                <p>
                  E-commerce website where client could buy products. Here i have used React, Firebase for authentication, vanilla Css. and also a protected route system for users.
                  <br />
                  Stack
                </p>
                <p className="pt-5 text-gray-600">React Javascript Vanilla Css</p>
              </div>
              <div className="flex justify-between py-4 px-2">
                <a href="https://github.com/MuntasirAbid/e-commerce-clientSide" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg p-2 capitalize border-opacity-0 text-black">Client Side</button> </a>
                <a href="https://e-commerce-simple-44420.web.app/" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg p-2 capitalize border-opacity-0 text-black">Live Site</button> </a>
                <a href="https://github.com/MuntasirAbid/e-commerce-serverSide" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg p-2 capitalize border-opacity-0 text-black">Server Side</button> </a>

              </div>

            </div>
            <div className="basis-1/3 flex-1 rounded-md border-2 p border-grey-800 drop-shadow-2xl">
              <Image

                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={web3} alt=""

              />

              <div className="text-center px-2">
                <h1 className="py-5 text-3xl">News Portal</h1>
                <p>
                  I have developed this news website for practice purpose. In this website I have implemented google and github login system. I used bootstrap as style component.
                  <br />
                  Stack
                </p>
                <p className="pt-5 text-gray-600">React Javascript Bootstrap</p>
              </div>
              <div className="flex justify-between py-4 px-2 capitalize">
                <a href="https://github.com/MuntasirAbid/news-portal-clientSide" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg p-2 capitalize border-opacity-0 text-black">Client Side</button> </a>
                <a href="https://news-portal-9f7f7.web.app/" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg p-2 capitalize border-opacity-0 text-black">Live Site</button> </a>
                <a href="https://github.com/MuntasirAbid/news-portal-serverSide" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg p-2 capitalize border-opacity-0 text-black">Server Side</button> </a>

              </div>
            </div>
            <div className="basis-1/3 flex-1 rounded-md border-2 border-grey-800 drop-shadow-2xl">
              <Image

                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={web4} alt=""
              />

              <div className="text-center px-2">
                <h1 className="py-5 text-3xl">Car Repair Shop Portal</h1>
                <p>
                  I developed this car repair shop website that sells car parts and fix car engine problems.
                  <br />
                  Stack
                </p>
                <p className="pt-5 text-gray-600">React Javascript TailWind Firebase</p>
              </div>

              <div className="flex justify-between py-4 px-2 ">
                <a href="https://github.com/MuntasirAbid/car-repair-garage-clientSide" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg capitalize p-2 capitalize border-opacity-0 text-black">Client Side</button> </a>
                <a href="https://car-repair-506e2.web.app/" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg capitalize p-2 capitalize border-opacity-0 text-black">Live Site</button> </a>
                <a href="https://github.com/MuntasirAbid/car-repair-garage-serverSide" rel="noreferrer" target='_blank'> <button className="btn bg-amber-400 hover:bg-amber-600 rounded-lg capitalize p-2 capitalize border-opacity-0 text-black">Server Side</button> </a>
              </div>

            </div>

          </div>
        </section>
        <section id="technology" className="text-black dark:text-white ">
          <h1 className="font-burtons text-3xl py-1 ">Technologies</h1>
          <p className="text-2xl dark:text-gray-400 pt-5">I have worked with a range of technologies in the web development world. <br /> From Back-end to design</p>
          <div className="flex justify-between py-5">
            <div>
              <FaReact className="w-8 h-8"></FaReact>
              <h1 className="pb-3 text-2xl">Front-End</h1>
              <div className="dark:text-gray-400">
                <h2>Experience with</h2>
                <p>React.js <br /> Next.js</p>
              </div>
            </div>
            <div>
              <FaDatabase className="w-8 h-8"></FaDatabase>
              <h1 className="pb-3 text-2xl">Back-End</h1>
              <p className="dark:text-gray-400">Experience with <br /> NodeJs <br /> Databases</p>
            </div>
            <div>
              <FaFigma className="w-8 h-8"></FaFigma>
              <h1 className="pb-3 text-2xl">UI/UX</h1>
              <p className="dark:text-gray-400">Learning with <br />tools like Figma</p>
            </div>
          </div>
        </section>
        <section id="about" className="text-black dark:text-white ">
          <h1 className="font-burtons text-3xl py-1 ">About Me</h1>
          <p className="text-2xl dark:text-gray-400 pt-5">I am studying in University of Lodz. I am a final year student in Bachelor of Computer Science. Currently I am doing my thesis based on web application. I've worked with ReactJs,Nextjs, NodeJS, ExpressJS, RESTapi and many more.</p>
        </section>

        <section id="contact">
          <h1 className="normal-case font-burtons text-black text-3xl dark:text-white py-12">Contact</h1>

          <div className="hero">
            <div className="hero-content flex-col">
              <div className="text-center lg:flex gap-96 text-black dark:text-white">
                <p><span className="font-semibold">Call:</span> +48792980810</p>
                <p><span className="font-semibold">Email:</span> Muntasira7@hotmail.com </p>
              </div>
              <div className="card w-full">
                <form ref={form} onSubmit={sendEmail} className="card-body">

                  <div className="form-control">
                    <input type="text" placeholder="Name" name='user_name' className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <input type="email" placeholder="Email Address" name='user_email' required className="input input-bordered" />
                  </div>

                  <div className="form-control">
                    <input type="text" placeholder="Subject" name='subject' className="input input-bordered " />
                  </div>

                  <textarea style={{ height: "136px" }} className="textarea textarea-bordered" placeholder="Your message" name='message' required></textarea>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn bg-gradient-to-r from-cyan-500 text- to-cyan-700 hover:text-amber-500">Sent</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
