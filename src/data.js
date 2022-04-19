import React from "react"
import { HiUserGroup } from 'react-icons/hi'
import { FaUserCheck, FaQuestionCircle } from 'react-icons/fa'
import { SiSololearn, SiScikitlearn } from 'react-icons/si'
import { BsBookmarkPlusFill } from 'react-icons/bs'
import { MdFindInPage } from 'react-icons/md'


export const links = [
    {
        'page': 'Online Courses',
        'links': [
            {
                label: 'Group Courses',
                icon: <HiUserGroup />,
                url: '/group-courses'
            },
            {
                label: 'Private Courses',
                icon: <FaUserCheck />,
                url: '/private-courses'
            },
            {
                label: 'Learn more',
                icon: <SiSololearn />,
                url: '/learn-more'
            }
        ]
    },
    {
        'page': 'In Person',
        'links': [
            {
                label: 'Learn more',
                icon: <SiScikitlearn />,
                url: '/learn-more'
            },
            {
                label: 'Book Lessons',
                icon: <BsBookmarkPlusFill />,
                url: '/book-lessons'
            }
        ]
    },
    {
        'page': 'Summer Camps',
        'links': [
            {
                label: 'Learn more',
                icon: <BsBookmarkPlusFill />,
                url: '/learn-more'
            },
            {
                label: 'Find a Camp',
                icon: <MdFindInPage />,
                url: '/find-camp'
            },
            {
                label: 'FAQ',
                icon: <FaQuestionCircle />,
                url: '/faq'
            }
        ]
    },
]