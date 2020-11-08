import React, {useEffect, useState} from 'react'; 

const Article = ({ match }) => {

    const [singleArticle, setSingleArticle] = useState({});

    useEffect(() =>{
        const retrieveSingleArticle = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
            const data = await response.json();
            setSingleArticle(data);
        }
        retrieveSingleArticle();
    }, [match]);


    return(
        <div>
            {
                <div className="center white">
                    <h1>
                        {singleArticle.title}
                    </h1>
                    <p>
                        {singleArticle.body}
                    </p>
                </div>
            }
            
        </div>
    )
}

export default Article;