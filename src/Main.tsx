import { relative } from "path";
import React from "react";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";


export const Main = () => {
  return (
<main id="js-repo-pjax-container">
  <div
    id="repository-container-header"
    className="pt-3 hide-full-screen"
    style={{ backgroundColor: "var(--color-page-header-bg)" }}
    data-turbo-replace=""
  >
    <div
      className="d-flex flex-wrap flex-justify-end mb-3 px-3 px-md-4 px-lg-5"
      style={{ gap: "1rem" }}
    >
      <div className="flex-auto min-width-0 width-fit mr-3">
        <div className="d-flex flex-wrap flex-items-center wb-break-word f3 text-normal">
          <svg
            aria-hidden="true"
            height={16}
            viewBox="0 0 16 16"
            version="1.1"
            width={16}
            data-view-component="true"
            className="octicon octicon-repo color-fg-muted mr-2"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
          </svg>
          <span className="author flex-self-stretch" itemProp="author">
            <a
              className="url fn"
              rel="author"
              data-hovercard-type="user"
              data-hovercard-url="/users/ZipingL/hovercard"
              data-octo-click="hovercard-link-click"
              data-octo-dimensions="link_type:self"
              href="https://github.com/ZipingL"
            >
              ZipingL
            </a>
          </span>
          <span className="mx-1 flex-self-stretch color-fg-muted">/</span>
          <strong itemProp="name" className="mr-2 flex-self-stretch">
            <a
              data-pjax="#repo-content-pjax-container"
              data-turbo-frame="repo-content-turbo-frame"
              href="https://github.com/ZipingL/dna"
            >
              dna
            </a>
          </strong>
          <span />
          <span className="Label Label--secondary v-align-middle mr-1">
            Public
          </span>
        </div>
      </div>
      <div id="repository-details-container" data-turbo-replace="">
        <ul
          className="pagehead-actions flex-shrink-0 d-none d-md-inline"
          style={{ padding: "2px 0" }}
        >
          <li>
            <a
              href="https://github.com/login?return_to=%2FZipingL%2Fdna"
              rel="nofollow"
              data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"notification subscription menu watch","repository_id":null,"auth_type":"LOG_IN","originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
              data-hydro-click-hmac="6af082c383949d6bb1c6f1f88f6dd42adc7065113a8fcfeb7902ddfb80ed6b82"
              aria-label="You must be signed in to change notification settings"
              data-view-component="true"
              className="tooltipped tooltipped-s btn-sm btn"
            >
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
                className="octicon octicon-bell mr-2"
              >
                <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z" />
              </svg>
              Notifications
            </a>
          </li>
          <li>
            <a
              icon="repo-forked"
              id="fork-button"
              href="https://github.com/login?return_to=%2FZipingL%2Fdna"
              rel="nofollow"
              data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"repo details fork button","repository_id":488696119,"auth_type":"LOG_IN","originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
              data-hydro-click-hmac="bb8cf937f1d1dfc432a91879babdde0696a4262141077ea527e3dc1a5368a31e"
              data-view-component="true"
              className="btn-sm btn"
            >
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
                className="octicon octicon-repo-forked mr-2"
              >
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
              </svg>
              Fork
              <span
                id="repo-network-counter"
                data-pjax-replace="true"
                data-turbo-replace="true"
                title={1}
                data-view-component="true"
                className="Counter"
              >
                1
              </span>
            </a>
          </li>
          <li>
            <div data-view-component="true" className="BtnGroup d-flex">
              <a
                href="https://github.com/login?return_to=%2FZipingL%2Fdna"
                rel="nofollow"
                data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"star button","repository_id":488696119,"auth_type":"LOG_IN","originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                data-hydro-click-hmac="278c94aca86557a1fa4976e9330fd94e1be2da82632ad98e9d4363aba3023b10"
                aria-label="You must be signed in to star a repository"
                data-view-component="true"
                className="tooltipped tooltipped-s btn-sm btn BtnGroup-item"
              >
                <svg
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                  className="octicon octicon-star v-align-text-bottom d-inline-block mr-2"
                >
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
                </svg>
                <span data-view-component="true" className="d-inline">
                  Star
                </span>
                <span
                  id="repo-stars-counter-star"
                  aria-label="2 users starred this repository"
                  data-singular-suffix="user starred this repository"
                  data-plural-suffix="users starred this repository"
                  data-turbo-replace="true"
                  title={2}
                  data-view-component="true"
                  className="Counter js-social-count"
                >
                  2
                </span>
              </a>
              <button
                disabled="disabled"
                aria-label="You must be signed in to add this repository to a list"
                type="button"
                data-view-component="true"
                className="btn-sm btn BtnGroup-item px-2"
              >
                <svg
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                  className="octicon octicon-triangle-down"
                >
                  <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="responsive-meta-container" data-turbo-replace="">
      <div className="d-block d-md-none mb-2 px-3 px-md-4 px-lg-5">
        <p className="f4 mb-3">My DNA</p>
        <div className="mb-3">
          <a
            className="Link--secondary no-underline mr-3"
            href="https://github.com/ZipingL/dna/stargazers"
          >
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              data-view-component="true"
              className="octicon octicon-star mr-1"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
            </svg>
            <span className="text-bold">2</span>
            stars
          </a>
          <a
            className="Link--secondary no-underline mr-3"
            href="https://github.com/ZipingL/dna/forks"
          >
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              data-view-component="true"
              className="octicon octicon-repo-forked mr-1"
            >
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
            </svg>
            <span className="text-bold">1</span>
            fork
          </a>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <div className="flex-1">
            <div data-view-component="true" className="BtnGroup d-flex">
              <a
                href="https://github.com/login?return_to=%2FZipingL%2Fdna"
                rel="nofollow"
                data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"star button","repository_id":488696119,"auth_type":"LOG_IN","originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                data-hydro-click-hmac="278c94aca86557a1fa4976e9330fd94e1be2da82632ad98e9d4363aba3023b10"
                aria-label="You must be signed in to star a repository"
                data-view-component="true"
                className="tooltipped tooltipped-s btn-sm btn btn-block BtnGroup-item"
              >
                <svg
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                  className="octicon octicon-star v-align-text-bottom d-inline-block mr-2"
                >
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
                </svg>
                <span data-view-component="true" className="d-inline">
                  Star
                </span>
              </a>
              <button
                disabled="disabled"
                aria-label="You must be signed in to add this repository to a list"
                type="button"
                data-view-component="true"
                className="btn-sm btn BtnGroup-item px-2"
              >
                <svg
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                  className="octicon octicon-triangle-down"
                >
                  <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1">
            <a
              href="https://github.com/login?return_to=%2FZipingL%2Fdna"
              rel="nofollow"
              data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"notification subscription menu watch","repository_id":null,"auth_type":"LOG_IN","originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
              data-hydro-click-hmac="6af082c383949d6bb1c6f1f88f6dd42adc7065113a8fcfeb7902ddfb80ed6b82"
              aria-label="You must be signed in to change notification settings"
              data-view-component="true"
              className="tooltipped tooltipped-s btn-sm btn btn-block"
            >
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
                className="octicon octicon-bell mr-2"
              >
                <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z" />
              </svg>
              Notifications
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav
      data-pjax="#js-repo-pjax-container"
      aria-label="Repository"
      data-view-component="true"
      className="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5"
    >
      <ul
        data-view-component="true"
        className="UnderlineNav-body list-style-none"
      >
        <li data-view-component="true" className="d-inline-flex">
          <a
            id="code-tab"
            href="https://github.com/ZipingL/dna/tree/main"
            data-tab-item="i0code-tab"
            data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /ZipingL/dna/tree/main"
            data-pjax="#repo-content-pjax-container"
            data-turbo-frame="repo-content-turbo-frame"
            data-hotkey="g c"
            data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Code","target":"UNDERLINE_NAV.TAB"}'
            aria-current="page"
            data-view-component="true"
            className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected"
          >
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              data-view-component="true"
              className="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline"
            >
              <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z" />
            </svg>
            <span data-content="Code">Code</span>
            <span
              id="code-repo-tab-count"
              data-pjax-replace=""
              data-turbo-replace=""
              title="Not available"
              data-view-component="true"
              className="Counter"
            />
          </a>
        </li>
        <li data-view-component="true" className="d-inline-flex">
          <a
            id="issues-tab"
            href="https://github.com/ZipingL/dna/issues"
            data-tab-item="i1issues-tab"
            data-selected-links="repo_issues repo_labels repo_milestones /ZipingL/dna/issues"
            data-pjax="#repo-content-pjax-container"
            data-turbo-frame="repo-content-turbo-frame"
            data-hotkey="g i"
            data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Issues","target":"UNDERLINE_NAV.TAB"}'
            data-view-component="true"
            className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
          >
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              data-view-component="true"
              className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
            </svg>
            <span data-content="Issues">Issues</span>
            <span
              id="issues-repo-tab-count"
              data-pjax-replace=""
              data-turbo-replace=""
              title={0}
              hidden="hidden"
              data-view-component="true"
              className="Counter"
            >
              0
            </span>
          </a>
        </li>
        <li data-view-component="true" className="d-inline-flex">
          <a
            id="pull-requests-tab"
            href="https://github.com/ZipingL/dna/pulls"
            data-tab-item="i2pull-requests-tab"
            data-selected-links="repo_pulls checks /ZipingL/dna/pulls"
            data-pjax="#repo-content-pjax-container"
            data-turbo-frame="repo-content-turbo-frame"
            data-hotkey="g p"
            data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Pull requests","target":"UNDERLINE_NAV.TAB"}'
            data-view-component="true"
            className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
          >
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              data-view-component="true"
              className="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline"
            >
              <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
            </svg>
            <span data-content="Pull requests">Pull requests</span>
            <span
              id="pull-requests-repo-tab-count"
              data-pjax-replace=""
              data-turbo-replace=""
              title={0}
              hidden="hidden"
              data-view-component="true"
              className="Counter"
            >
              0
            </span>
          </a>
        </li>
        <li data-view-component="true" className="d-inline-flex">
          <a
            id="actions-tab"
            href="https://github.com/ZipingL/dna/actions"
            data-tab-item="i3actions-tab"
            data-selected-links="repo_actions /ZipingL/dna/actions"
            data-pjax="#repo-content-pjax-container"
            data-turbo-frame="repo-content-turbo-frame"
            data-hotkey="g a"
            data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Actions","target":"UNDERLINE_NAV.TAB"}'
            data-view-component="true"
            className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
          >
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              data-view-component="true"
              className="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z" />
            </svg>
            <span data-content="Actions">Actions</span>
            <span
              id="actions-repo-tab-count"
              data-pjax-replace=""
              data-turbo-replace=""
              title="Not available"
              data-view-component="true"
              className="Counter"
            />
          </a>
        </li>
        <li data-view-component="true" className="d-inline-flex">
          <a
            id="projects-tab"
            href="https://github.com/ZipingL/dna/projects"
            data-tab-item="i4projects-tab"
            data-selected-links="repo_projects new_repo_project repo_project /ZipingL/dna/projects"
            data-pjax="#repo-content-pjax-container"
            data-turbo-frame="repo-content-turbo-frame"
            data-hotkey="g b"
            data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Projects","target":"UNDERLINE_NAV.TAB"}'
            data-view-component="true"
            className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
          >
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              data-view-component="true"
              className="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline"
            >
              <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z" />
            </svg>
            <span data-content="Projects">Projects</span>
            <span
              id="projects-repo-tab-count"
              data-pjax-replace=""
              data-turbo-replace=""
              title={0}
              hidden="hidden"
              data-view-component="true"
              className="Counter"
            >
              0
            </span>
          </a>
        </li>
        <li data-view-component="true" className="d-inline-flex">
          <a
            id="security-tab"
            href="https://github.com/ZipingL/dna/security"
            data-tab-item="i5security-tab"
            data-selected-links="security overview alerts policy token_scanning code_scanning /ZipingL/dna/security"
            data-pjax="#repo-content-pjax-container"
            data-turbo-frame="repo-content-turbo-frame"
            data-hotkey="g s"
            data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Security","target":"UNDERLINE_NAV.TAB"}'
            data-view-component="true"
            className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
          >
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              data-view-component="true"
              className="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline"
            >
              <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
            </svg>
            <span data-content="Security">Security</span>
          </a>
        </li>
        <li data-view-component="true" className="d-inline-flex">
          <a
            id="insights-tab"
            href="https://github.com/ZipingL/dna/pulse"
            data-tab-item="i6insights-tab"
            data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /ZipingL/dna/pulse"
            data-pjax="#repo-content-pjax-container"
            data-turbo-frame="repo-content-turbo-frame"
            data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Insights","target":"UNDERLINE_NAV.TAB"}'
            data-view-component="true"
            className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
          >
            <svg
              aria-hidden="true"
              height={16}
              viewBox="0 0 16 16"
              version="1.1"
              width={16}
              data-view-component="true"
              className="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline"
            >
              <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z" />
            </svg>
            <span data-content="Insights">Insights</span>
            <span
              id="insights-repo-tab-count"
              data-pjax-replace=""
              data-turbo-replace=""
              title="Not available"
              data-view-component="true"
              className="Counter"
            />
          </a>
        </li>
      </ul>
      <div
        style={{ visibility: "hidden" }}
        data-view-component="true"
        className="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0"
      >
        <details
          data-view-component="true"
          className="details-overlay details-reset position-relative"
        >
          <summary
            role="button"
            data-view-component="true"
            aria-haspopup="menu"
          >
            <div className="UnderlineNav-item mr-0 border-0">
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
                className="octicon octicon-kebab-horizontal"
              >
                <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              </svg>
              <span className="sr-only">More</span>
            </div>
          </summary>
          <details-menu
            role="menu"
            data-view-component="true"
            className="dropdown-menu dropdown-menu-sw"
            data-focus-trap="active"
          >
            <span className="sentinel" tabIndex={0} aria-hidden="true" />
            <ul>
              <li data-menu-item="i0code-tab" hidden="">
                <a
                  role="menuitem"
                  className="js-selected-navigation-item selected dropdown-item"
                  aria-current="page"
                  data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /ZipingL/dna/tree/main"
                  href="https://github.com/ZipingL/dna/tree/main"
                >
                  Code
                </a>
              </li>
              <li data-menu-item="i1issues-tab" hidden="">
                <a
                  role="menuitem"
                  className="js-selected-navigation-item dropdown-item"
                  data-selected-links="repo_issues repo_labels repo_milestones /ZipingL/dna/issues"
                  href="https://github.com/ZipingL/dna/issues"
                >
                  Issues
                </a>
              </li>
              <li data-menu-item="i2pull-requests-tab" hidden="">
                <a
                  role="menuitem"
                  className="js-selected-navigation-item dropdown-item"
                  data-selected-links="repo_pulls checks /ZipingL/dna/pulls"
                  href="https://github.com/ZipingL/dna/pulls"
                >
                  Pull requests
                </a>
              </li>
              <li data-menu-item="i3actions-tab" hidden="">
                <a
                  role="menuitem"
                  className="js-selected-navigation-item dropdown-item"
                  data-selected-links="repo_actions /ZipingL/dna/actions"
                  href="https://github.com/ZipingL/dna/actions"
                >
                  Actions
                </a>
              </li>
              <li data-menu-item="i4projects-tab" hidden="">
                <a
                  role="menuitem"
                  className="js-selected-navigation-item dropdown-item"
                  data-selected-links="repo_projects new_repo_project repo_project /ZipingL/dna/projects"
                  href="https://github.com/ZipingL/dna/projects"
                >
                  Projects
                </a>
              </li>
              <li data-menu-item="i5security-tab" hidden="">
                <a
                  role="menuitem"
                  className="js-selected-navigation-item dropdown-item"
                  data-selected-links="security overview alerts policy token_scanning code_scanning /ZipingL/dna/security"
                  href="https://github.com/ZipingL/dna/security"
                >
                  Security
                </a>
              </li>
              <li data-menu-item="i6insights-tab" hidden="">
                <a
                  role="menuitem"
                  className="js-selected-navigation-item dropdown-item"
                  data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /ZipingL/dna/pulse"
                  href="https://github.com/ZipingL/dna/pulse"
                >
                  Insights
                </a>
              </li>
            </ul>
            <span className="sentinel" tabIndex={0} aria-hidden="true" />
          </details-menu>
        </details>
      </div>
    </nav>
  </div>
  <turbo-frame
    id="repo-content-turbo-frame"
    target="_top"
    data-turbo-action="advance"
    className=""
  >
    <div id="repo-content-pjax-container" className="repository-content">
      <h1 className="sr-only">ZipingL/dna</h1>
      <div className="clearfix container-xl mt-4 px-md-4 px-lg-5 px-3">
        <div>
          <div
            id="spoof-warning"
            className="mt-0 pb-3"
            hidden=""
            aria-hidden=""
          >
            <div
              data-view-component="true"
              className="flash flash-warn mt-0 clearfix"
            >
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
                className="octicon octicon-alert float-left mt-1"
              >
                <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>
              <div className="overflow-hidden">
                This commit does not belong to any branch on this repository,
                and may belong to a fork outside of the repository.
              </div>
            </div>
          </div>
          <div
            data-view-component="true"
            className="Layout Layout--flowRow-until-md Layout--sidebarPosition-end Layout--sidebarPosition-flowRow-end"
          >
            <div data-view-component="true" className="Layout-main">
              <div className="file-navigation mb-3 d-flex flex-items-start">
                <div className="position-relative">
                  <details
                    className="js-branch-select-menu details-reset details-overlay mr-0 mb-0"
                    id="branch-select-menu"
                    data-hydro-click-payload='{"event_type":"repository.click","payload":{"target":"REFS_SELECTOR_MENU","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                    data-hydro-click-hmac="d7a11bc5be318e80b0c33aff5933423c86d80d641cc69992340e51d242aa421e"
                  >
                    <summary
                      className="btn css-truncate"
                      data-hotkey="w"
                      title="Switch branches or tags"
                    >
                      <svg
                        text="gray"
                        aria-hidden="true"
                        height={16}
                        viewBox="0 0 16 16"
                        version="1.1"
                        width={16}
                        data-view-component="true"
                        className="octicon octicon-git-branch"
                      >
                        <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                      </svg>
                      <span className="css-truncate-target" data-menu-button="">
                        main
                      </span>
                      <span className="dropdown-caret" />
                    </summary>
                    <div className="SelectMenu">
                      <div className="SelectMenu-modal">
                        <header className="SelectMenu-header">
                          <span className="SelectMenu-title">
                            Switch branches/tags
                          </span>
                          <button
                            className="SelectMenu-closeButton"
                            type="button"
                            data-toggle-for="branch-select-menu"
                          >
                            <svg
                              aria-label="Close menu"
                              aria-hidden="false"
                              role="img"
                              height={16}
                              viewBox="0 0 16 16"
                              version="1.1"
                              width={16}
                              data-view-component="true"
                              className="octicon octicon-x"
                            >
                              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
                            </svg>
                          </button>
                        </header>
                        <input-demux
                          data-action="tab-container-change:input-demux#storeInput tab-container-changed:input-demux#updateInput"
                          data-catalyst=""
                        >
                          <tab-container
                            className="d-flex flex-column js-branches-tags-tabs"
                            style={{ minHeight: 0 }}
                          >
                            <div className="SelectMenu-filter">
                              <input
                                data-target="input-demux.source"
                                id="context-commitish-filter-field"
                                className="SelectMenu-input form-control"
                                aria-owns="ref-list-branches"
                                data-controls-ref-menu-id="ref-list-branches"
                                autofocus=""
                                autoComplete="off"
                                aria-label="Filter branches/tags"
                                placeholder="Filter branches/tags"
                                type="text"
                              />
                            </div>
                            <div
                              className="SelectMenu-tabs"
                              role="tablist"
                              data-target="input-demux.control"
                            >
                              <button
                                className="SelectMenu-tab"
                                type="button"
                                role="tab"
                                aria-selected="true"
                                tabIndex={0}
                              >
                                Branches
                              </button>
                              <button
                                className="SelectMenu-tab"
                                type="button"
                                role="tab"
                                aria-selected="false"
                                tabIndex={-1}
                              >
                                Tags
                              </button>
                            </div>
                            <div
                              role="tabpanel"
                              id="ref-list-branches"
                              data-filter-placeholder="Filter branches/tags"
                              tabIndex=""
                              className="d-flex flex-column flex-auto overflow-auto"
                            >
                              <ref-selector
                                type="branch"
                                data-targets="input-demux.sinks"
                                data-action="
input-entered:ref-selector#inputEntered
tab-selected:ref-selector#tabSelected
focus-list:ref-selector#focusFirstListMember
    "
                                query-endpoint="/ZipingL/dna/refs"
                                cache-key="v0:1663929981.391472"
                                current-committish="bWFpbg=="
                                default-branch="bWFzdGVy"
                                name-with-owner="WmlwaW5nTC9kbmE="
                                prefetch-on-mouseover=""
                                data-catalyst=""
                              >
                                <template data-target="ref-selector.fetchFailedTemplate" />
                                <template data-target="ref-selector.noMatchTemplate" />
                                <div
                                  data-target="ref-selector.listContainer"
                                  role="menu"
                                  className="SelectMenu-list"
                                  data-turbo-frame="repo-content-turbo-frame"
                                >
                                  <div
                                    className="SelectMenu-loading pt-3 pb-0 overflow-hidden"
                                    aria-label="Menu is loading"
                                  >
                                    <svg
                                      style={{ boxSizing: "content-box" }}
                                      width={32}
                                      height={32}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      data-view-component="true"
                                      className="anim-rotate"
                                    >
                                      <circle
                                        cx={8}
                                        cy={8}
                                        r={7}
                                        stroke="currentColor"
                                        strokeOpacity="0.25"
                                        strokeWidth={2}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                      <path
                                        d="M15 8a7.002 7.002 0 00-7-7"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <template data-target="ref-selector.itemTemplate" />
                                <footer className="SelectMenu-footer">
                                  <a href="https://github.com/ZipingL/dna/branches">
                                    View all branches
                                  </a>
                                </footer>
                              </ref-selector>
                            </div>
                            <div
                              role="tabpanel"
                              id="tags-menu"
                              data-filter-placeholder="Find a tag"
                              tabIndex=""
                              hidden=""
                              className="d-flex flex-column flex-auto overflow-auto"
                            >
                              <ref-selector
                                type="tag"
                                data-action="
input-entered:ref-selector#inputEntered
tab-selected:ref-selector#tabSelected
focus-list:ref-selector#focusFirstListMember
    "
                                data-targets="input-demux.sinks"
                                query-endpoint="/ZipingL/dna/refs"
                                cache-key="v0:1663929981.391472"
                                current-committish="bWFpbg=="
                                default-branch="bWFzdGVy"
                                name-with-owner="WmlwaW5nTC9kbmE="
                                data-catalyst=""
                              >
                                <template data-target="ref-selector.fetchFailedTemplate" />
                                <template data-target="ref-selector.noMatchTemplate" />
                                <template data-target="ref-selector.itemTemplate" />
                                <div
                                  data-target="ref-selector.listContainer"
                                  role="menu"
                                  className="SelectMenu-list"
                                  data-turbo-frame="repo-content-turbo-frame"
                                >
                                  <div
                                    className="SelectMenu-loading pt-3 pb-0 overflow-hidden"
                                    aria-label="Menu is loading"
                                  >
                                    <svg
                                      style={{ boxSizing: "content-box" }}
                                      width={32}
                                      height={32}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      data-view-component="true"
                                      className="anim-rotate"
                                    >
                                      <circle
                                        cx={8}
                                        cy={8}
                                        r={7}
                                        stroke="currentColor"
                                        strokeOpacity="0.25"
                                        strokeWidth={2}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                      <path
                                        d="M15 8a7.002 7.002 0 00-7-7"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <footer className="SelectMenu-footer">
                                  <a href="https://github.com/ZipingL/dna/tags">
                                    View all tags
                                  </a>
                                </footer>
                              </ref-selector>
                            </div>
                          </tab-container>
                        </input-demux>
                      </div>
                    </div>
                  </details>
                </div>
                <div
                  className="Overlay--hidden Overlay-backdrop--center"
                  data-modal-dialog-overlay=""
                >
                  <modal-dialog
                    role="dialog"
                    id="warn-tag-match-create-branch-dialog"
                    aria-modal="true"
                    aria-labelledby="warn-tag-match-create-branch-dialog-header"
                    data-view-component="true"
                    className="Overlay Overlay--width-large Overlay--height-auto Overlay--motion-scaleFade"
                  >
                    <header className="Overlay-header Overlay-header--large Overlay-header--divided">
                      <div className="Overlay-headerContentWrap">
                        <div className="Overlay-titleWrap">
                          <h1
                            id="warn-tag-match-create-branch-dialog-header"
                            className="Overlay-title"
                          >
                            Name already in use
                          </h1>
                        </div>
                        <div className="Overlay-actionWrap">
                          <button
                            data-close-dialog-id="warn-tag-match-create-branch-dialog"
                            aria-label="Close"
                            type="button"
                            data-view-component="true"
                            className="close-button Overlay-closeButton"
                          >
                            <svg
                              aria-hidden="true"
                              height={16}
                              viewBox="0 0 16 16"
                              version="1.1"
                              width={16}
                              data-view-component="true"
                              className="octicon octicon-x"
                            >
                              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </header>
                    <div className="Overlay-body">
                      <div data-view-component="true">
                        A tag already exists with the provided branch name. Many
                        Git commands accept both tag and branch names, so
                        creating this branch may cause unexpected behavior. Are
                        you sure you want to create this branch?
                      </div>
                    </div>
                    <footer className="Overlay-footer Overlay-footer--alignEnd">
                      <button
                        data-close-dialog-id="warn-tag-match-create-branch-dialog"
                        type="button"
                        data-view-component="true"
                        className="btn"
                      >
                        Cancel
                      </button>
                      <button
                        data-submit-dialog-id="warn-tag-match-create-branch-dialog"
                        type="button"
                        data-view-component="true"
                        className="btn-danger btn"
                      >
                        Create
                      </button>
                    </footer>
                  </modal-dialog>
                </div>
                <div className="flex-self-center flex-self-stretch d-none flex-items-center lh-condensed-ultra d-lg-flex">
                  <a
                    data-pjax="#repo-content-pjax-container"
                    data-turbo-frame="repo-content-turbo-frame"
                    href="https://github.com/ZipingL/dna/branches"
                    className="ml-3 Link--primary no-underline"
                  >
                    <svg
                      text="gray"
                      aria-hidden="true"
                      height={16}
                      viewBox="0 0 16 16"
                      version="1.1"
                      width={16}
                      data-view-component="true"
                      className="octicon octicon-git-branch"
                    >
                      <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                    </svg>
                    <strong>2</strong>
                    <span className="color-fg-muted">branches</span>
                  </a>
                  <a
                    data-pjax="#repo-content-pjax-container"
                    data-turbo-frame="repo-content-turbo-frame"
                    href="https://github.com/ZipingL/dna/tags"
                    className="ml-3 Link--primary no-underline"
                  >
                    <svg
                      text="gray"
                      aria-hidden="true"
                      height={16}
                      viewBox="0 0 16 16"
                      version="1.1"
                      width={16}
                      data-view-component="true"
                      className="octicon octicon-tag"
                    >
                      <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                    </svg>
                    <strong>0</strong>
                    <span className="color-fg-muted">tags</span>
                  </a>
                </div>
                <div className="flex-auto" />
                <a
                  className="btn ml-2"
                  data-hydro-click='{"event_type":"repository.click","payload":{"target":"FIND_FILE_BUTTON","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/overview_actions/main","user_id":null}}'
                  data-hydro-click-hmac="62d2677dd9654c0b37f6ad7a56d92e48e2331d13234d8034c4f59b3d83a286fd"
                  data-ga-click="Repository, find file, location:repo overview"
                  data-hotkey="t"
                  href="https://github.com/ZipingL/dna/find/main"
                >
                  Go to file
                </a>
                <span className="d-none d-md-flex ml-2">
                  <get-repo className="" data-catalyst="">
                    <details
                      className="position-relative details-overlay details-reset js-codespaces-details-container"
                      data-action="
 toggle:get-repo#onDetailsToggle
 keydown:get-repo#onDetailsKeydown"
                    >
                      <summary
                        data-hydro-click='{"event_type":"repository.click","payload":{"repository_id":488696119,"target":"CLONE_OR_DOWNLOAD_BUTTON","originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                        data-hydro-click-hmac="3e812db208cdc0424e22af80172f2f51f5d8fe560f84317d73389b82f42804ab"
                        data-view-component="true"
                        className="Button--primary Button--medium Button flex-1 d-inline-flex"
                      >
                        <span className="Button-content">
                          <span className="Button-label">Code</span>
                        </span>
                        <span className="Button-visual Button-trailingAction">
                          <svg
                            aria-hidden="true"
                            height={16}
                            viewBox="0 0 16 16"
                            version="1.1"
                            width={16}
                            data-view-component="true"
                            className="octicon octicon-triangle-down"
                          >
                            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" />
                          </svg>
                        </span>
                      </summary>
                      <div className="position-relative">
                        <div
                          className="dropdown-menu dropdown-menu-sw p-0"
                          style={{
                            top: 6,
                            width: 400,
                            maxWidth: "calc(100vw - 320px)"
                          }}
                        >
                          <div data-target="get-repo.modal">
                            <tab-container data-view-component="true">
                              <div
                                with_panel="true"
                                data-view-component="true"
                                className="tabnav hx_tabnav-in-dropdown color-bg-subtle m-0"
                              >
                                <ul
                                  role="tablist"
                                  aria-label="Choose where to access your code"
                                  data-view-component="true"
                                  className="tabnav-tabs d-flex"
                                >
                                  <li
                                    role="presentation"
                                    data-view-component="true"
                                    className="hx_tabnav-in-dropdown-wrapper flex-1 d-inline-flex"
                                  >
                                    <button
                                      data-tab="local"
                                      data-action="click:get-repo#localTabSelected focusin:get-repo#localTabSelected"
                                      id="local-tab"
                                      type="button"
                                      role="tab"
                                      aria-controls="local-panel"
                                      aria-selected="true"
                                      data-view-component="true"
                                      className="tabnav-tab flex-1"
                                      tabIndex={0}
                                    >
                                      <span data-view-component="true">
                                        Local
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    role="presentation"
                                    data-view-component="true"
                                    className="hx_tabnav-in-dropdown-wrapper flex-1 d-inline-flex"
                                  >
                                    <button
                                      data-tab="cloud"
                                      data-action="click:get-repo#cloudTabSelected focusin:get-repo#cloudTabSelected"
                                      data-target="feature-callout.dismisser"
                                      id="cloud-tab"
                                      type="button"
                                      role="tab"
                                      aria-controls="cloud-panel"
                                      data-view-component="true"
                                      className="tabnav-tab flex-1"
                                      aria-selected="false"
                                      tabIndex={-1}
                                    >
                                      <span data-view-component="true">
                                        <span>Codespaces</span>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div
                                id="local-panel"
                                role="tabpanel"
                                tabIndex={0}
                                aria-labelledby="local-tab"
                                data-view-component="true"
                              >
                                <ul className="list-style-none">
                                  <li className="Box-row p-3">
                                    <a
                                      className="Link--muted float-right tooltipped tooltipped-s"
                                      href="https://docs.github.com/articles/which-remote-url-should-i-use"
                                      target="_blank"
                                      aria-label="Which remote URL should I use?"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        height={16}
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width={16}
                                        data-view-component="true"
                                        className="octicon octicon-question"
                                      >
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.92 6.085h.001a.749.749 0 1 1-1.342-.67c.169-.339.436-.701.849-.977C6.845 4.16 7.369 4 8 4a2.756 2.756 0 0 1 1.637.525c.503.377.863.965.863 1.725 0 .448-.115.83-.329 1.15-.205.307-.47.513-.692.662-.109.072-.22.138-.313.195l-.006.004a6.24 6.24 0 0 0-.26.16.952.952 0 0 0-.276.245.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661.103-.067.207-.132.313-.195l.007-.004c.1-.061.182-.11.258-.161a.969.969 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.612.612 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1.01 1.01 0 0 0-.34.398ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                                      </svg>
                                    </a>
                                    <div className="text-bold">
                                      <svg
                                        aria-hidden="true"
                                        height={16}
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width={16}
                                        data-view-component="true"
                                        className="octicon octicon-terminal mr-2"
                                      >
                                        <path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM7.25 8a.749.749 0 0 1-.22.53l-2.25 2.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L5.44 8 3.72 6.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.25 2.25c.141.14.22.331.22.53Zm1.5 1.5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5Z" />
                                      </svg>
                                      Clone
                                    </div>
                                    <tab-container>
                                      <div className="UnderlineNav my-2 box-shadow-none">
                                        <div
                                          className="UnderlineNav-body"
                                          role="tablist"
                                        >
                                          <button
                                            name="button"
                                            type="button"
                                            role="tab"
                                            className="UnderlineNav-item"
                                            aria-selected="true"
                                            data-hydro-click='{"event_type":"clone_or_download.click","payload":{"feature_clicked":"USE_HTTPS","git_repository_type":"REPOSITORY","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                                            data-hydro-click-hmac="1b3ceb66345d845ad0496cd3fda3fb3b2abff47f8ee9288fd0dfda1b51d07633"
                                            tabIndex={0}
                                          >
                                            HTTPS
                                          </button>
                                          <button
                                            name="button"
                                            type="button"
                                            role="tab"
                                            className="UnderlineNav-item"
                                            data-hydro-click='{"event_type":"clone_or_download.click","payload":{"feature_clicked":"USE_GH_CLI","git_repository_type":"REPOSITORY","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                                            data-hydro-click-hmac="7b48f371df5d77e46b9d1bc6f3ef9510d20dee5e05753264f177bb8ca3bd5a1b"
                                            aria-selected="false"
                                            tabIndex={-1}
                                          >
                                            GitHub CLI
                                          </button>
                                        </div>
                                      </div>
                                      <div role="tabpanel">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control input-monospace input-sm color-bg-subtle"
                                            data-autoselect=""
                                            defaultValue="https://github.com/ZipingL/dna.git"
                                            aria-label="https://github.com/ZipingL/dna.git"
                                            readOnly=""
                                          />
                                          <div className="input-group-button">
                                            <clipboard-copy
                                              value="https://github.com/ZipingL/dna.git"
                                              aria-label="Copy to clipboard"
                                              className="btn btn-sm js-clipboard-copy tooltipped-no-delay ClipboardButton js-clone-url-http"
                                              data-copy-feedback="Copied!"
                                              data-tooltip-direction="n"
                                              data-hydro-click='{"event_type":"clone_or_download.click","payload":{"feature_clicked":"COPY_URL","git_repository_type":"REPOSITORY","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                                              data-hydro-click-hmac="a90c7732c2a7ec8a38570bdcfd707231dfb58c0f6305a72668a9dceec276b0bd"
                                              tabIndex={0}
                                              role="button"
                                            >
                                              <svg
                                                aria-hidden="true"
                                                height={16}
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width={16}
                                                data-view-component="true"
                                                className="octicon octicon-copy js-clipboard-copy-icon d-inline-block"
                                              >
                                                <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
                                                <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
                                              </svg>
                                              <svg
                                                aria-hidden="true"
                                                height={16}
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width={16}
                                                data-view-component="true"
                                                className="octicon octicon-check js-clipboard-check-icon color-fg-success d-inline-block d-sm-none"
                                              >
                                                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                                              </svg>
                                            </clipboard-copy>
                                          </div>
                                        </div>
                                        <p className="mt-2 mb-0 f6 color-fg-muted">
                                          Use Git or checkout with SVN using the
                                          web URL.
                                        </p>
                                      </div>
                                      <div role="tabpanel" hidden="">
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control input-monospace input-sm color-bg-subtle"
                                            data-autoselect=""
                                            defaultValue="gh repo clone ZipingL/dna"
                                            aria-label="gh repo clone ZipingL/dna"
                                            readOnly=""
                                          />
                                          <div className="input-group-button">
                                            <clipboard-copy
                                              value="gh repo clone ZipingL/dna"
                                              aria-label="Copy to clipboard"
                                              className="btn btn-sm js-clipboard-copy tooltipped-no-delay ClipboardButton js-clone-url-gh-cli"
                                              data-copy-feedback="Copied!"
                                              data-tooltip-direction="n"
                                              data-hydro-click='{"event_type":"clone_or_download.click","payload":{"feature_clicked":"COPY_URL","git_repository_type":"REPOSITORY","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                                              data-hydro-click-hmac="a90c7732c2a7ec8a38570bdcfd707231dfb58c0f6305a72668a9dceec276b0bd"
                                              tabIndex={0}
                                              role="button"
                                            >
                                              <svg
                                                aria-hidden="true"
                                                height={16}
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width={16}
                                                data-view-component="true"
                                                className="octicon octicon-copy js-clipboard-copy-icon d-inline-block"
                                              >
                                                <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
                                                <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
                                              </svg>
                                              <svg
                                                aria-hidden="true"
                                                height={16}
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width={16}
                                                data-view-component="true"
                                                className="octicon octicon-check js-clipboard-check-icon color-fg-success d-inline-block d-sm-none"
                                              >
                                                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                                              </svg>
                                            </clipboard-copy>
                                          </div>
                                        </div>
                                        <p className="mt-2 mb-0 f6 color-fg-muted">
                                          Work fast with our official CLI.
                                          <a
                                            href="https://cli.github.com/"
                                            target="_blank"
                                          >
                                            Learn more about the CLI
                                          </a>
                                          .
                                        </p>
                                      </div>
                                    </tab-container>
                                  </li>
                                  <li
                                    data-platforms="windows,mac"
                                    className="Box-row Box-row--hover-gray p-3 mt-0 rounded-0 js-remove-unless-platform"
                                  >
                                    <a
                                      className="d-flex flex-items-center color-fg-default text-bold no-underline"
                                      data-hydro-click='{"event_type":"clone_or_download.click","payload":{"feature_clicked":"OPEN_IN_DESKTOP","git_repository_type":"REPOSITORY","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                                      data-hydro-click-hmac="63675fa83034932df2173a0c0ea1d60911d590e928631bf597de17abb1328a46"
                                      data-action="click:get-repo#showDownloadMessage"
                                      href="https://desktop.github.com/"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        height={16}
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width={16}
                                        data-view-component="true"
                                        className="octicon octicon-desktop-download mr-2"
                                      >
                                        <path d="m4.927 5.427 2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 5H8.75V.75a.75.75 0 1 0-1.5 0V5H5.104a.25.25 0 0 0-.177.427Z" />
                                        <path d="M1.573 2.573a.25.25 0 0 0-.073.177v7.5a.25.25 0 0 0 .25.25h12.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-3a.75.75 0 1 1 0-1.5h3A1.75 1.75 0 0 1 16 2.75v7.5A1.75 1.75 0 0 1 14.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.75.75 0 0 1 11.25 16h-6.5a.75.75 0 0 1-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 0 1 0 10.25v-7.5A1.75 1.75 0 0 1 1.75 1h3a.75.75 0 0 1 0 1.5h-3a.25.25 0 0 0-.177.073ZM6.982 12a5.72 5.72 0 0 1-.765 2.5h3.566a5.72 5.72 0 0 1-.765-2.5H6.982Z" />
                                      </svg>
                                      Open with GitHub Desktop
                                    </a>
                                  </li>
                                  <li className="Box-row Box-row--hover-gray p-3 mt-0">
                                    <a
                                      className="d-flex flex-items-center color-fg-default text-bold no-underline"
                                      rel="nofollow"
                                      data-hydro-click='{"event_type":"clone_or_download.click","payload":{"feature_clicked":"DOWNLOAD_ZIP","git_repository_type":"REPOSITORY","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/tree/main","user_id":null}}'
                                      data-hydro-click-hmac="e146e36283d12bf73386d2829bfd393e526300336209d0876920b70b3b779a83"
                                      data-ga-click="Repository, download zip, location:repo overview"
                                      data-open-app="link"
                                      data-turbo="false"
                                      href="https://github.com/ZipingL/dna/archive/refs/heads/main.zip"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        height={16}
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width={16}
                                        data-view-component="true"
                                        className="octicon octicon-file-zip mr-2"
                                      >
                                        <path d="M3.5 1.75v11.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.748 1.748 0 0 1 2 13.25V1.75C2 .784 2.784 0 3.75 0h5.586c.464 0 .909.185 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 12.25 15h-.5a.75.75 0 0 1 0-1.5h.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177L9.513 1.573a.25.25 0 0 0-.177-.073H7.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5h-3a.25.25 0 0 0-.25.25Zm3.75 8.75h.5c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3c0-.966.784-1.75 1.75-1.75ZM6 5.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 5.25Zm.75 2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 6.75A.75.75 0 0 1 8.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 6.75ZM8.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 9.75A.75.75 0 0 1 8.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 9.75Zm-1 2.5v2.25h1v-2.25a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25Z" />
                                      </svg>
                                      Download ZIP
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                id="cloud-panel"
                                role="tabpanel"
                                tabIndex={0}
                                hidden="hidden"
                                aria-labelledby="cloud-tab"
                                data-view-component="true"
                                className="cloud-panel"
                              >
                                <div
                                  data-view-component="true"
                                  className="blankslate"
                                >
                                  <h4
                                    data-view-component="true"
                                    className="mb-1"
                                  >
                                    Sign In Required
                                  </h4>
                                  <p className="mt-2 mx-4">
                                    Please
                                    <a
                                      href="https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=488696119"
                                      data-view-component="true"
                                      className="no-underline"
                                    >
                                      sign in
                                    </a>
                                    to use Codespaces.
                                  </p>
                                </div>
                              </div>
                            </tab-container>
                          </div>
                          <div
                            className="p-3"
                            data-targets="get-repo.platforms"
                            data-platform="mac"
                            hidden=""
                          >
                            <h4 className="lh-condensed mb-3">
                              Launching GitHub Desktop
                              <span className="AnimatedEllipsis" />
                            </h4>
                            <p className="color-fg-muted">
                              If nothing happens,
                              <a href="https://desktop.github.com/">
                                download GitHub Desktop
                              </a>
                              and try again.
                            </p>
                            <button
                              data-action="click:get-repo#onDetailsToggle"
                              type="button"
                              data-view-component="true"
                              className="btn-link"
                            />
                          </div>
                          <div
                            className="p-3"
                            data-targets="get-repo.platforms"
                            data-platform="windows"
                            hidden=""
                          >
                            <h4 className="lh-condensed mb-3">
                              Launching GitHub Desktop
                              <span className="AnimatedEllipsis" />
                            </h4>
                            <p className="color-fg-muted">
                              If nothing happens,
                              <a href="https://desktop.github.com/">
                                download GitHub Desktop
                              </a>
                              and try again.
                            </p>
                            <button
                              data-action="click:get-repo#onDetailsToggle"
                              type="button"
                              data-view-component="true"
                              className="btn-link"
                            />
                          </div>
                          <div
                            className="p-3"
                            data-targets="get-repo.platforms"
                            data-platform="xcode"
                            hidden=""
                          >
                            <h4 className="lh-condensed mb-3">
                              Launching Xcode
                              <span className="AnimatedEllipsis" />
                            </h4>
                            <p className="color-fg-muted">
                              If nothing happens,
                              <a href="https://developer.apple.com/xcode/">
                                download Xcode
                              </a>
                              and try again.
                            </p>
                            <button
                              data-action="click:get-repo#onDetailsToggle"
                              type="button"
                              data-view-component="true"
                              className="btn-link"
                            />
                          </div>
                          <div
                            className="p-3"
                            data-targets="get-repo.platforms"
                            data-target="new-codespace.loadingVscode create-button.loadingVscode"
                            data-platform="vscode"
                            hidden=""
                          >
                            <poll-include-fragment
                              data-target="get-repo.vscodePoller new-codespace.vscodePoller create-button.vscodePoller"
                              data-catalyst=""
                            >
                              <template shadowrootmode="open" />
                              <h4 className="lh-condensed mb-3">
                                Launching Visual Studio Code
                                <span
                                  className="AnimatedEllipsis"
                                  data-hide-on-error=""
                                />
                              </h4>
                              <p
                                className="color-fg-muted"
                                data-hide-on-error=""
                              >
                                Your codespace will open once ready.
                              </p>
                              <p
                                className="color-fg-muted"
                                data-show-on-error=""
                                hidden=""
                              >
                                There was a problem preparing your codespace,
                                please try again.
                              </p>
                            </poll-include-fragment>
                          </div>
                        </div>
                      </div>
                    </details>
                  </get-repo>
                </span>
                <span className="d-none d-lg-flex"> </span>
              </div>
              <div className="d-sm-flex Box mb-3 Box-body color-bg-subtle">
                <div className="d-flex flex-auto">
                  <div>
                    This branch is
                    <span>
                      <a
                        data-analytics-event='{"category":"Branch Infobar","action":"Ahead Compare","label":"ref_loc:bar;is_fork:false"}'
                        href="https://github.com/ZipingL/dna/compare/master...main"
                      >
                        8 commits ahead
                      </a>
                      ,
                      <a
                        data-analytics-event='{"category":"Branch Infobar","action":"Behind Compare","label":"ref_loc:bar;is_fork:false"}'
                        href="https://github.com/ZipingL/dna/compare/main...master"
                      >
                        11 commits behind
                      </a>
                      master
                    </span>
                    .
                  </div>
                </div>
                <div className="d-flex flex-justify-end mt-2 mt-sm-0 ml-sm-3" />
              </div>
              <div className="Box mb-3">
                <div className="Box-header position-relative">
                  <h2 className="sr-only">Latest commit</h2>
                  <div
                    className="js-details-container Details d-flex rounded-top-2 flex-items-center flex-wrap"
                    data-issue-and-pr-hovercards-enabled=""
                  >
                    <div className="flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1 hx_avatar_stack_commit">
                      <div className="AvatarStack flex-self-start">
                        <div className="AvatarStack-body">
                          <a
                            className="avatar avatar-user"
                            style={{ width: 24, height: 24 }}
                            data-test-selector="commits-avatar-stack-avatar-link"
                            data-hovercard-type="user"
                            data-hovercard-url="/users/ZipingL/hovercard"
                            data-octo-click="hovercard-link-click"
                            data-octo-dimensions="link_type:self"
                            href="https://github.com/ZipingL"
                          >
                            <img
                              data-test-selector="commits-avatar-stack-avatar-image"
                              src="./new_static_files/8689680"
                              width={24}
                              height={24}
                              alt="@ZipingL"
                              className="avatar-user"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 d-flex flex-items-center ml-3 min-width-0">
                      <div className="css-truncate css-truncate-overflow color-fg-muted">
                        <a
                          className="commit-author user-mention"
                          title="View all commits by ZipingL"
                          href="https://github.com/ZipingL/dna/commits?author=ZipingL"
                        >
                          ZipingL
                        </a>
                        <span className="d-none d-sm-inline">
                          <a
                            data-pjax="true"
                            data-test-selector="commit-tease-commit-message"
                            title="Add 23andMe Ancestry Book"
                            className="Link--primary markdown-title"
                            href="https://github.com/ZipingL/dna/commit/00f5b4f9b83df69b90d5505d5782c3cf3128640e"
                          >
                            Add 23andMe Ancestry Book
                          </a>
                        </span>
                      </div>
                      <span className="hidden-text-expander ml-2 d-inline-block d-inline-block d-lg-none">
                        <button
                          type="button"
                          className="color-fg-default ellipsis-expander js-details-target"
                          aria-expanded="false"
                        >
                          …
                        </button>
                      </span>
                      <div className="d-flex flex-auto flex-justify-end ml-3 flex-items-baseline">
                        <a
                          href="https://github.com/ZipingL/dna/commit/00f5b4f9b83df69b90d5505d5782c3cf3128640e"
                          className="f6 Link--secondary text-mono ml-2 d-none d-lg-inline"
                          data-pjax="#repo-content-pjax-container"
                          data-turbo-frame="repo-content-turbo-frame"
                        >
                          00f5b4f
                        </a>
                        <a
                          href="https://github.com/ZipingL/dna/commit/00f5b4f9b83df69b90d5505d5782c3cf3128640e"
                          className="Link--secondary ml-2"
                          data-pjax="#repo-content-pjax-container"
                          data-turbo-frame="repo-content-turbo-frame"
                        >
                          <relative-time
                            dateTime="2022-07-13T23:22:02Z"
                            className="no-wrap"
                            title="Jul 13, 2022, 6:22 PM CDT"
                          >
                            <template shadowrootmode="open" />
                            Jul 13, 2022
                          </relative-time>
                        </a>
                      </div>
                    </div>
                    <div className="pl-0 pl-md-5 flex-order-1 width-full Details-content--hidden">
                      <div className="mt-2">
                        <a
                          data-pjax="#repo-content-pjax-container"
                          data-turbo-frame="repo-content-turbo-frame"
                          data-test-selector="commit-tease-commit-message"
                          className="Link--primary text-bold"
                          href="https://github.com/ZipingL/dna/commit/00f5b4f9b83df69b90d5505d5782c3cf3128640e"
                        >
                          Add 23andMe Ancestry Book
                        </a>
                      </div>
                      <div className="d-flex flex-items-center">
                        <code className="border d-lg-none mt-2 px-1 rounded-2">
                          00f5b4f
                        </code>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <h2 className="sr-only">Git stats</h2>
                      <ul className="list-style-none d-flex">
                        <li className="ml-0 ml-md-3">
                          <a
                            data-pjax="#repo-content-pjax-container"
                            data-turbo-frame="repo-content-turbo-frame"
                            href="https://github.com/ZipingL/dna/commits/main"
                            className="pl-3 pr-3 py-3 p-md-0 mt-n3 mb-n3 mr-n3 m-md-0 Link--primary no-underline no-wrap"
                          >
                            <svg
                              text="gray"
                              aria-hidden="true"
                              height={16}
                              viewBox="0 0 16 16"
                              version="1.1"
                              width={16}
                              data-view-component="true"
                              className="octicon octicon-history"
                            >
                              <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z" />
                            </svg>
                            <span className="d-none d-sm-inline">
                              <strong>8</strong>
                              <span
                                aria-label="Commits on main"
                                className="color-fg-muted d-none d-lg-inline"
                              >
                                commits
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h2 id="files" className="sr-only">
                  Files
                </h2>
                <a
                  className="d-none js-permalink-shortcut"
                  data-hotkey="y"
                  href="https://github.com/ZipingL/dna/tree/00f5b4f9b83df69b90d5505d5782c3cf3128640e"
                >
                  Permalink
                </a>
                <div
                  data-view-component="true"
                  className="include-fragment-error flash flash-error flash-full py-2"
                >
                  <svg
                    aria-hidden="true"
                    height={16}
                    viewBox="0 0 16 16"
                    version="1.1"
                    width={16}
                    data-view-component="true"
                    className="octicon octicon-alert"
                  >
                    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                  </svg>
                  Failed to load latest commit information.
                </div>
                <div className="js-details-container Details" data-hpc="">
                  <div
                    role="grid"
                    aria-labelledby="files"
                    className="Details-content--hidden-not-important js-navigation-container js-active-navigation-container d-md-block"
                  >
                    <div className="sr-only" role="row">
                      <div role="columnheader">Type</div>
                      <div role="columnheader">Name</div>
                      <div role="columnheader" className="d-none d-md-block">
                        Latest commit message
                      </div>
                      <div role="columnheader">Commit time</div>
                    </div>
                    <div
                      role="row"
                      className="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item"
                    >
                      <div
                        role="gridcell"
                        className="mr-3 flex-shrink-0"
                        style={{ width: 16 }}
                      >
                        <svg
                          aria-label="File"
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-file color-fg-muted"
                        >
                          <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
                        </svg>
                      </div>
                      <div
                        role="rowheader"
                        className="flex-auto min-width-0 col-md-2 mr-3"
                      >
                        <span className="css-truncate css-truncate-target d-block width-fit">
                          <a
                            className="js-navigation-open Link--primary"
                            title="23andMe_Ancestry_Book.pdf"
                            data-turbo-frame="repo-content-turbo-frame"
                            href="https://github.com/ZipingL/dna/blob/main/23andMe_Ancestry_Book.pdf"
                          >
                            23andMe_Ancestry_Book.pdf
                          </a>
                        </span>
                      </div>
                      <div
                        role="gridcell"
                        className="flex-auto min-width-0 d-none d-md-block col-5 mr-3"
                      >
                        <span className="css-truncate css-truncate-target d-block width-fit markdown-title">
                          <a
                            data-pjax="true"
                            title="Add 23andMe Ancestry Book"
                            className="Link--secondary"
                            href="https://github.com/ZipingL/dna/commit/00f5b4f9b83df69b90d5505d5782c3cf3128640e"
                          >
                            Add 23andMe Ancestry Book
                          </a>
                        </span>
                      </div>
                      <div
                        role="gridcell"
                        className="color-fg-muted text-right"
                        style={{ width: 100 }}
                      >
                        <relative-time
                          tense="past"
                          dateTime="2022-07-13T18:22:02-05:00"
                          data-view-component="true"
                          title="Jul 13, 2022, 6:22 PM CDT"
                        >
                          <template shadowrootmode="open" />
                          July 13, 2022 18:22
                        </relative-time>
                      </div>
                    </div>
                    <div
                      role="row"
                      className="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item"
                    >
                      <div
                        role="gridcell"
                        className="mr-3 flex-shrink-0"
                        style={{ width: 16 }}
                      >
                        <svg
                          aria-label="File"
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-file color-fg-muted"
                        >
                          <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
                        </svg>
                      </div>
                      <div
                        role="rowheader"
                        className="flex-auto min-width-0 col-md-2 mr-3"
                      >
                        <span className="css-truncate css-truncate-target d-block width-fit">
                          <a
                            className="js-navigation-open Link--primary"
                            title="LICENSE"
                            data-turbo-frame="repo-content-turbo-frame"
                            itemProp="license"
                            href="https://github.com/ZipingL/dna/blob/main/LICENSE"
                          >
                            LICENSE
                          </a>
                        </span>
                      </div>
                      <div
                        role="gridcell"
                        className="flex-auto min-width-0 d-none d-md-block col-5 mr-3"
                      >
                        <span className="css-truncate css-truncate-target d-block width-fit markdown-title">
                          <a
                            data-pjax="true"
                            title="Update LICENSE"
                            className="Link--secondary"
                            href="https://github.com/ZipingL/dna/commit/9af19e11d3320789de6aa9bbd8fdca4b93f1b297"
                          >
                            Update LICENSE
                          </a>
                        </span>
                      </div>
                      <div
                        role="gridcell"
                        className="color-fg-muted text-right"
                        style={{ width: 100 }}
                      >
                        <relative-time
                          tense="past"
                          dateTime="2022-05-06T08:51:46-05:00"
                          data-view-component="true"
                          title="May 6, 2022, 8:51 AM CDT"
                        >
                          <template shadowrootmode="open" />
                          May 6, 2022 08:51
                        </relative-time>
                      </div>
                    </div>
                    <div
                      role="row"
                      className="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item navigation-focus"
                    >
                      <div
                        role="gridcell"
                        className="mr-3 flex-shrink-0"
                        style={{ width: 16 }}
                      >
                        <svg
                          aria-label="File"
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-file color-fg-muted"
                        >
                          <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
                        </svg>
                      </div>
                      <div
                        role="rowheader"
                        className="flex-auto min-width-0 col-md-2 mr-3"
                      >
                        <span className="css-truncate css-truncate-target d-block width-fit">
                          <a
                            className="js-navigation-open Link--primary"
                            title="README.md"
                            data-turbo-frame="repo-content-turbo-frame"
                            href="https://github.com/ZipingL/dna/blob/main/README.md"
                          >
                            README.md
                          </a>
                        </span>
                      </div>
                      <div
                        role="gridcell"
                        className="flex-auto min-width-0 d-none d-md-block col-5 mr-3"
                      >
                        <span className="css-truncate css-truncate-target d-block width-fit markdown-title">
                          <a
                            data-pjax="true"
                            title="Update README.md"
                            className="Link--secondary"
                            href="https://github.com/ZipingL/dna/commit/2512f471ab7b248ddc7e1e31bda0005b9283b51e"
                          >
                            Update README.md
                          </a>
                        </span>
                      </div>
                      <div
                        role="gridcell"
                        className="color-fg-muted text-right"
                        style={{ width: 100 }}
                      >
                        <relative-time
                          tense="past"
                          dateTime="2022-05-06T08:48:04-05:00"
                          data-view-component="true"
                          title="May 6, 2022, 8:48 AM CDT"
                        >
                          <template shadowrootmode="open" />
                          May 6, 2022 08:48
                        </relative-time>
                      </div>
                    </div>
                    <div
                      role="row"
                      className="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item"
                    >
                      <div
                        role="gridcell"
                        className="mr-3 flex-shrink-0"
                        style={{ width: 16 }}
                      >
                        <svg
                          aria-label="File"
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-file color-fg-muted"
                        >
                          <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
                        </svg>
                      </div>
                      <div
                        role="rowheader"
                        className="flex-auto min-width-0 col-md-2 mr-3"
                      >
                        <span className="css-truncate css-truncate-target d-block width-fit">
                          <a
                            className="js-navigation-open Link--primary"
                            title="v5_23.txt"
                            data-turbo-frame="repo-content-turbo-frame"
                            href="https://github.com/ZipingL/dna/blob/main/v5_23.txt"
                          >
                            v5_23.txt
                          </a>
                        </span>
                      </div>
                      <div
                        role="gridcell"
                        className="flex-auto min-width-0 d-none d-md-block col-5 mr-3"
                      >
                        <span className="css-truncate css-truncate-target d-block width-fit markdown-title">
                          <a
                            data-pjax="true"
                            title="feat: these are my genes

yeah, there is nothing special about them,

just a plethora of pyramids"
                            className="Link--secondary"
                            href="https://github.com/ZipingL/dna/commit/4d4241ab35703c16280fcfac727732dd892ad077"
                          >
                            feat: these are my genes
                          </a>
                        </span>
                      </div>
                      <div
                        role="gridcell"
                        className="color-fg-muted text-right"
                        style={{ width: 100 }}
                      >
                        <relative-time
                          tense="past"
                          dateTime="2022-05-04T13:19:22-05:00"
                          data-view-component="true"
                          title="May 4, 2022, 1:19 PM CDT"
                        >
                          <template shadowrootmode="open" />
                          May 4, 2022 13:19
                        </relative-time>
                      </div>
                    </div>
                  </div>
                  <div className="Details-content--shown Box-footer d-md-none p-0">
                    <button
                      aria-expanded="false"
                      type="button"
                      data-view-component="true"
                      className="js-details-target btn-link d-block width-full px-3 py-2"
                    >
                      View code
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="readme"
                className="Box md js-code-block-container js-code-nav-container js-tagsearch-file Box--responsive"
                data-tagsearch-path="README.md"
                data-tagsearch-lang="Markdown"
              >
                <div className="d-flex Box-header border-bottom-0 flex-items-center flex-justify-between color-bg-default rounded-top-2">
                  <div className="d-flex flex-items-center">
                    <h2 className="Box-title">
                      <a
                        href="https://github.com/ZipingL/dna/tree/main#readme"
                        data-view-component="true"
                        className="Link--primary"
                      >
                        README.md
                      </a>
                    </h2>
                  </div>
                </div>
                <div
                  data-target="readme-toc.content"
                  className="Box-body px-5 pb-5"
                >
                  <article
                    className="markdown-body entry-content container-lg"
                    itemProp="text"
                  >
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
                      There's literally nothing special about them, just a
                      plethora of pyramids.
                    </p>
                    <p dir="auto">
                      Our genes don't make us who we are, it's how we transcend
                      our genetic programming, that makes us a Human being - one
                      angle of many angles of transcendence beyond our selfish
                      (but not self-less) form of existence. Be self-preserving,
                      but not self-protective.
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div data-view-component="true" className="Layout-sidebar">
              <div className="BorderGrid BorderGrid--spacious" data-pjax="">
                <div className="BorderGrid-row hide-sm hide-md">
                  <div className="BorderGrid-cell">
                    <h2 className="mb-3 h4">About</h2>
                    <p className="f4 my-3">My DNA</p>
                    <h3 className="sr-only">Resources</h3>
                    <div className="mt-2">
                      <a
                        className="Link--muted"
                        data-analytics-event='{"category":"Repository Overview","action":"click","label":"location:sidebar;file:readme"}'
                        href="https://github.com/ZipingL/dna/tree/main#readme"
                      >
                        <svg
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-book mr-2"
                        >
                          <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" />
                        </svg>
                        Readme
                      </a>
                    </div>
                    <include-fragment
                      src="/ZipingL/dna/hovercards/citation/sidebar_partial?tree_name=main"
                      className="is-error"
                    >
                      <template shadowrootmode="open" />
                    </include-fragment>
                    <h3 className="sr-only">Stars</h3>
                    <div className="mt-2">
                      <a
                        href="https://github.com/ZipingL/dna/stargazers"
                        data-view-component="true"
                        className="Link--muted"
                      >
                        <svg
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-star mr-2"
                        >
                          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
                        </svg>
                        <strong>2</strong>
                        stars
                      </a>
                    </div>
                    <h3 className="sr-only">Watchers</h3>
                    <div className="mt-2">
                      <a
                        href="https://github.com/ZipingL/dna/watchers"
                        data-view-component="true"
                        className="Link--muted"
                      >
                        <svg
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-eye mr-2"
                        >
                          <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z" />
                        </svg>
                        <strong>1</strong>
                        watching
                      </a>
                    </div>
                    <h3 className="sr-only">Forks</h3>
                    <div className="mt-2">
                      <a
                        href="https://github.com/ZipingL/dna/forks"
                        data-view-component="true"
                        className="Link--muted"
                      >
                        <svg
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-repo-forked mr-2"
                        >
                          <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                        </svg>
                        <strong>1</strong>
                        fork
                      </a>
                    </div>
                    <div className="mt-2">
                      <a
                        className="Link--muted"
                        href="https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FZipingL%2Fdna&report=ZipingL+%28user%29"
                      >
                        Report repository
                      </a>
                    </div>
                  </div>
                </div>
                <div className="BorderGrid-row">
                  <div className="BorderGrid-cell">
                    <h2
                      className="h4 mb-3"
                      data-pjax="#repo-content-pjax-container"
                      data-turbo-frame="repo-content-turbo-frame"
                    >
                      <a
                        href="https://github.com/ZipingL/dna/releases"
                        data-view-component="true"
                        className="Link--primary no-underline"
                        data-turbo-frame="repo-content-turbo-frame"
                      >
                        Releases
                      </a>
                    </h2>
                    <div className="text-small color-fg-muted">
                      No releases published
                    </div>
                  </div>
                </div>
                <div className="BorderGrid-row">
                  <div className="BorderGrid-cell">
                    <h2 className="h4 mb-3">
                      <a
                        href="https://github.com/users/ZipingL/packages?repo_name=dna"
                        data-view-component="true"
                        className="Link--primary no-underline"
                      >
                        Packages
                        <span
                          title={0}
                          hidden="hidden"
                          data-view-component="true"
                          className="Counter"
                        >
                          0
                        </span>
                      </a>
                    </h2>
                    <div className="text-small color-fg-muted">
                      No packages published <br />
                    </div>
                  </div>
                </div>
                <div className="BorderGrid-row" hidden="">
                  <div className="BorderGrid-cell" />
                </div>
                <div className="BorderGrid-row">
                  <div className="BorderGrid-cell">
                    <h2 className="h4 mb-3">Languages</h2>
                    <div className="mb-2">
                      <span data-view-component="true" className="Progress">
                        <span
                          style={{
                            backgroundColor: "#f1e05a !important",
                            width: "83.5%"
                          }}
                          itemProp="keywords"
                          aria-label="JavaScript 83.5"
                          data-view-component="true"
                          className="Progress-item color-bg-success-emphasis"
                        />
                        <span
                          style={{
                            backgroundColor: "#e34c26 !important",
                            width: "16.5%"
                          }}
                          itemProp="keywords"
                          aria-label="HTML 16.5"
                          data-view-component="true"
                          className="Progress-item color-bg-success-emphasis"
                        />
                      </span>
                    </div>
                    <ul className="list-style-none">
                      <li className="d-inline">
                        <a
                          className="d-inline-flex flex-items-center flex-nowrap Link--secondary no-underline text-small mr-3"
                          href="https://github.com/ZipingL/dna/search?l=javascript"
                          data-ga-click="Repository, language stats search click, location:repo overview"
                        >
                          <svg
                            style={{ color: "#f1e05a" }}
                            aria-hidden="true"
                            height={16}
                            viewBox="0 0 16 16"
                            version="1.1"
                            width={16}
                            data-view-component="true"
                            className="octicon octicon-dot-fill mr-2"
                          >
                            <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                          </svg>
                          <span className="color-fg-default text-bold mr-1">
                            JavaScript
                          </span>
                          <span>83.5%</span>
                        </a>
                      </li>
                      <li className="d-inline">
                        <a
                          className="d-inline-flex flex-items-center flex-nowrap Link--secondary no-underline text-small mr-3"
                          href="https://github.com/ZipingL/dna/search?l=html"
                          data-ga-click="Repository, language stats search click, location:repo overview"
                        >
                          <svg
                            style={{ color: "#e34c26" }}
                            aria-hidden="true"
                            height={16}
                            viewBox="0 0 16 16"
                            version="1.1"
                            width={16}
                            data-view-component="true"
                            className="octicon octicon-dot-fill mr-2"
                          >
                            <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                          </svg>
                          <span className="color-fg-default text-bold mr-1">
                            HTML
                          </span>
                          <span>16.5%</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </turbo-frame>
</main>


  
  );
};
