import React from 'react'
import Image from "next/image";
import galLogo from '../assets/logoremovebgpreview.png'
import cinema from '../assets/cinema.jpeg'
function Page() {
    return (
        <section className="bg-gray-900 text-white ">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                    עבודות
                </h2>
                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 ">

                    <blockquote className="rounded-lg bg-gray-100 p-8 ">
                        <div className="flex items-center gap-4">
                            <Image src={galLogo} alt="Gal Logo" className="h-16 w-16 rounded-full object-cover"/>

                            <div>

                                <p className="mt-1 text-lg font-medium text-gray-700">
                                    <a href="https://galpersonaltrainer.netlify.app/" target="_blank">גל פורת מאמן כושר</a>

                                </p>
                            </div>

                        </div>

                        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                            Lorem Ipsum הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות של Lorem Ipsum. ועוד יותר לאחרונה עם פרסום תוכנות המחשב האישי כגון Aldus page maker שמכיל גרסאות של Lorem Ipsum.
                        </p>
                    </blockquote>

                    <blockquote className="rounded-lg bg-gray-100 p-8">
                        <div className="flex items-center gap-4">
                            <Image src={cinema} alt="cinema Logo" className="h-16 w-16 rounded-full object-cover"/>

                            <div>
                                <div className="flex justify-center gap-0.5 text-green-500">

                                </div>

                                <p className="mt-1 text-lg font-medium text-gray-700">
                                    <a href="https://cinemaporat.netlify.app/" target="_blank">עולם הסרטים</a>

                                </p>
                            </div>
                        </div>

                        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                            Lorem Ipsum הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות של Lorem Ipsum. ועוד יותר לאחרונה עם פרסום תוכנות המחשב האישי כגון Aldus page maker שמכיל גרסאות של Lorem Ipsum.
                        </p>
                    </blockquote>


                </div>
            </div>
        </section>


    )
}

export default Page
