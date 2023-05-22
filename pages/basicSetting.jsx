import { LegacyCard, Page, Layout, PageActions, Toast, Frame } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import { useAuthenticatedFetch } from "../hooks";
import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import "../assets/css/happify.css";
import { PreviewMobile, Loader, SetColor, SetImages } from "../components";
function BasicSetting() {
  const emptyToastProps = { content: null };
  const [logo, setLogo] = useState("");
  const [splashImg, setSplashImg] = useState("");
  const [appIcon, setAppIcon] = useState("");

  const [removeLogo, setRemoveLogo] = useState(false);
  const [removeSplashImg, setRemoveSplashImg] = useState(false);
  const [removeAppIcon, setRemoveAppIcon] = useState(false);

  const [toolBarColor, setToolBarColor] = useState("");
  const [toolBarTextColor, setToolBarTextColor] = useState("");
  const [toolBarIconColor, setToolBarIconColor] = useState("");
  const [bottomToolColor, setBottomToolColor] = useState("");
  const [bottomIconColor, setBottomIconColor] = useState("");

  const [logoLoading, setLogoLoading] = useState(false)
  const [splashLoading, setSplashLoading] = useState(false)
  const [appIconLoading, setAppIconLoading] = useState(false)
  const [dataValue, setDataValue] = useState({});
  const [loading, setLoading] = useState(false);

  const [errorMsgLogo, setErrorMsgLogo] = useState('');
  const [errorMsgSplash, setErrorMsgSplash] = useState('');
  const [errorMsgIcon, setErrorMsgIcon] = useState('');
  const [toastProps, setToastProps] = useState(emptyToastProps);
  const [active, setActive] = useState(false);

  const fetchDataAPI = useAuthenticatedFetch();
  const Navigate = useNavigate();
  const fetchData = () => {
    fetchDataAPI("/api/setting/data", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (result.success) {
          const { data: { session_detail_id, logo_img, splash_img, app_icon } } = result
          setDataValue(result.data);
          setLoading(false);
          if (logo_img === `${session_detail_id}_headerlogo.png` || logo_img === `${session_detail_id}_headerlogo.jpg`) {
            setLogo(`/image/logo/${logo_img}`);
            setRemoveLogo(true)
          }
          else {
            setLogo('')
            setRemoveLogo(false)
          }
          if (splash_img === `${session_detail_id}_splash.png` || splash_img === `${session_detail_id}_splash.jpg`) {
            setSplashImg(`/image/splash_img/${splash_img}`)
            setRemoveSplashImg(true)
          }
          else {
            setSplashImg('')
            setRemoveSplashImg(false)
          }
          if (app_icon === `${session_detail_id}_appicon.png` || app_icon === `${session_detail_id}_appicon.jpg`) {
            setAppIcon(`/image/logo/${app_icon}`)
            setRemoveAppIcon(true)
          }
          else {
            setAppIcon('')
            setRemoveAppIcon(false)
          }
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  // -------------------- Upload Logo Image -----------

  const handleChangeLogo = async (e) => {
    const logoImg = e.target.files[0];
    const MIN_FILE_SIZE = 25  //  KB
    const MAX_FILE_SIZE = 200  //  KB
    const fileSizeKiloBytes = logoImg.size / 1024
    if (!logoImg.name.match(/\.(jpg|png)$/)) {
      setErrorMsgLogo("Please select Validate image")
    } else if (fileSizeKiloBytes < MIN_FILE_SIZE) {
      setErrorMsgLogo("File size is less than minimum limit")
    } else if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsgLogo("File size is greater than maximum limit")
    } else {
      setLogoLoading(true)
      setErrorMsgLogo('');
      const formData = new FormData();
      formData.append("logo_img", logoImg);
      const response = await fetchDataAPI("/api/store/logo", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setLogo(`/image/logo/${data?.data?.logo_img}`);
        setRemoveLogo(true);
        setLogoLoading(false);
        setActive(true)
        setToastProps({
          content: data.message
        });
      } else {
        setLogoLoading(false);
        setActive(true)
        setToastProps({
          content: data.message,
          error: true
        });
      }
    }
  };

  // ----------------------Upload Splash Image------------

  const handleChangeSplash = async (e) => {
    const splImg = e.target.files[0];
    const MIN_FILE_SIZE = 25 //  KB
    const MAX_FILE_SIZE = 200  //  KB
    const fileSizeKiloBytes = splImg.size / 1024
    if (!splImg.name.match(/\.(jpg|png)$/)) {
      setErrorMsgSplash("Please select Validate image")
    } else if (fileSizeKiloBytes < MIN_FILE_SIZE) {
      setErrorMsgSplash("File size is less than minimum limit")
    } else if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsgSplash("File size is greater than maximum limit")
    } else {
      setSplashLoading(true)
      setErrorMsgSplash('');
      const formData = new FormData();
      formData.append("splash_img", splImg);
      const response = await fetchDataAPI("/api/store/splash", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSplashImg(`/image/splash_img/${data?.data?.splash_img}`);
        setRemoveSplashImg(true);
        setSplashLoading(false)
        setActive(true)
        setToastProps({
          content: data.message,
        });
      } else {
        setActive(true)
        setToastProps({
          content: data.message,
          error: true
        });
        setSplashLoading(false)
      }
    }
  };

  // -----------------------Upload App Icon---------------

  const handleChangeAppIcon = async (e) => {
    const appIcon = e.target.files[0];
    const MIN_FILE_SIZE = 25  //  KB
    const MAX_FILE_SIZE = 200  //  KB
    const fileSizeKiloBytes = appIcon.size / 1024
    if (!appIcon.name.match(/\.(jpg|png)$/)) {
      setErrorMsgIcon("Please select Validate image")
    } else if (fileSizeKiloBytes < MIN_FILE_SIZE) {
      setErrorMsgIcon("File size is less than minimum limit")
    } else if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsgIcon("File size is greater than maximum limit")
    } else {
      setAppIconLoading(true)
      setErrorMsgIcon('');
      const formData = new FormData();
      formData.append("app_icon", appIcon);
      const response = await fetchDataAPI("/api/store/appIcon", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setAppIcon(`/image/logo/${data?.data?.app_icon}`);
        setRemoveAppIcon(true);
        setAppIconLoading(false)
        setActive(true)
        setToastProps({
          content: data.message,
        });
      } else {
        setActive(true)
        setToastProps({
          content: data.message,
          error: true
        });
        setAppIconLoading(false);
      }
    }
  };


  // ------------------ Remove Logo -----------

  const handleRemoveLogo = async () => {
    setLogoLoading(true)
    const response = await fetchDataAPI("/api/delete/logo", {
      method: "GET",
    });
    const data= await response.json();
    if (data.success) {
      setLogo('')
      setRemoveLogo(false);
      setLogoLoading(false);
      setActive(true)
      setToastProps({
        content: data.message
      });
    } else {
      setActive(true)
      setToastProps({
        content: data.message,
        error:true
      });
      setLogoLoading(false)
    }
  };

  //   ---------------- Remove Splash Img--------------

  const handleRemoveSplash = async () => {
    setSplashLoading(true)
    const response = await fetchDataAPI("/api/delete/splash", {
      method: "GET",
    });
    const data = await response.json();
    if (data.success) {
      setSplashImg('')
      setRemoveSplashImg(false);
      setSplashLoading(false)
      setActive(true)
      setToastProps({
        content: data.message
      });
    } else {
      setActive(true)
      setToastProps({
        content: data.message,
        error:true
      });
      setSplashLoading(false)
    }
  };

  // --------------------- Remove App Icon --------------
  const handleRemoveIcon = async () => {
    setAppIconLoading(true);
    const response = await fetchDataAPI("/api/delete/appIcon", {
      method: "GET",
    });
    const data = await response.json();
    if (data.success) {
      setAppIcon('')
      setRemoveAppIcon(false);
      setAppIconLoading(false);
      setActive(true)
      setToastProps({
        content: data.message
      });
    } else {
      setActive(true)
      setToastProps({
        content: data.message,
        error:true
      });
      setAppIconLoading(false);
    }
  };

  //   ---------------------- Upload Top toolbar color------------

  const handleToolbarColor = debounce(async (e) => {
    const toolColor = e.target.value;
    setToolBarColor(toolColor);
    const formData = new FormData();
    formData.append("toolbar_color", toolColor);
    await fetchDataAPI("/api/store/toolBarcolor", {
      method: "POST",
      body: formData,
    });
  }, 500);

  // ------------------------------------Top text color----------------

  const handleTextColor = debounce(async (e) => {
    const TextColor = e.target.value;
    setToolBarTextColor(TextColor);
    const formData = new FormData();
    formData.append("text_color", TextColor);
    await fetchDataAPI("/api/store/textcolor", {
      method: "POST",
      body: formData,
    });
  }, 500);

  // ------------------------------------Top Icon color----------------

  const handleIconColor = debounce(async (e) => {
    const iconColor = e.target.value;
    setToolBarIconColor(iconColor);
    const formData = new FormData();
    formData.append("icon_color", iconColor);
    await fetchDataAPI("/api/store/iconcolor", {
      method: "POST",
      body: formData,
    });
  }, 500);

  /* ---------------------- Upload Bottom NavigationBar Color------------ */

  const handleBottomToolColor = debounce(async (e) => {
    const BottomToolColor = e.target.value;
    setBottomToolColor(BottomToolColor);
    const formData = new FormData();
    formData.append("bottom_toolbar", BottomToolColor);
    await fetchDataAPI("/api/store/bottomtoolbarcolor", {
      method: "POST",
      body: formData,
    });
  }, 500);

  //----------------------------Bottom Icon Color-----------------

  const handleBottomIconColor = debounce(async (e) => {
    const BottomIconColor = e.target.value;
    setBottomIconColor(BottomIconColor);
    const formData = new FormData();
    formData.append("bottom_icon", BottomIconColor);
    await fetchDataAPI("/api/store/bottomiconcolor", {
      method: "POST",
      body: formData,
    });
  }, 500);

  const nextPageHandler=async()=>{
    const response=await fetchDataAPI('/api/detail/setting/step1',{
      method:"POST"
    });
    const data= await response.json();
    if(data.success){
      setActive(true)
      setToastProps({
        content: data.message,
      });
     Navigate("/advancesetting");
    }else{
      setActive(true)
      setToastProps({
        content: data.message,
        error:true
      });
    }
  }

  const toastMarkup = toastProps.content && active && (
    <Toast {...toastProps} onDismiss={() => setActive(false)} duration={3500}/>
  );

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);
  if (loading) {
    return (<Loader />)
  }
  return (
    <Frame>
      {toastMarkup}
      <Page
        title="Settings: Step 1"
        primaryAction={{
          content: "Next",
          onAction:nextPageHandler
        }}
        fullWidth
      >

        <Layout>
          <Layout.Section oneHalf>
            <LegacyCard title="Upload logo, splash screen and app icon">
              <SetImages
                logo={logo}
                splashImg={splashImg}
                appIcon={appIcon}
                removeLogo={removeLogo}
                removeSplashImg={removeSplashImg}
                removeAppIcon={removeAppIcon}
                handleChangeLogo={handleChangeLogo}
                handleChangeSplash={handleChangeSplash}
                handleChangeAppIcon={handleChangeAppIcon}
                handleRemoveLogo={handleRemoveLogo}
                handleRemoveSplash={handleRemoveSplash}
                handleRemoveIcon={handleRemoveIcon}
                logoLoading={logoLoading}
                splashLoading={splashLoading}
                appIconLoading={appIconLoading}
                errorMsgLogo={errorMsgLogo}
                errorMsgSplash={errorMsgSplash}
                errorMsgIcon={errorMsgIcon}
              />
              <SetColor
                dataValue={dataValue}
                toolBarColor={toolBarColor}
                toolBarTextColor={toolBarTextColor}
                toolBarIconColor={toolBarIconColor}
                bottomToolColor={bottomToolColor}
                bottomIconColor={bottomIconColor}
                handleToolbarColor={handleToolbarColor}
                handleTextColor={handleTextColor}
                handleIconColor={handleIconColor}
                handleBottomToolColor={handleBottomToolColor}
                handleBottomIconColor={handleBottomIconColor}
                removeAppIcon={removeAppIcon}
                handleRemoveIcon={handleRemoveIcon}
              />
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneHalf>
            <PreviewMobile
              logo={logo}
              toolBarColor={toolBarColor}
              toolBarTextColor={toolBarTextColor}
              toolBarIconColor={toolBarIconColor}
              bottomToolColor={bottomToolColor}
              bottomIconColor={bottomIconColor}
              dataValue={dataValue}
              splashImg={splashImg}
            />
          </Layout.Section>
        </Layout>
        <br />
        <PageActions
          primaryAction={{
            content: "Next",
            onAction: () => Navigate("/advancesetting"),
          }}
        />
      </Page>
    </Frame>

  )
}

export default BasicSetting;
