import React  from "react";
// import { Linking } from 'react-native';

function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, my Name is Fredrick Mwenda
                        <br className="hidden lg:inline-block"/> A Passionate Software Developer
                    </h1>

                    <p className="mb-8 leading-relaxed">
                        As a software developer i have worked on diverse projects:
                        frontend, backend and mobile applications. My personal drive is to offfers solution to
                        societal problems in a technological way. Reachout, to turn that bright idea into a real world project.
                    </p>
                    <div className="flex justify-center">
                        {/* /Use Linking to send  email and  */}
                        <a href="tel:+254-713-723-353" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            +254713723353
                        </a>

                        <a href="mailto:mwendafredrick31@gmail.com" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            mwendafredrick31@gmail.com
                        </a>
                        {/* <Button className=""  onPress={() => Linking.openURL(`tel:+254-713-723-353`) }
                            title="0713723353" 
                        /> */}

                        
                        {/* <Button className=""  onPress={() => Linking.openURL('mailto:mwendafredrick@gmail.com') }
                            title="mwendafredrick@gmail.com" 
                        /> */}
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="about-picture"
                        src="./basamiy.jpg"
                    />
                </div>
            </div>
        </section>
    )
}

export default About;