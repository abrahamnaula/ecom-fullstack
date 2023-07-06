import React from 'react';

function NewFooter() {
    return (
        <footer>
            <div className="bg-grayBkg flex">
                <div className="w-1/3 flex flex-col font-normal py-2 mb-0.5 mt-0">
                    <p className="font-ngh text-base tracking-wide pl-2 text-xxs text-white mb-0.5 leading-tight">ABOUT & CONTACT</p>
                    <p className="font-ngh text-base tracking-wide pl-2 text-xxs text-white mb-0.5 leading-tight">SHIPPING & RETURNS</p>
                    <p className="font-ngh text-base tracking-wide pl-2 text-xxs text-white mb-0.5 leading-tight">SIZING</p>
                    <p className="font-ngh text-base tracking-wide pl-2 text-xxs text-white mb-0.5 leading-tight">PRIVACY POLICY</p>
                    <p className="font-ngh text-base tracking-wide pl-2 text-xxs text-white mb-0.5 leading-tight">TERMS OF SERVICE</p>
                </div>
                <div className="w-1/3 flex flex-col sm:flex-row justify-end sm:justify-center items-center py-0.5">
                    <a href="https://www.instagram.com/gray_era/" target="_blank" rel="noopener noreferrer" className="font-ngh text-base text-xxs text-white mb-2 sm:mb-0 sm:mr-2">
                        INSTAGRAM
                    </a>
                    <p className="font-ngh text-base text-xxs text-white">TIKTOK</p>
                </div>
            </div>
            <div className="h-10 sm:h-24 bg-gradient-to-r from-metallicLeft to-metallicRight">

            </div>
        </footer>
    );
}

export default NewFooter;
