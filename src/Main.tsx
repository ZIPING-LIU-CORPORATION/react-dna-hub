import { relative } from "path";
import React from "react";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";


export const Main = () => {
  return (
<div data-target="readme-toc.content" className="Box-body px-5 pb-5">
  <article className="markdown-body entry-content container-lg" itemProp="text">
    <h1 tabIndex={-1} dir="auto">
      <a
        id="user-content-genes"
        className="anchor"
        aria-hidden="true"
        href="https://github.com/ZipingL/dna/tree/main#genes"
      >
        <svg
          className="octicon octicon-link"
          viewBox="0 0 16 16"
          version="1.1"
          width={16}
          height={16}
          aria-hidden="true"
        >
          <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z" />
        </svg>
      </a>
      Genes
    </h1>
    <p dir="auto">These are my genes.</p>
    <p dir="auto">
      There's literally nothing special about them, just a plethora of pyramids.
    </p>
    <p dir="auto">
      Our genes don't make us who we are, it's how we transcend our genetic
      programming, that makes us a Human being - one angle of many angles of
      transcendence beyond our selfish (but not self-less) form of existence. Be
      self-preserving, but not self-protective.
    </p>
  </article>
</div>

  
  );
};
