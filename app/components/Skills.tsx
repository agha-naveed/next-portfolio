'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import html from 'public/img/skills-logo/html-logo.svg'
import css from 'public/img/skills-logo/css-logo.svg'
import bootstrap from 'public/img/skills-logo/bootstrap-logo.svg'
import tailwind from 'public/img/skills-logo/tailwind-logo.svg'
import js from 'public/img/skills-logo/javascript-logo.svg'
import ts from 'public/img/skills-logo/typescript.svg'
import react from 'public/img/skills-logo/react.svg'
import next from 'public/img/skills-logo/nextjs.svg'

import express from 'public/img/skills-logo/express.svg'
import node from "public/img/skills-logo/nodejs.svg"

import mongo from "public/img/skills-logo/mongo.svg"
import mysql from "public/img/skills-logo/mysql.svg"

import cpp from "public/img/skills-logo/cpp.svg"
import java from "public/img/skills-logo/java.svg"
import python from "public/img/skills-logo/python.svg"

import wordpress from "public/img/skills-logo/wordpress.svg"
import photoshop from "public/img/skills-logo/photoshop.svg"

import numpy from "public/img/skills-logo/numpy.svg"
import tensorflow from "public/img/skills-logo/tensorflow.svg"

import git from "public/img/skills-logo/git.svg"
import github from "public/img/skills-logo/github.svg"
import npm from "public/img/skills-logo/npm.svg"


