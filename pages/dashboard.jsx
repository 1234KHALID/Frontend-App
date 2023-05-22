import { Page, Text, LegacyCard, LegacyStack, Image,Banner, HorizontalGrid, Button } from '@shopify/polaris';
import { SettingsMajor } from '@shopify/polaris-icons';
import { dawnloadmobileapp } from '../assets';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthenticatedFetch } from "../hooks";
import { Loader } from '../components';
function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [BannerSuccess, setBannerSuccess] = useState(false);
  const [BannerUnsuccess, setBannerUnsuccess] = useState(true);
  const [bannerValue, setBannerValue] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState([])
  const Navigate = useNavigate();
  const fetchDataAPI = useAuthenticatedFetch();
  const handleGenrateApp = () => {
    setLoading(true)
    fetchDataAPI('/api/setting/dashboard', {
      method: "GET",
    }).then((resp) => resp.json())
      .then((result) => {
        if (result.setting) {
          setBannerSuccess(true)
          setBannerValue(result.data.reveiw_status)
          setLoading(false)
        } else{
          setBannerUnsuccess(false)
          setBannerValue(result.message)
          setLoading(false)
        }
      }).catch(() => { setLoading(false) });
  }

  const bannerSuccess = BannerSuccess ? (<div className="padding-top-20">
    <Banner
      status="success"
      onDismiss={() => setBannerSuccess(false)}
    >
      <p>
        You have filled all the data for<b> Step - 1 </b>and <b>Step - 2 </b>succesfully.<br />
        Your app has been submitted for <b>{bannerValue == 0 && 'review now' || bannerValue == 1 && 'In Review' || bannerValue == 2 && 'In Development' || bannerValue == 3 && 'Live'}</b>.
      </p>
    </Banner>
  </div>) : (null)

  const bannerUnsuccess = BannerUnsuccess ? (
    null
  ) : (
    <div className="padding-top-20">
      <Banner
        status="critical"
        onDismiss={() => setBannerUnsuccess(true)}
      >
        {bannerValue}
      </Banner>
    </div>
  )

  const fetchData = () => {
    fetchDataAPI('/api/total_app_orders', {
      method: "GET"
    }).then((response) => response.json())
      .then(result => {
        if (result.success) {
          setData(result.data);
          setIsLoading(false);
        } else {
          setIsLoading(false)
        }
      }).catch(() => setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [])

  if (isloading) {
    return <Loader />
  }

  return (
    <>
      <Page fullWidth
        title="Overview"
        secondaryActions={[
          {
            content: 'Settings', external: true, icon: SettingsMajor,
            onAction: () => Navigate("/basicsetting")
          },
        ]} >
        <Text as='h4' variant='headingMd'><div className="padding-bottom-14 d-block"> App performance</div></Text>
        <LegacyStack distribution='fill'>
          <LegacyCard sectioned>
            <Text variant="headingLg" as="h5">
              <div className="padding-bottom-11">{data?.total_app_customer || 0} %</div>
            </Text>
            <Text as="p" variant="bodyMd" color="subdued">
              <span className='border-botom-dotted'>of your customer are using app</span>
            </Text>
          </LegacyCard>
          <LegacyCard sectioned>
            <Text variant="headingLg" as="h5">
              <div className="padding-bottom-11">{data?.total_orders_value || 0}</div>
            </Text>
            <Text as="p" variant="bodyMd" color="subdued">
              <span className='border-botom-dotted'>orders of value</span>
            </Text>
          </LegacyCard>
          <LegacyCard sectioned>
            <Text variant="headingLg" as="h5">
              <div className="padding-bottom-11">{data?.total_app_orders || 0}</div>
            </Text>
            <Text as="p" variant="bodyMd" color="subdued">
              <span className='border-botom-dotted'>active orders tracked on app</span>
            </Text>
          </LegacyCard>
        </LegacyStack>
        <LegacyStack distribution='fill'>
          {bannerSuccess || bannerUnsuccess}
        </LegacyStack>
        <div className='margin-top-55'>
          <LegacyCard>
            <HorizontalGrid columns={{ xs: "1fr", md: "5fr 2fr" }} gap="4" distribution='fill'>
              <div className="genatate-text">
                <Text as="h2" variant='heading4xl'>GENERATE</Text>
                <Text as="h3" variant='heading2xl'>THE MOBILE APP</Text>
                <Text as='p' variant='bodyMd'><span className="padding-top-5">Generate app to keep up to date for design change colors and more.</span>
                </Text>
                <div className="Polaris-CalloutCard__Buttons">
                  <Button onClick={handleGenrateApp} primary loading={loading} >
                    {bannerValue == 0 && 'Generate'||bannerValue == 1 && 'In Review'||bannerValue == 2 && 'In Development'|| bannerValue == 3 && 'Download'} App
                  </Button>
                </div>
              </div>
              <div className="genatate-image"><Image className='headerlogo' source={dawnloadmobileapp} alt="profile Pic" /></div>
            </HorizontalGrid>
          </LegacyCard>
        </div>
      </Page>

    </>
  )
}
export default Dashboard