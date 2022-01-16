import React from 'react';

const Generator = (props) => {
    return  <div className="container mt-5">
        <h1 class="text-center text-transform-uppercase font-weight-bold">Random Generator from Movie/Series List</h1>
        <p class="text-center font-weight-bold">Click the button to generate random movie/list and select one from it</p>
        <button onClick={props.generate} type="button" class="btn btn-primary mb-4" id="generate">Click Here</button>
        <div id="main" class="card card-body">
            <h1 class="title text-center"></h1>
            <h1 class="title" id="generator-result"></h1>
        </div>
    </div>
}

export default Generator;