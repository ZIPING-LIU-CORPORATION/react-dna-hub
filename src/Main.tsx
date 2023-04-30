import { relative } from "path";
import React from "react";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Part1 from "./Pages/Part1";
import Part2 from "./Pages/Part2";

export const Main = () => {
  return (
    <>
      <div
        id="repository-container-header"
        className="pt-3 hide-full-screen"
        style={{
          backgroundColor: "var(--color-page-header-bg)",
        }}
        data-turbo-replace=""
      >
        <div
          className="d-flex flex-wrap flex-justify-end mb-3 px-3 px-md-4 px-lg-5"
          style={{
            gap: "1rem",
          }}
        >
          <div className="flex-auto min-width-0 width-fit mr-3">
            <div className="d-flex flex-wrap flex-items-center wb-break-word f3 text-normal">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-repo color-fg-muted mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
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

              <span></span>
              <span className="Label Label--secondary v-align-middle mr-1">
                Public
              </span>
            </div>
          </div>

          <ul
            className="pagehead-actions flex-shrink-0 d-none d-md-inline"
            style={{
              padding: "2px 0",
            }}
          >
            <li>
              <div className="float-left" data-test-selector="pin-repo-button">
                <form
                  data-turbo="false"
                  action="https://github.com/ZipingL/dna/profile_pin"
                  accept-charset="UTF-8"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="authenticity_token"
                    value="b86erMlmokhi0XzIqfenB13czspgD2_yaIj65_yCgXYr2KLrzMgfnk7cBo-B9VZCBxMJm-m50qbo_OnpyavS-A"
                    autoComplete="off"
                  />
                  <button
                    title="Pin this repository to your profile"
                    type="submit"
                    data-view-component="true"
                    className="btn-sm btn"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-pin mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.456.734a1.75 1.75 0 012.826.504l.613 1.327a3.081 3.081 0 002.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 11-1.061 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.081 3.081 0 00-1.707-2.084l-1.327-.613a1.75 1.75 0 01-.504-2.826L4.456.734zM5.92 1.866a.25.25 0 00-.404-.072L1.794 5.516a.25.25 0 00.072.404l1.328.613A4.582 4.582 0 015.73 9.63l.584 2.454a.25.25 0 00.42.12l5.47-5.47a.25.25 0 00-.12-.42L9.63 5.73a4.581 4.581 0 01-3.098-2.537L5.92 1.866z"
                      ></path>
                    </svg>
                    Pin
                  </button>
                </form>
              </div>
            </li>

            <li>
              <form
                data-action="notifications-dialog-label-toggled:notifications-list-subscription-form#handleDialogLabelToggle"
                className="f5 position-relative"
                data-catalyst=""
              >
                <details
                  className="details-reset details-overlay f5 position-relative"
                  data-target="notifications-list-subscription-form.details"
                  data-action="toggle:notifications-list-subscription-form#detailsToggled"
                >
                  <summary
                    data-hydro-click='{"event_type":"repository.click","payload":{"target":"WATCH_BUTTON","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/blob/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf","user_id":8689680}}'
                    data-hydro-click-hmac="2ea4427d67008d65c364d4268df6e78b45824d7c40c2e3fd783503c981a89904"
                    data-ga-click="Repository, click Watch settings, action:blob#show"
                    aria-label="Notification settings"
                    data-view-component="true"
                    className="btn-sm btn"
                    aria-haspopup="menu"
                    role="button"
                  >
                    <span data-menu-button="">
                      <span data-target="notifications-list-subscription-form.unwatchButtonCopy">
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          className="octicon octicon-eye"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
                          ></path>
                        </svg>
                        Unwatch
                      </span>
                      <span
                        hidden={false}
                        data-target="notifications-list-subscription-form.stopIgnoringButtonCopy"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          className="octicon octicon-bell-slash"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 014.38 1.55 5 5 0 0113 5v2.373a.75.75 0 01-1.5 0V5A3.5 3.5 0 008 1.5zM4.182 4.31L1.19 2.143a.75.75 0 10-.88 1.214L3 5.305v2.642a.25.25 0 01-.042.139L1.255 10.64A1.518 1.518 0 002.518 13h11.108l1.184.857a.75.75 0 10.88-1.214l-1.375-.996a1.196 1.196 0 00-.013-.01L4.198 4.321a.733.733 0 00-.016-.011zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01.015.015 0 00.005.012.017.017 0 00.006.004l.007.001h9.037zM8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"
                          ></path>
                        </svg>
                        Stop ignoring
                      </span>
                      <span
                        hidden={false}
                        data-target="notifications-list-subscription-form.watchButtonCopy"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          className="octicon octicon-eye"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
                          ></path>
                        </svg>
                        Watch
                      </span>
                    </span>
                    <span
                      id="repo-notifications-counter"
                      data-target="notifications-list-subscription-form.socialCount"
                      data-pjax-replace="true"
                      data-turbo-replace="true"
                      title="1"
                      data-view-component="true"
                      className="Counter"
                    >
                      1
                    </span>
                    <span className="dropdown-caret"></span>
                  </summary>
                  <nav
                    className="SelectMenu"
                    role="menu"
                    data-target="notifications-list-subscription-form.menu"
                    data-focus-trap="suspended"
                  >
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                    <div className="SelectMenu-modal notifications-component-menu-modal">
                      <header className="SelectMenu-header">
                        <h3 className="SelectMenu-title">Notifications</h3>
                        <button
                          className="SelectMenu-closeButton"
                          type="button"
                          aria-label="Close menu"
                          data-action="click:notifications-list-subscription-form#closeMenu"
                        >
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            className="octicon octicon-x"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                            ></path>
                          </svg>
                        </button>
                      </header>

                      <div className="SelectMenu-list">
                        <form
                          data-target="notifications-list-subscription-form.form"
                          data-action="submit:notifications-list-subscription-form#submitForm"
                          data-turbo="false"
                          action="https://github.com/notifications/subscribe"
                          accept-charset="UTF-8"
                          method="post"
                        >
                          <input
                            type="hidden"
                            name="authenticity_token"
                            value="FTjCQ-3UKZ2_Ji4-vbIgdDVq5--cskLdgHUAxm1htzPx0d1rDb2nzKfTlZ6mrSdbuUrIC7e3dOQqGNtaEd6aGw"
                            autoComplete="off"
                          />

                          <input
                            type="hidden"
                            name="repository_id"
                            value="488696119"
                          />

                          <button
                            type="submit"
                            name="do"
                            value="included"
                            className="SelectMenu-item flex-items-start"
                            role="menuitemradio"
                            aria-checked="false"
                            data-targets="notifications-list-subscription-form.subscriptionButtons"
                          >
                            <span className="f5">
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                ></path>
                              </svg>
                            </span>
                            <div>
                              <div className="f5 text-bold">
                                Participating and @mentions
                              </div>
                              <div className="text-small color-fg-muted text-normal pb-1">
                                Only receive notifications from this repository
                                when participating or @mentioned.
                              </div>
                            </div>
                          </button>

                          <button
                            type="submit"
                            name="do"
                            value="subscribed"
                            className="SelectMenu-item flex-items-start"
                            role="menuitemradio"
                            aria-checked="true"
                            data-targets="notifications-list-subscription-form.subscriptionButtons"
                          >
                            <span className="f5">
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                ></path>
                              </svg>
                            </span>
                            <div>
                              <div className="f5 text-bold">All Activity</div>
                              <div className="text-small color-fg-muted text-normal pb-1">
                                Notified of all notifications on this
                                repository.
                              </div>
                            </div>
                          </button>

                          <button
                            type="submit"
                            name="do"
                            value="ignore"
                            className="SelectMenu-item flex-items-start"
                            role="menuitemradio"
                            aria-checked="false"
                            data-targets="notifications-list-subscription-form.subscriptionButtons"
                          >
                            <span className="f5">
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                ></path>
                              </svg>
                            </span>
                            <div>
                              <div className="f5 text-bold">Ignore</div>
                              <div className="text-small color-fg-muted text-normal pb-1">
                                Never be notified.
                              </div>
                            </div>
                          </button>
                        </form>
                        <button
                          className="SelectMenu-item flex-items-start pr-3"
                          type="button"
                          role="menuitemradio"
                          data-target="notifications-list-subscription-form.customButton"
                          data-action="click:notifications-list-subscription-form#openCustomDialog"
                          aria-haspopup="true"
                          aria-checked="false"
                        >
                          <span className="f5">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                              ></path>
                            </svg>
                          </span>
                          <div>
                            <div className="d-flex flex-items-start flex-justify-between">
                              <div className="f5 text-bold">Custom</div>
                              <div className="f5 pr-1">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  className="octicon octicon-arrow-right"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="text-small color-fg-muted text-normal pb-1">
                              Select events you want to be notified of in
                              addition to participating and @mentions.
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                  </nav>

                  <div
                    id="details-dialog"
                    className="notifications-component-dialog"
                    data-target="notifications-list-subscription-form.customDialog"
                    aria-label="Custom dialog"
                    hidden={false}
                    role="dialog"
                    aria-modal="true"
                  >
                    <div className="SelectMenu-modal notifications-component-dialog-modal overflow-visible">
                      <form
                        data-target="notifications-list-subscription-form.customform"
                        data-action="submit:notifications-list-subscription-form#submitCustomForm"
                        data-turbo="false"
                        action="https://github.com/notifications/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="krAJhlRkKq61LhJhCu1xYcJ5_KQc9ZntV6tKXpDSijB2WRautA2k_63bqcER8nZOTlnTQDfwr9T9xpHC7G2nGA"
                          autoComplete="off"
                        />

                        <input
                          type="hidden"
                          name="repository_id"
                          value="488696119"
                        />

                        <header className="d-sm-none SelectMenu-header pb-0 border-bottom-0 px-2 px-sm-3">
                          <h1 className="f3 SelectMenu-title d-inline-flex">
                            <button
                              className="color-bg-default border-0 px-2 py-0 m-0 Link--secondary f5"
                              aria-label="Return to menu"
                              type="button"
                              data-action="click:notifications-list-subscription-form#closeCustomDialog"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                className="octicon octicon-arrow-left"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"
                                ></path>
                              </svg>
                            </button>
                            Custom
                          </h1>
                        </header>

                        <header className="d-none d-sm-flex flex-items-start pt-1">
                          <button
                            className="border-0 px-2 pt-1 m-0 Link--secondary f5"
                            style={{
                              backgroundColor: "transparent",
                            }}
                            aria-label="Return to menu"
                            type="button"
                            data-action="click:notifications-list-subscription-form#closeCustomDialog"
                          >
                            <svg
                              style={{
                                position: "relative",
                                left: "2px",
                                top: "1px",
                              }}
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              className="octicon octicon-arrow-left"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"
                              ></path>
                            </svg>
                          </button>

                          <h1 className="pt-1 pr-4 pb-0 pl-0 f5 text-bold">
                            Custom
                          </h1>
                        </header>

                        <fieldset>
                          <legend>
                            <div className="text-small color-fg-muted pt-0 pr-3 pb-3 pl-6 pl-sm-5 border-bottom mb-3">
                              Select events you want to be notified of in
                              addition to participating and @mentions.
                            </div>
                          </legend>
                          <div data-target="notifications-list-subscription-form.labelInputs"></div>
                          <div className="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                            <label className="f5 text-normal">
                              <input
                                type="checkbox"
                                name="thread_types[]"
                                value="Issue"
                                data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                                data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                              />
                              Issues
                            </label>
                          </div>
                          <div className="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                            <label className="f5 text-normal">
                              <input
                                type="checkbox"
                                name="thread_types[]"
                                value="PullRequest"
                                data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                                data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                              />
                              Pull requests
                            </label>
                          </div>
                          <div className="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                            <label className="f5 text-normal">
                              <input
                                type="checkbox"
                                name="thread_types[]"
                                value="Release"
                                data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                                data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                              />
                              Releases
                            </label>
                          </div>
                          <div className="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                            <label className="f5 text-normal">
                              <input
                                type="checkbox"
                                name="thread_types[]"
                                value="Discussion"
                                data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                                data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                              />
                              Discussions
                            </label>

                            <span
                              className="tooltipped tooltipped-nw mr-2 p-1 float-right"
                              aria-label="Discussions are not enabled for this repo"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                className="octicon octicon-info color-fg-muted"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div className="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                            <label className="f5 text-normal">
                              <input
                                type="checkbox"
                                name="thread_types[]"
                                value="SecurityAlert"
                                data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                                data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                              />
                              Security alerts
                            </label>
                          </div>
                        </fieldset>
                        <div className="pt-2 pb-3 px-3 d-flex flex-justify-start flex-row-reverse">
                          <button
                            name="do"
                            value="custom"
                            data-target="notifications-list-subscription-form.customSubmit"
                            disabled={true}
                            type="submit"
                            data-view-component="true"
                            className="btn-primary btn-sm btn ml-2"
                          >
                            Apply
                          </button>

                          <button
                            data-action="click:notifications-list-subscription-form#resetForm"
                            data-close-dialog=""
                            type="button"
                            data-view-component="true"
                            className="btn-sm btn"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="notifications-component-dialog-overlay"></div>
                </details>
              </form>
            </li>

            <li>
              <div data-view-component="true" className="BtnGroup">
                <a
                  href="https://github.com/ZipingL/dna/fork"
                  data-hydro-click='{"event_type":"repository.click","payload":{"target":"FORK_BUTTON","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/blob/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf","user_id":8689680}}'
                  data-hydro-click-hmac="f480d14c3dbd52925df536abae92b5fbb0af117d6c4ac007af9074da8033e5cc"
                  data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                  aria-label="Fork your own copy of ZipingL/dna"
                  data-view-component="true"
                  className="btn-sm btn BtnGroup-item"
                >
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-repo-forked mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    ></path>
                  </svg>
                  Fork
                  <span
                    id="repo-network-counter"
                    data-pjax-replace="true"
                    data-turbo-replace="true"
                    title="0"
                    data-view-component="true"
                    className="Counter"
                  >
                    0
                  </span>
                </a>
                <details
                  data-group_item="true"
                  id="my-forks-menu-488696119"
                  data-view-component="true"
                  className="details-reset details-overlay BtnGroup-parent d-inline-block position-relative"
                >
                  <summary
                    aria-label="See your forks of this repository"
                    data-view-component="true"
                    className="btn-sm btn BtnGroup-item px-2 float-none"
                    aria-haspopup="menu"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-triangle-down"
                    >
                      <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                    </svg>
                  </summary>
                  <div
                    className="SelectMenu right-0"
                    data-src="/ZipingL/dna/my_forks_menu_content?can_fork=true"
                    role="menu"
                    data-focus-trap="suspended"
                  >
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                    <div className="SelectMenu-modal">
                      <button
                        className="SelectMenu-closeButton position-absolute right-0 m-2"
                        type="button"
                        aria-label="Close menu"
                        data-toggle-for="details-055f1f"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          className="octicon octicon-x"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="filter-menu-055f1f"
                        className="d-flex flex-column flex-1 overflow-hidden"
                      >
                        <div className="SelectMenu-list">
                          <div
                            className="SelectMenu-loading"
                            aria-label="Loading"
                          >
                            <svg
                              style={{
                                boxSizing: "content-box",
                                color: "var(--color-icon-primary)",
                              }}
                              width="32"
                              height="32"
                              viewBox="0 0 16 16"
                              fill="none"
                              data-view-component="true"
                              className="anim-rotate"
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="7"
                                stroke="currentColor"
                                stroke-opacity="0.25"
                                stroke-width="2"
                                vectorEffect="non-scaling-stroke"
                              ></circle>
                              <path
                                d="M15 8a7.002 7.002 0 00-7-7"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                vectorEffect="non-scaling-stroke"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                  </div>
                </details>
              </div>
            </li>

            <li>
              <template className="js-unstar-confirmation-dialog-template"></template>

              <div
                data-view-component="true"
                className="js-toggler-container js-social-container starring-container on BtnGroup d-flex"
              >
                <form
                  className="starred js-social-form BtnGroup-parent flex-auto js-deferred-toggler-target"
                  data-turbo="false"
                  action="https://github.com/ZipingL/dna/unstar"
                  accept-charset="UTF-8"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="authenticity_token"
                    value="0CTW3-2mBawO-B4y-Kl73A6GJZDj0eCAy8qwCC--kkqxXHX0SPrWNSEg5A06LFRcB4zjaPCKYApJnEC_2R52uw"
                    autoComplete="off"
                  />
                  <input
                    type="hidden"
                    value="iKAkw0Rxgw5mBLPC74DwdNi-K9P1T26ieNeG5jZtLCPp2Ifo4S1Ql0ncSf0tBd_00bTtK-YU7ij6gXZRwM3I0g"
                    data-csrf="true"
                    className="js-confirm-csrf-token"
                  />
                  <input type="hidden" name="context" value="repository" />
                  <button
                    data-hydro-click='{"event_type":"repository.click","payload":{"target":"UNSTAR_BUTTON","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/blob/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf","user_id":8689680}}'
                    data-hydro-click-hmac="a723d4e604e2351c7be22ad28909d3375baabee7aad2a2004f1c54b87594a1c2"
                    data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar"
                    aria-label="Unstar this repository (1)"
                    type="submit"
                    data-view-component="true"
                    className="rounded-left-2 border-right-0 btn-sm btn BtnGroup-item"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-star-fill starred-button-icon d-inline-block mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"
                      ></path>
                    </svg>
                    <span data-view-component="true" className="d-inline">
                      Starred
                    </span>
                    <span
                      id="repo-stars-counter-unstar"
                      aria-label="1 user starred this repository"
                      data-singular-suffix="user starred this repository"
                      data-plural-suffix="users starred this repository"
                      data-turbo-replace="true"
                      title="1"
                      data-view-component="true"
                      className="Counter js-social-count"
                    >
                      1
                    </span>
                  </button>
                </form>
                <form
                  className="unstarred js-social-form BtnGroup-parent flex-auto"
                  data-turbo="false"
                  action="https://github.com/ZipingL/dna/star"
                  accept-charset="UTF-8"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="authenticity_token"
                    value="tzzDc9umEaBuJujrF5xvQaa8a2uJODWCBDvuQCPEcfNpOLNwnKM6gMWHPIZ0CThn64KLoiQRZAY14pGTCx1tTQ"
                    autoComplete="off"
                  />
                  <input type="hidden" name="context" value="repository" />
                  <button
                    data-hydro-click='{"event_type":"repository.click","payload":{"target":"STAR_BUTTON","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/blob/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf","user_id":8689680}}'
                    data-hydro-click-hmac="9659aad0744535d5f2e7b3cf105fdeabeb497405da05b4cfa24faca499023366"
                    data-ga-click="Repository, click star button, action:blob#show; text:Star"
                    aria-label="Star this repository (1)"
                    type="submit"
                    data-view-component="true"
                    className="js-toggler-target rounded-left-2 btn-sm btn BtnGroup-item"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-star d-inline-block mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                      ></path>
                    </svg>
                    <span data-view-component="true" className="d-inline">
                      Star
                    </span>
                    <span
                      id="repo-stars-counter-star"
                      aria-label="1 user starred this repository"
                      data-singular-suffix="user starred this repository"
                      data-plural-suffix="users starred this repository"
                      data-turbo-replace="true"
                      title="1"
                      data-view-component="true"
                      className="Counter js-social-count"
                    >
                      1
                    </span>
                  </button>
                </form>
                <details
                  id="details-user-list-488696119"
                  data-view-component="true"
                  className="details-reset details-overlay BtnGroup-parent js-user-list-menu d-inline-block position-relative"
                >
                  <summary
                    aria-label="Add this repository to a list"
                    data-view-component="true"
                    className="btn-sm btn BtnGroup-item px-2 float-none"
                    aria-haspopup="menu"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-triangle-down"
                    >
                      <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                    </svg>
                  </summary>
                  <details
                    className="SelectMenu right-0"
                    data-src="/ZipingL/dna/lists"
                    role="menu"
                    data-focus-trap="suspended"
                  >
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                    <div className="SelectMenu-modal">
                      <button
                        className="SelectMenu-closeButton position-absolute right-0 m-2"
                        type="button"
                        aria-label="Close menu"
                        data-toggle-for="details-f0eed0"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          className="octicon octicon-x"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="filter-menu-f0eed0"
                        className="d-flex flex-column flex-1 overflow-hidden"
                      >
                        <div className="SelectMenu-list">
                          <div
                            className="SelectMenu-loading"
                            aria-label="Loading"
                          >
                            <svg
                              style={{
                                boxSizing: "content-box",
                                color: "var(--color-icon-primary)",
                              }}
                              width="32"
                              height="32"
                              viewBox="0 0 16 16"
                              fill="none"
                              data-view-component="true"
                              className="anim-rotate"
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="7"
                                stroke="currentColor"
                                stroke-opacity="0.25"
                                stroke-width="2"
                                vectorEffect="non-scaling-stroke"
                              ></circle>
                              <path
                                d="M15 8a7.002 7.002 0 00-7-7"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                vectorEffect="non-scaling-stroke"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="sentinel"
                      tabIndex={0}
                      aria-hidden="true"
                    ></span>
                  </details>
                </details>
              </div>
            </li>
          </ul>
        </div>

        <div id="responsive-meta-container" data-turbo-replace=""></div>

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
                href="https://github.com/ZipingL/dna"
                data-tab-item="i0code-tab"
                data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /ZipingL/dna"
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
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
                  ></path>
                </svg>
                <span data-content="Code">Code</span>
                <span
                  id="code-repo-tab-count"
                  data-pjax-replace=""
                  data-turbo-replace=""
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
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
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                  ></path>
                </svg>
                <span data-content="Issues">Issues</span>
                <span
                  id="issues-repo-tab-count"
                  data-pjax-replace=""
                  data-turbo-replace=""
                  title="0"
                  hidden={true}
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
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                  ></path>
                </svg>
                <span data-content="Pull requests">Pull requests</span>
                <span
                  id="pull-requests-repo-tab-count"
                  data-pjax-replace=""
                  data-turbo-replace=""
                  title="0"
                  hidden={true}
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
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
                  ></path>
                </svg>
                <span data-content="Actions">Actions</span>
                <span
                  id="actions-repo-tab-count"
                  data-pjax-replace=""
                  data-turbo-replace=""
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
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
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
                  ></path>
                </svg>
                <span data-content="Projects">Projects</span>
                <span
                  id="projects-repo-tab-count"
                  data-pjax-replace=""
                  data-turbo-replace=""
                  title="0"
                  hidden={true}
                  data-view-component="true"
                  className="Counter"
                >
                  0
                </span>
              </a>
            </li>
            <li data-view-component="true" className="d-inline-flex">
              <a
                id="wiki-tab"
                href="https://github.com/ZipingL/dna/wiki"
                data-tab-item="i5wiki-tab"
                data-selected-links="repo_wiki /ZipingL/dna/wiki"
                data-pjax="#repo-content-pjax-container"
                data-turbo-frame="repo-content-turbo-frame"
                data-hotkey="g w"
                data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Wiki","target":"UNDERLINE_NAV.TAB"}'
                data-view-component="true"
                className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                  ></path>
                </svg>
                <span data-content="Wiki">Wiki</span>
                <span
                  id="wiki-repo-tab-count"
                  data-pjax-replace=""
                  data-turbo-replace=""
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
              </a>
            </li>
            <li data-view-component="true" className="d-inline-flex">
              <a
                id="security-tab"
                href="https://github.com/ZipingL/dna/security"
                data-tab-item="i6security-tab"
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
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
                  ></path>
                </svg>
                <span data-content="Security">Security</span>
              </a>
            </li>
            <li data-view-component="true" className="d-inline-flex">
              <a
                id="insights-tab"
                href="https://github.com/ZipingL/dna/pulse"
                data-tab-item="i7insights-tab"
                data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /ZipingL/dna/pulse"
                data-pjax="#repo-content-pjax-container"
                data-turbo-frame="repo-content-turbo-frame"
                data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Insights","target":"UNDERLINE_NAV.TAB"}'
                data-view-component="true"
                className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                  ></path>
                </svg>
                <span data-content="Insights">Insights</span>
                <span
                  id="insights-repo-tab-count"
                  data-pjax-replace=""
                  data-turbo-replace=""
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
              </a>
            </li>
            <li data-view-component="true" className="d-inline-flex">
              <a
                id="settings-tab"
                href="https://github.com/ZipingL/dna/settings"
                data-tab-item="i8settings-tab"
                data-selected-links="repo_settings repo_branch_settings collaborators hooks integration_installations repo_keys_settings issue_template_editor secrets_settings_actions secrets_settings_codespaces secrets_settings_dependabot security_analysis key_links_settings repo_actions_settings notifications repository_actions_settings_runners repository_environments interaction_limits repository_actions_settings_general repository_actions_settings_add_new_runner repo_pages_settings repo_announcements /ZipingL/dna/settings"
                data-pjax="#repo-content-pjax-container"
                data-turbo-frame="repo-content-turbo-frame"
                data-analytics-event='{"category":"Underline navbar","action":"Click tab","label":"Settings","target":"UNDERLINE_NAV.TAB"}'
                data-view-component="true"
                className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-gear UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span data-content="Settings">Settings</span>
                <span
                  id="settings-repo-tab-count"
                  data-pjax-replace=""
                  data-turbo-replace=""
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
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
              <summary role="button" data-view-component="true">
                <div className="UnderlineNav-item mr-0 border-0">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-kebab-horizontal"
                  >
                    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  <span className="sr-only">More</span>
                </div>
              </summary>
              <div data-view-component="true">
                <details
                  role="menu"
                  data-view-component="true"
                  className="dropdown-menu dropdown-menu-sw"
                  data-focus-trap="active"
                >
                  <span
                    className="sentinel"
                    tabIndex={0}
                    aria-hidden="true"
                  ></span>
                  <span
                    className="sentinel"
                    tabIndex={0}
                    aria-hidden="true"
                  ></span>

                  <ul>
                    <li data-menu-item="i0code-tab" hidden={false}>
                      <a
                        role="menuitem"
                        className="js-selected-navigation-item selected dropdown-item"
                        aria-current="page"
                        data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /ZipingL/dna"
                        href="https://github.com/ZipingL/dna"
                      >
                        Code
                      </a>
                    </li>
                    <li data-menu-item="i1issues-tab" hidden={false}>
                      <a
                        role="menuitem"
                        className="js-selected-navigation-item dropdown-item"
                        data-selected-links="repo_issues repo_labels repo_milestones /ZipingL/dna/issues"
                        href="https://github.com/ZipingL/dna/issues"
                      >
                        Issues
                      </a>
                    </li>
                    <li data-menu-item="i2pull-requests-tab" hidden={false}>
                      <a
                        role="menuitem"
                        className="js-selected-navigation-item dropdown-item"
                        data-selected-links="repo_pulls checks /ZipingL/dna/pulls"
                        href="https://github.com/ZipingL/dna/pulls"
                      >
                        Pull requests
                      </a>
                    </li>
                    <li data-menu-item="i3actions-tab" hidden={false}>
                      <a
                        role="menuitem"
                        className="js-selected-navigation-item dropdown-item"
                        data-selected-links="repo_actions /ZipingL/dna/actions"
                        href="https://github.com/ZipingL/dna/actions"
                      >
                        Actions
                      </a>
                    </li>
                    <li data-menu-item="i4projects-tab" hidden={false}>
                      <a
                        role="menuitem"
                        className="js-selected-navigation-item dropdown-item"
                        data-selected-links="repo_projects new_repo_project repo_project /ZipingL/dna/projects"
                        href="https://github.com/ZipingL/dna/projects"
                      >
                        Projects
                      </a>
                    </li>
                    <li data-menu-item="i5wiki-tab" hidden={false}>
                      <a
                        role="menuitem"
                        className="js-selected-navigation-item dropdown-item"
                        data-selected-links="repo_wiki /ZipingL/dna/wiki"
                        href="https://github.com/ZipingL/dna/wiki"
                      >
                        Wiki
                      </a>
                    </li>
                    <li data-menu-item="i6security-tab" hidden={false}>
                      <a
                        role="menuitem"
                        className="js-selected-navigation-item dropdown-item"
                        data-selected-links="security overview alerts policy token_scanning code_scanning /ZipingL/dna/security"
                        href="https://github.com/ZipingL/dna/security"
                      >
                        Security
                      </a>
                    </li>
                    <li data-menu-item="i7insights-tab" hidden={false}>
                      <a
                        role="menuitem"
                        className="js-selected-navigation-item dropdown-item"
                        data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /ZipingL/dna/pulse"
                        href="https://github.com/ZipingL/dna/pulse"
                      >
                        Insights
                      </a>
                    </li>
                    <li data-menu-item="i8settings-tab" hidden={false}>
                      <a
                        role="menuitem"
                        className="js-selected-navigation-item dropdown-item"
                        data-selected-links="repo_settings repo_branch_settings collaborators hooks integration_installations repo_keys_settings issue_template_editor secrets_settings_actions secrets_settings_codespaces secrets_settings_dependabot security_analysis key_links_settings repo_actions_settings notifications repository_actions_settings_runners repository_environments interaction_limits repository_actions_settings_general repository_actions_settings_add_new_runner repo_pages_settings repo_announcements /ZipingL/dna/settings"
                        href="https://github.com/ZipingL/dna/settings"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>

                  <span
                    className="sentinel"
                    tabIndex={0}
                    aria-hidden="true"
                  ></span>
                  <span
                    className="sentinel"
                    tabIndex={0}
                    aria-hidden="true"
                  ></span>
                </details>
              </div>
            </details>
          </div>
        </nav>
      </div>

      <div id="repo-content-pjax-container" className="repository-content">
        <a
          href="https://github.dev/"
          className="d-none js-github-dev-shortcut"
          data-hotkey="."
        >
          Open in github.dev
        </a>
        <a
          href="https://github.dev/"
          className="d-none js-github-dev-new-tab-shortcut"
          data-hotkey="Shift+.,Shift+>,>"
          target="_blank"
          rel="noreferrer noopener"
        >
          Open in a new github.dev tab
        </a>

        <div className="clearfix container-xl px-3 px-md-4 px-lg-5 mt-4">
          <div data-test-selector="blob-container">
            <a
              className="d-none js-permalink-shortcut"
              data-hotkey="y"
              href="https://github.com/ZipingL/dna/tree/master"
            >
              Permalink
            </a>

            <div className="d-flex flex-items-start flex-shrink-0 pb-3 flex-wrap flex-md-nowrap flex-justify-between flex-md-justify-start">
              <div className="position-relative">
                <details
                  className="js-branch-select-menu details-reset details-overlay mr-0 mb-0"
                  id="branch-select-menu"
                  data-hydro-click-payload='{"event_type":"repository.click","payload":{"target":"REFS_SELECTOR_MENU","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/blob/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf","user_id":8689680}}'
                  data-hydro-click-hmac="278285aecca2575737f3b33c6903522811aa254f309ffc0469f766f6ac48deb0"
                >
                  <summary
                    className="btn css-truncate"
                    data-hotkey="w"
                    title="Switch branches or tags"
                  >
                    <svg
                      data-text="gray"
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-git-branch"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                      ></path>
                    </svg>
                    <span className="css-truncate-target" data-menu-button="">
                      Puppet Master
                    </span>
                    <span className="dropdown-caret"></span>
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
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            className="octicon octicon-x"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                            ></path>
                          </svg>
                        </button>
                      </header>

                      <div
                        title="Filter branches/tags"
                        data-action="tab-container-change:input-demux#storeInput tab-container-changed:input-demux#updateInput"
                        data-catalyst=""
                      >
                        <div
                          className="d-flex flex-column js-branches-tags-tabs"
                          style={{
                            minHeight: 0,
                          }}
                        >
                          <div className="SelectMenu-filter">
                            <input
                              data-target="input-demux.source"
                              id="context-commitish-filter-field"
                              className="SelectMenu-input form-control"
                              aria-owns="ref-list-branches"
                              data-controls-ref-menu-id="ref-list-branches"
                              autoFocus={false}
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
                            tabIndex={0}
                            className="d-flex flex-column flex-auto overflow-auto"
                          >
                            <div
                              data-type="branch"
                              data-targets="input-demux.sinks"
                              data-action="
                      input-entered:ref-selector#inputEntered
                      tab-selected:ref-selector#tabSelected
                      focus-list:ref-selector#focusFirstListMember
                    "
                              query-endpoint="/ZipingL/dna/refs"
                              cache-key="v0:1663929981.391472"
                              current-committish="bWFzdGVy"
                              default-branch="bWFpbg=="
                              name-with-owner="WmlwaW5nTC9kbmE="
                              prefetch-on-mouseover=""
                              data-catalyst=""
                            >
                              <template data-target="ref-selector.fetchFailedTemplate">
                                <div
                                  style={{
                                    overflowY: "auto",
                                    zIndex: 100,
                                    height: "350px",
                                  }}
                                  className="SelectMenu-message"
                                  data-index="{{ index }}"
                                >
                                  <div
                                    style={{
                                      fontSize: "7.5pt",
                                      textAlign: "justify",
                                      lineHeight: 0.85,
                                      overflowY: "scroll",
                                      height: "328px",
                                    }}
                                  >
                                    <b>[C]</b> Could not find any sound
                                    leadership branching out into actions for
                                    Ziping Liu's concern resolutions at Amazon
                                    Corporate.
                                  </div>
                                </div>
                              </template>

                              <template data-target="ref-selector.noMatchTemplate">
                                <div className="SelectMenu-message">
                                  Nothing to show
                                </div>
                              </template>

                              <div
                                data-target="ref-selector.listContainer"
                                role="menu"
                                className="SelectMenu-list"
                                data-pjax="#repo-content-pjax-container"
                                data-turbo-frame="repo-content-turbo-frame"
                                style={{
                                  maxHeight: "269px",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    overflow: "hidden",
                                    width: "100%",
                                    minHeight: "100%",
                                    willChange: "transform",
                                    height: "108px",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      height: "100%",
                                      width: "100%",
                                      overflow: "visible",
                                    }}
                                  >
                                    <a
                                      href="https://github.com/ZipingL/dna/tree/main"
                                      className="SelectMenu-item"
                                      role="menuitemradio"
                                      rel="nofollow"
                                      aria-checked="false"
                                      data-index="0"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="16"
                                        data-view-component="true"
                                        className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                        ></path>
                                      </svg>
                                      <span className="flex-1 css-truncate css-truncate-overflow">
                                        main
                                      </span>
                                      <span className="Label Label--secondary flex-self-start">
                                        default
                                      </span>
                                    </a>

                                    <a
                                      href="https://github.com/ZipingL/dna/tree/master"
                                      className="SelectMenu-item"
                                      role="menuitemradio"
                                      rel="nofollow"
                                      aria-checked="true"
                                      data-index="1"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="16"
                                        data-view-component="true"
                                        className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                        ></path>
                                      </svg>
                                      <span className="flex-1 css-truncate css-truncate-overflow">
                                        master
                                      </span>
                                      <span
                                        hidden={false}
                                        className="Label Label--secondary flex-self-start"
                                      >
                                        default
                                      </span>
                                    </a>
                                    <span></span>
                                  </div>
                                </div>
                              </div>

                              <template data-target="ref-selector.itemTemplate">
                                {/* <a
                                      href="https://github.com/ZipingL/dna/tree/{{ urlEncodedRefName }}"
                                      className="SelectMenu-item"
                                      role="menuitemradio"
                                      rel="nofollow noopener noreferrer"
                                      aria-checked={{isCurrent}}
                                      data-index={{index}}
                                    >
                                      <svg
                                        aria-hidden="true"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="16"
                                        data-view-component="true"
                                        className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                        ></path>
                                      </svg>
                                      <span
                                        className="flex-1 css-truncate css-truncate-overflow {{ isFilteringClass }}"
                                        >{{ refName }}</span
                                      >
                                      <span
                                        hidden="{{ isNotDefault }}"
                                        className="Label Label--secondary flex-self-start"
                                        >default</span
                                      >
                                    </a> */}
                              </template>

                              <footer className="SelectMenu-footer">
                                <a href="/ZipingL/dna/branches">
                                  View all branches
                                </a>
                              </footer>
                            </div>
                          </div>

                          <div
                            role="tabpanel"
                            id="tags-menu"
                            data-filter-placeholder="Find a tag"
                            tabIndex={undefined}
                            hidden={false}
                            className="d-flex flex-column flex-auto overflow-auto"
                          >
                            <div
                              data-type="tag"
                              data-action="
                      input-entered:ref-selector#inputEntered
                      tab-selected:ref-selector#tabSelected
                      focus-list:ref-selector#focusFirstListMember
                    "
                              data-targets="input-demux.sinks"
                              query-endpoint="/ZipingL/dna/refs"
                              cache-key="v0:1663929981.391472"
                              current-committish="bWFzdGVy"
                              default-branch="bWFpbg=="
                              name-with-owner="WmlwaW5nTC9kbmE="
                              data-catalyst=""
                            >
                              <template data-target="ref-selector.fetchFailedTemplate">
                                <div
                                  className="SelectMenu-message"
                                  data-index="{{ index }}"
                                >
                                  Could not load tags
                                </div>
                              </template>

                              <template data-target="ref-selector.noMatchTemplate">
                                <div
                                  className="SelectMenu-message"
                                  data-index="{{ index }}"
                                >
                                  Nothing to show
                                </div>
                              </template>

                              <template data-target="ref-selector.itemTemplate">
                                {/* <a
                                      href="https://github.com/ZipingL/dna/tree/{{ urlEncodedRefName }}"
                                      className="SelectMenu-item"
                                      role="menuitemradio"
                                      rel="nofollow"
                                      aria-checked="{{ isCurrent }}"
                                      data-index="{{ index }}"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="16"
                                        data-view-component="true"
                                        className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                        ></path>
                                      </svg>
                                      <span
                                        className="flex-1 css-truncate css-truncate-overflow {{ isFilteringClass }}"
                                        >{{ refName }}</span
                                      >
                                      <span
                                        hidden="{{ isNotDefault }}"
                                        className="Label Label--secondary flex-self-start"
                                        >default</span
                                      >
                                    </a> */}
                              </template>

                              <div
                                data-target="ref-selector.listContainer"
                                role="menu"
                                className="SelectMenu-list"
                                data-pjax="#repo-content-pjax-container"
                                data-turbo-frame="repo-content-turbo-frame"
                              >
                                <div
                                  className="SelectMenu-loading pt-3 pb-0 overflow-hidden"
                                  aria-label="Menu is loading"
                                >
                                  <svg
                                    style={{
                                      boxSizing: "content-box",
                                      color: "var(--color-icon-primary)",
                                    }}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    data-view-component="true"
                                    className="anim-rotate"
                                  >
                                    <circle
                                      cx="8"
                                      cy="8"
                                      r="7"
                                      stroke="currentColor"
                                      stroke-opacity="0.25"
                                      stroke-width="2"
                                      vectorEffect="non-scaling-stroke"
                                    ></circle>
                                    <path
                                      d="M15 8a7.002 7.002 0 00-7-7"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <footer className="SelectMenu-footer">
                                <a href="/ZipingL/dna/tags">View all tags</a>
                              </footer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              <h2
                id="blob-path"
                className="breadcrumb flex-auto flex-self-center min-width-0 text-normal mx-2 width-full width-md-auto flex-order-1 flex-md-order-none mt-3 mt-md-0"
              >
                <span className="js-repo-root text-bold">
                  <span className="js-path-segment d-inline-block wb-break-all">
                    <a
                      data-pjax="#repo-content-pjax-container"
                      data-turbo-frame="repo-content-turbo-frame"
                      rel="nofollow"
                      href="https://github.com/ZipingL/dna/tree/master"
                    >
                      <span>dna</span>
                    </a>
                  </span>
                </span>
                <span className="separator">/</span>
                <strong className="final-path">
                  23andMe_Ancestry_Book.pdf
                </strong>
              </h2>
              <a
                href="https://github.com/ZipingL/dna/tree/master"
                data-pjax=""
                data-hotkey="t"
                data-view-component="true"
                className="btn mr-2 d-none d-md-block"
              >
                Go to file
              </a>
              <details
                id="blob-more-options-details"
                data-view-component="true"
                className="details-overlay details-reset position-relative"
              >
                <summary
                  role="button"
                  data-view-component="true"
                  className="btn"
                >
                  <svg
                    aria-label="More options"
                    role="img"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-kebab-horizontal"
                  >
                    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </summary>
                <div data-view-component="true">
                  <ul className="dropdown-menu dropdown-menu-sw">
                    <li className="d-block d-md-none">
                      <a
                        className="dropdown-item d-flex flex-items-baseline"
                        data-hydro-click='{"event_type":"repository.click","payload":{"target":"FIND_FILE_BUTTON","repository_id":488696119,"originating_url":"https://github.com/ZipingL/dna/tree/master}}'
                        data-hydro-click-hmac="b437b0873de13325889b13d2bb7e7c09a8063207f0c649add9a1a8033c426247"
                        data-ga-click="Repository, find file, location:repo overview"
                        data-hotkey="t"
                        data-pjax="true"
                        href="https://github.com/ZipingL/dna/find/00f5b4f9b83df69b90d5505d5782c3cf3128640e"
                      >
                        <span className="flex-auto">Go to file</span>0
                        <span
                          className="text-small color-fg-muted"
                          aria-hidden="true"
                        >
                          T
                        </span>
                      </a>
                    </li>
                    <li data-toggle-for="blob-more-options-details">
                      <button
                        data-toggle-for="jumpto-line-details-dialog"
                        type="button"
                        data-view-component="true"
                        className="dropdown-item btn-link"
                      >
                        <span className="d-flex flex-items-baseline">
                          <span className="flex-auto">Go to line</span>
                          <span
                            className="text-small color-fg-muted"
                            aria-hidden="true"
                          >
                            L
                          </span>
                        </span>
                      </button>
                    </li>
                    <li className="dropdown-divider" role="none"></li>
                    <li>
                      <div
                        id="clipboard-copy"
                        data-toggle-for="blob-more-options-details"
                        aria-label="Copy path"
                        data-value="23andMe_Ancestry_Book.pdf"
                        data-view-component="true"
                        className="dropdown-item cursor-pointer"
                        tabIndex={0}
                        role="button"
                      >
                        Copy path
                      </div>
                    </li>
                    <li>
                      <div
                        data-toggle-for="blob-more-options-details"
                        aria-label="Copy permalink"
                        data-value="https://github.com/ZipingL/dna/blob/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf"
                        data-view-component="true"
                        className="dropdown-item cursor-pointer"
                        tabIndex={0}
                        role="button"
                        id="clipboard-copy"
                      >
                        <span className="d-flex flex-items-baseline">
                          <span className="flex-auto">Copy permalink</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </details>
            </div>

            <div
              id="spoof-warning"
              className="mt-0 pb-3"
              hidden={false}
              aria-hidden={false}
            >
              <div
                data-view-component="true"
                className="flash flash-warn mt-0 clearfix"
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-alert float-left mt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
                  ></path>
                </svg>

                <div className="overflow-hidden">
                  This commit does not belong to any branch on this repository,
                  and may belong to a fork outside of the repository.
                </div>
              </div>
            </div>

            <div className="d-sm-flex Box mb-3 Box-body color-bg-subtle">
              <div className="d-flex flex-auto">
                <div>
                  This branch is
                  <span>
                    <a
                      data-analytics-event='{"category":"Branch Infobar","action":"Ahead Compare","label":"ref_loc:bar;is_fork:false"}'
                      href="/ZipingL/dna/compare/main...master"
                    >
                      5 commits ahead
                    </a>
                    ,
                    <a
                      data-analytics-event='{"category":"Branch Infobar","action":"Behind Compare","label":"ref_loc:bar;is_fork:false"}'
                      href="/ZipingL/dna/compare/master...main"
                    >
                      8 commits behind
                    </a>
                    main
                  </span>
                  .
                </div>
              </div>
              <div className="d-flex flex-justify-end mt-2 mt-sm-0 ml-sm-3">
                <details className="details-overlay details-reset position-relative">
                  <summary
                    className="btn-link no-underline color-fg-muted"
                    aria-haspopup="menu"
                    role="button"
                    data-analytics-event='{"category":"Branch Infobar","action":"Open Contribute dropdown","label":"ref_loc:contribute_dropdown;is_fork:false"}'
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-git-pull-request"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                      ></path>
                    </svg>
                    Contribute
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-triangle-down"
                    >
                      <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                    </svg>
                  </summary>
                  <div className="position-relative">
                    <div className="dropdown-menu dropdown-menu-sw pb-0 branch-contribute-right branch-info-dropdown-size">
                      <ul className="list-style-none">
                        <li className="d-flex p-3">
                          <div className="mr-2">
                            <div className="completeness-indicator completeness-indicator-problem">
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                className="octicon octicon-git-pull-request"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-bold mb-1">
                              This branch is 5 commits ahead of main.
                            </p>
                            <p className="text-small color-fg-muted mb-0">
                              Open a pull request to contribute your changes
                              upstream.
                            </p>
                          </div>
                        </li>
                        <li className="Box-row Box-row--gray p-3">
                          <div className="d-flex">
                            <a
                              href="/ZipingL/dna/compare/master"
                              className="btn btn-block flex-1 mr-3"
                              data-analytics-event='{"category":"Branch Infobar","action":"Compare","label":"ref_loc:contribute_dropdown;is_fork:false"}'
                            >
                              Compare
                            </a>

                            <a
                              href="/ZipingL/dna/compare/main...master?expand=1"
                              className="btn btn-primary btn-block flex-1"
                              data-analytics-event='{"category":"Branch Infobar","action":"Open pull request","label":"ref_loc:contribute_dropdown;is_fork:false"}'
                            >
                              Open pull request
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div className="Box d-flex flex-column flex-shrink-0 mb-3">
              <div className="Box-header Details js-details-container">
                <div className="d-flex flex-items-center">
                  <span className="flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1">
                    <a
                      rel="author"
                      data-hovercard-type="user"
                      data-hovercard-url="/users/ZipingL/hovercard"
                      data-octo-click="hovercard-link-click"
                      data-octo-dimensions="link_type:self"
                      href="https://github.com/ZipingL"
                    >
                      <img
                        className="avatar avatar-user"
                        src="/wp-content/reactpress/apps/react-dna-hub/build/static_files/8689680(1)"
                        width="24"
                        height="24"
                        alt="@ZipingL"
                      />
                    </a>
                  </span>
                  <div className="flex-1 d-flex flex-items-center ml-3 min-width-0">
                    <div className="css-truncate css-truncate-overflow">
                      <a
                        className="text-bold Link--primary"
                        rel="author"
                        data-hovercard-type="user"
                        data-hovercard-url="/users/ZipingL/hovercard"
                        data-octo-click="hovercard-link-click"
                        data-octo-dimensions="link_type:self"
                        href="https://github.com/ZipingL/dna/tree/master"
                      >
                        ZipingL
                      </a>

                      <span className="markdown-title">
                        <a
                          data-pjax="true"
                          title="Add 23andMe Ancestry Book"
                          className="Link--secondary"
                          href="https://github.com/ZipingL/dna/tree/master"
                        >
                          Add 23andMe Ancestry Book
                        </a>
                      </span>
                    </div>

                    <span className="ml-2"> </span>
                  </div>
                  <div className="ml-3 d-flex flex-shrink-0 flex-items-center flex-justify-end color-fg-muted no-wrap">
                    <span className="d-none d-md-inline">
                      <span>Latest commit</span>
                      <a
                        className="text-small text-mono Link--secondary"
                        href="https://github.com/ZipingL/dna/tree/master"
                        data-pjax=""
                      >
                        00f5b4f
                      </a>
                      <span itemProp="dateModified">
                        <time
                          dateTime="2022-07-13T23:22:02Z"
                          className="no-wrap"
                          title="Jul 13, 2022, 6:22 PM CDT"
                        >
                          on Jul 13
                        </time>
                      </span>
                    </span>

                    <a
                      data-pjax=""
                      href="https://github.com/ZipingL/dna/commits/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf"
                      className="ml-3 no-wrap Link--primary no-underline"
                    >
                      <svg
                        aria-hidden="true"
                        style={{
                          color: "grey",
                        }}
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="octicon octicon-history"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                        ></path>
                      </svg>
                      <span className="d-none d-sm-inline">
                        <strong>History</strong>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="Box-body d-flex flex-items-center flex-auto border-bottom-0 flex-wrap">
                <details
                  className="details-reset details-overlay details-overlay-dark lh-default color-fg-default float-left mr-3"
                  id="blob_contributors_box"
                >
                  <summary className="Link--primary" role="button">
                    <svg
                      data-text="gray"
                      style={{
                        color: "grey",
                      }}
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-people"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                      ></path>
                    </svg>
                    <strong>1</strong>
                    contributor
                  </summary>
                  <div
                    className="Box Box--overlay d-flex flex-column anim-fade-in fast"
                    aria-label="Users who have contributed to this file"
                    // src="/ZipingL/dna/contributors-list/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf"
                    //preload=""
                    role="dialog"
                    aria-modal="true"
                    id="details-dialog"
                  >
                    <div className="Box-header">
                      <button
                        className="Box-btn-octicon btn-octicon float-right"
                        type="button"
                        aria-label="Close dialog"
                        data-close-dialog=""
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          className="octicon octicon-x"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                          ></path>
                        </svg>
                      </button>
                      <h3 className="Box-title">
                        Users who have contributed to this file
                      </h3>
                    </div>
                    <>
                      <svg
                        style={{
                          boxSizing: "content-box",
                          color: "var(--color-icon-primary)",
                        }}
                        width="32"
                        height="32"
                        viewBox="0 0 16 16"
                        fill="none"
                        data-view-component="true"
                        className="my-3 mx-auto d-block anim-rotate"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="currentColor"
                          stroke-opacity="0.25"
                          stroke-width="2"
                          vectorEffect="non-scaling-stroke"
                        ></circle>
                        <path
                          d="M15 8a7.002 7.002 0 00-7-7"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          vectorEffect="non-scaling-stroke"
                        ></path>
                      </svg>
                    </>
                  </div>
                </details>
              </div>
            </div>

            <div
              data-target="readme-toc.content"
              className="Box mt-3 position-relative"
            >
              <div className="Box-header js-blob-header py-2 pr-2 d-flex flex-shrink-0 flex-md-row flex-items-center">
                <div className="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1">
                  10.9 MB
                </div>

                <div className="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between hide-sm hide-md">
                  <div className="BtnGroup">
                    <a
                      href="https://github.com/ZipingL/dna/raw/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf"
                      id="raw-url"
                      data-view-component="true"
                      className="btn-sm btn BtnGroup-item"
                    >
                      Download
                    </a>
                  </div>

                  <div className="d-flex">
                    <a
                      href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FZipingL%2Fdna%2Fblob%2F00f5b4f9b83df69b90d5505d5782c3cf3128640e%2F23andMe_Ancestry_Book.pdf"
                      className="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
                      aria-label="You must be on a branch to make or propose changes to this file"
                    >
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="octicon octicon-trash"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="d-flex hide-lg hide-xl flex-order-2 flex-grow-0">
                  <details className="dropdown details-reset details-overlay d-inline-block">
                    <summary
                      className="js-blob-dropdown-click btn-octicon"
                      aria-haspopup="true"
                      aria-label="possible actions"
                      data-test-selector="small-screen-more-options"
                      data-dropdown-tracking='{"type":"blob_edit_dropdown.more_options_click","context":{"repository_id":488696119,"actor_id":8689680,"github_dev_enabled":true,"edit_enabled":false,"small_screen":true}}'
                    >
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="octicon octicon-kebab-horizontal"
                      >
                        <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      </svg>
                    </summary>

                    <ul
                      className="dropdown-menu dropdown-menu-sw"
                      style={{
                        width: "175px",
                      }}
                    >
                      <li></li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://github.com/ZipingL/dna/raw/00f5b4f9b83df69b90d5505d5782c3cf3128640e/23andMe_Ancestry_Book.pdf"
                        >
                          Download
                        </a>
                      </li>
                    </ul>
                  </details>
                </div>
              </div>

              <div
                itemProp="text"
                className="Box-body p-0 blob-wrapper data type-text gist-border-0"
              >
                <div className="render-wrapper">
                  <div
                    style={{
                      width: "100%",
                      position: 'relative',
                      paddingTop: 'max(60%, 326px)',
                      height: '0px'
                    }}
                  >
                    <div className="pdfFrame">
                      <BrowserRouter>
                        <Routes>
                          <Route path="/second" element={<Part2 />} />
                          <Route path="*" element={<Part1 />} />
                        </Routes>
                      </BrowserRouter>
                    </div>

                  </div>
                </div>
              </div>

              <details
                className="details-reset details-overlay details-overlay-dark"
                id="jumpto-line-details-dialog"
              >
                <summary
                  data-hotkey="l"
                  aria-label="Jump to line"
                  role="button"
                ></summary>
                <div
                  className="Box Box--overlay d-flex flex-column anim-fade-in fast linejump"
                  aria-label="Jump to line"
                  id="details-dialog"
                  role="dialog"
                  aria-modal="true"
                >
                  {/* <!-- '"` --><!-- </textarea></xmp> --> */}
                  <form
                    className="js-jump-to-line-form Box-body d-flex"
                    data-turbo="false"
                    action="https://storage.googleapis.com/laotzu/awslegal/notarized/23andMe%20Ancestry%20Book%20-%20Part%201%20of%202_encrypted_.pdf"
                    accept-charset="UTF-8"
                    method="get"
                  >
                    <input
                      className="form-control flex-auto mr-3 linejump-input js-jump-to-line-field"
                      type="text"
                      placeholder="Jump to line…"
                      aria-label="Jump to line"
                      autoFocus={false}
                    />
                    <button
                      data-close-dialog=""
                      type="submit"
                      data-view-component="true"
                      className="btn"
                    >
                      Go
                    </button>
                  </form>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
