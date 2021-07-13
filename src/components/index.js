import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from './connexion/Login';
import OnBoardMain from './onboard/OnBoardMain';
import ChooseClass from './choose_class/ChooseClass';
import Revision from './revision/Revision';
import Lecture from './suivre_cours/Lecture';
import Information from './informations/Information';
import CoursActivite from './cours_activite/CoursActivite'
import HomePageMain from './homePage/HomePageMain';
import ObjectifPedagogique from './objectif_pedagogique/ObjectifPedagogique';


const Lasylab = () => {
    return(
        <Router>
            <Route exact path="/" component= {OnBoardMain} />
            <Route path = "/login" component = {Login} />
            <Route path = "/choose_class" component={ChooseClass} />
            <Route path= "/revision" component={Revision} />
            <Route path="/lectures" component={Lecture} />
            <Route path = "/information" component={Information} />
            <Route path = "/cours_activite" component={CoursActivite} />
            <Route path = "/home" component={HomePageMain} />
            <Route path = "/opo" component={ObjectifPedagogique} />
        </Router>
    );
};


export default Lasylab;