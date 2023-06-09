import { LegacyCard, Image } from "@shopify/polaris";
import {
    img,
    p1,
    p2,
    p3,
    p4,
    splashprew,
    previewblank,
} from "../assets";

import React, { useState } from "react";
export const PreviewMobile = (props) => {
    const [toggel, setToggel] = useState(false);
    const {
        logo,
        toolBarColor,
        toolBarTextColor,
        toolBarIconColor,
        bottomToolColor,
        bottomIconColor,
        dataValue,
        splashImg,
    } = props;
    return (
        <>
            <LegacyCard>
                <LegacyCard.Section
                    title="Mobile app preview"
                    actions={[
                        {
                            content: toggel ? "Mobile App" : "Splash Screen",
                            onAction: () => setToggel(!toggel),
                        },
                    ]}
                >
                    <div
                        className={`splash-hold ${
                            toggel ? "splash-hold-view" : null
                        }`}
                    >
                        <div className="mobile-app">
                            <div
                                className="top-bar"
                                style={{
                                    backgroundColor:
                                        toolBarColor ||
                                        dataValue?.toolbar_color,
                                }}
                            >
                                <span className="logohold">
                                    <Image
                                        className="headerlogo"
                                        source={logo || img}
                                    />
                                </span>

                                <span
                                    className="text_change_color"
                                    style={{
                                        color:
                                            toolBarTextColor ||
                                            dataValue?.text_color,
                                    }}
                                >
                                    AK collections
                                </span>
                                <span className="iconhold">
                                    <div className="iconholddiv">
                                        <a
                                            href="#"
                                            className="iconholddiv-ancor"
                                        >
                                            <span className="icontip">3</span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="Icon_Icon__Dm change_icon"
                                            >
                                                <path
                                                    fill={
                                                        toolBarIconColor ||
                                                        dataValue?.icon_color
                                                    }
                                                    fillRule="evenodd"
                                                    d="M5,20 C4.29574335,20 3.82473646,19.2978691 4.05978026,18.6586153 L4.10557281,18.5527864 L5.26099034,16.2419513 C5.69838496,15.3671621 5.94706709,14.4115321 5.99242957,13.4369383 L6,13.1114562 L6,10 C6,7.02693683 8.16238395,4.55892549 11.0001915,4.08292631 L11,3 C11,2.44771525 11.4477153,2 12,2 C12.5522847,2 13,2.44771525 13,3 L13.0008069,4.08309386 C15.7593089,4.54627074 17.8793746,6.89172309 17.9950275,9.75347448 L18,10 L18,13.1114562 C18,14.0895003 18.2049427,15.0554558 18.6002208,15.9474457 L18.7390097,16.2419513 L19.8944272,18.5527864 C20.2093803,19.1826927 19.7920161,19.9179766 19.1151353,19.99363 L19,20 L14,20 C14,21.1045695 13.1045695,22 12,22 C10.8954305,22 10,21.1045695 10,20 L5,20 Z M12,6 C9.85780461,6 8.10892112,7.68396847 8.00489531,9.80035966 L8,10 L8,13.1114562 C8,14.3922282 7.72665274,15.6568768 7.19980168,16.8213437 L7.04984472,17.1363785 L6.61803399,18 L17.381966,18 L16.9501553,17.1363785 C16.3773766,15.9908212 16.0562978,14.7374405 16.0067623,13.4602947 L16,13.1114562 L16,10 C16,7.790861 14.209139,6 12,6 Z"
                                                ></path>
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="iconholddiv-ancor"
                                        >
                                            <span className="icontip">3</span>
                                            <svg
                                                viewBox="0 0 28 28"
                                                className="Icon_Icon__Dm change_icon"
                                            >
                                                <path
                                                    fill={
                                                        toolBarIconColor ||
                                                        dataValue?.icon_color
                                                    }
                                                    clipRule="evenodd"
                                                    d="M1.82047 1C1.36734 1 1 1.35728 1 1.79801V2.39948C1 2.84021 1.36734 3.19749 1.82047 3.19749H3.72716C4.03867 3.19749 4.3233 3.36906 4.46192 3.64038L5.4947 5.93251C5.53326 6.00798 5.56364 6.09443 5.62081 6.15194L10.057 16.4429C10.0129 16.4634 9.97056 16.4883 9.93075 16.5176C8.70163 17.4226 7.87009 18.5878 7.87001 19.7604C7.86996 20.4429 8.16289 21.0807 8.75002 21.5212C9.30752 21.9394 10.0364 22.1118 10.8189 22.1118H10.8446C10.336 22.6308 10.0238 23.3336 10.0238 24.1072C10.0238 25.7049 11.3554 27 12.998 27C14.6406 27 15.9722 25.7049 15.9722 24.1072C15.9722 23.3336 15.66 22.6308 15.1513 22.1118H19.0494C18.5408 22.6308 18.2285 23.3336 18.2285 24.1072C18.2285 25.7049 19.5601 27 21.2027 27C22.8454 27 24.177 25.7049 24.177 24.1072C24.177 23.3336 23.8647 22.6308 23.3561 22.1118H23.9718C24.425 22.1118 24.7923 21.7545 24.7923 21.3138V20.9148C24.7923 20.474 24.425 20.1167 23.9718 20.1167H10.8189C10.3192 20.1167 10.0864 20.0041 10.0028 19.9414C9.94878 19.9009 9.92119 19.8618 9.9212 19.7606C9.92122 19.4917 10.1711 18.8708 11.069 18.1827C11.1084 18.1524 11.1453 18.1194 11.1792 18.084C11.2692 18.1089 11.3635 18.1221 11.4601 18.1221H23.9235C24.4248 18.1221 24.8527 17.7696 24.9351 17.2885L26.9858 5.31837C27.09 4.71036 26.6079 4.1569 25.9742 4.1569H7.35431C7.1981 4.1569 7.05618 4.06597 6.9909 3.92405L5.84968 1.44289C5.71106 1.17157 5.42642 1 5.11492 1H1.82047ZM8.47667 6.15194C8.18952 6.15194 7.99591 6.44552 8.10899 6.70946L12.04 15.8846C12.103 16.0317 12.2476 16.1271 12.4076 16.1271H22.7173C22.9122 16.1271 23.0787 15.9867 23.1116 15.7946L24.6834 6.61948C24.7253 6.37513 24.5371 6.15194 24.2892 6.15194H8.47667ZM11.8698 24.1072C11.8698 23.5012 12.3749 23.0099 12.998 23.0099C13.621 23.0099 14.1261 23.5012 14.1261 24.1072C14.1261 24.7132 13.621 25.2045 12.998 25.2045C12.3749 25.2045 11.8698 24.7132 11.8698 24.1072ZM21.2027 23.0099C20.5797 23.0099 20.0746 23.5012 20.0746 24.1072C20.0746 24.7132 20.5797 25.2045 21.2027 25.2045C21.8258 25.2045 22.3309 24.7132 22.3309 24.1072C22.3309 23.5012 21.8258 23.0099 21.2027 23.0099Z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </span>
                            </div>
                            <div className="searchbar">
                                <svg
                                    viewBox="0 0 20 20"
                                    className="icon-search"
                                >
                                    <path d="M2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm17.707 10.293-5.395-5.396a7.946 7.946 0 0 0 1.688-4.897c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a7.954 7.954 0 0 0 4.897-1.688l5.396 5.395a.998.998 0 0 0 1.707-.707 1 1 0 0 0-.293-.707z"></path>
                                </svg>
                                <input type="text" className="search" />
                                <div className="michold">
                                    <svg viewBox="0 0 256 256" className="">
                                        <path
                                            xmlns="http://www.w3.org/2000/svg"
                                            d="M79.99414,127.99609v-64a48,48,0,1,1,96,0v64.00782a48,48,0,0,1-96-.00782Zm120.4375.05469a8.07828,8.07828,0,0,0-8.82812,7.07813,64.00856,64.00856,0,0,1-127.21875-.00782,8.09865,8.09865,0,0,0-8.82813-7.07031,8.01056,8.01056,0,0,0-7.07812,8.83594A79.60051,79.60051,0,0,0,119.99414,207.251v24.74511a8,8,0,1,0,16,0V207.252a79.577,79.577,0,0,0,71.51563-70.373A8.00321,8.00321,0,0,0,200.43164,128.05078Z"
                                        ></path>
                                    </svg>
                                </div>
                                <svg
                                    viewBox="0 0 20 20"
                                    className="iconthreline"
                                >
                                    <path d="M2 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Zm6 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm0 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm-6 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm12-5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-12 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z"></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M13 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="menubar">
                                <span>All Items</span>
                                <span className="menuactive">Best Selling</span>
                                <span>Women wear</span>
                                <span>Our Best</span>
                            </div>
                            <div className="producthold">
                                <div className="productlist">
                                    <span>$315.00</span>
                                    <Image source={p1} />
                                    <div>Lorem ipsum is placeholder text</div>
                                </div>
                                <div className="productlist">
                                    <span>$315.00</span>
                                    <Image source={p2} />
                                    <div>Lorem ipsum is placeholder text</div>
                                </div>
                                <div className="productlist">
                                    <span>$315.00</span>
                                    <Image source={p3} />
                                    <div>Lorem ipsum is placeholder text</div>
                                </div>
                                <div className="productlist">
                                    <span>$315.00</span>
                                    <Image source={p4} />
                                    <div>Lorem ipsum is placeholder text</div>
                                </div>
                            </div>
                            <div
                                className="bottom-bar bottom-toolbar-color"
                                style={{
                                    backgroundColor:
                                        bottomToolColor ||
                                        dataValue?.bottom_toolbar,
                                }}
                            >
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="bottom-icon-color"
                                    >
                                        {" "}
                                        <g>
                                            {" "}
                                            <path
                                                fill="none"
                                                d="M0 0h24v24H0z"
                                                id="mainIconPathAttribute"
                                            ></path>{" "}
                                            <path
                                                fill={
                                                    bottomIconColor ||
                                                    dataValue?.bottom_icon
                                                }
                                                d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"
                                            ></path>{" "}
                                        </g>{" "}
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        className="bottom-icon-color"
                                    >
                                        <path
                                            fill={
                                                bottomIconColor ||
                                                dataValue?.bottom_icon
                                            }
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.5 3.58824C5.76727 3.58824 4.73635 3.76289 4.052 3.89936C3.97331 3.91505 3.91505 3.97331 3.89936 4.052C3.76289 4.73635 3.58824 5.76727 3.58824 6.5C3.58824 7.23273 3.76289 8.26365 3.89936 8.948C3.91505 9.02669 3.97331 9.08495 4.052 9.10064C4.73635 9.23711 5.76727 9.41177 6.5 9.41177C7.23273 9.41177 8.26365 9.23711 8.948 9.10064C9.02669 9.08495 9.08495 9.02669 9.10064 8.948C9.23711 8.26365 9.41177 7.23273 9.41177 6.5C9.41177 5.76727 9.23711 4.73635 9.10064 4.052C9.08495 3.97331 9.02669 3.91505 8.948 3.89936C8.26365 3.76289 7.23273 3.58824 6.5 3.58824ZM3.7414 2.34179C4.42728 2.20502 5.59496 2 6.5 2C7.40504 2 8.57272 2.20502 9.2586 2.34179C9.96673 2.483 10.517 3.03328 10.6582 3.7414C10.795 4.42728 11 5.59496 11 6.5C11 7.40504 10.795 8.57272 10.6582 9.2586C10.517 9.96673 9.96672 10.517 9.2586 10.6582C8.57272 10.795 7.40504 11 6.5 11C5.59496 11 4.42728 10.795 3.7414 10.6582C3.03327 10.517 2.483 9.96672 2.34179 9.2586C2.20502 8.57272 2 7.40504 2 6.5C2 5.59496 2.20502 4.42728 2.34179 3.7414C2.483 3.03327 3.03328 2.483 3.7414 2.34179Z"
                                        ></path>
                                        <path
                                            fill={
                                                bottomIconColor ||
                                                dataValue?.bottom_icon
                                            }
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.5 14.5882C5.76727 14.5882 4.73635 14.7629 4.052 14.8994C3.97331 14.9151 3.91505 14.9733 3.89936 15.052C3.76289 15.7363 3.58824 16.7673 3.58824 17.5C3.58824 18.2327 3.76289 19.2637 3.89936 19.948C3.91505 20.0267 3.97331 20.0849 4.052 20.1006C4.73635 20.2371 5.76727 20.4118 6.5 20.4118C7.23273 20.4118 8.26365 20.2371 8.948 20.1006C9.02669 20.0849 9.08495 20.0267 9.10064 19.948C9.23711 19.2637 9.41177 18.2327 9.41177 17.5C9.41177 16.7673 9.23711 15.7363 9.10064 15.052C9.08495 14.9733 9.02669 14.9151 8.948 14.8994C8.26365 14.7629 7.23273 14.5882 6.5 14.5882ZM3.7414 13.3418C4.42728 13.205 5.59496 13 6.5 13C7.40504 13 8.57272 13.205 9.2586 13.3418C9.96673 13.483 10.517 14.0333 10.6582 14.7414C10.795 15.4273 11 16.595 11 17.5C11 18.405 10.795 19.5727 10.6582 20.2586C10.517 20.9667 9.96672 21.517 9.2586 21.6582C8.57272 21.795 7.40504 22 6.5 22C5.59496 22 4.42728 21.795 3.7414 21.6582C3.03327 21.517 2.483 20.9667 2.34179 20.2586C2.20502 19.5727 2 18.405 2 17.5C2 16.595 2.20502 15.4273 2.34179 14.7414C2.483 14.0333 3.03328 13.483 3.7414 13.3418Z"
                                        ></path>
                                        <path
                                            fill={
                                                bottomIconColor ||
                                                dataValue?.bottom_icon
                                            }
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.5 3.58824C16.7673 3.58824 15.7363 3.76289 15.052 3.89936C14.9733 3.91505 14.9151 3.97331 14.8994 4.052C14.7629 4.73635 14.5882 5.76727 14.5882 6.5C14.5882 7.23273 14.7629 8.26365 14.8994 8.948C14.9151 9.02669 14.9733 9.08495 15.052 9.10064C15.7363 9.23711 16.7673 9.41177 17.5 9.41177C18.2327 9.41177 19.2637 9.23711 19.948 9.10064C20.0267 9.08495 20.0849 9.02669 20.1006 8.948C20.2371 8.26365 20.4118 7.23273 20.4118 6.5C20.4118 5.76727 20.2371 4.73635 20.1006 4.052C20.0849 3.97331 20.0267 3.91505 19.948 3.89936C19.2637 3.76289 18.2327 3.58824 17.5 3.58824ZM14.7414 2.34179C15.4273 2.20502 16.595 2 17.5 2C18.405 2 19.5727 2.20502 20.2586 2.34179C20.9667 2.483 21.517 3.03328 21.6582 3.7414C21.795 4.42728 22 5.59496 22 6.5C22 7.40504 21.795 8.57272 21.6582 9.2586C21.517 9.96673 20.9667 10.517 20.2586 10.6582C19.5727 10.795 18.405 11 17.5 11C16.595 11 15.4273 10.795 14.7414 10.6582C14.0333 10.517 13.483 9.96672 13.3418 9.2586C13.205 8.57272 13 7.40504 13 6.5C13 5.59496 13.205 4.42728 13.3418 3.7414C13.483 3.03327 14.0333 2.483 14.7414 2.34179Z"
                                        ></path>
                                        <path
                                            fill={
                                                bottomIconColor ||
                                                dataValue?.bottom_icon
                                            }
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.5 14.5882C16.7673 14.5882 15.7363 14.7629 15.052 14.8994C14.9733 14.9151 14.9151 14.9733 14.8994 15.052C14.7629 15.7363 14.5882 16.7673 14.5882 17.5C14.5882 18.2327 14.7629 19.2637 14.8994 19.948C14.9151 20.0267 14.9733 20.0849 15.052 20.1006C15.7363 20.2371 16.7673 20.4118 17.5 20.4118C18.2327 20.4118 19.2637 20.2371 19.948 20.1006C20.0267 20.0849 20.0849 20.0267 20.1006 19.948C20.2371 19.2637 20.4118 18.2327 20.4118 17.5C20.4118 16.7673 20.2371 15.7363 20.1006 15.052C20.0849 14.9733 20.0267 14.9151 19.948 14.8994C19.2637 14.7629 18.2327 14.5882 17.5 14.5882ZM14.7414 13.3418C15.4273 13.205 16.595 13 17.5 13C18.405 13 19.5727 13.205 20.2586 13.3418C20.9667 13.483 21.517 14.0333 21.6582 14.7414C21.795 15.4273 22 16.595 22 17.5C22 18.405 21.795 19.5727 21.6582 20.2586C21.517 20.9667 20.9667 21.517 20.2586 21.6582C19.5727 21.795 18.405 22 17.5 22C16.595 22 15.4273 21.795 14.7414 21.6582C14.0333 21.517 13.483 20.9667 13.3418 20.2586C13.205 19.5727 13 18.405 13 17.5C13 16.595 13.205 15.4273 13.3418 14.7414C13.483 14.0333 14.0333 13.483 14.7414 13.3418Z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg
                                        viewBox="0 0 511.996 511.996"
                                        className="bottom-icon-color"
                                    >
                                        <path
                                            fill={
                                                bottomIconColor ||
                                                dataValue?.bottom_icon
                                            }
                                            d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"
                                        ></path>
                                    </svg>
                                </a>

                                <a href="#">
                                    <svg
                                        viewBox="0 -3 123 123"
                                        className="bottom-icon-color"
                                    >
                                        <g>
                                            <path
                                                fill={
                                                    bottomIconColor ||
                                                    dataValue?.bottom_icon
                                                }
                                                d="M61.3,65.6 C79.3,65.6 93.9,51 93.9,33 C93.9,15 79.3,0.5 61.3,0.5 C43.3,0.5 28.7,15.1 28.7,33 C28.7,50.9 43.3,65.6 61.3,65.6 Z M61.3,9 C74.5,9 85.3,19.8 85.3,33 C85.3,46.2 74.5,57 61.3,57 C48.1,57 37.3,46.2 37.3,33 C37.3,19.8 48.1,9 61.3,9 Z"
                                                id="Shape"
                                            ></path>
                                            <path
                                                fill={
                                                    bottomIconColor ||
                                                    dataValue?.bottom_icon
                                                }
                                                d="M4.9,116.5 L118.1,116.5 C120.5,116.5 122.4,114.6 122.4,112.2 C122.4,89.7 104.1,71.3 81.5,71.3 L41.5,71.3 C19,71.3 0.6,89.6 0.6,112.2 C0.6,114.6 2.5,116.5 4.9,116.5 Z M41.5,79.9 L81.5,79.9 C97.9,79.9 111.4,92.1 113.5,107.9 L9.5,107.9 C11.6,92.2 25.1,79.9 41.5,79.9 Z"
                                                id="Shape"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <Image source={previewblank} />
                        </div>
                        <div className="splash-view">
                            <Image
                                source={splashImg || splashprew}
                                className="splashFile"
                            />
                            <Image source={previewblank} className="splashmb" />
                        </div>
                    </div>
                </LegacyCard.Section>
            </LegacyCard>
        </>
    );
};
