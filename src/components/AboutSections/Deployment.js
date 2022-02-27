import React from "react";
import "./AboutSections.scss";

const Deployment = () => (
  <>
    <div>For deployment of this project we will use GitHub and IBM Cloud.</div>
    <div>
      To be able to deploy this project we will need a public repository on
      GitHub. Here we will be able to do any further changes.
    </div>
    <div>
      Second thing that we will use is Cloud Foundry Apps, where we will host
      our application and will have a public URL accessible by everyone.
    </div>
    <div>
      Last service that we will use is Continuous Delivery, which is a pipeline
      between GitHub and Cloud Foundry Apps. Everytime when we push a new code
      into our GitHub repository, Continous Delviery will trigger the pipeline
      and deploy the latest code into Cloud Foundry App. This is a time-saver
      process because we will no longer need to manually deploy our code. Also,
      this pipeline can be set to get the latest commits from a single branch,
      which by default will be main. If we want to do changes that should not be
      yet available in production, we will create other branches and push there
      the code.
    </div>
  </>
);

export default Deployment;
