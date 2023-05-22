import { LogoModal, SplashImgModal, AppIconModal, } from "./index";
import { LegacyCard, Thumbnail, Spinner, InlineError } from "@shopify/polaris";
import { img, img1, img2 } from "../assets";
import React, { useState } from "react";
export const SetImages = (props) => {
  const [activeLogo, setActiveLogo] = useState(false);
  const [activeSplash, setActiveSplash] = useState(false);
  const [activeApp, setActiveApp] = useState(false);
  const {
    logo,
    splashImg,
    appIcon,
    removeLogo,
    removeSplashImg,
    removeAppIcon,
    handleChangeLogo,
    handleChangeSplash,
    handleChangeAppIcon,
    handleRemoveLogo,
    handleRemoveSplash,
    handleRemoveIcon,
    logoLoading,
    splashLoading,
    appIconLoading,
    errorMsgLogo,
    errorMsgSplash,
    errorMsgIcon
  } = props

  const handleChangeLogoActive = () => setActiveLogo(!activeLogo);
  const handleChangeSplashActive = () => setActiveSplash(!activeSplash);
  const handleChangeAppActive = () => setActiveApp(!activeApp);

  return (
    <>
      <LegacyCard.Section>
        <ul className="Polaris-ResourceList  Polaris-ResourceItem__Container-hold">
          <li className="Polaris-ResourceItem__ListItem">
            <div className="Polaris-ResourceItem__Container Polaris-ResourceItem__Container_browse-image-hold align-items-center">
              {logoLoading ? <Spinner size="large" /> :
                <Thumbnail
                  source={logo || img}
                  alt="loading..."
                />
              }
              <div className="Polaris-ResourceItem__Content imgnam-logo-holder Polaris-ResourceItem__Container_imgnam-logo-rmv">
                {removeLogo ? (
                  <label
                    onClick={
                      handleChangeLogoActive
                    }
                  >
                    <span>
                      <a
                        href="#"
                        className="Polaris-Button Polaris-Button--destructive Polaris-Button--plain"
                      >
                        <LogoModal
                          removeLogo={activeLogo}
                          handleRemoveLogo={handleChangeLogoActive}
                          RemoveLogoHandler={handleRemoveLogo}
                        // isLoading={isLoading}
                        />
                        Remove Logo
                      </a>
                    </span>
                  </label>
                ) : (
                  <label
                    className="Polaris-Button ps-3 pe-3"
                    type="button"
                  >
                    <span className="Polaris-Text--visuallyHidden">
                      <input
                        type="file"
                        name="logo_img"
                        id="logo_img"
                        accept=".jpg, .jpeg, .png"
                        width="512"
                        height="512"
                        className="storeLogo"
                        required=""
                        onChange={
                          handleChangeLogo
                        }
                      />
                    </span>
                    Upload App Logo
                  </label>
                )}
                <div className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--subdued mt-2">
                  File must be at least 512X512px, PNG or JPG
                </div>
              </div>
            </div>
          </li>
          <InlineError
            message={errorMsgLogo}
          />
          <li className="Polaris-ResourceItem__ListItem">
            <div className="Polaris-ResourceItem__Container Polaris-ResourceItem__Container_browse-image-hold align-items-center">
              {splashLoading ? <Spinner accessibilityLabel="Spinner example" size="large" /> :
                <Thumbnail
                  source={splashImg || img2}
                  alt="loading..."
                />
              }
              <div className="Polaris-ResourceItem__Content imgnam-logo-holder Polaris-ResourceItem__Container_imgnam-logo-rmv">
                {removeSplashImg ? (
                  <label>
                    <span
                      onClick={
                        handleChangeSplashActive
                      }
                    >
                      <a
                        href="#"
                        className="Polaris-Button Polaris-Button--destructive Polaris-Button--plain"
                      >
                        <SplashImgModal
                          active={activeSplash}
                          handleChange={handleChangeSplashActive}
                          handleRemoveSplash={handleRemoveSplash}
                        />
                        Remove
                        Splash
                      </a>
                    </span>
                  </label>
                ) : (
                  <label
                    className="Polaris-Button ps-3 pe-3"
                    type="button"
                  >
                    <span className="Polaris-Text--visuallyHidden">
                      <input
                        type="file"
                        name="logo_img"
                        id="logo_img"
                        accept=".jpg, .jpeg, .png"
                        className="storeLogo"
                        onChange={
                          handleChangeSplash
                        }
                        required=""
                      />
                    </span>
                    Upload Splash Image
                  </label>
                )}
                <div className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--subdued mt-2">
                  File must be at least
                  720X1280px, PNG or JPG
                </div>
              </div>
            </div>
          </li>
          <InlineError
            message={errorMsgSplash}
          />
          <li className="Polaris-ResourceItem__ListItem">
            <div className="Polaris-ResourceItem__Container Polaris-ResourceItem__Container_browse-image-hold align-items-center">
              {appIconLoading ? <Spinner accessibilityLabel="Spinner example" size="large" /> :
                <Thumbnail
                  source={appIcon || img1}
                  alt="loading..."
                />
              }
              <div className="Polaris-ResourceItem__Content imgnam-logo-holder Polaris-ResourceItem__Container_imgnam-logo-rmv">
                {removeAppIcon ? (
                  <label>
                    <span
                      onClick={
                        handleChangeAppActive
                      }
                    >
                      <a
                        href="#"
                        className="Polaris-Button Polaris-Button--destructive Polaris-Button--plain"
                      >
                        <AppIconModal
                          active={
                            activeApp
                          }
                          handleChange={
                            handleChangeAppActive
                          }
                          handleRemoveIcon={
                            handleRemoveIcon
                          }
                        />
                        Remove Icon
                      </a>
                    </span>
                  </label>
                ) : (
                  <label
                    className="Polaris-Button ps-3 pe-3"
                    type="button"
                  >
                    <span className="Polaris-Text--visuallyHidden">
                      <input
                        type="file"
                        name="splash_img"
                        id="splash_img"
                        accept=".jpg, .jpeg, .png"
                        className="storeLogo"
                        required=""
                        onChange={
                          handleChangeAppIcon
                        }
                      />
                    </span>
                    Upload App Icon
                  </label>
                )}

                <div className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--subdued mt-2">
                  File must be at least 1200X1200px, PNG or JPG
                </div>
              </div>
            </div>
          </li>
          <InlineError
            message={errorMsgIcon}
          />
        </ul>
      </LegacyCard.Section>
    </>
  )
}
