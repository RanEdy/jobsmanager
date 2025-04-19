import React from 'react';
import { UserLevel } from '@/entities/UserLevel';

type NavbarProps = {
    level: UserLevel;
    options: string[];
}

"use client";
const Navbar: React.FC<NavbarProps> = ({level, options}) => 
{
    let selected: number = -1;
    return (
        <div className="h-32 p-6 mx-auto shadow-md flex items-center justify-between bg-bluedark-gradient-r">
            {/* Logo Img */}
            <div className="flex-shrink-0 border-red-600 border-2">
                <img className="h-30 w-48" src="/img/iem_icon_white.png"></img>
            </div>

            {/* Option Buttons */}
            <div className="flex-row flex-shrink-0 border-red-600 border-2">
                {
                    level == UserLevel.MASTER ? <>

                    </> : null
                }

                {
                    level == UserLevel.ADMIN ? <>

                    </> : null
                }

{
                    level == UserLevel.STAFF ? <>

                    </> : null
                }
            </div>

            {/* User Info */}
            <div className="flex-shrink-0 border-red-600 border-2">
                <h1>User Info</h1>
            </div>

        </div>
    );
}

export default Navbar;