export default function Skills() {
    const [option, setOption] = useState("frontend")

    return (
        <div className='w-full h-full p-sec overflow-hidden bg-main-dark-clr relative -top-1'>
            <div className='container !mx-auto justify-items-center'>
                <h2 className='text-5xl font-semibold text-white text-center'>SKILLS</h2>

                <div className="flex sm:flex-row flex-col gap-3 justify-center !mt-12 !px-10 w-full">
                    <div className="text-white text-start flex sm:flex-col flex-row flex-wrap sm:gap-1 sm:w-65 w-full gap-x-10">
                        <button className="border-none outline-none !py-[13px] sm:w-full w-fit hover:text-main-skin-clr transition-all cursor-pointer text-xl text-start" onClick={(e) => setOption("frontend")}>Frontend</button>
                        <button className="border-none outline-none !py-[13px] sm:w-full w-fit hover:text-main-skin-clr transition-all cursor-pointer text-xl text-start" onClick={(e) => setOption("backend")}>Backend</button>
                        <button className="border-none outline-none !py-[13px] sm:w-full w-fit hover:text-main-skin-clr transition-all cursor-pointer text-xl text-start" onClick={(e) => setOption("database")}>Database</button>
                        <button className="border-none outline-none !py-[13px] sm:w-full w-fit hover:text-main-skin-clr transition-all cursor-pointer text-xl text-start" onClick={(e) => setOption("programming")}>Programming</button>
                        <button className="border-none outline-none !py-[13px] sm:w-full w-fit hover:text-main-skin-clr transition-all cursor-pointer text-xl text-start" onClick={(e) => setOption("designing")}>Designing</button>
                        <button className="border-none outline-none !py-[13px] sm:w-full w-fit hover:text-main-skin-clr transition-all cursor-pointer text-xl text-start" onClick={(e) => setOption("ai")}>AI</button>
                        <button className="border-none outline-none !py-[13px] sm:w-full w-fit hover:text-main-skin-clr transition-all cursor-pointer text-xl text-start" onClick={(e) => setOption("tools")}>Tools</button>
                    </div>

                    <div className="sm:w-1 sm:h-100 w-full h-1 bg-main-skin-clr"></div>

                    <div className="sm:w-180 w-full h-[80vh] text-white relative justify-items-center">
                        <span className="font-semibold text-xl relative md:left-[65px] sm:left-[34px] sm:top-0 top-4 left-2 capitalize text-center">{option}</span>
                        <div className={`transition-all ${option == "frontend" ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"} grid sm:grid-cols-4 grid-cols-3 justify-items-center gap-5 sm:w-110 w-full !pt-12 sm:!pl-10 absolute lg:left-1/3 md:left-[45%] left-1/2 -translate-x-1/2 sm:top-0 top-8`}>
                            <div className="flex flex-col w-fit gap-1 items-center justify-between">
                                <Image src={html} className="w-10" alt="" />
                                <label htmlFor="">HTML</label>
                            </div>
                            <div className="flex flex-col gap-1 w-fit items-center justify-between">
                                <Image src={css} className="w-10" alt="" />
                                <label htmlFor="">CSS</label>
                            </div>
                            <div className="flex flex-col gap-1 w-fit items-center justify-between">
                                <Image src={bootstrap} className="w-10" alt="" />
                                <label htmlFor="">Bootstrap</label>
                            </div>
                            <div className="flex flex-col gap-1 w-fit items-center justify-between">
                                <Image src={tailwind} className="w-10" alt="" />
                                <label htmlFor="">Tailwind</label>
                            </div>
                            <div className="flex flex-col gap-1 w-fit items-center justify-between">
                                <Image src={js} className="w-10" alt="" />
                                <label htmlFor="">JavaScript</label>
                            </div>
                            <div className="flex flex-col gap-1 w-fit items-center justify-between">
                                <Image src={ts} className="w-10" alt="" />
                                <label htmlFor="">TypeScript</label>
                            </div>
                            <div className="flex flex-col gap-1 w-fit items-center justify-between">
                                <Image src={react} className="w-10" alt="" />
                                <label htmlFor="">React Js</label>
                            </div>
                            <div className="flex flex-col gap-1 w-fit items-center justify-between">
                                <Image src={next} className="w-10" alt="" />
                                <label htmlFor="">Next Js</label>
                            </div>
                        </div>

                        <div className={`transition-all ${option == "backend" ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"} grid sm:grid-cols-4 grid-cols-3 justify-items-center gap-5 sm:w-110 w-full !pt-12 sm:!pl-10 absolute lg:left-1/3 md:left-[45%] left-1/2 -translate-x-1/2 sm:top-0 top-8`}>
                            
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={express} className="w-10" alt="" />
                                <label htmlFor="">Express Js</label>
                            </div>
                            
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={node} className="w-10" alt="" />
                                <label htmlFor="">Node Js</label>
                            </div>
                        </div>

                        <div className={`transition-all ${option == "database" ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"} grid sm:grid-cols-4 grid-cols-3 justify-items-center gap-5 sm:w-110 w-full !pt-12 sm:!pl-10 absolute lg:left-1/3 md:left-[45%] left-1/2 -translate-x-1/2 sm:top-0 top-8`}>
                            
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={mysql} className="w-10" alt="" />
                                <label htmlFor="">MySQL</label>
                            </div>
                            
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={mongo} className="w-10" alt="" />
                                <label htmlFor="">MongoDB</label>
                            </div>
                        </div>

                        <div className={`transition-all ${option == "programming" ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"} grid sm:grid-cols-4 grid-cols-3 justify-items-center gap-5 sm:w-110 w-full !pt-12 sm:!pl-10 absolute lg:left-1/3 md:left-[45%] left-1/2 -translate-x-1/2 sm:top-0 top-8`}>
                            
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={cpp} className="w-10" alt="" />
                                <label htmlFor="">C++</label>
                            </div>

                            <div className="flex flex-col gap-1 items-center">
                                <Image src={java} className="w-10" alt="" />
                                <label htmlFor="">Java</label>
                            </div>
                            
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={python} className="w-10" alt="" />
                                <label htmlFor="">Python</label>
                            </div>
                        </div>

                        <div className={`transition-all ${option == "designing" ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"} grid sm:grid-cols-4 grid-cols-3 justify-items-center gap-5 sm:w-110 w-full !pt-12 sm:!pl-10 absolute lg:left-1/3 md:left-[45%] left-1/2 -translate-x-1/2 sm:top-0 top-8`}>
                            
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={wordpress} className="w-10" alt="" />
                                <label htmlFor="">Wordpress</label>
                            </div>

                            <div className="flex flex-col gap-1 items-center">
                                <Image src={photoshop} className="w-10" alt="" />
                                <label htmlFor="">Photoshop</label>
                            </div>
                            
                        </div>

                        <div className={`transition-all ${option == "ai" ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"} grid sm:grid-cols-4 grid-cols-3 justify-items-center gap-5 sm:w-110 w-full !pt-12 sm:!pl-10 absolute lg:left-1/3 md:left-[45%] left-1/2 -translate-x-1/2 sm:top-0 top-8`}>
                            
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={numpy} className="w-10" alt="" />
                                <label htmlFor="">NumPy</label>
                            </div>

                            <div className="flex flex-col gap-1 items-center">
                                <Image src={tensorflow} className="w-10" alt="" />
                                <label htmlFor="">Tensorflow</label>
                            </div>
                            
                        </div>

                        <div className={`transition-all ${option == "tools" ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"} grid sm:grid-cols-4 grid-cols-3 justify-items-center gap-5 sm:w-110 w-full !pt-12 sm:!pl-10 absolute lg:left-1/3 md:left-[45%] left-1/2 -translate-x-1/2 sm:top-0 top-8`}>
                            
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={npm} className="w-10" alt="" />
                                <label htmlFor="">NPM</label>
                            </div>

                            <div className="flex flex-col gap-1 items-center">
                                <Image src={git} className="w-10" alt="" />
                                <label htmlFor="">Git</label>
                            </div>

                            <div className="flex flex-col gap-1 items-center">
                                <Image src={github} className="w-10" alt="" />
                                <label htmlFor="">GitHub</label>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}