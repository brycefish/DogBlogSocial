import React from "react";

const HomePage = () => {
  return (
    <>
      <div id="home" class="home-into container p-4">
        <h1>All Dogs Welcome</h1>
        <p>
          Welcome to this Website! I like Dogs. Proin congue ligula id risus
          posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada
          in massa tincidunt egestas. Nam consectetur varius turpis, non porta
          arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut
          eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est
          luctus, at sodales purus euismod.
        </p>
      </div>
    </>
  );
};

export default HomePage;

/*
//import routing hook
import { useParams } from "react-router-dom";
// import NotFoundPage from './NotFoundPage';
// import pittyProfiles from './PittyProfiles';

const HomePage = () => {
  //object with keys for url parameters
  const params = useParams();
  // const { articleId } = params;
  // const articleID = params.articleId
  // 4:37 / 9:29

  /*
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    );
}

  */
