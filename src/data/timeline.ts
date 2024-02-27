import { TimeLineType } from "@/types";
import React from "react";

export const timeline: TimeLineType[] = [
    {
        title: 'Blog App',
        descriptions: [`
        A website that presents articles in a simple format, using Markdown to make adding and writing articles
        easy, with different themes to keep the user engaged. Uses React.js for speed and TypeScript to improve
        code quality.`],
        date: 'December 2023',
        icon: '/icons/reactjs.svg',
        links: [
            {
                title: 'GitHub Repo',
                url: 'https://github.com/m7md0a/blog-app-react'
            },
            {
                title: 'Live Preview',
                url: 'https://react-blog2.netlify.app/'
            },
        ]
    },
    {
        title: 'Email Services',
        descriptions: [`A website It provides the user with a temporary, password-protected, real email that can be accessed at
        any time via a login page.`,
    `On the new user registration page there is a button to generate a random account and users can also create
    a manual account.`, `Within the website, the email and password are displayed to ensure users don’t forget them, and can be
    copied to a secure location`],
        date: 'November 2023',
        icon: '/icons/reactjs.svg',
        links: [
            {
                title: 'GitHub Repo',
                url: 'https://github.com/m7md0a/email-services'
            },
            {
                title: 'Live Preview',
                url: 'https://email-servicess.vercel.app/'
            },
        ]
    },
    {
        title: 'learn web development',
        descriptions: [`I started learning programming and then programming projects that can be viewed`],
        date: 'March 2019',
        icon: '/icons/javascript.svg',
        links: [
            {
                title: 'My Resume',
                url: 'https://drive.google.com/file/d/14CzukKHHavCY8o83LZ7jKzIjJH4C3S1b/view'
            }
        ]
    },
    {
        title: 'Business Administration.',
        descriptions: [`In 2018 I started studying administrative sciences in 2022 I got a bachelor of business administration.`],
        date: 'June 2022',
        icon: '/icons/cap.svg'
    }
]