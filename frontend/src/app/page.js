"use client"

import { useEffect, useState } from 'react';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import AboutImageWithText from "@/app/ui/AboutImageWithText";
import BackgroundHeader from "@/app/ui/BackgroundHeader";

export default function Home() {
    return (
        <div>
            <BackgroundHeader/>
            <section className={"pt-10"}>
                <AboutImageWithText isHomePage={true}/>
            </section>
        </div>
    );
}
