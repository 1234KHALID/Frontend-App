import {
  Page,
  PageActions,
  LegacyStack,
  HorizontalGrid,
  Box,
  Text,
  LegacyCard,
  Divider,
  ChoiceList,
  Checkbox
} from "@shopify/polaris";
import React, { useState, useEffect } from "react";
import { useAuthenticatedFetch } from "../hooks";
import { useNavigate } from "@shopify/app-bridge-react";
import { Loader } from "../components";
import { legaldata, socialData } from "../components";
function AddvanceSetting() {
  const [selectedLegal, setSelectedLegal] = useState([]);
  const [selectedSocial, setSelectedSocial] = useState([]);
  const [blog, setBlog] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [legal, setLegal] = useState(false);
  const [social, setSocial] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchDataAPI = useAuthenticatedFetch();
  const Navigate = useNavigate();

  const fetchData = () => {
    fetchDataAPI("/api/setting/data", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (result.success) {
          const { data: { blog, tracking, legal, social, refund, privacy, shipping, contact, terms_service, facebook, google} } = result;
          setBlog(JSON.parse(blog))
          setTracking(JSON.parse(tracking))
          setLegal(JSON.parse(legal))
          setSocial(JSON.parse(social))
          setSelectedLegal([refund, privacy,shipping,contact,terms_service ])
          setSelectedSocial([facebook,google])
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
  };
  const handleAdvanceSetting = async () => {
    let policies = [];
    let social_login = [];
    if (legal === true) {
      policies = selectedLegal
    }else{
      policies = selectedLegal
    }
    if (social === true) {
      social_login = selectedSocial
    }else{
      social_login = selectedSocial
    }

    const response = await fetchDataAPI("/api/detail/setting/step2", {
      method: "POST",
      body: JSON.stringify({
        blog: blog,
        tracking: tracking,
        legal: legal,
        social: social,
        policies: policies,
        social_login: social_login,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      Navigate('/dashboard');
    }
  };
  
  useEffect(() => {
    setLoading(true)
    fetchData();
  },[]);

  if(loading){
   return( <Loader />)
        
  }

  return (
        <Page
          fullWidth
          divider
          backAction={{url:"/basicsetting" }}
          title="Settings: Step 2"
          primaryAction={{
            content: "Save",
            onAction: handleAdvanceSetting,
          }}
        >
          <LegacyStack distribution="fill" >
            <HorizontalGrid
              divider
              columns={{ xs: "1fr", md: "2fr 5fr" }}
              gap="4"
            >
            
                <Box
                  as="section"
                  paddingInlineStart={{ xs: 4, sm: 0 }}
                  paddingInlineEnd={{ xs: 4, sm: 0 }}
                >
                  <LegacyStack distribution="fill">
                    <Text as="h3" variant="headingMd">
                      Happify Clients Blogs
                    </Text>
                    <Text
                      as="p"
                      variant="bodyMd"
                      color="subdued"
                    >
                      Allow your customers to Blog posts.
                    </Text>
                  </LegacyStack>
                </Box>
      
              <LegacyCard sectioned>
                <LegacyStack gap="4" distribution="fill">
                  <HorizontalGrid gap="4" columns={2}>
                  
                      <Text as="h2" variant="bodyMd">
                        Blog posts are{" "}
                        <span
                          style={{
                            color: "var(--p-interactive)",
                          }}
                        >
                          {blog
                            ? "enable. "
                            : "  disable."}
                        </span>
                      </Text>
                 
                    <div style={{ textAlign: "right" }}>
                      <div className="Polaris-Button enable-disable-button">
                        <Checkbox
                          style={
                            { display: "none" }
                          }
                          label={blog
                            ? "  Disable "
                            : "Enable "}
                          checked={blog}
                          onChange={(value) => setBlog(value)}
                        />
                      </div>
                    </div>
                  </HorizontalGrid>
                </LegacyStack>
              </LegacyCard>
            </HorizontalGrid>
            <Divider />
            <HorizontalGrid
              divider
              columns={{ xs: "1fr", md: "2fr 5fr" }}
              gap="4"
            >

                <Box
                  as="section"
                  paddingInlineStart={{ xs: 4, sm: 0 }}
                  paddingInlineEnd={{ xs: 4, sm: 0 }}
                >
                  <LegacyStack gap="4" distribution="fill">
                    <Text as="h3" variant="headingMd">
                      Track with Happify Client
                    </Text>
                    <Text as="p" color="subdued">
                      {" "}
                      Allow your customers to track and
                      manage order with Happify Client by
                      adding this button to your order
                      status page.
                    </Text>
                  </LegacyStack>
                </Box>
              
              <div>
                <LegacyCard sectioned>
                  <LegacyStack gap="4" distribution="fill">
                    <HorizontalGrid gap="4" columns={2}>
                      
                        <Text as="h2" variant="bodyMd">
                          Tracking is{" "}
                          <span
                            style={{
                              color: "var(--p-interactive)",
                            }}
                          >
                            {tracking
                              ? "enable. "
                              : "  disable."}
                          </span>
                        </Text>
                      
                      <div style={{ textAlign: "right" }}>

                        <div className="Polaris-Button enable-disable-button">
                          <Checkbox
                            label={tracking
                              ? "  Disable "
                              : "Enable "}
                            checked={tracking}
                            onChange={(value) => setTracking(value)}
                          />
                        </div>
                      </div>
                    </HorizontalGrid>
                  </LegacyStack>
                </LegacyCard>
              </div>
            </HorizontalGrid>
            <Divider />
            <HorizontalGrid
              divider
              columns={{ xs: "1fr", md: "2fr 5fr" }}
              gap="4"
            >
             
                <Box
                  as="section"
                  paddingInlineStart={{ xs: 4, sm: 0 }}
                  paddingInlineEnd={{ xs: 4, sm: 0 }}
                >
                  <LegacyStack distribution="fill">
                    <Text as="h3" variant="headingMd">
                      Legal Policies
                    </Text>
                    <Text
                      as="p"
                      variant="bodyMd"
                      color="subdued"
                    >
                      Allow your customers to legal
                      policies.
                    </Text>
                  </LegacyStack>
                </Box>
          
              <LegacyCard sectioned>
                <LegacyStack gap="4" distribution="fill">
                  <HorizontalGrid gap="4" columns={2}>
                    
                      <Text as="h2" variant="bodyMd">
                        Legal policies are{" "}
                        <span
                          style={{
                            color: "var(--p-interactive)",
                          }}
                        >
                          {legal
                            ? "enable. "
                            : "  disable."
                          }
                        </span>
                      </Text>
                  
                    <div style={{ textAlign: "right" }}>
                      <div className="Polaris-Button enable-disable-button">
                        <Checkbox
                          label={legal
                            ? "  Disable "
                            : "Enable "}
                          checked={legal}
                          onChange={(value) => setLegal(value)}
                        />
                      </div>
                    </div>
                  </HorizontalGrid>
                  </LegacyStack>
                  {legal ? (
                    <div className="padding-top-20">
                      <Divider />
                      <ChoiceList
                        allowMultiple
                        choices={legaldata}
                        selected={selectedLegal}
                        onChange={value => setSelectedLegal(value)}
                      />
                    </div>
                  ) : (null)

                  }
              </LegacyCard>
            </HorizontalGrid>
            <Divider />
            <HorizontalGrid
              divider
              columns={{ xs: "1fr", md: "2fr 5fr" }}
              gap="4"
            >
          
                <Box
                  as="section"
                  paddingInlineStart={{ xs: 4, sm: 0 }}
                  paddingInlineEnd={{ xs: 4, sm: 0 }}
                >
                  <LegacyStack distribution="fill">
                    <Text as="h3" variant="headingMd">
                      Social Login
                    </Text>
                    <Text
                      as="p"
                      variant="bodyMd"
                      color="subdued"
                    >
                      Allow your customers to Social Login
                      with Happify Client .
                    </Text>
                  </LegacyStack>
                </Box>
       
              <LegacyCard sectioned>
                <LegacyStack gap="4" distribution="fill">
                  <HorizontalGrid gap="4" columns={2}>
               
                      <Text as="h2" variant="bodyMd">
                        Social Login are{" "}
                        <span
                          style={{
                            color: "var(--p-interactive)",
                          }}
                        >
                          {social
                            ? "enable. "
                            : "  disable."
                          }
                        </span>
                      </Text>
                
                    <div style={{ textAlign: "right" }}>
                      <div className="Polaris-Button enable-disable-button">
                        <Checkbox
                          label={social
                            ? "  Disable "
                            : "Enable "}
                          checked={social}
                          onChange={(value) => setSocial(value)}
                        />
                      </div>
                    </div>
                  </HorizontalGrid>
                </LegacyStack>
                  {social ? (
                    <div className="padding-top-20">
                      <Divider />
                      <ChoiceList
                        allowMultiple
                        choices={socialData}
                        selected={selectedSocial}
                        onChange={value => setSelectedSocial(value)}
                      />
                    </div>
                  ) : (
                    null
                  )

                  }
              </LegacyCard>
            </HorizontalGrid>
          </LegacyStack>
          <br />
          <PageActions
            primaryAction={{
              content: "Save",
              onAction: handleAdvanceSetting,
            }}
          />
        </Page>
  )
}
export default AddvanceSetting;