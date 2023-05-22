import { LegacyCard } from "@shopify/polaris";
export const SetColor = (props) => {
  const { dataValue, toolBarColor, toolBarTextColor, toolBarIconColor, bottomToolColor, bottomIconColor,
    handleToolbarColor, handleTextColor, handleIconColor, handleBottomToolColor, handleBottomIconColor
  } = props
  return (
    <>
      <LegacyCard.Section
        title="Top Tool Bar Color"
      >
        <ul className="Polaris-ResourceList  Polaris-ResourceItem__Container-hold">
          <li className="Polaris-ResourceItem__ListItem">
            <div className="Polaris-ResourceItem__Container Polaris-ResourceItem__Container_browse-image-hold align-items-center">
              <div className="Polaris-Stack__Item text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 120 120"
                >
                  <rect
                    className="bxfill"
                    fill={
                      toolBarColor ||
                      dataValue?.toolbar_color
                    }
                    width="120"
                    height="120"
                  ></rect>
                </svg>
                <p className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--subdued mt-2">
                  {dataValue?.toolbar_color}
                </p>
              </div>
              <div className="Polaris-ResourceItem__Content imgnam-logo-holder Polaris-ResourceItem__Container_imgnam-logo-rmv">
                <label
                  className="Polaris-Button ps-3 pe-3"
                  type="button"
                >
                  <span className="Polaris-Text--visuallyHidden">
                    <input
                      type="color"
                      onChange={
                        handleToolbarColor
                      }
                    />
                  </span>
                  Change toolbar Color
                </label>
              </div>
            </div>
          </li>
          <li className="Polaris-ResourceItem__ListItem">
            <div className="Polaris-ResourceItem__Container Polaris-ResourceItem__Container_browse-image-hold align-items-center">
              <div className="Polaris-Stack__Item text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 120 120"
                >
                  <rect
                    className="bxfill"
                    fill={
                      toolBarTextColor ||
                      dataValue?.text_color
                    }
                    width="120"
                    height="120"
                  ></rect>
                </svg>
                <p className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--subdued mt-2">
                  {dataValue?.text_color}
                </p>
              </div>
              <div className="Polaris-ResourceItem__Content imgnam-logo-holder Polaris-ResourceItem__Container_imgnam-logo-rmv">
                <label
                  className="Polaris-Button ps-3 pe-3"
                  type="button"
                >
                  <span className="Polaris-Text--visuallyHidden">
                    <input
                      type="color"
                      onChange={
                        handleTextColor
                      }
                    />
                  </span>
                  Change text Color
                </label>
              </div>
            </div>
          </li>
          <li className="Polaris-ResourceItem__ListItem">
            <div className="Polaris-ResourceItem__Container Polaris-ResourceItem__Container_browse-image-hold align-items-center">
              <div className="Polaris-Stack__Item text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 120 120"
                >
                  <rect
                    className="bxfill"
                    fill={
                      toolBarIconColor ||
                      dataValue?.icon_color
                    }
                    width="120"
                    height="120"
                  ></rect>
                </svg>
                <p className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--subdued mt-2">
                  {dataValue?.icon_color}
                </p>
              </div>
              <div className="Polaris-ResourceItem__Content imgnam-logo-holder Polaris-ResourceItem__Container_imgnam-logo-rmv">
                <label
                  className="Polaris-Button ps-3 pe-3"
                  type="button"
                >
                  <span className="Polaris-Text--visuallyHidden">
                    <input
                      type="color"
                      onChange={
                        handleIconColor
                      }
                    />
                  </span>
                  Change icon Color
                </label>
              </div>
            </div>
          </li>
        </ul>
      </LegacyCard.Section>

      <LegacyCard.Section title="Bottom Navigation Bar Color">
        <ul className="Polaris-ResourceList  Polaris-ResourceItem__Container-hold">
          <li className="Polaris-ResourceItem__ListItem">
            <div className="Polaris-ResourceItem__Container Polaris-ResourceItem__Container_browse-image-hold align-items-center">
              <div className="Polaris-Stack__Item text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 120 120"
                >
                  <rect
                    className="bxfill"
                    fill={
                      bottomToolColor ||
                      dataValue?.bottom_toolbar
                    }
                    width="120"
                    height="120"
                  ></rect>
                </svg>
                <p className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--subdued mt-2">
                  {dataValue?.bottom_toolbar}
                </p>
              </div>
              <div className="Polaris-ResourceItem__Content imgnam-logo-holder Polaris-ResourceItem__Container_imgnam-logo-rmv">
                <label
                  className="Polaris-Button ps-3 pe-3"
                  type="button"
                >
                  <span className="Polaris-Text--visuallyHidden">
                    <input
                      type="color"
                      onChange={
                        handleBottomToolColor
                      }
                    />
                  </span>
                  Change toolbar Color
                </label>
              </div>
            </div>
          </li>
          <li className="Polaris-ResourceItem__ListItem">
            <div className="Polaris-ResourceItem__Container Polaris-ResourceItem__Container_browse-image-hold align-items-center">
              <div className="Polaris-Stack__Item text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 120 120"
                >
                  <rect
                    className="bxfill"
                    fill={
                      bottomIconColor ||
                      dataValue?.bottom_icon
                    }
                    width="120"
                    height="120"
                  ></rect>
                </svg>
                <p className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--subdued mt-2">
                  {dataValue?.bottom_icon}
                </p>
              </div>
              <div className="Polaris-ResourceItem__Content imgnam-logo-holder Polaris-ResourceItem__Container_imgnam-logo-rmv">
                <label
                  className="Polaris-Button ps-3 pe-3"
                  type="button"
                >
                  <span className="Polaris-Text--visuallyHidden">
                    <input
                      type="color"
                      onChange={
                        handleBottomIconColor
                      }
                    />
                  </span>
                  Change icon Color
                </label>
              </div>
            </div>
          </li>
        </ul>
      </LegacyCard.Section>
    </>
  )
}
