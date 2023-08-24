import React from 'react'
import { clickProfile, yourOrg, newOrg, choosePlan, invite, setupOrg, people, selectUser, memberSelected, chooseAction, settings, deleteOrg } from '../images'

const Tutorial = () => {
    return (
        <div>
            {/* Sign IN */}
            <div className='flex'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 1</p>
            </div>
            <h2 className='text-[lightblue]'>Sign into GitHub</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Go to <a className='text-[lightblue]' href="https://Github.com">GitHub</a></p>
            <p className='text-white'>Click <b>Sign In</b>, enter your account credentials, and click <b>Sign In</b>.</p>

            {/* CLICK ON PROFILE PICTURE */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 2</p>
            </div>
            <h2 className='text-[lightblue]'>Click on your Profile Picture</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Click on your Profile Picture in the top right.</p>
            <img src={clickProfile} alt="Click On Profile" />

            {/* CLICK ON ORGANIZATIONS */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 3</p>
            </div>
            <h2 className='text-[lightblue]'>Your Organizations</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Click on <b>Your Organizations</b></p>
            <img src={yourOrg} alt="Your Organization" />

            {/* CLICK ON NEW ORGANIZATION */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 4</p>
            </div>
            <h2 className='text-[lightblue]'>New Organization</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Click on <b>New Organization</b></p>
            <img src={newOrg} alt="New Organization" />

            {/* CHOOSE PLAN */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 5</p>
            </div>
            <h2 className='text-[lightblue]'>Choose Plan</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Choose which <b>plan</b> you wanna go with.</p>
            <p className='text-white'>For this tutorial I'll go with the free <b>plan</b></p>
            <img src={choosePlan} alt="Choose Plan" />

            {/* SETUP ORGANIZATION */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 6</p>
            </div>
            <h2 className='text-[lightblue]'>Setup</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>On this page you'll need to choose a name for your <b>Organization</b>. Aswell as a contact email.</p>
            <img src={setupOrg} alt="Setup Organization" />

            {/* INVITE */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 7</p>
            </div>
            <h2 className='text-[lightblue]'>Invite</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>On this page you can <b>invite</b> people to join your Organization.</p>
            <img src={invite} alt="Invite" />

            {/* GO TO PEOPLE */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 8</p>
            </div>
            <h2 className='text-[lightblue]'>Go to People</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Press on the <b>People</b> tab</p>
            <img src={people} alt="People" />

            {/* SELECT USER */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 9</p>
            </div>
            <h2 className='text-[lightblue]'>Select User</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Press on the <b>checkbox</b> inorder to mark the person.</p>
            <img src={selectUser} alt="Select User" />

            {/* MEMBER SELECTED */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 10</p>
            </div>
            <h2 className='text-[lightblue]'>Member Selected</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Press on <b>Member Selected</b> inorder to trigger a dropdown.</p>
            <img src={memberSelected} alt="Member Selected" />

            {/* CHOOSE ACTION */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 11</p>
            </div>
            <h2 className='text-[lightblue]'>Choose Action</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Choose which action you want to use.</p>
            <img src={chooseAction} alt="Choose Action" />

            {/* ORGANIZATIONS COMPARED TO REPOSITORIES */}
            <h2 className='text-[lightblue] mt-12'>Organizations compared to Repositories</h2>
            <p className='border-b-[1px] mt-4 mb-4'></p>
            <h3 className='font-bold text-white mb-2'>Repositories</h3>
            <ul className='text-white'>
                <li className='list-disc'>
                A repositry, often called a "repo," is a place where you can store a collection of files, code, documentation, and other resources related to a specific project.
                </li>
                <li className='list-disc'>
                Each repository has its own version control history, which allows you to track changes, collaborate with others, and manage the development of your project over time.
                </li>
                <li className='list-disc'>
                Repositories can be public, meaning anyone can view and clone the repository, or private, which restricts access to only those who have been granted permission.
                </li>
                <li className='list-disc'>
                They can have multiple contributors who can push changes, create branches, and mange the codebase collaboratively.
                </li>
                <li className='list-disc'>
                Issues and pull requests can be associated with a repository, providing a way to track bugs, feature requests, and changes that need to be reviewed and merged.
                </li>
            </ul>
            <h3 className='font-bold text-white mt-4 mb-2'>Organizations</h3>
            <ul className='text-white'>
                <li className='list-disc'>
                An organization on Github is a higher-level structure that allows you to manage multiple repositories and users under a single umbrella.
                </li>
                <li className='list-disc'>
                Organizations are typically used by teams, companies, or larger open-source projects to centralize their code and collaboration efforts.
                </li>
                <li className='list-disc'>
                Within an organization, you can create and manage repositories, control access permissions for users and teams, and set up various integrations and workflows.
                </li>
                <li className='list-disc'>
                Organizations provide a more organized way to manage access, enforce policies, and ensure consistent branding and visibility across multiple projects.
                </li>
                <li className='list-disc'>
                Billing and subscription management for things like private repositories and additional features are usually handles at the organization level.
                </li>
                <li className='list-disc'>
                Organizations can have public and private repositores, just like individual users.
                </li>
            </ul>

            {/* SETTINGS */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 12</p>
            </div>
            <h2 className='text-[lightblue]'>Settings</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Click on <b>Settings</b></p>
            <img src={settings} alt="Settings" />

            {/* DELETE ORGANIZATIONS */}
            <div className='flex mt-12'>
                <div className='bg-[grey] w-6 h-6 rounded-full mr-4'></div>
                <p className='font-bold uppercase text-[grey]'>Step 13</p>
            </div>
            <h2 className='text-[lightblue]'>Delete Organization</h2>
            <p className='border-b-[1px] mt-4 mb-2'></p>
            <p className='text-white'>Scroll to the bottom and click on <b>Delete this Organization</b></p>
            <img src={deleteOrg} alt="Delete Organization" />
        </div>


    )
}

export default Tutorial
