import React from 'react'
import  NivPhoto from '../assets/niv.jpeg'
import Image from "next/image";

function Page() {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-4">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">על עצמי</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                        זוהי עובדה מבוססת שדעתו של הקורא תהיה מוסחת על ידי טקטס קריא כאשר הוא יביט בפריסתו. המטרה בשימוש ב-Lorem Ipsum הוא שיש לו פחות או יותר תפוצה של אותיות, בניגוד למלל '� יסוי � יסוי � יסוי', ונותן חזות קריאה יותר.הרבה הוצאות מחשבים ועורכי דפי אינטרנט משתמשים כיום ב-Lorem Ipsum כטקסט ברירת המחדל שלהם, וחיפוש של 'lorem ipsum' יחשוף אתרים רבים בראשית דרכם.גרסאות רבות נוצרו במהלך השנים, לעתים בשגגה לעיתים במכוון (זריקת בדיחות וכדומה).
                    </p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-1 sm:grid-cols-1 grid-cols-1 lg:gap-1 shadow-lg rounded-md">
                        <div className="p-4 pb-1 flex justify-center flex-col items-center">
                            <Image className="md:block hidden" src={NivPhoto} alt="Niv Photo" width={180}/>
                            <Image  className="md:hidden block" src={NivPhoto} alt="Niv Photo"/>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
