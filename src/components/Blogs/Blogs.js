import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-2xl'>What is the purpose of context api?</h2>
            <p className='text-xl mt-2'>Ans: Context api is a react structure.We use context api to avoid and solving Props drilling.When we want to share a data from a parent to a child component we have to declare a context api outside of  the parent component and export it .And we keep all child compoent inside the context api. Then we receive it from any child component by using useContext() hooks.Context api is easier the data passing system in react.</p>
            <h2 className='text-2xl mt-10'>What is semantic tag?</h2>
            <p className='text-xl mt-2'>Ans: The html semantic tags are not only used for presentation but also semantic tags are provide meaning to an html page.Semantic tags are  defining different sections and layout of a web pages very properly and in a better way.It makes html more comprehensible and reasonable.Semantic tags are clearly communicated its meaning to both  the browser and the developer.Some examples of semantic tags are: header,nav,section,footer,article and aside.  </p>
        </div>
    );
};

export default Blogs;