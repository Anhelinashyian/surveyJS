import React from 'react';
import './App.css';
import {Model, Survey} from "survey-react-ui";
import {surveyJson} from "./model";
import 'survey-core/defaultV2.min.css';
import {DoubleBorderLight} from "survey-core/themes"
import {Typography} from "@mui/material";

function App() {
    const survey = new Model(surveyJson);
    survey.applyTheme(DoubleBorderLight);

    return (
        <>
            <Typography align={'center'} style={{margin: 'auto'}} variant={'h4'}>Patient Registration</Typography>
            <Survey model={survey}/>;
        </>
    )
}

export default App;
